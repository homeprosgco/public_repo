import sys
import os
from bs4 import BeautifulSoup

# Add base dir
sys.path.append(os.path.abspath(os.path.dirname(__file__)))

import sg_file_util
import build_css_selectors_rule_map as css_util
import build_html_annotated_hierarchy as build
from print_util import sg_json_print, sg_pprint
import create_components_from_hierarchy as cc
import build_css_vars_map as css_var_map
from theme_builder import build_combined_color_frequency_report, assign_m3_tokens_from_color_report, build_typography_frequency_report, assign_typography_tokens, build_typescript_theme_object, build_python_theme_dict

if __name__ == "__main__":

    template_name = 'hmend'
    base_url = 'https://htmldemo.net/hmend/hmend/'
    html_path = f'files/website/{template_name}/index.html'
    css_dir = f'files/website/{template_name}/css'
    img_dir = f'files/website/{template_name}/images'
    script_dir = f'files/website/{template_name}/scripts'

    # Extract asset links
    stylesheet_links = sg_file_util.extract_stylesheet_links(html_path)
    image_links = sg_file_util.extract_image_links(html_path)
    script_links = sg_file_util.extract_script_links(html_path)

    # Download assets
    # sg_file_util.download_css_files(css_dir, stylesheet_links, base_url)
    # sg_file_util.download_image_files(img_dir, image_links, base_url)
    # sg_file_util.download_script_files(script_dir, script_links, base_url)

    # Build CSS variable map
    global_vars, selector_vars = css_var_map.build_css_vars_map(stylesheet_links, css_dir)

    # Parse HTML
    soup = BeautifulSoup(sg_file_util.sg_read_file(html_path), "html.parser") 


    # Build selector rule map
    css_rule_map, skipped_universal_rules, pseudo_selectors = css_util.build_css_selectors_rule_map(
        soup, stylesheet_links, css_dir, global_vars, selector_vars
    )

    annotated_hierarchy = build.build_html_annotated_hierarchy(soup.body, css_rule_map)
    # sg_pprint(annotated_hierarchy)

    # Build reports and tokens
    color_report = build_combined_color_frequency_report(annotated_hierarchy)
    typography_report = build_typography_frequency_report(annotated_hierarchy)

    color_tokens = assign_m3_tokens_from_color_report(color_report)
    typography_tokens = assign_typography_tokens(typography_report)

    # sg_pprint(typography_tokens)

    # # # Build theme outputs
    theme = build_typescript_theme_object(template_name, color_tokens, typography_tokens)
    theme_dict = build_python_theme_dict(color_tokens, typography_tokens)

    # sg_json_print(theme_dict)

    # Build components
    nodes = cc.create_components_from_hierarchy(
        annotated_hierarchy,
        soup,
        template_name,
        template_name,
        script_links,
        theme_dict
    )

    print(nodes)