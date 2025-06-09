import pytest
from pathlib import Path
import sys
from collections import defaultdict
from bs4 import BeautifulSoup

sys.path.append(str(Path(__file__).resolve().parents[4]))
from core.css_processor.rule_mapper.rule_mapper import CSSRuleMapper

# Patch global constants directly on module
import core.css_processor.rule_mapper.rule_mapper as rule_mapper_mod

class DummyExtractor:
    def __init__(self, selector_vars=None, selectors_with_rules=None):
        self.css_variables = {}
        self.selector_level_vars = selector_vars or {}
        self.selectors_with_rules = selectors_with_rules or []
        self.pseudo_selectors = []

class DummyResolver:
    def resolve_rule(self, val, _): return val

def test_build_scoped_var_index_nested_overlap():
    html = """
    <div class="container" data-el-id="root">
        <section class="theme">
            <div class="card special">
                <p class="text">Hello</p>
            </div>
        </section>
    </div>
    """

    soup = BeautifulSoup(html, "html.parser")

    # Manually assign data-el-id (in production, use SoupIdCoordinator)
    for i, el in enumerate(soup.select("*")):
        el["data-el-id"] = f"el{i}"

    selector_vars = {
        ".container": {"--global-color": "red"},
        ".theme .card": {"--card-padding": "12px"},
        ".special": {"--special-border": "1px solid blue"},
    }

    extractor = DummyExtractor(selector_vars)
    resolver = DummyResolver()
    mapper = CSSRuleMapper(extractor, resolver)
    mapper._build_scoped_var_index(soup)

    card = soup.select_one(".card")
    text_el_id = card["data-el-id"]

    resolved = mapper._resolve_vars(card, text_el_id)

    assert "--card-padding" in resolved
    assert resolved["--card-padding"] == "12px"
    assert resolved["--special-border"] == "1px solid blue"

def test_safe_select_with_malformed_selector():
    html = "<div><p>Test</p></div>"
    soup = BeautifulSoup(html, "html.parser")

    extractor = DummyExtractor({})
    resolver = DummyResolver()
    mapper = CSSRuleMapper(extractor, resolver)

    assert mapper._safe_select(":not()", soup) == []
    assert mapper.malformed_pseudo_selectors[0][0] == ":not()"

def test_safe_select_with_unsupported_pseudo():
    html = "<div><p>Test</p></div>"
    soup = BeautifulSoup(html, "html.parser")

    extractor = DummyExtractor({})
    resolver = DummyResolver()
    mapper = CSSRuleMapper(extractor, resolver)

    assert mapper._safe_select("div:disabled", soup) == []
    assert mapper.skipped_pseudo_selectors[0][0] == "div:disabled"

def test_safe_select_with_error_selector():
    html = "<div><p>Test</p></div>"
    soup = BeautifulSoup(html, "html.parser")

    extractor = DummyExtractor({})
    resolver = DummyResolver()
    mapper = CSSRuleMapper(extractor, resolver)

    # Introduce invalid syntax known to raise exception
    result = mapper._safe_select("div::unknown", soup)
    assert result == []

def test_safe_select_valid_selector():
    html = "<div class='container'><span>Text</span></div>"
    soup = BeautifulSoup(html, "html.parser")

    extractor = DummyExtractor({})
    resolver = DummyResolver()
    mapper = CSSRuleMapper(extractor, resolver)

    result = mapper._safe_select("div.container", soup)
    assert len(result) == 1
    assert result[0].name == "div"

def test_decompose_selector():
    extractor = DummyExtractor({})
    resolver = DummyResolver()
    mapper = CSSRuleMapper(extractor, resolver)

    selector = "div.card:hover:active"
    base, pseudos = mapper._decompose_selector(selector)

    assert base == "div.card"
    assert ":hover" in [":" + p for p in pseudos]
    assert ":active" in [":" + p for p in pseudos]

def test_apply_resolved_rule_specificity_and_priority():
    rule_map = defaultdict(lambda: defaultdict(dict))
    el_id = "el0"

    dummy = CSSRuleMapper(DummyExtractor({}), DummyResolver())

    # First rule (low specificity, low priority)
    dummy._apply_resolved_rule(
        rule_map, el_id, "color", "base", "red", (0, 0, 1), 1
    )
    assert rule_map[el_id]["color"]["base"] == "red"

    # Should NOT override: lower specificity
    dummy._apply_resolved_rule(
        rule_map, el_id, "color", "base", "blue", (0, 0, 0), 2
    )
    assert rule_map[el_id]["color"]["base"] == "red"

    # Should override: higher specificity
    dummy._apply_resolved_rule(
        rule_map, el_id, "color", "base", "green", (0, 1, 0), 0
    )
    assert rule_map[el_id]["color"]["base"] == "green"

    # Should override: same specificity, higher priority
    dummy._apply_resolved_rule(
        rule_map, el_id, "color", "base", "black", (0, 1, 0), 3
    )
    assert rule_map[el_id]["color"]["base"] == "black"

