import pytest
from lxml import html
from copy import deepcopy
from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[3]))

from core.style_node_tree_builder.style_node_tree_builder import StyleNodeTreeBuilder  # Adjust import


def test_html_to_node_tree_from_lxml_basic():
    html_input = '<div data-el-id="1" class="foo bar"><span data-el-id="2">Text</span></div>'
    root = html.fromstring(html_input)
    node = StyleNodeTreeBuilder.html_to_node_tree_from_lxml(root)

    assert node["tag"] == "div"
    assert node["el_id"] == "1"
    assert "foo" in node["attributes"]["class"]
    assert node["children"][0]["tag"] == "span"
    assert node["children"][0]["el_id"] == "2"
    assert node["children"][0]["text"] == "Text"

def test_html_to_node_tree_tail_text():
    html_input = '<div><span>Inner</span>Tail</div>'
    root = html.fromstring(html_input)
    node = StyleNodeTreeBuilder.html_to_node_tree_from_lxml(root)

    assert len(node["children"]) == 2
    assert node["children"][1]["text"] == "Tail"

def test_apply_styles_inheritance_and_override():
    node = {
        "tag": "div",
        "el_id": "1",
        "css_rules": {},
        "attributes": {},
        "children": [
            {
                "tag": "p",
                "el_id": "2",
                "css_rules": {},
                "attributes": {},
                "children": []
            }
        ]
    }

    css_map = {
        "1": {"color": {"base": "red"}, "font-size": {"base": "12px"}, "margin": {"base": "8px"}},
        "2": {"color": {"base": "blue"}}  # should override only color
    }

    tree = deepcopy(node)
    StyleNodeTreeBuilder.apply_styles_to_node_tree(tree, css_map)

    parent_styles = tree["css_rules"]
    child_styles = tree["children"][0]["css_rules"]

    assert parent_styles["color"]["base"] == "red"
    assert parent_styles["font-size"]["base"] == "12px"
    assert "margin" in parent_styles  # not inheritable

    assert child_styles["color"]["base"] == "blue"  # override
    assert child_styles["font-size"]["base"] == "12px"  # inherited
    assert "margin" not in child_styles

def test_inherited_styles_only():
    node = {
        "tag": "div",
        "el_id": "1",
        "css_rules": {},
        "attributes": {},
        "children": [
            {
                "tag": "p",
                "el_id": "2",
                "css_rules": {},
                "attributes": {},
                "children": []
            }
        ]
    }

    css_map = {
        "1": {"color": {"base": "red"}, "font-size": {"base": "12px"}},
    }

    StyleNodeTreeBuilder.apply_styles_to_node_tree(node, css_map)

    assert node["css_rules"]["color"]["base"] == "red"
    assert node["children"][0]["css_rules"]["font-size"]["base"] == "12px"
    assert node["children"][0]["css_rules"]["color"]["base"] == "red"

def test_deep_nested_inheritance():
    node = {
        "tag": "div",
        "el_id": "1",
        "css_rules": {},
        "attributes": {},
        "children": [
            {
                "tag": "section",
                "el_id": "2",
                "css_rules": {},
                "attributes": {},
                "children": [
                    {
                        "tag": "p",
                        "el_id": "3",
                        "css_rules": {},
                        "attributes": {},
                        "children": []
                    }
                ]
            }
        ]
    }

    css_map = {
        "1": {"font-family": {"base": "Arial"}, "color": {"base": "black"}},
    }

    StyleNodeTreeBuilder.apply_styles_to_node_tree(node, css_map)

    assert node["css_rules"]["font-family"]["base"] == "Arial"
    assert node["children"][0]["children"][0]["css_rules"]["font-family"]["base"] == "Arial"
    assert node["children"][0]["children"][0]["css_rules"]["color"]["base"] == "black"


def test_inline_style_parsing():
    html_input = '<div data-el-id="1" style="color: red; font-size: 14px;"></div>'
    root = html.fromstring(html_input)
    node = StyleNodeTreeBuilder.html_to_node_tree_from_lxml(root)

    assert node["attributes"]["style"] == "color: red; font-size: 14px;"
    assert node["css_rules"]["color"]["base"] == "red"
    assert node["css_rules"]["font-size"]["base"] == "14px"

def test_inline_and_external_styles_combined():
    html_input = '''
        <div data-el-id="1" style="color: red;">
            <p data-el-id="2">Hello</p>
        </div>
    '''
    root = html.fromstring(html_input)
    tree = StyleNodeTreeBuilder.html_to_node_tree_from_lxml(root)

    # External CSS overrides inline for font-size, but color should stay from inline
    css_map = {
        "1": {"font-size": {"base": "20px"}},
        "2": {"color": {"base": "blue"}}  # Should override inherited red
    }

    StyleNodeTreeBuilder.apply_styles_to_node_tree(tree, css_map)

    parent_styles = tree["css_rules"]
    child_styles = tree["children"][0]["css_rules"]

    assert parent_styles["color"]["base"] == "red"         # from inline style
    assert parent_styles["font-size"]["base"] == "20px"    # from external rule

    assert child_styles["color"]["base"] == "blue"         # overrides parent
    assert child_styles["font-size"]["base"] == "20px"     # inherited


def test_no_el_id_inherits_styles():
    node = {
        "tag": "div",
        "el_id": "1",
        "css_rules": {},
        "attributes": {},
        "children": [
            {
                "tag": "p",
                "el_id": None,
                "css_rules": {},
                "attributes": {},
                "children": []
            }
        ]
    }

    css_map = {
        "1": {"color": {"base": "green"}, "font-family": {"base": "serif"}}
    }

    StyleNodeTreeBuilder.apply_styles_to_node_tree(node, css_map)

    child_styles = node["children"][0]["css_rules"]
    assert child_styles["color"]["base"] == "green"
    assert child_styles["font-family"]["base"] == "serif"
