from collections import defaultdict
from typing import Dict, Optional, Any
import re
import json

def escape_for_angular_input(value: str) -> str:
    """
    Escapes value for safe Angular input binding.
    Only used for direct base values, not media-prefixed ones.
    """
    # value = value.replace('"', '\\"')
    return f"{value}"

def add_directives_to_node(
    node: Dict[str, Any],
    src_prefix: str = "",
    max_depth: Optional[int] = None,
    indent: int = 0,
) -> str:
    if not node or "tag" not in node:
        return ""

    if max_depth is not None and indent >= max_depth:
        return ""

    attrs = node.get("attributes", {})
    text_content = node.get("text", "")
    tag_name = node["tag"]
    css_rules = node.get("css_rules", [])
    children = node.get("children", [])

    indent_str = "    " * indent
    attr_str_parts = []

    directive_map = {}  # deduplicated directive bindings
    inline_attrs = []

    # Handle HTML attributes
    for attr, val in attrs.items():
        if isinstance(val, list):
            val = " ".join(val)

        # Prefix `src` if tag is <img>
        if tag_name == "img" and attr == "src" and isinstance(val, str):
            val = f"{src_prefix}/{val}"

        # Prefix background-image URL in inline styles
        elif attr == "style" and isinstance(val, str) and "background-image:url(" in val:
            val = re.sub(r'background-image:url\((.*?)\)', 
                         lambda m: f'background-image:url({src_prefix}/{m.group(1)})', val)

        attr_str_parts.append(f'{attr}="{val}"')

    # Process CSS rules into sg directives
    for rule in sorted(css_rules):

        if rule.startswith("--") or "var(" in rule:
            continue

        media = None

        if "::" in rule:
            media, raw_rule = rule.split("::", 1)
            media = media.strip()
            if not media.startswith("@media"):
                media = f"@media {media}"
        else:
            raw_rule = rule

        if ":" not in raw_rule:
            continue

        prop, value = map(str.strip, raw_rule.split(":", 1))

        if not prop or not value:
            continue

        directive_name = "sg" + "".join(word.capitalize() for word in prop.split("-"))

        if not directive_name.isidentifier():
            continue

        if media:
            directive_map.setdefault(directive_name, {})[media] = value.strip()
        else:
            directive_map.setdefault(directive_name, {})["base"] = value.strip()

    # Combine attributes
    directive_attrs = []

    for directive_name, values in directive_map.items():
        if isinstance(values, dict):
            if any(k.startswith("@media") for k in values):
                json_string = json.dumps(values, separators=(",", ":"), ensure_ascii=False)
                escaped_string = json_string.replace('"', "\\'")
                directive_attrs.append(f"[{directive_name}]=\"'{escaped_string}'\"")
            else:
                base = values.get("base", "").strip()

                # Special case: font-family or font
                if directive_name.lower() in ("sgFontFamily".lower(), "sgFont".lower()) and len(base.split(',')) > 1:
                    # Escape double quotes inside the string and wrap in outer single quotes
                    base_escaped = base.replace('"', '').replace("'", '')
                    directive_attrs.append(f"[{directive_name}]=\"'{base_escaped}'\"")
                else:
                    # Normal props
                    directive_attrs.append(f"[{directive_name}]='\"{base}\"'")
                

    all_attrs = attr_str_parts + directive_attrs + inline_attrs
    attr_str = " ".join(all_attrs)

    void_elements = {
        "area", "base", "br", "col", "embed", "hr",
        "img", "input", "link", "meta", "param", "source", "track", "wbr"
    }

    is_void = tag_name in void_elements

    if attr_str:
        opening = f"{indent_str}<{tag_name} {attr_str} />" if is_void else f"{indent_str}<{tag_name} {attr_str}>"
    else:
        opening = f"{indent_str}<{tag_name} />" if is_void else f"{indent_str}<{tag_name}>"

    if is_void:
        return opening

    closing = f"{indent_str}</{tag_name}>"
    inner_html_lines = []

    if text_content.strip():
        inner_html_lines.append(f"{indent_str}  {text_content.replace('@', '&#64;').strip()}")

    for child in children:
        child_html = add_directives_to_node(child, src_prefix, max_depth, indent + 1)
        if child_html:
            inner_html_lines.append(child_html)

    inner_html = "\n".join(inner_html_lines)

    return f"{opening}\n{inner_html}\n{closing}" if inner_html_lines else f"{opening}\n{closing}"