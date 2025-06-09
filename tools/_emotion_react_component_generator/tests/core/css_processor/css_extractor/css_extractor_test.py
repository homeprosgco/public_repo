import pytest
from pathlib import Path
import sys
from collections import defaultdict

sys.path.append(str(Path(__file__).resolve().parents[4]))
from core.css_processor.css_extractor.css_extractor import CSSExtractor

class DummyFileUtils:
    def __init__(self, file_map):
        self.file_map = file_map

    def read_file(self, path):
        return self.file_map.get(path)

    def find_file_by_name(self, search_dir, file_name):
        for key in self.file_map:
            if key.endswith(file_name):
                return key
        return None

def test_extract_logic_parses_basic_css():
    css = ".btn { color: red; padding: 10px; }"
    result = CSSExtractor._extract_logic(css)

    assert result["selectors_with_rules"][".btn"]["color"]["base"] == "red"
    assert result["selectors_with_rules"][".btn"]["padding"]["base"] == "10px"

def test_extract_logic_with_variables():
    css = ".box { --main-color: blue; color: var(--main-color); }"
    result = CSSExtractor._extract_logic(css)

    assert result["css_variables"]["--main-color"] == "blue"
    assert result["selector_level_vars"][".box"]["--main-color"] == "blue"


def test_extract_logic_with_media_query():
    css = "@media screen and (max-width: 600px) { .text { font-size: 12px; } }"
    result = CSSExtractor._extract_logic(css)

    assert result["selectors_with_rules"][".text"]["font-size"]["screen and (max-width: 600px)"] == "12px"

def test_aggregate_css_data_combines_multiple():
    dummy_fs = DummyFileUtils({
        "a.css": ".a { color: red; }",
        "b.css": ".b { color: blue; }"
    })
    extractor = CSSExtractor(file_utils=dummy_fs, css_paths=["a.css", "b.css"], css_dir=".")
    rule_blocks = extractor.selectors_with_rules

    assert any(".a" in rb for rb in rule_blocks)
    assert any(".b" in rb for rb in rule_blocks)

def test_extract_logic_with_shorthand_expansion():
    css = ".box { margin: 10px; }"
    result = CSSExtractor._extract_logic(css)

    assert "margin-top" in result["selectors_with_rules"][".box"]
