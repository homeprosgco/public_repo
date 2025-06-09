from collections import defaultdict, Counter
import pandas as pd
import re
import ast
import operator as op
from pathlib import Path
from tailwind_color_util import find_closest_tailwind_color

# M3 Token	Selection Criteria
# surface	Highest-count, shallowest-level, very light color
# surface-container	High count, mid-level (3–6), light gray family
# on-surface	Dark color used at mid–deep levels (e.g. text)
# primary	Highly saturated color with high count, often mid-level
# on-primary	Very light color used over primary (often #fff)
# scrim / shadow	rgba(...), transparency, low-level usage
# outline	Light gray used repeatedly in mid-levels
# error, tertiary, etc.	Less frequent accents, chosen from saturated colors

COLOR_PATTERN = re.compile(
    r"(#[0-9a-fA-F]{3,6}\b|rgba?\([^)]+\)|hsla?\([^)]+\)|var\(--[^)]+\))"
)

def find_colors_in_any(value):
    if isinstance(value, str):
        return COLOR_PATTERN.findall(value)
    elif isinstance(value, dict):
        results = []
        for v in value.values():
            results.extend(find_colors_in_any(v))
        return results
    return []

def extract_style_value(rules, prop):
    for rule in reversed(rules):
        if "::" in rule:
            rule = rule.split("::")[-1]
        if ":" in rule:
            name, val = rule.split(":", 1)
            if name.strip() == prop:
                return val.strip()
    return None

def traverse_for_all_color_stats(node, color_data=None, level=0):
    if color_data is None:
        color_data = Counter()

    css_rules = node.get("css_rules", {})

    for prop, media_dict in css_rules.items():
        if isinstance(media_dict, dict):
            for _, val in media_dict.items():
                matches = find_colors_in_any(val)
                for match in matches:
                    color_data[match] += 1

    for child in node.get("children", []):
        traverse_for_all_color_stats(child, color_data, level + 1)

    return color_data

def traverse_colors_with_levels(node, color_levels=None, level=0):
    if color_levels is None:
        color_levels = defaultdict(list)

    css_rules = node.get("css_rules", {})

    for prop, media_dict in css_rules.items():
        if isinstance(media_dict, dict):
            for _, val in media_dict.items():
                matches = find_colors_in_any(val)
                for match in matches:
                    color_levels[match].append(level)

    for child in node.get("children", []):
        traverse_colors_with_levels(child, color_levels, level + 1)

    return color_levels


# Build report with level summary
def build_color_report_with_levels(color_levels):
    report_data = []
    for color, levels in color_levels.items():
        count = len(levels)
        min_level = min(levels)
        max_level = max(levels)
        level_list = sorted(levels)[:15]  # up to 15 values
        report_data.append({
            "Color": color,
            "TW_Color": find_closest_tailwind_color(color),
            "Count": count,
            "Levels (sample)": level_list,
            "Min Level": min_level,
            "Max Level": max_level
        })
    return pd.DataFrame(report_data).sort_values(by="Count", ascending=False)

def build_combined_color_frequency_report(annotated_hierarchy):
    # Step 1: Count all colors
    color_counts = traverse_for_all_color_stats(annotated_hierarchy)

    # Step 2: Track levels for each color
    color_levels = traverse_colors_with_levels(annotated_hierarchy)

    # Step 3: Compute total count for percentage
    total_count = sum(color_counts.values())

    report_data = []
    
    for color, count in color_counts.items():
        levels = color_levels.get(color, [])
        min_level = min(levels) if levels else None
        max_level = max(levels) if levels else None
        avg_level = sum(levels) / len(levels) if levels else None
        level_sample = sorted(levels)[:15]

        report_data.append({
            "Color": color,
            "TW_Color": find_closest_tailwind_color(color),
            "Count": count,
            "Usage %": round((count / total_count) * 100, 2),
            "Avg Level": round(avg_level, 2) if avg_level is not None else None,
            "Levels Found": level_sample,
            "Min Level": min_level,
            "Max Level": max_level
        })

    df = pd.DataFrame(report_data).sort_values(by="Count", ascending=False)

    return df


