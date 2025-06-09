from pathlib import Path
import re
from PIL import ImageColor
import math
from typing import Optional

from sg_file_util import sg_read_file_as_json

def parse_color_string(color: str) -> tuple | None:
    color = color.strip()
    
    # Match `rgb(R G B / A)` or `rgb(R G B)`
    match = re.match(r'rgb\(\s*(\d+)\s+(\d+)\s+(\d+)(?:\s*/\s*[^)]+)?\s*\)', color)

    if match:
        r, g, b = map(int, match.groups()[:3])
        return (r, g, b)

    # Match rgba(R, G, B, A)
    rgba_match = re.match(r"rgba?\(([\d\s.,]+)\)", color)

    if rgba_match:
        parts = [float(p.strip()) for p in rgba_match.group(1).split(",")]
        return tuple(int(p) for p in parts[:3])

    try:
        return ImageColor.getrgb(color)
    except ValueError:
        return None


def hex_to_rgb(hex_color):
    return ImageColor.getrgb(hex_color)

def rgb_distance(c1, c2):
    return math.sqrt(sum((a - b) ** 2 for a, b in zip(c1, c2)))

def flatten_tailwind_colors() -> dict:
    
    nested_colors = sg_read_file_as_json("files/tailwind/tailwind_colors.json")

    flat = {}
    
    for family, shades in nested_colors.items():
        for shade, values in shades.items():
            key = f"{family.lower()}-{shade}"
            flat[key] = values["hex"]
    return flat

def find_closest_tailwind_color(input_color: str) -> str | None:
    if not input_color:
        return;
    # Special hardcoded case: return 'white' as itself
    if input_color.strip().lower() in {"white", "#fff", "#ffffff"}:
        return "white"

    if input_color.strip().lower() in ["transparent", "currentcolor", "inherit", "auto"]:
        return input_color
        
    input_rgb = parse_color_string(input_color)

    if not input_rgb:
        return None

    closest_name = None
    closest_distance = float('inf')

    for name, hex_code in tailwind_colors.items():
        tw_rgb = hex_to_rgb(hex_code)
        dist = rgb_distance(input_rgb, tw_rgb)
        if dist < closest_distance:
            closest_name = name
            closest_distance = dist

    return closest_name

def tailwind_to_rgba(tw_hex: str, opacity: float) -> str:
    """
    Converts Tailwind hex + opacity to rgba string for --tw-shadow-color
    """
    r, g, b = ImageColor.getrgb(tw_hex)
    return f"rgba({r}, {g}, {b}, {opacity})"

def extract_rgba_opacity(color: str) -> Optional[float]:
    """
    Extracts the opacity (alpha) value from an rgba color string.
    Returns None if not rgba or no opacity is found.
    """
    match = re.match(r'rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)', color)
    return float(match.group(1)) if match else None


tailwind_colors = flatten_tailwind_colors()