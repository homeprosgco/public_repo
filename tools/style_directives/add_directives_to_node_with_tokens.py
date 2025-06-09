from typing import Dict, Any, Optional
import json
import re
from print_util import sg_json_print

SUPPORTED_PSEUDO_DIRECTIVES = {
    ":hover",
    ":focus",
    ":active",
    ":visited",
    ":checked",
    ":focus-visible", 
    ":disabled", 
    ":required", 
    ":invalid", 
    ":valid"
}

# Store skipped ones for future analysis
unimplemented_pseudos = []

# e.g. ":hover" → "sgHoverStyle", ":focus" → "sgFocusStyle"
def pseudo_to_directive(pseudo: str) -> str:
    base = pseudo.lstrip(":")  # Remove leading ":" or "::"
    return "sg" + base.capitalize() + "Style"

def to_escaped_single_quoted_dict_string(d: dict) -> str:
    inner = ", ".join(f"'"+k+"':'"+v+"'" for k, v in d.items())
    return f"'{{{inner}}}'".replace("'", "\\'")

def json_to_angular_object_literal(obj: dict) -> str:
    return "{" + ", ".join(f"'{k}': '{v}'" for k, v in obj.items()) + "}"

def render_pseudo_span(class_name, styles, content):
    # Remove 'content' from the style dict (it will go into span text)
    style_dict = {k: v for k, v in styles.items() if k != "content"}

    # Convert to JSON and escape quotes for Angular binding
    json_string = json.dumps(style_dict, separators=(",", ":"), ensure_ascii=False)
    escaped_string = json_string.replace('"', "'")  # use single quotes for Angular input

    clean_content = content.strip('"\'')  # remove quotes from 'content'
    
    return f'<span class="{class_name}" [ngStyle]="{escaped_string}">{clean_content}</span>'

