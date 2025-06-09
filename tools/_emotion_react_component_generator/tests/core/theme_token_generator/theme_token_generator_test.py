import pytest
from collections import Counter, defaultdict
from pathlib import Path
import sys
from typing import Dict, Any

sys.path.append(str(Path(__file__).resolve().parents[3]))
from core.theme_token_generator.theme_token_generator import *
from core.util.tailwind_color_util.tailwind_color_util import *

import pytest
from collections import Counter, defaultdict
import pandas as pd
from pathlib import Path

@pytest.fixture
def tailwind_util():
    class MockTailwindColorUtil:
        def find_closest_tailwind_color(self, color):
            return "gray-500" if color else None
    return MockTailwindColorUtil()

@pytest.fixture
def sample_node():
    return {
        "tag": "div",
        "el_id": "1",
        "css_rules": {
            "color": {"base": "#ff0000"},
            "font-family": {"base": "Arial"},
            "font-size": {"base": "16px"}
        },
        "attributes": {},
        "children": [
            {
                "tag": "p",
                "el_id": "2",
                "css_rules": {
                    "color": {"base": "rgba(0, 0, 0, 0.5)"},
                    "font-size": {"base": "14px"}
                },
                "attributes": {},
                "children": []
            }
        ]
    }

@pytest.fixture
def generator(tailwind_util, sample_node):
    return ThemeTokenGenerator(root_node=sample_node, tailwind_util=tailwind_util)

def test_color_stats(generator):
    stats = generator.traverse_for_all_color_stats()
    assert stats["#ff0000"] == 1
    assert stats["rgba(0, 0, 0, 0.5)"] == 1

def test_color_levels(generator):
    levels = generator.traverse_colors_with_levels()
    assert levels["#ff0000"] == [0]
    assert levels["rgba(0, 0, 0, 0.5)"] == [1]

def test_combined_color_report(generator):
    df = generator.build_combined_color_frequency_report()
    assert not df.empty
    assert "Color" in df.columns
    assert "TW_Color" in df.columns

def test_typography_frequency_report(generator):
    df = generator.build_typography_frequency_report()
    assert isinstance(df, pd.DataFrame)
    assert (df["Font Family"] == "Arial").any()

def test_assign_typography_tokens(generator):
    df = generator.assign_typography_tokens()
    assert "font-family-primary" in df["M3 Token"].values
    assert "body-large" in df["M3 Token"].values

def test_assign_m3_tokens(generator):
    df = generator.assign_m3_tokens_from_color_report()
    assert "on-surface" in df["M3 Token"].values
    assert "error" in df["M3 Token"].values

def test_build_python_theme_dict(generator):
    theme_dict = generator.build_python_theme_dict()
    assert isinstance(theme_dict, dict)
    assert "font-family-primary" in theme_dict
    assert "error" in theme_dict

def test_convert_flat_tokens_to_theme_object(generator):
    theme_obj = generator.convert_flat_tokens_to_theme_object()

    # Check top-level keys
    assert "colors" in theme_obj
    assert "typography" in theme_obj

    # Check nested structure
    assert "fontFamilies" in theme_obj["typography"]
    assert "fontSizes" in theme_obj["typography"]
    assert "bodyLarge" in theme_obj["typography"]["fontSizes"]
    assert theme_obj["typography"]["fontFamilies"]["primary"] == "Arial"

    # Validate type and content
    assert isinstance(theme_obj["colors"], dict)
    assert isinstance(theme_obj["typography"]["fontSizes"], dict)
    assert theme_obj["typography"]["fontSizes"]["bodyLarge"].endswith("px")


