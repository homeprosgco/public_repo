import json
import re
from string import Template
from core.component_library.component_library import *

class EmotionComponentGenerator:
    def __init__(self, component_library: ComponentLibrary):
        self.component_library = component_library
        self.file_utils = component_library.file_utils
        self.archiver = component_library.archiver

    def extract_text_or_children(self, node):
        return node.get("text", "...")

    def pascal_case(self, name: str) -> str:
        return ''.join(part.capitalize() for part in re.split(r'[-_]', name))


    def name_from_class_or_fallback(self, node):
        class_list = node.get("attributes", {}).get("class", [])
        if class_list:
            def pascal_case(name):
                return ''.join(part.capitalize() for part in name.replace('-', '_').split('_'))

            if len(class_list[0]) >= 4:
                return pascal_case(class_list[0])
            elif len(class_list) > 1:
                return pascal_case(class_list[1])
            else:
                return pascal_case(class_list[0])

        return f"{node['tag'].capitalize()}Component"


    def diff_style_props(self, current: dict, default: dict) -> dict:
        if not isinstance(current, dict):
            raise TypeError(f"Expected 'current' to be dict, got {type(current)}: {current}")
        if not isinstance(default, dict):
            raise TypeError(f"Expected 'default' to be dict, got {type(default)}: {default}")
        return {k: v for k, v in current.items() if default.get(k) != v}


    def dict_to_pretty_ts(self, obj, indent=2, base_level=0):
        def serialize(o, level):
            spacing = " " * (indent + 1 * level)
            closing_spacing = " " * (indent + 1 * (level - 1))
            if isinstance(o, dict):
                inner = ",\n".join(
                    f"{spacing}{json.dumps(k)}: {serialize(v, level + 1)}"
                    for k, v in o.items()
                )
                return f"{{\n{inner}\n{closing_spacing}}}"
            return json.dumps(o)

        return serialize(obj, base_level + 1)


    def normalize_style_props(self, style_props):
        flat = {}
        media_blocks = {}

        for key, val in style_props.items():
            if not key:
                continue
            css_prop = key[0].lower() + key[1:]

            if isinstance(val, dict):
                for media_key, v in val.items():
                    if media_key == "base":
                        flat[css_prop] = v
                    else:
                        media_blocks.setdefault(media_key.strip(), {})[css_prop] = v
            else:
                flat[css_prop] = val

        for media, styles in media_blocks.items():
            flat[f"@media {media}"] = styles

        return flat

    def indent_multiline(self, text: str, spaces: int) -> str:
        padding = " " * spaces
        return "\n".join(padding + line if line.strip() else line for line in text.splitlines())

    def create_emotion_style_dict(self, css_rules):
        return self.normalize_style_props(css_rules)

    def create_emotion_style_string(self, style_dict, indent):
        return self.dict_to_pretty_ts(style_dict, indent)

    def emit_inline_with_css(self, tag, content, style_props_str=None):
        
        if style_props_str:  # emit style only if it exists
            return f"<{tag} css={{css({style_props_str})}}>{content}</{tag}>"
        
        return f"<{tag}>{content}</{tag}>"

    def generate_emotion_component_tsx(self, component_name, component_path, style_props_str,  tag="div"):

        css_attribute = f" css={{css({style_props_str})}}" if style_props_str else ""

        tsx_content = f"""/** @jsxImportSource @emotion/react */
    import {{ css }} from '@emotion/react';
    import React from 'react';

    const {component_name}: React.FC<React.HTMLAttributes<HTMLElement>> = ({{ children, ...props }}) => (
    <{tag}{css_attribute} {{...props}}>
        {{children}}
    </{tag}>
    );

    export default {component_name};
    """

        self.archiver.write_template_component_file(tsx_content, component_dir=component_path)


    def emit_page_component_tsx(self, template_name: str):
        """
        Emits a TSX file for a top-level page component.
        Imports component from the template's index barrel.
        """
        component_name = self.generator.pascal_case(template_name)

        lines = [
            "/** @jsxImportSource @emotion/react */",
            "import React from 'react';",
            f"import {{ {component_name} }} from '.';",  # Import from template's own index
            "",
            f"const {component_name} = () => (",
            f"  <{component_name} />",
            ");",
            "",
            f"export default {component_name};",
        ]

        output_path = self.archiver.get_template_archive_dir() / f"{component_name}.tsx"
        self.archiver.write_component_to_file(output_path, "\n".join(lines))

        index_path = template_dir / "index.ts"
        self.archiver.update_component_barrel_file(index_path, component_name)

    def generate_imports(self, imports: list[str], depth=0, descendants_lifted: bool = False) -> str:
        ui_imports = sorted([name for name in imports if self.component_library.is_ui_component(name)])
        block_imports = []
        content_block_imports = []
        lines = []

        if ui_imports:
            relative_path = f"../../../"

            if depth == 2 or descendants_lifted:
                relative_path = f"../../../../"
            
            lines.append(
                f"import {{ {', '.join(ui_imports)} }} from '{relative_path}{self.archiver.ui_components_relpath()}';"
            )
            
        if depth == 0:
            block_imports = sorted([name for name in imports if not self.component_library.is_ui_component(name)])

            if block_imports:
                lines.append(
                    f"import {{ {', '.join(block_imports)} }} from '../../../{self.archiver.template_ui_block_components_relpath()}';"
                )
        else:
            content_block_imports = sorted([name for name in imports if not self.component_library.is_ui_component(name)])
            relative_path = f"../../../../{self.archiver.template_ui_content_block_components_relpath()}"

            if depth == 2:
                relative_path = "../../../"

            if content_block_imports:
                lines.append(
                    f"import {{ {', '.join(content_block_imports)} }} from '{relative_path}';"
                )
       
        return "\n".join(lines)

    def components_to_jsx(self, component_list):
        if not component_list:
            return "<></>"

        if len(component_list) == 1:
            return f"<{component_list[0]} />"

        indent = "      "
        bracket = "    "
        inner = "\n".join(f"{indent}<{name} />" for name in component_list)
        return f"{bracket}<>\n{inner}\n{bracket}</>"

    def emit_composition_component(self, node: dict, jsx: str, template_page: str, depth: int,):
        if depth <= 2 and node.get("descendant_used_components"):
            tag_name = node.get("component_name")
            # print(f"Write Component File for: {tag_name}")
            imports = sorted(str(x) for x in node.get("descendant_used_components") if str(x) != tag_name)
            
            if depth <= 1 and not node.get("descendants_lifted"):
                jsx = self.components_to_jsx(imports)

            import_paths = self.generate_imports(imports, depth, node.get("descendants_lifted"))

            react_component_name = tag_name

            if depth == 0:
                generated_component_name = "".join([
                    part.capitalize()
                    for segment in template_page.split('_')
                    for part in segment.split('-')
                ])
                react_component_name = f"{generated_component_name}Page"

            tsx_content = f"""import React from 'react';
{import_paths}

const {react_component_name}: React.FC = () => (
{jsx}
);

export default {react_component_name};
"""
            # print()
            # print(tsx_content)
            # print()

            if depth == 0:
                self.archiver.write_template_component_file(tsx_content, template_page=generated_component_name)
            elif depth == 1:
                self.archiver.write_template_component_file(tsx_content, 'ui_block', tag_name, template_page=template_page)
            else:
                self.archiver.write_template_component_file(tsx_content, 'ui_content_block', tag_name, template_page=template_page)
            
            return jsx

        return jsx

