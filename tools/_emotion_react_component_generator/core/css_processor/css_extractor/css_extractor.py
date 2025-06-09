import tinycss2
import soupsieve as sv
from collections import defaultdict
import re
from pathlib import Path
import os
from core.util.print_util.print_util import *

class CSSExtractor:
    def __init__(self, file_utils, css_paths: list = None, css_dir: str = None):
        self.file_utils = file_utils
        self.css_paths = css_paths or []
        self.css_dir = css_dir

        self._selectors_with_rules = defaultdict(lambda: defaultdict(dict))
        self._pseudo_selectors = set()
        self._css_variables = {}
        self._selector_level_vars = defaultdict(dict)

        if self.css_paths and self.css_dir:
            self._extract_all()

    def _extract_all(self):
        parsed = self.aggregate_css_data()
        self._selectors_with_rules = parsed["rule_blocks"]
        self._pseudo_selectors = set(parsed["pseudo_selectors"])
        self._css_variables = parsed["css_variables"]
        self._selector_level_vars = parsed["selector_level_vars"]

    def extract_from_file(self, css_path: str) -> dict:
        css_content = self.file_utils.read_file(css_path)
        return self._extract_logic(css_content)

    def extract_from_string(self, css_content: str) -> dict:
        return self._extract_logic(css_content)

    def aggregate_css_data(self, css_paths: list = None, css_dir: str = None):
        css_paths = css_paths or self.css_paths
        css_dir = css_dir or self.css_dir
        
        collected_rules = []  # ordered rule groups
        merged_pseudo_selectors = set()
        merged_css_variables = {}
        merged_selector_level_vars = defaultdict(dict)

        for css_file_relative_path in css_paths:
            css_file = self.file_utils.find_file_by_name(css_dir, os.path.basename(css_file_relative_path))

            if not css_file:
                print(f"⚠️ CSS file not found in directory walk: {css_file_relative_path}")
                continue

            parsed = self.extract_from_file(str(css_file))

            # Append full unmerged rule block
            collected_rules.append(parsed["selectors_with_rules"])

            merged_pseudo_selectors.update(parsed["pseudo_selectors"])
            merged_css_variables.update(parsed["css_variables"])

            for selector, scoped_vars in parsed["selector_level_vars"].items():
                merged_selector_level_vars[selector].update(scoped_vars)

        return {
            "rule_blocks": collected_rules,  # preserve rule order, no merging
            "pseudo_selectors": list(merged_pseudo_selectors),
            "css_variables": merged_css_variables,
            "selector_level_vars": merged_selector_level_vars
        }

    @staticmethod
    def _extract_logic(css_content: str) -> dict:
        rules = tinycss2.parse_stylesheet(css_content, skip_comments=True, skip_whitespace=True)

        selectors_with_rules = defaultdict(lambda: defaultdict(dict))
        pseudo_selectors = set()
        css_variables = {}
        selector_level_vars = {}

        shorthand_props = {
            'margin': ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
            'padding': ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
        }

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
                    for sel in individual_selectors:
                        if name in shorthand_props:
                            for longhand in shorthand_props[name]:
                                selectors_with_rules[sel][longhand].pop(media_key, None)
                        else:
                            for shorthand, longhands in shorthand_props.items():
                                if name in longhands and shorthand in selectors_with_rules[sel]:
                                    if media_key in selectors_with_rules[sel][shorthand]:
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

        return {
            "selectors_with_rules": selectors_with_rules,
            "pseudo_selectors": list(pseudo_selectors),
            "css_variables": css_variables,
            "selector_level_vars": selector_level_vars
        }

    @property
    def selectors_with_rules(self):
        return self._selectors_with_rules

    @property
    def pseudo_selectors(self):
        return list(self._pseudo_selectors)

    @property
    def css_variables(self):
        return self._css_variables

    @property
    def selector_level_vars(self):
        return self._selector_level_vars 