def assign_m3_tokens_from_color_report(df):
    saturated_families = {
        "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky",
        "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
    }
    neutral_families = {"slate", "gray", "zinc", "neutral", "stone"}

    def parse_tw_color(tw_color):
        if not isinstance(tw_color, str):
            return None, None
        parts = tw_color.split("-")
        if len(parts) == 2 and parts[1].isdigit():
            return parts[0], int(parts[1])
        return parts[0], None

    if "Usage %" not in df.columns or "Avg Level" not in df.columns:
        total_count = df["Count"].sum()
        df["Usage %"] = df["Count"] / total_count * 100
        df["Avg Level"] = df["Levels Found"].apply(lambda levels: sum(levels) / len(levels) if levels else None)

    parsed = df["TW_Color"].map(parse_tw_color)
    df["Family"] = [p[0] if p else None for p in parsed]
    df["Shade"] = [p[1] if p else None for p in parsed]

    saturated_df = df[df["Family"].isin(saturated_families)].copy()
    saturated_df = saturated_df.sort_values(by="Usage %", ascending=False)

    distinct_families = saturated_df["Family"].dropna().unique().tolist()

    primary_row = secondary_row = tertiary_row = None
    if len(distinct_families) >= 1:
        primary_row = saturated_df[saturated_df["Family"] == distinct_families[0]].iloc[0]
    if len(distinct_families) >= 2:
        secondary_row = saturated_df[saturated_df["Family"] == distinct_families[1]].iloc[0]
    if len(distinct_families) >= 3:
        tertiary_row = saturated_df[saturated_df["Family"] == distinct_families[2]].iloc[0]

    neutral_df = df[df["Family"].isin(neutral_families)].copy()
    neutral_df = neutral_df.sort_values(by="Usage %", ascending=False)

    roles = {}

    if primary_row is not None:
        roles["primary"] = primary_row["Color"]
        roles["on-primary"] = "#fff"
        roles["primary-container"] = primary_row["Color"]
        roles["primary-fixed"] = primary_row["Color"]
        roles["primary-fixed-dim"] = primary_row["Color"]
        roles["on-primary-fixed"] = "#fff"
        roles["on-primary-fixed-variant"] = "#fff"
        roles["on-primary-container"] = "#fff"

    if secondary_row is not None:
        roles["secondary"] = secondary_row["Color"]
        roles["on-secondary"] = "#fff"
        roles["secondary-container"] = secondary_row["Color"]
        roles["secondary-fixed"] = secondary_row["Color"]
        roles["secondary-fixed-dim"] = secondary_row["Color"]
        roles["on-secondary-fixed"] = "#fff"
        roles["on-secondary-fixed-variant"] = "#fff"
        roles["on-secondary-container"] = "#fff"

    if tertiary_row is not None:
        roles["tertiary"] = tertiary_row["Color"]
        roles["on-tertiary"] = "#fff"
        roles["tertiary-container"] = tertiary_row["Color"]
        roles["tertiary-fixed"] = tertiary_row["Color"]
        roles["tertiary-fixed-dim"] = tertiary_row["Color"]
        roles["on-tertiary-fixed"] = "#fff"
        roles["on-tertiary-fixed-variant"] = "#fff"
        roles["on-tertiary-container"] = "#fff"

    if not neutral_df.empty:
        roles["on-surface"] = neutral_df.iloc[0]["Color"]
    if len(neutral_df) > 1:
        roles["on-surface-variant"] = neutral_df.iloc[1]["Color"]
    if len(neutral_df) > 2:
        roles["outline"] = neutral_df.iloc[2]["Color"]
    if len(neutral_df) > 3:
        roles["outline-variant"] = neutral_df.iloc[3]["Color"]

    rgba_df = df[df["Color"].str.contains("rgba", na=False)].copy()
    if not rgba_df.empty:
        scrim_row = rgba_df[rgba_df["Color"].str.contains("0, 0, 0, 0")].head(1)
        shadow_row = rgba_df[~rgba_df["Color"].str.contains("0, 0, 0, 0")].head(1)
        if not scrim_row.empty:
            roles["scrim"] = scrim_row.iloc[0]["Color"]
        if not shadow_row.empty:
            roles["shadow"] = shadow_row.iloc[0]["Color"]

    red_rows = saturated_df[saturated_df["Family"] == "red"]
    if not red_rows.empty:
        roles["error"] = red_rows.iloc[0]["Color"]
        roles["error-container"] = red_rows.iloc[0]["Color"]
    else:
        roles["error"] = "#DB222A"
        roles["error-container"] = "#DB222A"
    roles["on-error"] = "#fff"
    roles["on-error-container"] = "#fff"

    light_shades = df[df["Shade"].notna() & (df["Shade"] <= 300)].copy()
    light_shades = light_shades.sort_values(by=["Avg Level", "Usage %"])
    surface_tokens = [
        "surface", "surface-container-lowest", "surface-container-low", "surface-container",
        "surface-container-high", "surface-container-highest"
    ]
    for i, token in enumerate(surface_tokens):
        if i < len(light_shades):
            roles[token] = light_shades.iloc[i]["Color"]
    if len(light_shades) > len(surface_tokens):
        roles["surface-dim"] = light_shades.iloc[len(surface_tokens)]["Color"]
    if len(light_shades) > len(surface_tokens) + 1:
        roles["surface-bright"] = light_shades.iloc[len(surface_tokens) + 1]["Color"]

    token_data = []
    for token, color in roles.items():
        match = df[df["Color"] == color]
        if not match.empty:
            row = match.iloc[0]
            token_data.append({
                "M3 Token": token,
                "Assigned Color": color,
                "TW Color": row["TW_Color"],
                "Usage %": round(row["Usage %"], 2),
                "Avg DOM Level": round(row["Avg Level"], 2)
            })
        else:
            token_data.append({
                "M3 Token": token,
                "Assigned Color": color,
                "TW Color": None,
                "Usage %": None,
                "Avg DOM Level": None
            })

    token_df = pd.DataFrame(token_data)

    return token_df

