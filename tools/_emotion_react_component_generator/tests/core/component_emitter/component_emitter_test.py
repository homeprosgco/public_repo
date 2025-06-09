# import pytest
# from pathlib import Path
# import sys
# import re

# sys.path.append(str(Path(__file__).resolve().parents[3]))

# from core.emotion_component_generator.emotion_component_generator import EmotionComponentGenerator
# from core.component_emitter.component_emitter import ComponentEmitter
# from core.util.file_util.sg_file_util_class import SGFileUtils
# from core.component_library.component_library import ComponentLibrary

# @pytest.fixture
# def sg_file_utils(tmp_path_factory):
#     """
#     Provides an SGFileUtils instance rooted at a uniquely generated temporary path.
#     Uses pytest's tmp_path_factory to avoid reusing paths across tests.
#     """
#     temp_base_dir = tmp_path_factory.mktemp("sg_file_utils_test")
#     return SGFileUtils(base_dir=temp_base_dir)

# @pytest.fixture
# def component_library(sg_file_utils):
#     sg_file_utils.mkdir("lib/templates/hmend")
#     lib = ComponentLibrary(sg_file_utils)
#     lib.load()
#     return lib

# @pytest.fixture
# def generator():
#     return EmotionComponentGenerator()

# @pytest.fixture
# def emitter(generator, component_library):
#     return ComponentEmitter(generator, component_library)

# def test_emit_single_component_tsx_comment_node(emitter):
#     node = {
#         "tag": "#comment",
#         "text": "This is a comment",
#         "attributes": {},
#         "css_rules": {},
#         "children": []
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(node)

#     assert "/* This is a comment */" in tsx

# def test_emit_single_component_tsx_button(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "children": [
#             {
#                 "tag": "button",
#                 "attributes": {},
#                 "css_rules": {},
#                 "children": [],
#                 "text": "Click Me"
#             }
#         ],
#         "text": ""
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(node)

#     assert "<button" in tsx
#     assert "Click Me" in tsx

# def test_emit_multi_component_tsx_button(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "children": [
#             {
#                 "tag": "button",
#                 "attributes": {
#                     "class": [
#                         "blog-post",
#                         "mb-40"
#                     ]
#                 },
#                 "css_rules": {},
#                 "children": [
#                     {
#                         "tag": "button",
#                         "attributes": {},
#                         "css_rules": {},
#                         "children": [],
#                         "text": "Click Me"
#                     }
#                 ],
#                 "text": "Click Me"
#             }
#         ],
#         "text": ""
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(node)

#     assert "<Button" in tsx
#     assert "Click Me" in tsx


# def test_emit_node_with_inline_styles(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {
#             "color": {"base": "red"},
#             "padding": {"base": "1rem"}
#         },
#         "children": [],
#         "text": "Styled content"
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(node, template_name="StyledRoot")

#     assert "<StyledRoot" in tsx  # This is now the component name at depth=0
#     assert "css={css" not in tsx
#     assert "red" not in tsx
#     assert "1rem" not in tsx
#     assert "Styled content" in tsx


# def test_emit_node_with_text_and_element_children(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "children": [
#             {
#                 "tag": None,
#                 "text": "Hello ",
#             },
#             {
#                 "tag": "section",
#                 "attributes": {},
#                 "css_rules": {},
#                 "children": [
#                     {
#                         "tag": "button",
#                         "attributes": {},
#                         "css_rules": {},
#                         "children": [],
#                         "text": "Click me"
#                     }
#                 ],
#                 "text": "Click me"
#             }
#         ],
#         "text": ""
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(node, template_name="Demo")

#     assert "<Demo" in tsx
#     assert "<section" in tsx
#     assert "Hello" in tsx
#     assert "<Button" in tsx
#     assert "Click me" in tsx

