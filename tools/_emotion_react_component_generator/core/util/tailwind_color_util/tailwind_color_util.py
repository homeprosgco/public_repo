from pathlib import Path
import re
from PIL import ImageColor
import math
from typing import Optional
import json

from core.util.file_util.sg_file_util_class import SGFileUtils
from core.util.tailwind_color_util.tailwind_colors_map import RAW_TAILWIND_COLORS_JSON

class TailwindColorUtil:
    def __init__(self):
        self.tailwind_colors = self.flatten_tailwind_colors()

    def flatten_tailwind_colors(self) -> dict:
        nested_colors = json.loads(RAW_TAILWIND_COLORS_JSON)
        flat = {}
        for family, shades in nested_colors.items():
            for shade, values in shades.items():
                key = f"{family.lower()}-{shade}"
                flat[key] = values["hex"]
        return flat

    def parse_color_string(self, color: str) -> Optional[tuple]:
        color = color.strip()

        # Match rgb(R G B / A)
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

    def hex_to_rgb(self, hex_color):
        return ImageColor.getrgb(hex_color)

    def rgb_distance(self, c1, c2):
        return math.sqrt(sum((a - b) ** 2 for a, b in zip(c1, c2)))

    def find_closest_tailwind_color(self, input_color: str) -> Optional[str]:
        if not input_color:
            return None

        normalized = input_color.strip().lower()
        if normalized in {"white", "#fff", "#ffffff"}:
            return "white"
        if normalized in {"transparent", "currentcolor", "inherit", "auto"}:
            return normalized

        input_rgb = self.parse_color_string(input_color)
        if not input_rgb:
            return None

        closest_name = None
        closest_distance = float('inf')
        for name, hex_code in self.tailwind_colors.items():
            tw_rgb = self.hex_to_rgb(hex_code)
            dist = self.rgb_distance(input_rgb, tw_rgb)
            if dist < closest_distance:
                closest_name = name
                closest_distance = dist

        return closest_name

    def tailwind_to_rgba(self, tw_hex: str, opacity: float) -> str:
        r, g, b = ImageColor.getrgb(tw_hex)
        return f"rgba({r}, {g}, {b}, {opacity})"

    def extract_rgba_opacity(self, color: str) -> Optional[float]:
        match = re.match(r'rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)', color)
        return float(match.group(1)) if match else None
