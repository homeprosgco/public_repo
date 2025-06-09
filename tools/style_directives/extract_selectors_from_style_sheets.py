import tinycss2
import soupsieve as sv
from collections import defaultdict
import re

from sg_file_util import sg_read_file

def media_query_applies(media: str, viewport_width: int) -> bool:
    pattern = r'\((min|max)-width:\s*(\d+)px\)'
    matches = re.findall(pattern, media)
    for direction, value in matches:
        value = int(value)
        if direction == "min" and viewport_width < value:
            return False
        if direction == "max" and viewport_width > value:
            return False
    return True

def extract_selectors_from_css(css_path):
    
    css_content = sg_read_file(css_path)
    rules = tinycss2.parse_stylesheet(css_content, skip_comments=True, skip_whitespace=True)

    selectors_with_rules = defaultdict(lambda: defaultdict(dict))
    pseudo_selectors = set()
    css_variables = {}
    selector_level_vars = {}

    def process_declarations(selector_tokens, content, media=None):
        selector = tinycss2.serialize(selector_tokens).strip()
        declarations = tinycss2.parse_declaration_list(content)
        individual_selectors = [s.strip() for s in selector.split(",")]

        for sel in individual_selectors:
            if ":" in sel:
                pseudo_selectors.add(sel)

        for d in declarations:
            if d.type != "declaration":
                continue

            name = d.name.strip()
            value = tinycss2.serialize(d.value).strip()
            media_key = media or "base"

            if name.startswith("--"):
                for sel in individual_selectors:
                    css_variables[name] = value
                    selector_level_vars.setdefault(sel, {})[name] = value
            else:
                shorthand_props = {
                    'margin': ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
                    'padding': ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
                    # add others if needed
                }

                for sel in individual_selectors:

                    if name in shorthand_props:
                        # remove individual longhands since shorthand overrides them
                        for longhand in shorthand_props[name]:
                            selectors_with_rules[sel][longhand].pop(media_key, None)
                    else:
                        # if a longhand is being set, and shorthand already exists → skip?
                        for shorthand, longhands in shorthand_props.items():
                            if name in longhands and shorthand in selectors_with_rules[sel]:
                                if name in longhands and media_key in selectors_with_rules[sel].get(shorthand, {}):
                                    # skip because shorthand already applied
                                    continue

                    selectors_with_rules[sel][name][media_key] = value

    for rule in rules:
        if rule.type == "qualified-rule":
            process_declarations(rule.prelude, rule.content)
        elif rule.type == "at-rule" and rule.lower_at_keyword == "media":
            media_query = tinycss2.serialize(rule.prelude).strip()
            if rule.content:
                inner_rules = tinycss2.parse_rule_list(rule.content)
                for inner_rule in inner_rules:
                    if inner_rule.type == "qualified-rule":
                        process_declarations(inner_rule.prelude, inner_rule.content, media=media_query)

    return selectors_with_rules, list(pseudo_selectors), css_variables, selector_level_vars