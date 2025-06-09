from bs4 import BeautifulSoup, Tag
import soupsieve as sv
import re
from collections import defaultdict
from cssselect2.parser import parse

from sg_file_util import sg_file_path
from extract_selectors_from_style_sheets import extract_selectors_from_css
from print_util import sg_json_print

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

# Optional: global log of skipped selectors for review
skipped_pseudo_selectors = []

def decompose_selector(selector):
    base = re.split(r':(?![^()]*\))', selector)[0].strip()
    pseudos = re.findall(r':([a-zA-Z-]+)', selector)
    return base, pseudos

def def safe_select(selector: str, soup: BeautifulSoup, log_skips: bool = True, props: dict = None):
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
    # Reject if selector includes any known unsupported pseudo-class
    if any(pseudo in selector for pseudo in UNSUPPORTED_PSEUDOS):
        # if log_skips:
        #     print("⚠️ Skipped unsupported pseudo-class:", selector)
        skipped_pseudo_selectors.append((selector, props))
        return []

    # Reject malformed patterns
    for pattern in MALFORMED_PATTERNS:
        if re.search(pattern, selector):
            if log_skips:
                print("⚠️ Skipped malformed selector:", selector)
            skipped_pseudo_selectors.append((selector, props))
            return []

    try:
        return sv.select(selector, soup)
     except Exception as e:
        if log_skips:
            print(f"❌ SoupSieve error: {selector} → {e}")
            if props:
                print(f"  ⚠️ Related props: {json.dumps(props, indent=2)}")
        skipped_selectors.append(selector)
        return []


def compute_specificity(selector: str) -> tuple[int, int, int]:
    try:
        parsed = parse(selector)
        if parsed:
            return parsed[0].specificity  # (a, b, c)
    except Exception:
        pass
    return (0, 0, 0)  # fallback


def resolve_css_variables_in_rule(rule: str, css_vars: dict) -> str:
    """
    Replaces var(--something, fallback) with actual value from css_vars.
    Handles nesting inside other CSS functions like rgba().
    """
    var_pattern = re.compile(
        r'var\(\s*(--[\w-]+)\s*(?:,\s*([^()]*))?\s*\)'
    )

    def replacer(match):
        var_name = match.group(1)
        fallback = match.group(2)
        return css_vars.get(var_name, fallback if fallback is not None else match.group(0))

    # Keep replacing until no more var() calls remain
    prev_rule = None

    while rule != prev_rule:
        prev_rule = rule
        rule = var_pattern.sub(replacer, rule)

    return rule

# Updated rule processor with parent scope inheritance
def resolve_element_css(el: Tag, css_rule_map: dict, scoped_vars_by_element: dict, global_vars: dict):
    el_id = id(el)
    rules = css_rule_map.get(el_id, {})
    resolved = {}

    parent_vars = {}
    if el.parent and isinstance(el.parent, Tag):
        parent_vars = scoped_vars_by_element.get(id(el.parent), {})

    merged_vars = global_vars.copy()
    merged_vars.update(parent_vars)
    merged_vars.update(scoped_vars_by_element.get(el_id, {}))

    for prop, media_dict in rules.items():
        if not isinstance(media_dict, dict):
            continue
        resolved[prop] = {}
        for media, val in media_dict.items():
            resolved_val = resolve_css_variables_in_rule(val.strip(), merged_vars)
            resolved[prop][media] = resolved_val
    return resolved