# def test_emit_node_with_text_only_fallback(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "children": [
#             {
#                 "tag": "div",
#                 "attributes": {
#                     "class": [
#                         "blog-post",
#                         "mb-40"
#                     ]
#                 },
#                 "css_rules": {},
#                 "children": [
#                     {
#                         "tag": "div",
#                         "attributes": {},
#                         "css_rules": {},
#                         "children": [],  # no children
#                         "text": "Just text content"
#                     }
#                 ],
#                 "text": ""
#             }
#         ],
#         "text": ""
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(node)

#     assert "<BlogPost" in tsx
#     assert "<div" in tsx
#     assert "Just text content" in tsx

# def test_root_component_named_after_template(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "children": [],
#         "text": "Root content"
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(node, template_name="Homepage")

#     # Check that the root node uses <Homepage> as the component name
#     assert "<Homepage" in tsx
#     assert "Root content" in tsx

# def test_classification_overrides_class_name_at_depth_2(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {"class": ["my-section"]},
#         "css_rules": {
#             "border": {"base": "1px solid #000"},
#             "margin": {"base": "1rem"},
#             "padding": {"base": "1rem"},
#             "display": {"base": "block"}
#         },
#         "children": [],
#         "text": "Box content"
#     }

#     root = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "text": "",
#         "children": [  # depth = 1
#             {
#                 "tag": "div",
#                 "attributes": {},
#                 "css_rules": {},
#                 "text": "",
#                 "children": [node]  # node will now be at depth = 2
#             }
#         ]
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(root, template_name="Root")

#     assert "<Box" in tsx
#     assert "Box content" in tsx
#     assert "<MySection" not in tsx

# def test_class_name_used_when_no_classification(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {"class": ["info-box"]},
#         "css_rules": {
#             "padding": {"base": "2rem"}  # not enough for Box or other classification
#         },
#         "children": [],
#         "text": "Class-named content"
#     }

#     root = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "text": "",
#         "children": [  # depth = 1
#             {
#                 "tag": "div",
#                 "attributes": {},
#                 "css_rules": {},
#                 "text": "",
#                 "children": [node]  # depth = 2
#             }
#         ]
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(root, template_name="Root")

#     assert "<InfoBox" in tsx  # PascalCase version of class name
#     assert "Class-named content" in tsx
#     assert "<Box" not in tsx  # make sure classifier did not kick in

# def test_class_name_used_at_deep_depth(emitter):
#     # Node with class, but not enough CSS for classification
#     node = {
#         "tag": "div",
#         "attributes": {"class": ["deep-section"]},
#         "css_rules": {
#             "padding": {"base": "2rem"}  # not enough for classification
#         },
#         "children": [],
#         "text": "Deep section content"
#     }

#     # Wrap it in 6 levels of nesting
#     tree = node
#     for _ in range(6):
#         tree = {
#             "tag": "div",
#             "attributes": {},
#             "css_rules": {},
#             "children": [tree],
#             "text": ""
#         }

#     tsx, used_components = emitter.emit_single_component_tsx(tree, template_name="Root")

#     assert "<DeepSection" in tsx
#     assert "Deep section content" in tsx
#     assert "<Box" not in tsx

# def test_fallback_component_name_used_when_no_class_or_classification(emitter):
#     node = {
#         "tag": "section",
#         "attributes": {},
#         "css_rules": {
#             "padding": {"base": "1rem"}  # not enough to classify
#         },
#         "children": [],
#         "text": "Fallback section"
#     }

#     tree = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "text": "",
#         "children": [
#             {
#                 "tag": "div",
#                 "attributes": {},
#                 "css_rules": {},
#                 "text": "",
#                 "children": [
#                     node  # depth = 2
#                 ]
#             }
#         ]
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(tree)

#      # Expect inline tags, not component wrappers
#     assert "<section css={css" in tsx
#     assert "Fallback section" in tsx
#     assert "<DivComponent" not in tsx
#     assert "<SectionComponent" not in tsx

# def test_component_file_written_on_emit(emitter):
#     # Deeply nested node with a class
#     leaf_node = {
#         "tag": "div",
#         "attributes": {"class": ["my-custom-block"]},
#         "css_rules": {"padding": {"base": "2rem"}},
#         "children": [],
#         "text": "Generated content"
#     }

