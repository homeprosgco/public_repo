import pytest
from pathlib import Path
from core.component_library.component_library import ComponentLibrary

class FakeFileUtils:
    def __init__(self, base_dir):
        self.base_dir = base_dir
        self._components = {
            "layout": ["Center.tsx", "Container.tsx"],
            "typography": ["Heading.tsx", "Text.tsx"]
        }
        ui_dir = self.get_generated_ui_components_dir()
        # Create the fake file structure
        for category, files in self._components.items():
            category_dir = ui_dir / category
            category_dir.mkdir(parents=True, exist_ok=True)

            for fname in files:
                (category_dir / fname).touch()

    def get_generated_ui_components_dir(self) -> Path:
            return self.base_dir / "lib/generated_components/ui"

    def iter_files_with_extension(self, base_path: Path, ext: str):
        yield from base_path.rglob(f"*.{ext}")

@pytest.fixture
def file_utils(tmp_path):
    return FakeFileUtils(tmp_path)

@pytest.fixture
def component_library(file_utils):
    theme = {
        "colors": {"primary": "#f00"},
        "typography": {"fontSizes": {"bodyMedium": "14px"}}
    }

    lib = ComponentLibrary(file_utils, theme=theme)
    lib.load()
    return lib

def test_load_populates_registry(file_utils):
    lib = ComponentLibrary(file_utils)
    lib.load()

    expected_components = ["Center", "Container", "Heading", "Text"]

    for name in expected_components:
        assert name in lib.registry, f"{name} should be registered"

    assert lib.registry["Center"]["category"] == "layout"
    assert lib.registry["Text"]["category"] == "typography"
    assert lib.registry["Container"]["path"].name == "Container.tsx"

def test_has_component(component_library):
    assert component_library.has("Text") is True
    assert component_library.has("NonExistentComponent") is False

def test_get_path(component_library):
    path = component_library.get_path("Text")
    assert isinstance(path, Path)
    assert path.name == "Text.tsx"

def test_all_components(component_library):
    components = component_library.all_components()
    assert "Text" in components

def test_get_category(component_library):
    category = component_library.get_category("Text")
    assert category == "typography"

def test_get_rule(component_library):
    rule = component_library.get_rule("Text")
    assert rule is not None
    assert rule["tag"] == "p"

def test_load_registers_components(component_library):
    # It should find and register components
    assert "Container" in component_library.registry
    assert "Text" in component_library.registry

def test_registered_component_path_is_correct(component_library):
    path = component_library.get_path("Container")
    assert isinstance(path, Path)
    assert path.name == "Container.tsx"
    assert "layout" in str(path)

def test_component_category_is_tracked(component_library):
    category = component_library.get_category("Text")
    assert category == "typography"

def test_get_style_props_extracts_dict(component_library):
    container_path = component_library.get_path("Container")
    container_path.write_text("""
        import { css } from '@emotion/react';
        const Container = () => (
          <div css={css({
            marginLeft: 'auto',
            marginRight: 'auto'
          })}>
            Container
          </div>
        );
        export default Container;
    """)

    style_props = component_library.get_style_props("Container")
    assert isinstance(style_props, dict)
    assert style_props["marginLeft"] == "auto"
    assert style_props["marginRight"] == "auto"


def test_get_style_props_with_theme_resolution(component_library):
    path = component_library.get_path("Text")
    path.write_text("""
        import { css } from '@emotion/react';
        const Text = ({ children }) => (
            <p css={css({
                "color": theme["colors"].primary,
                "fontSize": theme["typography"].fontSizes.bodyMedium
            })}>{children}</p>
        );
        export default Text;
        """)

    style = component_library.get_style_props("Text")
    print(style)
    assert style["color"] == "#f00"
    assert style["fontSize"] == "14px"

def test_get_style_props_with_media_and_theme(component_library):
    path = component_library.get_path("Text")
    path.write_text("""
        import { css } from '@emotion/react';
        const Text = () => (
          <p css={css({
            color: theme["colors"].primary,
            fontSize: "16px",
            "@media (min-width: 768px)": {
              fontSize: "18px"
            }
          })}>
            Hello
          </p>
        );
        export default Text;
    """)

    style_props = component_library.get_style_props("Text")
    
    assert isinstance(style_props, dict)
    assert style_props["color"] == component_library.theme["colors"]["primary"]
    assert style_props["fontSize"] == "16px"
    assert "@media (min-width: 768px)" in style_props
    assert style_props["@media (min-width: 768px)"]["fontSize"] == "18px"


