from typing import Any
import soupsieve as sv
from bs4 import BeautifulSoup
from collections import defaultdict
from cssselect2.parser import parse
import json
import re

from core.util.print_util.print_util import *

# Pseudo-classes that SoupSieve/BeautifulSoup cannot parse or simulate
UNSUPPORTED_PSEUDOS = {
    ":after", ":before", ":valid", ":invalid", ":required", ":disabled", ":enabled",
    ":read-only", ":read-write", ":in-range", ":out-of-range",
    ":placeholder-shown", ":default", ":autofill", ":user-invalid"
}

# Malformed patterns to reject early
MALFORMED_PATTERNS = [
    r":not\(\s*\)",  # empty :not()
]

class CSSRuleMapper:
    def __init__(self, selector_extractor, variable_resolver):
        self.selector_extractor = selector_extractor
        self.variable_resolver = variable_resolver
        self.css_vars = selector_extractor.css_variables
        self.selector_vars = selector_extractor.selector_level_vars

        self.skipped_universal_rules = []
        self.skipped_pseudo_selectors = []
        self.malformed_pseudo_selectors = []
        self.error_pseudo_selectors = []
        self.pseudo_selector_rules = []
        self.pseudo_element_rules = []
        self.selector_match_cache = {}
        self.scoped_vars_by_element = defaultdict(dict)
        self.css_rule_map = {}

    def _decompose_selector(self, selector):
        base = re.split(r':(?![^()]*\))', selector)[0].strip()
        pseudos = re.findall(r':([a-zA-Z-]+)', selector)
        return base, pseudos

    def _build_scoped_var_index(self, soup: BeautifulSoup):
        for scoped_sel, scoped_vars in self.selector_vars.items():
            if scoped_sel not in self.selector_match_cache:
                try:
                    self.selector_match_cache[scoped_sel] = self._safe_select(scoped_sel, soup)
                except sv.SelectorSyntaxError:
                    continue
            for el in self.selector_match_cache[scoped_sel]:
                el_id = el.get("data-el-id")
                self.scoped_vars_by_element[el_id].update(scoped_vars)

    def build_rule_map(self, soup: BeautifulSoup) -> dict[str, Any]:
        self._build_scoped_var_index(soup)
        priority_counter = 0

        selectors_with_rules = self.selector_extractor.selectors_with_rules
        pseudo_selectors = self.selector_extractor.pseudo_selectors
        
        def has_non_empty_props(props):
            return any(v for v in props.values())

        for rule_block in selectors_with_rules:
            priority_counter += 1
            for selector, props in rule_block.items():
                if not has_non_empty_props(props):
                    continue

                if "::" in selector:
                    self.pseudo_element_rules.append((selector, props))
                    continue
                elif ":" in selector:
                    self.pseudo_selector_rules.append((selector, props))
                    continue
                elif selector == "*":
                    self.skipped_universal_rules.append((selector, props))
                    continue

                self._process_selector(soup, selector, props, priority_counter)

        self._process_pseudo_selectors(soup)
        self._process_skipped_pseudo_selectors(soup)
        self._process_pseudo_elements(soup)

        def clean(rules):
            return [r for r in rules if has_non_empty_props(r[1])]

        def clean_rule_map(rule_map):
            def prop_has_value(prop):
                return isinstance(prop, dict) and any(
                    v for k, v in prop.items()
                    if k != 'base' or v  # keep if base exists and has a value
                )

            return {
                el_id: {
                    prop: val for prop, val in props.items()
                    if not prop.startswith("__spec__") and not prop.startswith("__prio__") and prop_has_value(val)
                }
                for el_id, props in rule_map.items()
                if any(
                    not k.startswith("__spec__") and not k.startswith("__prio__") and prop_has_value(v)
                    for k, v in props.items()
                )
            }

        return {
            "rule_map": clean_rule_map(self.css_rule_map),
            "skipped_universal_rules": clean(self.skipped_universal_rules),
            "pseudo_selector_rules": clean(self.pseudo_selector_rules),
            "pseudo_element_rules": clean(self.pseudo_element_rules)
        }

    def _resolve_vars(self, el, el_id):
        merged = self.css_vars.copy()
        current = el.parent
        chain = []

        while current and hasattr(current, "name"):
            chain.insert(0, current)
            current = current.parent
        for ancestor in chain:
            merged.update(self.scoped_vars_by_element.get(id(ancestor), {}))

        merged.update(self.scoped_vars_by_element.get(el_id, {}))

        return merged

    def _safe_select(self, selector: str, soup: BeautifulSoup, log_skips: bool = True, props: dict = None):
        """
        Safely selects elements from a BeautifulSoup DOM using a CSS selector,
        skipping unsupported pseudo-classes and malformed expressions.

        Args:
            selector (str): The raw CSS selector.
            soup (BeautifulSoup): Parsed HTML soup.
            props (dict): CSS properties associated with this selector (used for recovery).
            log_skips (bool): Whether to print/log skipped selectors.

        Returns:
            list: Matching elements or an empty list.
        """
        # Reject malformed patterns
        for pattern in MALFORMED_PATTERNS:
            if re.search(pattern, selector):
                if log_skips:
                    print("⚠️ Skipped malformed selector:", selector)
                self.malformed_pseudo_selectors.append((selector, props))
                return []

        # Reject if selector includes any known unsupported pseudo-class
        if any(pseudo in selector for pseudo in UNSUPPORTED_PSEUDOS):
            if log_skips:
                print("⚠️ Skipped unsupported pseudo-class:", selector)
            self.skipped_pseudo_selectors.append((selector, props))
            return []

        try:
            return sv.select(selector, soup)
        except Exception as e:
            if log_skips:
                print(f"❌ SoupSieve error: {selector} → {e}")
                if props:
                    print(f"  ⚠️ Related props: {json.dumps(props, indent=2)}")
            self.error_pseudo_selectors.append((selector, props))
            return []

    def _compute_specificity(self, selector: str) -> tuple[int, int, int]:
        try:
            parsed = parse(selector)
            if parsed:
                return parsed[0].specificity  # (a, b, c)
        except Exception:
            pass
        return (0, 0, 0)  # fallback

    def _apply_resolved_rule(self, rule_map, el_id, prop, media, resolved_val, specificity, priority_counter):
        """
        Applies a resolved CSS property to the rule map with specificity and shorthand handling.

        Args:
            rule_map (dict): The element-level rule map.
            el_id (str): Element ID with assigned `data-el-id`.
            prop (str): CSS property name.
            media (str): Media query key ('base', '@media...', etc.).
            resolved_val (str): Final resolved value (e.g., '12px').
            specificity (tuple): Selector specificity.
            priority_counter (int): Order of appearance across CSS files.
        """
        shorthand_props = {
            "margin": ["margin-top", "margin-right", "margin-bottom", "margin-left"],
            "padding": ["padding-top", "padding-right", "padding-bottom", "padding-left"],
        }

        key = f"{prop}__{media}"
        spec_key = f"__spec__{key}"
        prio_key = f"__prio__{key}"

        current_spec = rule_map[el_id].get(spec_key, (0, 0, 0))
        current_prio = rule_map[el_id].get(prio_key, -1)

        should_override = (
            current_spec < specificity or
            (current_spec == specificity and current_prio <= priority_counter)
        )

        if not should_override:
            return  # Do not apply lower priority rules

        # If shorthand, remove longhands
        if prop in shorthand_props:
            for longhand in shorthand_props[prop]:
                rule_map[el_id][longhand].pop(media, None)
        else:
            for shorthand, longhands in shorthand_props.items():
                if prop in longhands and media in rule_map[el_id].get(shorthand, {}):
                    return  # skip: shorthand already exists

        rule_map[el_id][prop][media] = resolved_val
        rule_map[el_id][spec_key] = specificity
        rule_map[el_id][prio_key] = priority_counter


    def _process_selector(self, soup, selector, props, priority_counter):
        try:
            matched = self._safe_select(selector, soup)
        except Exception:
            return

        specificity = self._compute_specificity(selector)

        for el in matched:
            el_id = el.get("data-el-id")

            if el_id not in self.css_rule_map:
                self.css_rule_map[el_id] = defaultdict(dict)

            merged_vars = self._resolve_vars(el, el_id)

            for prop, media_dict in props.items():
                for media, val in media_dict.items():
                    merged_vars = self._resolve_vars(el, el_id)
                    resolved_val = self.variable_resolver.resolve_rule(val.strip(), merged_vars)

                    if not prop or not resolved_val:
                        continue

                    self._apply_resolved_rule(self.css_rule_map, el_id, prop, media, resolved_val, specificity, priority_counter)

    def _process_pseudo_selectors(self, soup):
        # Increase priority for next CSS file
        for selector, props in self.pseudo_selector_rules:
            if "::" in selector:
                continue

            pseudo_matches = re.findall(r':(hover|focus|active|visited|checked|focus-visible)', selector)
            if not pseudo_matches:
                continue

            base_selector = re.sub(r':(hover|focus|active|visited|checked|focus-visible)', '', selector).strip()

            try:
                matched_elements = self._safe_select(base_selector, soup, log_skips=False, props=props)
            except Exception as e:
                print(f"SoupSieve error: {selector} → {e}")
                continue

            for el in matched_elements:
                el_id = el.get("data-el-id")
                if el_id not in self.css_rule_map:
                    self.css_rule_map[el_id] = defaultdict(dict)

                merged_vars = self._resolve_vars(el, el_id)

                for prop, media_dict in props.items():
                    if not isinstance(media_dict, dict):
                        continue

                    for media, val in media_dict.items():
                        if val:
                            resolved = self.variable_resolver.resolve_rule(val.strip(), merged_vars)
                            for pseudo_raw in pseudo_matches:
                                pseudo = f":{pseudo_raw}"
                                self.css_rule_map[el_id].setdefault("__pseudo__", {}).setdefault(pseudo, {})[prop] = resolved


    def _process_skipped_pseudo_selectors(self, soup):
        for selector, props in self.skipped_pseudo_selectors:
            base_selector, pseudos = self._decompose_selector(selector)

            try:
                matched_elements = self._safe_select(base_selector, soup, log_skips=False, props=props)
            except Exception as e:
                print(f"❌ Could not recover base '{base_selector}' → {e}")
                continue

            for el in matched_elements:
                el_id = el.get("data-el-id")
                if el_id not in self.css_rule_map:
                    self.css_rule_map[el_id] = defaultdict(dict)

                merged_vars = self._resolve_vars(el, el_id)

                for pseudo in pseudos:
                    pseudo_key = f":{pseudo}"
                    pseudo_styles = {}

                    for prop, media_dict in props.items():
                        if not isinstance(media_dict, dict):
                            continue

                        base_val = media_dict.get("base")
                        if base_val:
                            resolved_val = self.variable_resolver.resolve_rule(base_val.strip(), merged_vars)
                            pseudo_styles[prop] = resolved_val

                    if pseudo_styles:
                        self.css_rule_map[el_id].setdefault("__pseudo__", {}).setdefault(pseudo_key, {}).update(pseudo_styles)
                    else:
                        self.css_rule_map[el_id].setdefault("__pseudo__", {}).setdefault(pseudo_key, {})["__recovered__"] = True

    
    def _process_pseudo_elements(self, soup):
        for selector, props in self.pseudo_element_rules:
            m = re.search(r'(.*?)(::[a-zA-Z-]+)$', selector)
            if not m:
                continue

            base_selector, pseudo = m.groups()

            try:
                matched_elements = self._safe_select(base_selector, soup, log_skips=False, props=props)
            except Exception:
                continue

            for el in matched_elements:
                el_id = el.get("data-el-id")
                if el_id not in self.css_rule_map:
                    self.css_rule_map[el_id] = defaultdict(dict)

                merged_vars = self._resolve_vars(el, el_id)

                for prop, media_dict in props.items():
                    if not isinstance(media_dict, dict):
                        continue

                    for media, val in media_dict.items():
                        if val:
                            resolved_val = self.variable_resolver.resolve_rule(val.strip(), merged_vars)
                            self.css_rule_map[el_id].setdefault("__pseudo__", {}).setdefault(pseudo, {})[prop] = resolved_val

    