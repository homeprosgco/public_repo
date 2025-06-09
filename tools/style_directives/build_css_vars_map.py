from sg_file_util import sg_file_path
from extract_selectors_from_style_sheets import extract_selectors_from_css


from collections import defaultdict

def build_css_vars_map(stylesheet_links: list, css_dir: str):
    global_vars = {}
    selector_vars = defaultdict(dict)  # selector → {var_name: value}

    for css_file_relative_path in stylesheet_links:
        css_file = sg_file_path(f"{css_dir}/{css_file_relative_path}")

        _, _, css_variables, selector_level_vars = extract_selectors_from_css(css_file)

        # Update global vars (last one wins)
        global_vars.update(css_variables)

        # Update selector-scoped vars
        for selector, scoped_vars in selector_level_vars.items():
            selector_vars[selector].update(scoped_vars)

    return global_vars, selector_vars