def add_directives_to_node_with_tokens(
    node: Dict[str, Any],
    token_dict: Dict[str, str],
    src_prefix: str = "",
    max_depth: Optional[int] = None,
    indent: int = 0,
) -> str:
    if not node or "tag" not in node or (max_depth is not None and indent >= max_depth):
        return ""

    tag_name = node["tag"]
    attrs = node.get("attributes", {})
    text_content = node.get("text", "")
    children = node.get("children", [])

    css_rules = node.get("css_rules")
    if not isinstance(css_rules, dict):
        css_rules = {}

    indent_str = "    " * indent
    attr_str_parts = []
    directive_map = {}
    inline_attrs = []

    # HTML attribute parsing
    for attr, val in attrs.items():
        if isinstance(val, list):
            val = " ".join(val)

        if tag_name == "img" and attr == "src":
            val = f"{src_prefix}/{val}"
        elif attr == "style" and isinstance(val, str) and "background-image:url(" in val:
            val = re.sub(r'background-image:url\((.*?)\)', lambda m: f'background-image:url({src_prefix}/{m.group(1)})', val)

        attr_str_parts.append(f'{attr}="{val}"')

    # CSS rules → directive map
    for prop, media_map in css_rules.items():

        if prop == "__pseudo__":
            continue  # handled separately

        if not isinstance(media_map, dict) or prop.startswith('-'):
            continue

        # Convert property name to directive
        directive_name = "sg" + "".join(word.capitalize() for word in prop.split("-"))

        if not directive_name.isidentifier():
            continue

        for media, value in media_map.items():
            media_key = f"@media {media}" if media != "base" else "base"
            # Token substitution if available
            if prop in {"color", "background-color", "font-size", "font-family"}:
                value = next((f"var(--{k})" for k, v in token_dict.items() if v == value), value)

            directive_map.setdefault(directive_name, {})[media_key] = value

    # Serialize directives
    directive_attrs = []

    # Style directives
    for directive_name, values in directive_map.items():
        
        if isinstance(values, dict):
            if any(k != "base" for k in values):  # mixed or media-bound
                json_string = json.dumps(values, separators=(",", ":"), ensure_ascii=False)
                escaped_string = json_string.replace('"', "\\'")  # convert to single quotes
                directive_attrs.append(f"[{directive_name}]=\"'{escaped_string}'\"")
            else:  # base-only
                base = values.get("base", "").strip()
                if directive_name.lower() in ("sgFontFamily", "sgFont") and len(base.split(',')) > 1:
                    base_escaped = base.replace('"', '').replace("'", '')
                    directive_attrs.append(f"[{directive_name}]=\"'{base_escaped}'\"")
                else:
                    directive_attrs.append(f"[{directive_name}]='\"{base}\"'")

    
    # Add structural pseudo-directives
    for directive_name, value in node.get("structural_directives", {}).items():
        if isinstance(value, bool) and value:
            directive_attrs.append(f"[{directive_name}]=true")
        else:
            directive_attrs.append(f"[{directive_name}]=\"'{value}'\"")

     # Pseudo-elements (only once, at top/bottom)
    pseudo_map = css_rules.get("__pseudo__")
    # sg_json_print(pseudo_map)
    before = pseudo_map.get("::before") if isinstance(pseudo_map, dict) else None
    after = pseudo_map.get("::after") if isinstance(pseudo_map, dict) else None

    if isinstance(pseudo_map, dict):
        for pseudo, styles in pseudo_map.items():
            if pseudo in ("::before", "::after"):
                continue  # handled elsewhere

            if pseudo not in SUPPORTED_PSEUDO_DIRECTIVES:
                unimplemented_pseudos.append(pseudo)
                continue

            directive_name = pseudo_to_directive(pseudo)

            # ✅ Handle recovered or incomplete pseudo styles
            if styles.get("__recovered__") is True and len(styles) == 1:
                directive_attrs.append(f"[{directive_name}]=true")
                continue  # Nothing else to render

            # ✅ Normal case: process actual style values
            if isinstance(styles, dict):
                filtered = {k: v for k, v in styles.items() if k != "__recovered__"}
                # sg_json_print(filtered)
                
                if not filtered:
                    continue  # All keys were skipped

                object_literal = json_to_angular_object_literal(filtered)
                directive_attrs.append(f"[{directive_name}]=\"{object_literal}\"")

    all_attrs = attr_str_parts + directive_attrs + inline_attrs
    attr_str = " ".join(all_attrs)

    void_elements = {
        "area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"
    }

    is_void = tag_name in void_elements

    if is_void:
        return f"{indent_str}<{tag_name} {attr_str} />" if attr_str else f"{indent_str}<{tag_name} />"

    opening = f"{indent_str}<{tag_name} {attr_str}>" if attr_str else f"{indent_str}<{tag_name}>"
    closing = f"{indent_str}</{tag_name}>"

    inner_html_lines = []

    if isinstance(before, dict):
        content = before.get("content", "")
        rendered_before = render_pseudo_span("pseudo-before", before, content)
        inner_html_lines.append(f"{indent_str}  {rendered_before}")

    for child in children or []:
        if isinstance(child, str):
            # Legacy or fallback string — likely unnecessary now, but safe to keep
            stripped = child.strip()
            if stripped:
                inner_html_lines.append(f"{indent_str}  {stripped}")

        elif isinstance(child, dict):
            tag = child.get("tag")

            if tag == "#comment":
                text = child.get("text", "").strip()
                inner_html_lines.append(f"{indent_str}<!-- {text} -->")
                continue

            # ✅ Text node
            if tag is None and child.get("text"):
                text = child["text"].strip()
                if text:
                    inner_html_lines.append(f"{indent_str}  {text.replace('@', '&#64;')}")

            # ✅ Tag node (element)
            else:
                child_html = add_directives_to_node_with_tokens(
                    child, token_dict, src_prefix, max_depth, indent + 1
                )
                if child_html:
                    inner_html_lines.append(child_html)

    # Pseudo-after (at end)
    if isinstance(after, dict):
        content = after.get("content", "")
        rendered_after = render_pseudo_span("pseudo-after", after, content)
        inner_html_lines.append(f"{indent_str}  {rendered_after}")


    inner_html = "\n".join(inner_html_lines)

    return f"{opening}\n{inner_html}\n{closing}" if inner_html_lines else f"{opening}\n{closing}"

