# Update CSSVariableResolver to depend on SGFileUtils for path resolution

import re

class CSSVariableResolver:
    def __init__(self, css_variables: dict = None):
        self.global_vars = css_variables or {}

    def resolve_rule(self, rule: str, vars_map: dict = None) -> str:
        """
        Resolves var(--x, fallback) using the provided vars_map or global_vars.
        """
        import re
        var_pattern = re.compile(r'var\(\s*(--[\w-]+)\s*(?:,\s*([^()]*))?\s*\)')

        vars_map = vars_map or self.global_vars

        def replacer(match):
            var_name = match.group(1)
            fallback = match.group(2)
            return vars_map.get(var_name, fallback if fallback is not None else match.group(0))

        prev_rule = None
        while rule != prev_rule:
            prev_rule = rule
            rule = var_pattern.sub(replacer, rule)

        return rule
