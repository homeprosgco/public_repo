

from collections import defaultdict

from core.emotion_component_generator.emotion_component_generator import *
from typing import Optional

COMPONENT_DEFAULT_STYLES = {}

class ComponentEmitter:
    def __init__(self, generator: EmotionComponentGenerator):
        self.generator = generator
        self.component_library = generator.component_library
        self.archiver = self.component_library.archiver
        self.emitted_components = getattr(self, "emitted_components", set())
        self.file_utils = generator.component_library.file_utils

    def _format_jsx_props(self, attrs, style_props: dict = None, default_style_props: dict = None, indent_level=2):
        props = []
        indent = "  " * indent_level

        for key, val in attrs.items():
            if key == "style" or key == "data-el-id":
                continue

            if key == "class":
                key = "className"
                val = " ".join(val) if isinstance(val, list) else val

            if isinstance(val, str) and not val.strip():
                continue

            props.append(f'{indent}{key}="{val}"')

        # Only include css={} if style_props differs from default
        if style_props:
            diff = self.generator.diff_style_props(style_props, default_style_props or {})
            if diff:
                style_str = self.generator.create_emotion_style_string(diff, indent=indent_level * 2)
                props.append(f"{indent}css={{css({style_str})}}")

        return "\n".join(props)

    def annotate_node_with_used_components(self, node: dict, depth: int = 0, debug_imports: Optional[bool] = False) -> dict:
        """
        - At depth 0 or 1: collect all direct child component names into 'descendant_used_components'.
        - At depth 2: collect all descendant component names recursively.
        """
        if not node or not isinstance(node, dict):
            return {}

        def collect_all_descendants(n):
            collected = set()
            for child in n.get("children", []):
                comp = child.get("component_name")
                if comp:
                    collected.add(comp)
                collected.update(collect_all_descendants(child))
            return collected

        # means it is a ui shared component and should be given its on file
        # if this returns a component the parent component should collect all descendants including this component
        # im assuming you would have to peek at the next child to determine if it is fit to collect descendant use
        is_ui_component = self.component_library.is_ui_component(node.get("component_name", ""))

        if depth <= 1:
            components = set()

            for child in node.get("children", []):
                component_name = child.get("component_name")

                if component_name:
                    components.add(component_name)
                
                if self.component_library.is_ui_component(component_name):
                    descendant_used_components = collect_all_descendants(child)
                    components.update(descendant_used_components)
                    node["descendants_lifted"] = True

            node["descendant_used_components"] = sorted(components)

        elif depth == 2:
            if self.component_library.is_ui_component(node.get("component_name", "")):
                node["descendant_used_components"] = []
            else:
                node["descendant_used_components"] = sorted(collect_all_descendants(node))

        else:
            node["descendant_used_components"] = []

        for child in node.get("children", []):
            self.annotate_node_with_used_components(child, depth + 1, debug_imports)

        return node

    def emit_single_component_tsx(
        self, 
        tree: dict, 
        template_name: str = "Template", 
        template_page: str = "",
        max_depth: Optional[int] = None,
        diagnostic=False
    ) -> str:
        used_components = set()
        top_level_component = self._emit_node(
            tree, 
            template_name=template_name, 
            template_page=template_page, 
            used_components=used_components,
            max_depth=None,
            diagnostic=diagnostic
        )
        return top_level_component

    def _emit_node(
        self, 
        node: dict, 
        template_name: str = "Template", 
        template_page: str = "", 
        depth: int = 0, 
        current_component_name=None, 
        used_components=None, 
        max_depth: Optional[int] = None,
        indent: int = 0, 
        diagnostic=False
    ) -> tuple[str, set]:
        if not node or "tag" not in node or node.get("tag") == 'script' or (max_depth is not None and indent >= max_depth):
            return ""

        tag_name = node.get("tag", "div")
        attrs = node.get("attributes", {})
        text = node.get("text", "").strip()
        component_name = node.get("component_name", "")
        parent_component = node.get("parent_component", "")
        component_dir = node.get("component_dir")
        node_children = node.get("children", [])
        css_rules = node.get("css_rules", {})

        default_styles = COMPONENT_DEFAULT_STYLES.get(component_name, {})
        
        indent_str = "  " * indent
        inner_tsx_lines = []

        if component_name:
            is_ui_component = self.component_library.is_ui_component(component_name)

            if is_ui_component:
                component_file_path = self.archiver.ui_component_dir()
                component_category = self.component_library.get_category(component_name)
                component_path = f"{component_file_path} / {component_category} / {component_name}.tsx"

                if not self.archive_dir.component_exists(component_path):
                    self.generator.generate_emotion_component_tsx(component_name, component_dir=component_path, self.generator.create_emotion_style_string(css_rules))
                    
            is_component_file_path = self.file_utils.is_file_path(f"{component_dir} / {template_page} / {component_name}.tsx")

            if component_name not in self.emitted_components:
                self.emitted_components.add(component_name)
                COMPONENT_DEFAULT_STYLES[component_name] = css_rules
                style_props = None  # ⛔ No style_props on first use
                default_style_props = None

                if not is_component_file_path and not diagnostic:
                    component_file_path = self.file_utils.make_path(component_dir, template_page, f"{component_name}.tsx")
                    tsx = generate_emotion_component_tsx(component_name, self.generator.create_emotion_style_string(css_rules))
            else:
                style_props = self.generator.normalize_style_props(css_rules)
                default_style_props = self.generator.normalize_style_props(default_styles or {})

            tag_name = component_name
        else:
            style_props = self.generator.normalize_style_props(css_rules)
            default_style_props = {}

        props_str = self._format_jsx_props(attrs, style_props, default_style_props, indent + 1)
        props_str = f"{props_str}" if props_str else ""
        prop_lines = props_str.strip().splitlines()
        is_single_prop = len(prop_lines) == 1

        void_elements = {
            "area", "base", "br", "col", "embed", "hr", "img", "input",
            "link", "meta", "param", "source", "track", "wbr", "Image", "Icon"
        }

        is_void = tag_name in void_elements

        if is_void:
            if is_single_prop:
                return f"{indent_str}<{tag_name} {prop_lines[0]} />"
            elif props_str:
                return f"{indent_str}<{tag_name}\n{props_str}\n{indent_str}/>"
            else:
                return f"{indent_str}<{tag_name} />"

        if not props_str:
            opening = f"{indent_str}<{tag_name}>"
        elif is_single_prop:
            opening = f"{indent_str}<{tag_name} {prop_lines[0]}>"
        else:
            opening = f"{indent_str}<{tag_name}\n{props_str}\n{indent_str}>"

        closing = f"{indent_str}</{tag_name}>"

        for node_child in node_children or []:
            child_component_name = node_child.get("component_name", "")

            if isinstance(node_child, dict):
                tag = node_child.get("tag")

                if tag == "comment":
                    text = node_child.get("text", "").strip()
                    inner_tsx_lines.append(f"{indent_str}   {{/* {text} */}}")
                    continue

            if (tag is None and node_child.get("text")) or (child_component_name and node_child.get("text")):
                text_content = node_child["text"].strip()

                if text_content:
                    inner_tsx_lines.append(f"{indent_str}   {text_content.replace('@', '&#64;')}")
            else:
                child_tsx= self._emit_node(
                    node_child,
                    template_name,
                    template_page,
                    depth + 1,
                    current_component_name,
                    used_components=used_components,
                    max_depth=max_depth,
                    indent=indent + 1, 
                    diagnostic=diagnostic
                )
                if child_tsx:
                    inner_tsx_lines.append(child_tsx)

        inner_tsx = "\n".join(inner_tsx_lines)
        jsx = f"{opening}\n{inner_tsx}\n{closing}" if inner_tsx_lines else f"{opening}\n{closing}"

        jsx = self.generator.emit_composition_component(node, jsx, template_page, depth)


        return jsx
