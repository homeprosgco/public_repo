from lxml.html import HtmlElement
from lxml import etree
from typing import List, Dict, Any, Set
from core.util.print_util.print_util import *
from core.util.file_util.sg_file_util_abstract_class import *
from core.consts.css_rules import COMPONENT_RULES

INHERITABLE_PROPERTIES = {"color", "font-family", "font-size", "visibility", "line-height", "letter-spacing"}

class StyleNodeTreeBuilder:
    @staticmethod
    def html_to_node_tree_from_lxml(el: HtmlElement):

        if isinstance(el, etree._Comment):
            return {
                "tag": "comment",
                "text": el.text,
                "attributes": {},
                "children": [],
                "css_rules": {},
                "el_id": None
            }

        if not isinstance(el.tag, str):
            return None

        attrs = {k.replace('_', '-'): v for k, v in el.attrib.items()}
        el_id = attrs.get("data-el-id")

        if "class" in attrs:
            attrs["class"] = attrs["class"].split()
        else:
            attrs["class"] = []

        css_rules = {}

        node = {
            "el_id": el_id,
            "parent_component": "",
            "tag": el.tag,
            "text": (el.text or "").strip(),
            "component_name": "",
            "component_path": "",
            "attributes": attrs,
            "css_rules": css_rules,
            "children": [],
        }

        if "style" in attrs:
            style_rules = {}
            for rule in attrs["style"].split(";"):
                if ":" in rule:
                    key, val = rule.split(":", 1)
                    style_rules[key.strip()] = {"base": val.strip()}
            node["css_rules"].update(style_rules)


        for child in el:
            child_node = StyleNodeTreeBuilder.html_to_node_tree_from_lxml(child)

            if child_node:
                node["children"].append(child_node)

            if child.tail and child.tail.strip():
                node["children"].append({
                    "tag": None,
                    "parent_component": "",
                    "attributes": {},
                    "children": [],
                    "text": child.tail.strip(),
                    "css_rules": {},
                    "el_id": None
                })

        return node


    @staticmethod
    def apply_styles_to_node_tree(node, css_rule_map, archiver: 'SGWebsiteArchiver', inherited_styles=None, depth=0):
        el_id = node.get("el_id")
        direct_styles = {}

        # Preserve inline styles already parsed
        existing_inline_styles = node.get("css_rules", {})

        if el_id and el_id in css_rule_map:
            direct_styles = {
                k: v for k, v in css_rule_map[el_id].items() if not k.startswith("__")
            }

        # Start with inherited styles
        resolved_styles = dict(inherited_styles or {})

        # Update with inline styles (parsed earlier)
        resolved_styles.update(existing_inline_styles)

        # Update with external styles (external overrides inline)
        resolved_styles.update(direct_styles)

        # Filter relevant styles
        node["css_rules"] = {
            k: v for k, v in resolved_styles.items()
            if k in INHERITABLE_PROPERTIES or k in direct_styles or k in existing_inline_styles
        }

        attrs = node.get("attributes", {})

        classification = StyleNodeTreeBuilder.classify_component(node)
        tag = node.get("tag", "")
        class_list = attrs.get("class", [])
        
        if tag in {'span', 'li'}:
            if tag == 'li':
                classification = f"List{classification}"
            else:
                classification = tag.capitalize() + classification
        elif tag in {'br', 'hr', 'script'}:
            classification = None

        if (not classification or classification in {'Box', 'Background'}) and len(class_list) > 0:
            classification = StyleNodeTreeBuilder.name_from_class(class_list)

        if depth == 0:
            classification = archiver.template_name.capitalize()

        node["component_name"] = classification

        # print()
        # print(tag)
        # print(classification)
        # print(node.get("text", "").strip())
        # print(class_list)
        # sg_json_print(node.get("css_rules", {}))
        # print()
        
        for child in node.get("children", []):
            child["parent_component"] = node["component_name"]
            StyleNodeTreeBuilder.apply_styles_to_node_tree(child, css_rule_map, archiver, node["css_rules"], depth + 1)

    @staticmethod
    def classify_component(node: dict) -> str:
        results = StyleNodeTreeBuilder.evaluate_style(node)
        if results and results[0]["score"] >= 0.7:
            return results[0]["component"]
        return ""

    @staticmethod
    def flatten_css(css: Dict[str, Dict[str, str]]) -> Dict[str, Set[str]]:
        flat_css = {}

        for prop, sources in css.items():
            values = set()
            for val in sources.values():
                values.add(val)
            flat_css[prop] = values

        return flat_css

    @staticmethod
    def name_from_class(class_list: list):

        def pascal_case(name):
            return ''.join(part.capitalize() for part in name.replace('-', '_').split('_'))

        if len(class_list[0]) >= 4:
            return pascal_case(class_list[0])
        elif len(class_list) > 1:
            return pascal_case(class_list[1])
        else:
            return pascal_case(class_list[0])

    @staticmethod
    def evaluate_style(node):
        node_tag = node.get("tag")
        node_type = node.get("attributes", {}).get("type")
        css = node.get("css_rules", {})

        results = []

        def has_media_rules(css_rules):
            for val in css_rules.values():
                if any(k.startswith("@media") or "media:" in k for k in val.keys()):
                    return True
            return False

        for name, rule in COMPONENT_RULES.items():
            score = 0
            total = 0
            matched_props = []

            # Tag or tags check
            if ("tag" in rule and rule["tag"] != node_tag) or \
            ("tags" in rule and node_tag not in rule["tags"]):
                continue

            has_type = "type" in rule
            has_style_reqs = any(k in rule for k in ("requires_all", "requires_any"))

            # Handle tag-only or type-only cases
            if not has_style_reqs:
                if has_type:
                    total += 1
                    if isinstance(rule["type"], list) and node_type in rule["type"]:
                        score += 1.0
                    elif rule["type"] == node_type:
                        score += 1.0
                    results.append({
                        "component": name,
                        "score": score / total + rule.get("priority_boost", 0),
                        "matched_props": matched_props
                    })
                    continue
                results.append({
                    "component": name,
                    "score": 1.0 + rule.get("priority_boost", 0),
                    "matched_props": matched_props
                })
                continue

            # Type match scoring
            if has_type:
                total += 1
                if isinstance(rule["type"], list) and node_type in rule["type"]:
                    score += 1.0
                elif rule["type"] == node_type:
                    score += 1.0

            # requires_all must all pass to proceed
            requires_all = rule.get("requires_all", {})
            all_pass = True

            for prop, required_val in requires_all.items():
                if prop not in css:
                    all_pass = False
                    break
                prop_sources = css[prop]
                if required_val is None:
                    matched = True
                elif isinstance(required_val, list):
                    matched = any(val in required_val for val in prop_sources.values())
                else:
                    matched = required_val in prop_sources.values()
                if not matched:
                    all_pass = False
                    break
                matched_props.append(prop)

            if not all_pass:
                continue

            # Early perfect match: requires_all only
            if requires_all and "requires_any" not in rule:
                results.append({
                    "component": name,
                    "score": 1.0 + rule.get("priority_boost", 0),
                    "matched_props": matched_props
                })
                continue

            # Score requires_all props
            score += len(requires_all)
            total += len(requires_all)

            # Score requires_any props
            any_props = rule.get("requires_any", {})
            match_count = 0
            weight_factor = 0.75
            min_match = rule.get("min_match", 1)

            if isinstance(any_props, dict):
                for prop, required_val in any_props.items():
                    if prop in css:
                        prop_sources = css[prop]
                        if required_val is None or required_val in prop_sources.values():
                            match_count += 1
                            matched_props.append(prop)
            elif isinstance(any_props, list):
                for item in any_props:
                    if ":" in item:
                        k, v = item.split(":", 1)
                        if k in css and v in css[k].values():
                            match_count += 1
                            matched_props.append(k)
                    elif item in css:
                        match_count += 1
                        matched_props.append(item)

            score += min(match_count, min_match) * weight_factor
            total += min_match * weight_factor

            if total:
                results.append({
                    "component": name,
                    "score": round(score / total + rule.get("priority_boost", 0), 4),
                    "matched_props": list(set(matched_props))
                })

        return sorted(results, key=lambda r: r["score"], reverse=True)

    @staticmethod
    def replace_theme_values_in_node_tree(node: dict, theme: dict):
        color_map = {v: k for k, v in theme["colors"].items()}
        font_size_map = {v: k for k, v in theme["typography"]["fontSizes"].items()}
        font_family_map = {v: k for k, v in theme["typography"]["fontFamilies"].items()}

        def to_var(token_name):
            return f"var(--{token_name})"

        def transform_css_rules(rules):
            for prop, media_map in rules.items():
                for media, value in media_map.items():
                    if prop == "color" and value in color_map:
                        media_map[media] = to_var(color_map[value])
                    elif prop == "font-size" and value in font_size_map:
                        media_map[media] = to_var(font_size_map[value])
                    elif prop == "font-family" and value in font_family_map:
                        media_map[media] = to_var(font_family_map[value])
            return rules

        def traverse(node):
            if "css_rules" in node:
                node["css_rules"] = transform_css_rules(node["css_rules"])
            for child in node.get("children", []):
                traverse(child)

        traverse(node)