def test_process_selector_applies_rule():
    html = "<div class='box' data-el-id='el0'></div>"
    soup = BeautifulSoup(html, "html.parser")

    rule_block = {".box": {"color": {"base": "red"}}}

    class Extractor:
        css_variables = {}
        selector_level_vars = {}
        selectors_with_rules = [rule_block]
        pseudo_selectors = []

    class Resolver:
        def resolve_rule(self, val, _): return val

    mapper = CSSRuleMapper(Extractor(), Resolver())
    mapper._process_selector(soup, ".box", rule_block[".box"], 0)

    assert "el0" in mapper.css_rule_map
    assert mapper.css_rule_map["el0"]["color"]["base"] == "red"

def test_process_pseudo_selectors_basic():
    html = "<div class='btn' data-el-id='el0'></div>"
    soup = BeautifulSoup(html, "html.parser")

    class Extractor:
        css_variables = {}
        selector_level_vars = {}
        selectors_with_rules = []
        pseudo_selectors = []

    class Resolver:
        def resolve_rule(self, val, _): return val

    mapper = CSSRuleMapper(Extractor(), Resolver())
    mapper.pseudo_selector_rules = [
        (".btn:hover", {"background": {"base": "blue"}})
    ]
    mapper._process_pseudo_selectors(soup)

    rule_map = mapper.css_rule_map["el0"]
    assert ":hover" in rule_map["__pseudo__"]
    assert rule_map["__pseudo__"][":hover"]["background"] == "blue"

def test_process_skipped_pseudo_selectors_recovers():
    html = "<div class='recover' data-el-id='el0'></div>"
    soup = BeautifulSoup(html, "html.parser")

    class Extractor:
        css_variables = {}
        selector_level_vars = {}
        selectors_with_rules = []
        pseudo_selectors = []

    class Resolver:
        def resolve_rule(self, val, _): return val

    mapper = CSSRuleMapper(Extractor(), Resolver())
    mapper.skipped_pseudo_selectors = []
    mapper._safe_select = lambda selector, soup, log_skips=True, props=None: [soup.select_one(".recover")]
    mapper.skipped_pseudo_selectors = [
        (".recover:disabled", {"color": {"base": "gray"}})
    ]
    mapper._process_skipped_pseudo_selectors(soup)

    rule_map = mapper.css_rule_map["el0"]
    assert ":disabled" in rule_map["__pseudo__"]
    assert rule_map["__pseudo__"][":disabled"]["color"] == "gray"

def test_process_pseudo_elements_applies_style():
    html = "<div class='icon' data-el-id='el0'></div>"
    soup = BeautifulSoup(html, "html.parser")

    class Extractor:
        css_variables = {}
        selector_level_vars = {}
        selectors_with_rules = []
        pseudo_selectors = []

    class Resolver:
        def resolve_rule(self, val, _): return val

    mapper = CSSRuleMapper(Extractor(), Resolver())
    mapper.pseudo_element_rules = [
        (".icon::after", {"content": {"base": "\"★\""}})
    ]
    mapper._process_pseudo_elements(soup)

    rule_map = mapper.css_rule_map["el0"]
    assert "::after" in rule_map["__pseudo__"]
    assert rule_map["__pseudo__"]["::after"]["content"] == '"★"'

def test_build_rule_map_splits_rules():
    html = "<div class='box hoverable' data-el-id='el0'></div>"
    soup = BeautifulSoup(html, "html.parser")

    class Extractor:
        css_variables = {}
        selector_level_vars = {}
        selectors_with_rules = [
            {".box": {"color": {"base": "black"}}},
            {".hoverable:hover": {"color": {"base": "blue"}}},
            {".hoverable::after": {"content": {"base": "\"✓\""}}},
            {"*": {"margin": {"base": "0"}}},
            {"::-webkit-datetime-edit-year-field": {
                "padding": {"base": "0"},
                "padding-top": {},
                "padding-right": {},
                "padding-bottom": {},
                "padding-left": {}
            }}
        ]
        pseudo_selectors = []

    class Resolver:
        def resolve_rule(self, val, _): return val

    mapper = CSSRuleMapper(Extractor(), Resolver())
    result = mapper.build_rule_map(soup)

    assert (".hoverable:hover", {"color": {"base": "blue"}}) in result["pseudo_selector_rules"]
    assert (".hoverable::after", {"content": {"base": "\"✓\""}}) in result["pseudo_element_rules"]
    assert ("*", {"margin": {"base": "0"}}) in result["skipped_universal_rules"]
    assert "el0" in result["rule_map"]
    assert result["rule_map"]["el0"]["color"]["base"] == "black"
    # Ensure pseudo element with only empty props is NOT included
    # for _, props in result["pseudo_element_rules"]:
    #     for key in props:
    #         assert props[key] != {}, f"Unexpected empty rule in pseudo_element_rules: {props}" 