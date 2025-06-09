import pytest
from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[3]))

from core.emotion_component_generator.emotion_component_generator import EmotionComponentGenerator

@pytest.fixture
def generator():
    return EmotionComponentGenerator()

def test_normalize_style_props(generator):
    style_props = {
        "Color": {"base": "red"},
        "FontSize": {
            "base": "16px",
            "(min-width: 768px)": "18px"
        }
    }
    expected = {
        "color": "red",
        "fontSize": "16px",
        "@media (min-width: 768px)": {
            "fontSize": "18px"
        }
    }
    result = generator.normalize_style_props(style_props)

    # Basic equality check
    assert result == expected, f"Expected {expected}, but got {result}"

    # Individual key assertions for clarity and granular failure
    assert result["color"] == "red"
    assert result["fontSize"] == "16px"
    assert "@media (min-width: 768px)" in result
    assert result["@media (min-width: 768px)"]["fontSize"] == "18px"


def test_dict_to_pretty_ts(generator):
    obj = {"color": "red", "fontSize": "16px"}
    ts = generator.dict_to_pretty_ts(obj)
    assert '"color": "red"' in ts
    assert '"fontSize": "16px"' in ts

def test_emit_inline_with_css(generator):
    tag = "span"
    css_rules = {"color": {"base": "red"}}
    html = generator.emit_inline_with_css(tag, "Hi", css_rules)
    assert "<span css={" in html
    assert "Hi</span>" in html

def test_indent_multiline(generator):
    text = "line1\nline2"
    result = generator.indent_multiline(text, 2)
    assert result == "  line1\n  line2"

def test_generate_emotion_component_tsx(generator):
    style_props = {"color": "red"}
    tsx = generator.generate_emotion_component_tsx("TestComponent", style_props)
    assert "TestComponent" in tsx
    assert 'css({' in tsx
    assert "export default TestComponent" in tsx

def test_generate_emotion_component_tsx_with_imports(generator):
    css_rules = {"color": {"base": "blue"}}
    tsx = generator.generate_emotion_component_tsx("MyComponent", css_rules, tag="div", imports={"ChildA", "ChildB"})

    assert "import { css } from '@emotion/react';" in tsx
    assert "import { ChildA, ChildB } from '.';" in tsx
    assert "const MyComponent" in tsx
    assert "export default MyComponent" in tsx


def test_pascal_case(generator):
    assert generator.pascal_case("my-button") == "MyButton"
    assert generator.pascal_case("primary_button") == "PrimaryButton"

def test_name_from_class_or_fallback(generator):
    node_with_class = {"tag": "div", "attributes": {"class": ["my", "button"]}}
    node_without_class = {"tag": "section", "attributes": {}}
    assert generator.name_from_class_or_fallback(node_with_class) == "Button"
    assert generator.name_from_class_or_fallback(node_without_class) == "SectionComponent"