def build_css_selectors_rule_map(soup, stylesheet_links, css_dir, css_vars, selector_vars):
    css_rule_map = {}  # Maps element ID -> CSS property -> media -> value
    skipped_universal_rules = []  # Rules like '*' or 'div *', which are ignored
    pseudo_selector_rules = []  # Rules with pseudo selectors like :hover, :before
    pseudo_element_rules = []

    # Pre-resolve selector-scoped variables to DOM elements
    scoped_vars_by_element = defaultdict(dict)
    selector_match_cache = {}

    for scoped_sel, scoped_vars in selector_vars.items():
        if scoped_sel not in selector_match_cache:
            try:
                matched_set = sv.select(scoped_sel, soup)
                selector_match_cache[scoped_sel] = matched_set
            except sv.SelectorSyntaxError:
                continue

        for matched_el in selector_match_cache[scoped_sel]:
            scoped_vars_by_element[id(matched_el)].update(scoped_vars)

    priority_counter = 0

    for css_file_relative_path in stylesheet_links:
        css_file = sg_file_path(f"{css_dir}/{css_file_relative_path}")
        selectors_with_rules, file_pseudo_selectors, _, _ = extract_selectors_from_css(css_file)

        for selector, props in selectors_with_rules.items():
            selector = selector.strip()

            # Skip universal selectors like '*' or '* span'
            if selector == "*":
                skipped_universal_rules.append((selector, props))
                # continue

            if "::" in selector:
                pseudo_element_rules.append((selector, props))  # ✅ collect ::before/::after
                continue

            elif ":" in selector:
                pseudo_selector_rules.append((selector, props))  # ✅ collect :hover/:focus
                continue

            try:
                matched_elements = sv.select(selector, soup)
            except sv.SelectorSyntaxError:
                continue  # Skip invalid CSS selectors

            specificity = compute_specificity(selector)

            for el in matched_elements:
                el_id = id(el)

                # Initialize the rule set for this element if not yet seen
                if el_id not in css_rule_map:
                    css_rule_map[el_id] = defaultdict(dict)

                # Merge global and selector-level CSS variables
                merged_vars = css_vars.copy()
                
                # Walk up the DOM and collect scoped vars in order from root → parent
                parent_chain = []
                current = el.parent
                while current and hasattr(current, "name"):
                    parent_chain.insert(0, current)  # <-- insert at beginning
                    current = current.parent

                # Apply scoped vars from farthest → closest, so closest wins
                for ancestor in parent_chain:
                    merged_vars.update(scoped_vars_by_element.get(id(ancestor), {}))
                merged_vars.update(scoped_vars_by_element.get(el_id, {}))

                # Define shorthand → longhand mappings
                shorthand_props = {
                    "margin": ["margin-top", "margin-right", "margin-bottom", "margin-left"],
                    "padding": ["padding-top", "padding-right", "padding-bottom", "padding-left"],
                }

                for prop, media_dict in props.items():
                    for media, val in media_dict.items():
                        resolved_val = resolve_css_variables_in_rule(val.strip(), merged_vars)

                        if not prop or not resolved_val:
                            continue

                        # Keys to track specificity and priority per property/media combination
                        key = f"{prop}__{media}"
                        spec_key = f"__spec__{key}"
                        prio_key = f"__prio__{key}"

                        current_spec = css_rule_map[el_id].get(spec_key, (0, 0, 0))
                        current_prio = css_rule_map[el_id].get(prio_key, -1)

                        # Determine if this rule should override based on specificity and file order
                        should_override = (
                            current_spec < specificity or
                            (current_spec == specificity and current_prio <= priority_counter)
                        )

                        if not should_override:
                            continue

                        # If this is a shorthand, remove any previous longhand definitions
                        if prop in shorthand_props:
                            for longhand in shorthand_props[prop]:
                                css_rule_map[el_id][longhand].pop(media, None)

                        # If this is a longhand, and a shorthand is already applied, skip it
                        else:
                            for shorthand, longhands in shorthand_props.items():
                                if prop in longhands and media in css_rule_map[el_id].get(shorthand, {}):
                                    continue  # Skip longhand if shorthand already present

                        # Apply the final resolved rule
                        css_rule_map[el_id][prop][media] = resolved_val
                        css_rule_map[el_id][spec_key] = specificity
                        css_rule_map[el_id][prio_key] = priority_counter

        # Increase priority for next CSS file
        priority_counter += 1

        for selector, props in pseudo_selector_rules:
            if "::" in selector:
                continue

            # Extract supported pseudo-classes from selector
            pseudo_matches = re.findall(r':(hover|focus|active|visited|checked|focus-visible)', selector)

            if not pseudo_matches:
                continue

            # Remove all supported pseudo-classes from selector
            base_selector = re.sub(r':(hover|focus|active|visited|checked|focus-visible)', '', selector).strip()

            try:
                matched_elements = safe_select(base_selector, soup, props=props)
            except sv.SelectorSyntaxError as e:
                print("SoupSieve error:", selector, "→", e)
                continue

            if matched_elements > 0:
                print(f"Matched {len(matched_elements)} elements for '{selector}' (base: '{base_selector}')")

            for el in matched_elements:
                el_id = id(el)
                if el_id not in css_rule_map:
                    css_rule_map[el_id] = defaultdict(dict)

                for prop, media_dict in props.items():
                    if not isinstance(media_dict, dict):
                        continue

                    for media, val in media_dict.items():
                        if val:
                            for pseudo_raw in pseudo_matches:
                                pseudo = f":{pseudo_raw}"
                                # print("✔️ Adding pseudo:", pseudo, "→", resolve_css_variables_in_rule(val.strip(), merged_vars))
                                css_rule_map[el_id].setdefault("__pseudo__", {}).setdefault(pseudo, {})[prop] = resolve_css_variables_in_rule(val.strip(), merged_vars)


    for selector, props in skipped_pseudo_selectors:
        base_selector, pseudos = decompose_selector(selector)

        try:
            matched_elements = sv.select(base_selector, soup)
        except Exception as e:
            print(f"❌ Could not recover base '{base_selector}' → {e}")
            continue

        for el in matched_elements:
            el_id = id(el)
            if el_id not in css_rule_map:
                css_rule_map[el_id] = defaultdict(dict)

            for pseudo in pseudos:
                pseudo_key = f":{pseudo}"
                pseudo_styles = {}

                for prop, media_dict in props.items():
                    if not isinstance(media_dict, dict):
                        continue
                        
                    base_val = media_dict.get("base")

                    if base_val:
                        resolved_val = resolve_css_variables_in_rule(base_val.strip(), merged_vars)
                        pseudo_styles[prop] = resolved_val

                if pseudo_styles:
                    # sg_json_print(pseudo_styles)
                    css_rule_map[el_id].setdefault("__pseudo__", {}).setdefault(pseudo_key, {}).update(pseudo_styles)
                else:
                    # Only use fallback if styles not extractable
                    css_rule_map[el_id].setdefault("__pseudo__", {}).setdefault(pseudo_key, {})["__recovered__"] = True



    # ✅ Process pseudo-element rules separately
    for selector, props in pseudo_element_rules:
        m = re.search(r'(.*?)(::[a-zA-Z-]+)$', selector)

        if not m:
            continue  # skip bad selectors

        base_selector, pseudo = m.groups()

        try:
            matched_elements = sv.select(base_selector.strip(), soup)
        except Exception:
            continue

        for el in matched_elements:
            el_id = id(el)
            if el_id not in css_rule_map:
                css_rule_map[el_id] = defaultdict(dict)

            for prop, media_dict in props.items():
                if not isinstance(media_dict, dict):
                    continue

                for media, val in media_dict.items():
                    if val:
                        css_rule_map[el_id].setdefault("__pseudo__", {}).setdefault(pseudo, {})[prop] = resolve_css_variables_in_rule(val.strip(), merged_vars)

    # sg_json_print(skipped_pseudo_selectors)

    return css_rule_map, skipped_universal_rules, pseudo_selector_rules