# Constants
REM_IN_PX = 16
EM_IN_PX = 16
PERCENT_BASE = 100
VW_IN_PX = 0.8  # realistic screen-dependent value (1vw ≈ 1% of viewport width)
VH_IN_PX = 0.8  # same logic for height

UNIT_FACTORS = {
    "rem": REM_IN_PX,
    "em": EM_IN_PX,
    "px": 1,
    "%": PERCENT_BASE / 100.0,
    "vw": VW_IN_PX,
    "vh": VH_IN_PX,
}

# Supported operators
OPS = {
    ast.Add: op.add,
    ast.Sub: op.sub,
    ast.Mult: op.mul,
    ast.Div: op.truediv,
    ast.USub: op.neg,
}

def normalize_unit(expr: str) -> str:
    """
    Replaces unit values with float representations in px.
    Example: '3rem + 0.5em' -> '48.0 + 8.0'
    """
    def repl(match):
        number = float(match.group(1))
        unit = match.group(2)
        factor = UNIT_FACTORS.get(unit, 1)
        return str(number * factor)

    return re.sub(r"([\d.]+)\s*(rem|em|px|%|vw|vh)", repl, expr)

def normalize_length(value: str) -> float:
    if value.endswith("rem"):
        return float(value.replace("rem", "")) * REM_IN_PX
    elif value.endswith("em"):
        return float(value.replace("em", "")) * EM_IN_PX
    elif value.endswith("%"):
        return (float(value.replace("%", "")) / 100.0) * PERCENT_BASE
    elif value.endswith("px"):
        return float(value.replace("px", ""))
    else:
        try:
            return float(value)  # fallback
        except Exception:
            return None  # can't convert



def build_typography_frequency_report(annotated_hierarchy):
    from collections import defaultdict

    typography_counts = defaultdict(int)
    typography_levels = defaultdict(list)

    def extract_typography_from_dict(css_rule_dict):
        """
        Extracts primary font-family, font-size, color from css_rules dict[style] = dict[media -> value]
        Prefers base values if available.
        """
        def get_first_or_base(prop):
            media_map = css_rule_dict.get(prop)
            if not isinstance(media_map, dict):
                return None
            return media_map.get("base") or next(iter(media_map.values()), None)

        font_family = get_first_or_base("font-family")
        font_size = get_first_or_base("font-size")
        color = get_first_or_base("color")
        return font_family, font_size, color

    def traverse(node, level=0):
        tag = node.get("tag", "")
        css_rules = node.get("css_rules", {})

        font_family, font_size, color = extract_typography_from_dict(css_rules)

        if font_family or font_size:
            key = (tag, font_family, font_size, color)
            typography_counts[key] += 1
            typography_levels[key].append(level)

        for child in node.get("children", []):
            traverse(child, level + 1)

    # Traverse the tree
    traverse(annotated_hierarchy)

    total = sum(typography_counts.values())
    data = []

    for key, count in typography_counts.items():
        tag, font_family, font_size, color = key
        levels = typography_levels[key]
        avg_level = sum(levels) / len(levels) if levels else None

        # Normalize size for reporting
        try:
            u = float(normalize_unit(font_size))
            font_size = f"{int(u)}px"
        except Exception:
            pass  # keep original font_size

        data.append({
            "Tag": tag,
            "Font Family": font_family,
            "Font Size": font_size,
            "Color": color,
            "TW_Color": find_closest_tailwind_color(color),
            "Count": count,
            "Usage %": round((count / total) * 100, 2),
            "Avg DOM Level": round(avg_level, 2) if avg_level is not None else None,
            "Min Level": min(levels),
            "Max Level": max(levels),
            "Sample Levels": sorted(levels)[:15],
        })

    df = pd.DataFrame(data).sort_values(by="Count", ascending=False)
    return df


