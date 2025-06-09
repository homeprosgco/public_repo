import pytest
from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[4]))
from core.css_processor.variable_resolver.variable_resolver import CSSVariableResolver

def test_resolve_basic_variable():
    resolver = CSSVariableResolver(css_variables={"--color": "blue"})
    result = resolver.resolve_rule("var(--color)")
    assert result == "blue"

def test_resolve_variable_with_fallback():
    resolver = CSSVariableResolver(css_variables={})
    result = resolver.resolve_rule("var(--missing, red)")
    assert result == "red"

def test_resolve_variable_without_fallback():
    resolver = CSSVariableResolver(css_variables={})
    result = resolver.resolve_rule("var(--missing)")
    assert result == "var(--missing)"

def test_resolve_nested_variables():
    resolver = CSSVariableResolver(css_variables={"--primary": "var(--color)", "--color": "green"})
    result = resolver.resolve_rule("var(--primary)")
    assert result == "green"

def test_resolve_multiple_vars_in_rule():
    resolver = CSSVariableResolver(css_variables={"--x": "10px", "--y": "20px"})
    result = resolver.resolve_rule("margin: var(--x) var(--y)")
    assert result == "margin: 10px 20px"
