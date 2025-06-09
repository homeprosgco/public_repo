from pathlib import Path
import json
import re
import ast

from core.consts.css_rules import COMPONENT_RULES

class ComponentLibrary:
    def __init__(self, archiver: 'SGWebsiteArchiver', theme: dict | None = None):
        self.archiver = archiver
        self.file_utils = archiver.fs
        self.theme = theme or {}
        self.registry = {}

        # Internal configuration
        self._ui_components = {
            "layout": {"Center", "Container", "FlexLayout", "Box"},
            "flex_grid": {"Grid", "GridItem", "FlexItem", "HFlex", "VFlex"},
            "inputs": {"Checkbox", "FileInput", "Select", "NumberInput", "PasswordInput", "Radio", "Textarea", "TextInput", "Input"},
            "interactivity": {"Button"},
            "navigation": {"Link"},
            "data_display": {"Background", "Image"},
            "typography": {"Text", "Title", "Heading"},
        }

    def component_rules(self):
        return COMPONENT_RULES

    def load(self):
        known_categories = [cat for cat in self._ui_components]
        ui_component_dir = self.file_utils.get_generated_ui_components_dir()

        for category in known_categories:
            category_path = ui_component_dir / category
            for file_path in self.file_utils.iter_files_with_extension( category_path, "tsx"):
                name = file_path.stem
                self.registry[name] = {
                    "path": file_path,
                    "category": category
                }

    def has(self, name: str) -> bool:
        return name in self.registry

    def get_path(self, name: str) -> Path:
        return self.registry.get(name, {}).get("path")

    def all_components(self):
        return list(self.registry.keys())

    def get_category(self, component_name: str) -> str | None:
        for category, components in self._ui_components.items():
            if component_name in components:
                return category
        return None

    def is_ui_component(self, component_name):
        return component_name in COMPONENT_RULES;

    def get_rule(self, component_name: str) -> dict | None:
        return COMPONENT_RULES.get(component_name)

    def resolve_theme_references(self, style_str: str, theme: dict) -> str:
        def resolve_token(match):
            expr = match.group(0)
            parts = re.findall(r'\["(.*?)"\]|\.(\w+)', expr)
            keys = [p[0] or p[1] for p in parts]
            val = theme

            try:
                for k in keys:
                    val = val[k]
                return f'"{val}"'
            except (KeyError, TypeError):
                return f'"{expr}"'  # fallback: leave as string

        pattern = r'theme(?:\[".*?"\]|\.\w+)+'
        
        return re.sub(pattern, resolve_token, style_str)

    



