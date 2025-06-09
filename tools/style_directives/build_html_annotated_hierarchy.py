from bs4 import Tag, NavigableString, Comment
from print_util import sg_json_print
import json

def annotate_structural_pseudos(tag, index, siblings):
    annotations = {}

    if index == 0:
        annotations['sgFirstChild'] = True

    if index == len(siblings) - 1:
        annotations['sgLastChild'] = True

    tag_type_siblings = [sib for sib in siblings if hasattr(sib, "name") and sib.name == tag.name]

    if tag in tag_type_siblings:
        same_tag_index = tag_type_siblings.index(tag)
        annotations['sgNthOfType'] = same_tag_index + 1

    annotations['sgNthChild'] = index + 1

    return annotations


def build_html_annotated_hierarchy(tag: Tag, css_rule_map: dict) -> dict | None:
    if not hasattr(tag, "name") or tag.name is None:
        return None

    rule_dict = css_rule_map.get(id(tag), {})
    resolved_rules = {}

    for prop, media_dict in rule_dict.items():
        if not isinstance(media_dict, dict):
            continue

        # Remove keys with empty/null values
        cleaned_dict = {k: v for k, v in media_dict.items() if v}

        # Sort with 'base' first, then others
        sorted_items = sorted(cleaned_dict.items(), key=lambda x: (x[0] != "base", x[0]))
        sorted_dict = {k: v for k, v in sorted_items}

        base_val = sorted_dict.get("base")
        non_base_vals = {k: v for k, v in sorted_dict.items() if k != "base"}

        # If base is redundant (same as one of the media values), remove it
        if base_val in non_base_vals.values():
            sorted_dict.pop("base")

        # Final output logic
        if sorted_dict:
            # If there's only one rule, still wrap it in a dict for consistency
            resolved_rules[prop] = sorted_dict

    node = {
        "tag": tag.name,
        "attributes": tag.attrs,
        "css_rules": resolved_rules,
        "text": "",
        "children": [],
        "__soup_tag": tag 
    }

    children_list = list(tag.children)
    child_tags = [c for c in children_list if isinstance(c, Tag)]

    for raw_index, child in enumerate(children_list):
        if isinstance(child, Comment):
            node["children"].append({
                "tag": "#comment",
                "text": child.strip(),
                "attributes": {},
                "css_rules": {},
                "children": [],
            })

        elif isinstance(child, NavigableString) and child.strip():
            node["children"].append({
                "tag": None,
                "text": child.strip(),
                "attributes": {},
                "css_rules": {},
                "children": [],
            })

        elif isinstance(child, Tag):
            structural_index = len([
                c for c in children_list[:raw_index]
                if isinstance(c, Tag)
            ])

            child_node = build_html_annotated_hierarchy(child, css_rule_map)
            
            if child_node:
                structural_directives = annotate_structural_pseudos(
                    tag=child,
                    index=structural_index,
                    siblings=child_tags
                )
                child_node["structural_directives"] = structural_directives
                node["children"].append(child_node)

        
    return node
