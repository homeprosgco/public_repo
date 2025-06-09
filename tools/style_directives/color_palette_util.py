import re
from collections import Counter

from collections import defaultdict
from sg_file_util import sg_read_file, sg_file_path

# Color value patterns
hex_color = r'#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b'
rgb_color = r'rgba?\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?(?:\s*,\s*(0|1|0?\.\d+))?\s*\)'
hsl_color = r'hsla?\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%(?:\s*,\s*(0|1|0?\.\d+))?\s*\)'
named_color = r'\b(aliceblue|antiquewhite|aqua|black|blue|fuchsia|gray|green|lime|maroon|' \
              r'navy|olive|orange|purple|red|silver|teal|white|yellow|grey|cyan|magenta)\b'

color_value_pattern = re.compile(f'({hex_color}|{rgb_color}|{hsl_color}|{named_color})', re.IGNORECASE)

# Match CSS properties with values
css_prop_value_pattern = re.compile(r'([\w-]+)\s*:\s*([^;]+);')

def extract_colors_with_properties(css_dir: str):
    color_usage = defaultdict(lambda: {"count": 0, "properties": set()})

    for css_file in sg_file_path(css_dir).glob("*.css"):
        if 'style' in css_file.stem:
            content = sg_read_file(css_file)

            for prop, value in css_prop_value_pattern.findall(content):
                matches = color_value_pattern.findall(value)
                for match in matches:
                    color = match[0].lower()
                    color_usage[color]["count"] += 1
                    color_usage[color]["properties"].add(prop.lower())

    # Convert set to list for JSON serialization
    return sorted([
        {
            "color": color,
            "count": data["count"],
            "properties": sorted(data["properties"]),
        }
        for color, data in color_usage.items()
    ], key=lambda x: x["count"], reverse=True)

# Regex to match common CSS color formats
COLOR_REGEX = re.compile(r"""
    \#(?:[0-9a-fA-F]{3}){1,2}\b         # Hex: #fff or #ffffff
    |rgba?\([^\)]*\)                    # rgb() or rgba()
    |hsla?\([^\)]*\)                    # hsl() or hsla()
    |\b[a-zA-Z]+\b                      # named colors (e.g., red, blue)
""", re.VERBOSE)

def extract_colors_from_css(css_content):
    return COLOR_REGEX.findall(css_content)

def extract_and_count_colors(css_dir):
    color_counter = Counter()

    for css_file in sg_file_path(css_dir).glob("*.css"):
        content = sg_read_file(css_file)
        colors = extract_colors_from_css(content)
        color_counter.update(map(str.lower, colors))

    return color_counter