#     # Nest to depth 3
#     tree = leaf_node
#     for _ in range(3):
#         tree = {
#             "tag": "div",
#             "attributes": {},
#             "css_rules": {},
#             "children": [tree],
#             "text": ""
#         }

#     # Setup emitter with controlled FS
#     template_name = 'DemoTemplate'
#     test_dir = emitter.component_library.file_utils.get_generated_ui_content_block_components_dir()
#     tsx, used_components = emitter.emit_single_component_tsx(tree, template_name)

#     # Assert TSX used the generated component name
#     assert "<MyCustomBlock>" in tsx
#     assert "Generated content" in tsx

#     # Check that file was created
#     file_path = test_dir / template_name / "MyCustomBlock" / "MyCustomBlock.tsx"
#     assert file_path.exists(), f"Expected file not found: {file_path}"

#     # Check file content
#     content = file_path.read_text()
#     assert "const MyCustomBlock" in content
#     assert "export default MyCustomBlock" in content

# def test_emit_text_leaf_component_file_written(emitter):
#     node = {
#         "tag": "div",
#         "attributes": {"class": ["info-box"]},
#         "css_rules": {"padding": {"base": "1rem"}},
#         "children": [],
#         "text": "Some info"
#     }
#     tree = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "children": [
#             {"tag": "div", "attributes": {}, "css_rules": {}, "children": [node], "text": ""}
#         ],
#         "text": ""
#     }
#     tsx, used_components = emitter.emit_single_component_tsx(tree, template_name="DemoTemplate")
#     assert "<InfoBox>Some info</InfoBox>" in tsx
#     path = emitter.component_library.file_utils.get_generated_ui_content_block_components_dir() / "DemoTemplate" / "InfoBox" / "InfoBox.tsx"
#     assert path.exists()
#     content = path.read_text()
#     assert "const InfoBox" in content
#     assert "export default InfoBox" in content

# def test_emit_classification_component(emitter):
#     classified_node = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {
#             "display": {"base": "flex"},
#             "justify-content": {"base": "center"},
#             "align-items": {"base": "center"}
#         },
#         "children": [],
#         "text": "Centered Content"
#     }

#     root = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "children": [
#             {
#                 "tag": "div",
#                 "attributes": {"class": ["box-card"]},
#                 "css_rules": {"padding": {"base": "2rem"}},
#                 "children": [classified_node],
#                 "text": "Card content"
#             }
#         ],
#         "text": ""
#     }

#     tsx, used_components = emitter.emit_single_component_tsx(root, template_name="CenteredPage")

#     assert "<Center>Centered Content</Center>" in tsx
#     assert "<CenteredPage>" in tsx

# def test_emit_nested_component_imports_children(emitter):
#     child = {
#         "tag": "div",
#         "attributes": {"class": ["box-card"]},
#         "css_rules": {"padding": {"base": "2rem"}},
#         "children": [],
#         "text": "Card content"
#     }
#     root = {
#         "tag": "div",
#         "attributes": {},
#         "css_rules": {},
#         "children": [child],
#         "text": ""
#     }
#     tsx, used_components = emitter.emit_single_component_tsx(root, template_name="CardContainer")
#     assert "<BoxCard>Card content</BoxCard>" in tsx
#     assert "<CardContainer>" in tsx
#     # Ensure BoxCard file written and imported
#     box_path = emitter.component_library.file_utils.get_generated_ui_block_components_dir() / "CardContainer" / "BoxCard" / "BoxCard.tsx"
#     assert box_path.exists()
#     box_code = box_path.read_text()
#     assert "const BoxCard" in box_code
#     assert "export default BoxCard" in box_code

# def test_emit_page_component_tsx_creates_expected_file(emitter):
#     template_name = "hmend"
#     emitter.emit_page_component_tsx(template_name)