def assign_typography_tokens(typography_df):
    INVALID_FONTS = {"inherit", "initial", "unset", "revert", "none", "auto"}

    def clean_family(val):
        if not isinstance(val, str):
            return None
        base = re.sub(r"[\"']", "", val.split(",")[0].strip().lower())
        return None if base in INVALID_FONTS else base

    family_map = (
        typography_df[["Font Family"]]
        .dropna()
        .assign(Clean=lambda df: df["Font Family"].map(clean_family))
        .dropna()
    )

    family_counts = family_map["Clean"].value_counts()
    clean_to_original = family_map.groupby("Clean")["Font Family"].agg(lambda x: x.mode().iloc[0])

    # Select top 3 distinct font families
    distinct_families = [fam for fam in family_counts.index if fam and fam not in INVALID_FONTS]

    for fam in family_counts.index:
        if fam not in INVALID_FONTS and fam is not None:
            distinct_families.append(fam)
        if len(distinct_families) == 3:
            break

    theme = {
        "font-family-primary": clean_to_original.get(distinct_families[0]) if len(distinct_families) > 0 else None,
        "font-family-secondary": clean_to_original.get(distinct_families[1]) if len(distinct_families) > 1 else None,
        "font-family-accent": clean_to_original.get(distinct_families[2]) if len(distinct_families) > 2 else None,
    }

    # === Parse font-size values ===
    typography_df["Parsed Size"] = typography_df["Font Size"].apply(normalize_length)

    def assign_tokens_by_tags(tags, tokens):
        rows = typography_df[typography_df["Tag"].isin(tags) & typography_df["Parsed Size"].notna()].copy()
        rows = rows.sort_values(by=["Parsed Size", "Count"], ascending=[False, False])
        for token, (_, row) in zip(tokens, rows.iterrows()):
            theme[token] = {
                "font-size": f"{int(row['Parsed Size'])}px",
                "font-family": row["Font Family"],
                "color": row["Color"],
                "tag": row["Tag"],
                "count": row["Count"]
            }

    assign_tokens_by_tags(["h1", "h2"], ["display-large", "display-medium", "display-small"])
    assign_tokens_by_tags(["h2", "h3"], ["headline-large", "headline-medium", "headline-small"])
    assign_tokens_by_tags(["h3", "h4", "h5"], ["title-large", "title-medium", "title-small"])
    assign_tokens_by_tags(["p", "span", "a", "body"], ["body-large", "body-medium", "body-small"])
    assign_tokens_by_tags(["button", "input", "h5", "h6"], ["label-large", "label-medium", "label-small"])

    theme_df = pd.DataFrame([
        {"M3 Token": k, **(v if isinstance(v, dict) else {"font-family": v})}
        for k, v in theme.items()
    ])

    return theme_df

# Generate TypeScript M3 theme object from given token DataFrames
def build_typescript_theme_object(token_dir, color_df, font_df):
    ts_lines = ["export const m3Theme = {"]

    # Add color tokens
    for _, row in color_df.iterrows():
        token = row["M3 Token"]
        value = row["Assigned Color"]
        ts_lines.append(f'  "{token}": "{value}",')

    # Add font tokens
    for _, row in font_df.iterrows():
        token = row["M3 Token"]
        if token.startswith("font-family"):
            val = row["font-family"].replace('"', '\'')
        else:
            val = row["font-size"]
        val = val if val else "null"
        ts_lines.append(f'  "{token}": "{val}",')

    ts_lines.append("};")

    # Construct output path
    file_path = Path("libs/angular-templates-ui/src/lib/website_templates") / token_dir / "tokens.ts"

    # Ensure directory exists
    file_path.parent.mkdir(parents=True, exist_ok=True)

    # Write to file
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("\n".join(ts_lines))

    return "\n".join(ts_lines)


# Generate a Python dictionary version of the M3 theme object
def build_python_theme_dict(color_df, font_df):
    theme_dict = {}

    # Color tokens
    for _, row in color_df.iterrows():
        token = row["M3 Token"]
        value = row["Assigned Color"]
        theme_dict[token] = value

    # Font tokens (only one value per token)
    for _, row in font_df.iterrows():
        token = row["M3 Token"]
        if token.startswith("font-family"):
            theme_dict[token] = row["font-family"]
        else:
            theme_dict[token] = row["font-size"]

    return theme_dict

# Generate CSS :root or data-theme selector with variables
def build_css_variable_block(theme_dict, selector="[data-theme]"):
    lines = [f"{selector} {{"]
    for token, value in theme_dict.items():
        if value is not None:
            lines.append(f"  --{token}: {value};")
    lines.append("}")
    return "\n".join(lines)




