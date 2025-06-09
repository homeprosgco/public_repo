from pathlib import Path
from typing import List, Tuple, Optional, Dict, Any
import re
from collections import defaultdict
from bs4 import Tag

from add_directives_to_node import add_directives_to_node
from add_directives_to_node_with_tokens import add_directives_to_node_with_tokens

COMPONENT_OUTPUT_DIR = Path("libs/angular-templates-ui/src/lib/website_templates")

def to_kebab_case(s: str) -> str:
    return re.sub(r'[^a-zA-Z0-9]', '-', s).lower().replace('--', '-').strip('-')

def component_selector_name(name: str) -> str:
    return to_kebab_case(name)

def normalize_directive_name(d: str) -> str:
    # Ensure safe sg-prefix removal only if present
    return (d[2].upper() + d[3:] + 'Directive') if d.startswith('sg') else (d[0].upper() + d[1:] + 'Directive')


def replace_with_component_stub(tag, comp_name, soup):
    stub = soup.new_tag(f"sg-{component_selector_name(comp_name)}")  # use hyphens
    tag["data-replaced"] = "true"
    tag.replace_with(stub)

def generate_component_name_from_tag(tag: Dict[str, Any], fallback_name: str) -> str:
    attrs = tag.get("attributes", {})
    class_attr = attrs.get("class", "")
    tag_name = tag.get("tag", "element")

    if isinstance(class_attr, list) and class_attr:
        base_name = class_attr[0]
    elif isinstance(class_attr, str) and class_attr.strip():
        base_name = class_attr.split()[0]
    else:
        base_name = f"{fallback_name}_{tag_name}"

    # Sanitize to valid identifier
    comp_name = re.sub(r'[^a-zA-Z0-9_]', '_', base_name).lower()
    return comp_name

def create_component_files(comp_name: str, html_content: str, component_dir_name: str, directive_imports: list[str] = []):

    base_path = COMPONENT_OUTPUT_DIR / component_dir_name / comp_name
    base_path.mkdir(parents=True, exist_ok=True)

    # HTML file
    (base_path / f"{comp_name}.component.html").write_text(html_content)

    # TS file
    class_name = ''.join(word.capitalize() for word in comp_name.split('_'))

    # Step 1: Detect NgStyle
    has_ng_style = any(d.lower() == "ngstyle" for d in directive_imports)

    # Remove NgStyle from directive imports
    filtered_directives = [d for d in directive_imports if d.lower() != "ngstyle"]

    # Step 2: Generate custom directive class names
    directive_classes = [normalize_directive_name(d) for d in filtered_directives]

    # Step 3: Import statements
    imports_lines = []

    if directive_classes:
        imports_lines.append(
            f"import {{ {', '.join(sorted(set(directive_classes))) } }} from '@public-repo/angular_style_directives';"
        )
    if has_ng_style:
        imports_lines.append("import { NgStyle } from '@angular/common';")

    imports_array = "[" + ", ".join(sorted(set(directive_classes + (["NgStyle"] if has_ng_style else [])))) + "]"
    
    ts_code = f"""import {{ Component }} from '@angular/core';
{chr(10).join(imports_lines)}

@Component({{
  selector: 'sg-{component_selector_name(comp_name)}',
  templateUrl: './{comp_name}.component.html',
  standalone: true,
  imports: {imports_array}
}})
export class {class_name}Component {{}}"""
    (base_path / f"{comp_name}.component.ts").write_text(ts_code)

def create_components_from_hierarchy(
    node: Dict[str, Any],
    soup, 
    fallback_name: str, 
    component_dir_name: str,
    script_links: list[str] = [],
    theme_dict: dict = {}
):
    
    if "children" not in node:
        return

    top_level_component_names = []

    for i, child in enumerate(node["children"]):
        tag = child.get("tag")
        tag_name = (tag or "").lower()

        # Skip script, style, meta, and text-only nodes
        if tag_name in {"script", "style", "meta", "link", "noscript"} or tag is None or tag == "#comment" or not isinstance(child.get("__soup_tag"), Tag):
            continue

        comp_name = generate_component_name_from_tag(child, fallback_name)
        top_level_component_names.append(comp_name)

        if not theme_dict:
            html_content = add_directives_to_node(child, fallback_name, indent=0)
        else:
            html_content = add_directives_to_node_with_tokens(child, theme_dict, fallback_name, indent=0)

        directives_used = list({attr[1:-2] for attr in re.findall(r'\[[^\]]+\]=', html_content)})
        create_component_files(comp_name, html_content, component_dir_name, directive_imports=directives_used)
        replace_with_component_stub(child["__soup_tag"], comp_name, soup)

    # Create the parent page component
    page_class_name = ''.join([word.capitalize() for word in component_dir_name.split('_')])
    page_base_path = COMPONENT_OUTPUT_DIR / component_dir_name
    page_base_path.mkdir(parents=True, exist_ok=True)
    parent_selector_block = "\n".join(
        f"  <sg-{component_selector_name(name)}></sg-{component_selector_name(name)}>"
        for name in top_level_component_names
    )

    (page_base_path / f"{component_dir_name}.component.html").write_text(parent_selector_block)
    (page_base_path / f"{component_dir_name}.component.ts").write_text(f"""import {{ Component }} from '@angular/core';
{chr(10).join([f"import {{ {''.join(word.capitalize() for word in name.split('_'))}Component }} from './{name}/{name}.component';" for name in top_level_component_names])}

@Component({{
  selector: 'sg-{component_selector_name(component_dir_name)}',
  templateUrl: './{component_dir_name}.component.html',
  standalone: true,
  imports: [{', '.join([f"{''.join(word.capitalize() for word in name.split('_'))}Component" for name in top_level_component_names])}]
}})
export class {page_class_name}Component {{}}
""")

    # 👇 Build the wrapper component
    wrapper_class_name = ''.join([word.capitalize() for word in fallback_name.split('_')]) + 'SiteWrapperComponent'
    wrapper_selector = f"{fallback_name}_site_wrapper"  # use underscore here, convert below
    wrapper_path = page_base_path / f"{fallback_name}-site-wrapper.component.ts"

    # Extract script paths from soup (you must pass html_path into this function)

    script_lines = ',\n      '.join(f"'{fallback_name}/{s}'" for s in script_links)

    wrapper_ts_content = f"""import {{ Component, OnInit, inject }} from '@angular/core';
import {{ ScriptLoaderService, CssThemeVarUpdateService  }} from '@public-repo/angular-utils';
import {{ {page_class_name}Component }} from './{component_dir_name}.component';
import {{ m3Theme }} from './tokens';

@Component({{
  selector: 'sg-{component_selector_name(wrapper_selector)}',
  template: '<sg-{component_selector_name(component_dir_name)}></sg-{component_selector_name(component_dir_name)}>',
  standalone: true,
  imports: [{page_class_name}Component]
}})
export class {wrapper_class_name} implements OnInit {{
  scriptLoader = inject(ScriptLoaderService);
  themeVarUpdate = inject(CssThemeVarUpdateService)
  
  ngOnInit() {{
    this.themeVarUpdate.applyTheme(m3Theme);
    this.scriptLoader.loadScripts([
      {script_lines}
    ])
    .then(() => console.log('Scripts loaded for {fallback_name}!'))
    .catch(err => console.error(err, 'Error loading scripts for {fallback_name}'));
  }}
}}
"""

    (wrapper_path).write_text(wrapper_ts_content)