#     output_path = emitter.component_library.file_utils.get_generated_templates_dir(template_name) / "Hmend.tsx"
#     assert output_path.exists(), f"Expected file not found: {output_path}"

#     content = output_path.read_text()
#     assert re.search(r"import\s+\{\s*Hmend\s*\}\s+from\s+'.';", content)
#     assert "const Hmend = () => (" in content
#     assert "export default Hmend;" in content


# @pytest.mark.parametrize("node,expected_component", [
#     ({"tag": "div", "css_rules": {"display": {"base": "flex"}, "justify-content": {"base": "center"}}}, "Center"),
#     ({"tag": "div", "css_rules": {
#         "margin-left": {"@media (min-width:768px)": "auto"},
#         "margin-right": {"@media (min-width:768px)": "auto"},
#         "width": {"@media (min-width:768px)": "100%"},
#         "max-width": {"@media (min-width:768px)": "1200px"},
#     }}, "Container"),
#     ({"tag": "div", "css_rules": {"display": {"base": "flex"}, "flex-wrap": {"base": "wrap"}}}, "FlexLayout"),
#     ({"tag": "div", "css_rules": {"flex": {"@media (min-width:768px)": "1"}, "width": {"@media (min-width:768px)": "50%"}}}, "FlexItem"),
#     ({"tag": "div", "css_rules": {"display": {"base": "flex"}, "flex-direction": {"base": "row"}}}, "HFlex"),
#     ({"tag": "div", "css_rules": {"display": {"base": "flex"}, "flex-direction": {"base": "column"}}}, "VFlex"),
#     ({"tag": "div", "css_rules": {"display": {"base": "grid"}, "grid-template-columns": {"base": "1fr 1fr"}}}, "Grid"),
#     ({"tag": "div", "css_rules": {"grid-column": {"base": "1 / span 2"}, "grid-row": {"base": "2"}}}, "GridItem"),
#     ({"tag": "div", "css_rules": {"margin": {"base": "1rem"}, "padding": {"base": "1rem"}, "display": {"base": "block"}}}, "Box"),
#     ({"tag": "div", "css_rules": {"background": {"base": "#fff"}, "background-color": {"base": "#eee"}}}, "Background"),
#     ({"tag": "a", "css_rules": {}}, "Link"),
#     ({"tag": "button", "css_rules": {}}, "Button"),
#     ({"tag": "input", "attributes": {"type": "text"}, "css_rules": {}}, "TextInput"),
#     ({"tag": "input", "attributes": {"type": "number"}, "css_rules": {}}, "NumberInput"),
#     ({"tag": "input", "attributes": {"type": "password"}, "css_rules": {}}, "PasswordInput"),
#     ({"tag": "textarea", "css_rules": {}}, "Textarea"),
#     ({"tag": "select", "css_rules": {}}, "Select"),
#     ({"tag": "input", "attributes": {"type": "radio"}, "css_rules": {}}, "Radio"),
#     ({"tag": "input", "attributes": {"type": "checkbox"}, "css_rules": {}}, "Checkbox"),
#     ({"tag": "input", "attributes": {"type": "file"}, "css_rules": {}}, "FileInput"),
#     ({"tag": "input", "attributes": {"type": "tel"}, "css_rules": {}}, "Input"),
#     ({"tag": "img", "css_rules": {}}, "Image"),
#     ({"tag": "p", "css_rules": {"font-size": {"base": "14px"}, "color": {"base": "#000"}}}, "Text"),
#     ({"tag": "h4", "css_rules": {"font-size": {"base": "20px"}, "font-weight": {"base": "bold"}}}, "Title"),
#     ({"tag": "h1", "css_rules": {"font-size": {"base": "24px"}, "text-transform": {"base": "uppercase"}}}, "Heading")
# ])
# def test_evaluate_style_matches_expected_component(emitter, node, expected_component):
#     results = emitter.evaluate_style(node)
#     assert results, "No components matched"
#     assert results[0]["component"] == expected_component, f"Expected {expected_component}, got {results[0]['component']}"