from collections import defaultdict, Counter
from typing import Dict, Tuple
import pandas as pd
import re
import ast
import operator as op
from pathlib import Path

from core.util.tailwind_color_util.tailwind_color_util import *
import core.util.print_util

STANDARD_FONT_SCALE = {
    "displayLarge": 57,
    "displayMedium": 45,
    "displaySmall": 36,
    "headlineLarge": 32,
    "headlineMedium": 28,
    "headlineSmall": 24,
    "titleLarge": 22,
    "titleMedium": 16,
    "titleSmall": 14,
    "labelLarge": 14,
    "labelMedium": 12,
    "labelSmall": 11,
    "bodyLarge": 16,
    "bodyMedium": 14,
    "bodySmall": 12,
}


class ThemeTokenGenerator:
    def __init__(self, root_node: dict, tailwind_util: TailwindColorUtil):
        self.root_node = root_node
        self.defaultdict = defaultdict
        self.Counter = Counter
        self.pd = pd
        self.re = re
        self.Path = Path
        self.tailwind_util = tailwind_util

        self.COLOR_PATTERN = self.re.compile(r"(#[0-9a-fA-F]{3,6}\b|rgba?\([^)]*\)|hsla?\([^)]*\)|var\(--[^)]*\))")
    
    def theme(self):
        return self.convert_flat_tokens_to_theme_object()

    def normalize_unit(self, expr: str) -> str:
        UNIT_FACTORS = {
            "rem": 16,
            "em": 16,
            "px": 1,
            "%": 1.0,
            "vw": 0.8,
            "vh": 0.8,
        }
        def repl(match):
            number = float(match.group(1))
            unit = match.group(2)
            return str(number * UNIT_FACTORS.get(unit, 1))
        return self.re.sub(r"([\d.]+)\s*(rem|em|px|%|vw|vh)", repl, expr)

    def _normalize_length(self, value: str) -> float:
        if not value or not isinstance(value, str):
            return None
        value = value.strip()
        try:
            if value.endswith("rem"):
                return float(value.replace("rem", "")) * 16
            elif value.endswith("em"):
                return float(value.replace("em", "")) * 16
            elif value.endswith("%"):
                return float(value.replace("%", ""))
            elif value.endswith("px"):
                return float(value.replace("px", ""))
            return float(value)
        except Exception:
            return None

    def _find_colors_in_any(self, value):
        if isinstance(value, str):
            return self.COLOR_PATTERN.findall(value)
        elif isinstance(value, dict):
            results = []
            for v in value.values():
                results.extend(self._find_colors_in_any(v))
            return results
        return []

    def traverse_for_all_color_stats(self, node=None, color_data=None, level=0):
        if color_data is None:
            color_data = self.Counter()
        node = node or self.root_node
        css_rules = node.get("css_rules", {})

        if not isinstance(css_rules, dict):
            return color_data

        for _, media_dict in css_rules.items():
            if isinstance(media_dict, dict):
                for val in media_dict.values():
                    matches = self._find_colors_in_any(val)
                    for match in matches:
                        color_data[match] += 1

        for child in node.get("children", []):
            self.traverse_for_all_color_stats(child, color_data, level + 1)

        return color_data

    def traverse_colors_with_levels(self, node=None, color_levels=None, level=0):
        if color_levels is None:
            color_levels = self.defaultdict(list)

        node = node or self.root_node
        css_rules = node.get("css_rules", {})

        if not isinstance(css_rules, dict):
            return color_levels

        for _, media_dict in css_rules.items():
            if isinstance(media_dict, dict):
                for val in media_dict.values():
                    matches = self._find_colors_in_any(val)
                    for match in matches:
                        color_levels[match].append(level)

        for child in node.get("children", []):
            self.traverse_colors_with_levels(child, color_levels, level + 1)

        return color_levels

    def build_combined_color_frequency_report(self):
        color_counts = self.traverse_for_all_color_stats()
        color_levels = self.traverse_colors_with_levels()
        total_count = sum(color_counts.values())

        if total_count == 0:
            return self.pd.DataFrame(columns=[
                "Color", "TW_Color", "Count", "Usage %",
                "Avg Level", "Levels Found", "Min Level", "Max Level"
            ])

        report_data = []
        for color, count in color_counts.items():
            levels = color_levels.get(color, [])
            min_level = min(levels) if levels else None
            max_level = max(levels) if levels else None
            avg_level = sum(levels) / len(levels) if levels else None
            level_sample = sorted(levels)[:15]
            report_data.append({
                "Color": color,
                "TW_Color": self.tailwind_util.find_closest_tailwind_color(color),
                "Count": count,
                "Usage %": round((count / total_count) * 100, 2),
                "Avg Level": round(avg_level, 2) if avg_level is not None else None,
                "Levels Found": level_sample,
                "Min Level": min_level,
                "Max Level": max_level
            })
        return self.pd.DataFrame(report_data).sort_values(by="Count", ascending=False)

    def build_color_report_with_levels(self, color_levels):
        report_data = []
        for color, levels in color_levels.items():
            count = len(levels)
            min_level = min(levels)
            max_level = max(levels)
            level_list = sorted(levels)[:15]
            report_data.append({
                "Color": color,
                "TW_Color": self.tailwind_util.find_closest_tailwind_color(color),
                "Count": count,
                "Levels (sample)": level_list,
                "Min Level": min_level,
                "Max Level": max_level
            })
        return self.pd.DataFrame(report_data).sort_values(by="Count", ascending=False)

    def build_typography_frequency_report(self):
        typography_counts = self.defaultdict(int)
        typography_levels = self.defaultdict(list)

        def extract_typography_from_dict(css_rule_dict):
            def get_first_or_base(prop):
                media_map = css_rule_dict.get(prop)
                if not isinstance(media_map, dict):
                    return None
                val = media_map.get("base") or media_map.get("default") or next(iter(media_map.values()), None)
                return str(val) if not isinstance(val, dict) else None

            font_family = get_first_or_base("font-family")
            font_size = get_first_or_base("font-size")
            color = get_first_or_base("color")
            return font_family, font_size, color

        def traverse(node, level=0):
            if not isinstance(node, dict):
                return
            tag = node.get("tag", "")
            css_rules = node.get("css_rules", {})
            font_family, font_size, color = extract_typography_from_dict(css_rules)
            if font_family or font_size:
                key = (tag, font_family, font_size, color)
                typography_counts[key] += 1
                typography_levels[key].append(level)
            for child in node.get("children", []):
                traverse(child, level + 1)

        traverse(self.root_node)
        total = sum(typography_counts.values())
        
        if total == 0:
            return self.pd.DataFrame(columns=[
                "Tag", "Font Family", "Font Size", "Color", "TW_Color",
                "Count", "Usage %", "Avg DOM Level", "Min Level", "Max Level", "Sample Levels"
            ])

        data = []
        for key, count in typography_counts.items():
            tag, font_family, font_size, color = key
            levels = typography_levels[key]
            avg_level = sum(levels) / len(levels) if levels else None
            try:
                u = float(self.normalize_unit(font_size))
                font_size = f"{int(u)}px"
            except Exception:
                pass
            data.append({
                "Tag": tag,
                "Font Family": font_family,
                "Font Size": font_size,
                "Color": color,
                "TW_Color": self.tailwind_util.find_closest_tailwind_color(color),
                "Count": count,
                "Usage %": round((count / total) * 100, 2),
                "Avg DOM Level": round(avg_level, 2) if avg_level is not None else None,
                "Min Level": min(levels),
                "Max Level": max(levels),
                "Sample Levels": sorted(levels)[:15]
            })
        return self.pd.DataFrame(data).sort_values(by="Count", ascending=False)

    def assign_typography_tokens(self):
        typography_df = self.build_typography_frequency_report()
        INVALID_FONTS = {"inherit", "initial", "unset", "revert", "none", "auto"}

        def clean_family(val):
            if not isinstance(val, str):
                return None
            base = self.re.sub(r'["\']', "", val.split(",")[0].strip().lower())
            return None if base in INVALID_FONTS else base

        family_map = (
            typography_df[["Font Family"]]
            .dropna()
            .assign(Clean=lambda df: df["Font Family"].map(clean_family))
            .dropna()
        )

        family_counts = family_map["Clean"].value_counts()
        clean_to_original = family_map.groupby("Clean")["Font Family"].agg(lambda x: x.mode().iloc[0])

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

        typography_df["Parsed Size"] = typography_df["Font Size"].apply(self._normalize_length)

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

        theme_df = self.pd.DataFrame([
            {"M3 Token": k, **(v if isinstance(v, dict) else {"font-family": v})}
            for k, v in theme.items()
        ])

        return theme_df

    def build_typescript_theme_object(self, token_dir, color_df, font_df):
        color_df = self.assign_m3_tokens_from_color_report()
        font_df = self.assign_typography_tokens()
        ts_lines = ["export const m3Theme = {"]

        for _, row in color_df.iterrows():
            token = row["M3 Token"]
            value = row["Assigned Color"]
            ts_lines.append(f'  "{token}": "{value}",' if value else f'  "{token}": null,')

        for _, row in font_df.iterrows():
            token = row["M3 Token"]
            if token.startswith("font-family"):
                val = row["font-family"]
                val = '"' + str(val).replace('"', "'") + '"' if val else "null"
            else:
                val = f'"{row["font-size"]}"' if self.pd.notna(row["font-size"]) else "null"
            ts_lines.append(f'  "{token}": {val},')

        ts_lines.append("};")
        ts_lines.append("")
        ts_lines.append("export type M3Theme = typeof m3Theme;")

        file_path = self.Path("libs/angular-templates-ui/src/lib/website_templates") / token_dir / "tokens.ts"
        file_path.parent.mkdir(parents=True, exist_ok=True)
        file_path.write_text("\n".join(ts_lines), encoding="utf-8")

        return "\n".join(ts_lines)

    def build_python_theme_dict(self):
        color_df = self.assign_m3_tokens_from_color_report()
        font_df = self.assign_typography_tokens()
        theme_dict = {}

        for _, row in color_df.iterrows():
            theme_dict[row["M3 Token"]] = row["Assigned Color"]

        for _, row in font_df.iterrows():
            token = row["M3 Token"]
            theme_dict[token] = row["font-family"] if token.startswith("font-family") else row["font-size"]

        return theme_dict

    def build_css_variable_block(self, theme_dict, selector="[data-theme]"):
        lines = [f"{selector} {{"]
        for token, value in theme_dict.items():
            if value is not None:
                lines.append(f"  --{token}: {value};")
        lines.append("}")
        return "\n".join(lines)

    def convert_flat_tokens_to_theme_object(self) -> dict:
        flat_tokens = self.build_python_theme_dict()
        font_size_scale_map = self.build_font_size_scale_mapping()
        def to_camel_case(s):
            parts = s.split("-")
            return parts[0] + "".join(w.capitalize() for w in parts[1:])

        theme = {
            "colors": {},
            "typography": {
                "fontFamilies": {},
                "fontSizes": {},
                "fontWeights": {},
                "lineHeights": {}
            }
        }

        for key, value in flat_tokens.items():
            if value is None:
                continue

            normalized_value = str(value).strip()

            if key.startswith("font-family-"):
                family_key = key.replace("font-family-", "")
                theme["typography"]["fontFamilies"][to_camel_case(family_key)] = normalized_value

            elif key.startswith(("display-", "headline-", "title-", "body-", "label-")):
                theme["typography"]["fontSizes"][to_camel_case(key)] = normalized_value

            elif key.startswith("font-weight-"):
                theme["typography"]["fontWeights"][to_camel_case(key.replace("font-weight-", ""))] = normalized_value

            elif key.startswith("line-height-"):
                theme["typography"]["lineHeights"][to_camel_case(key.replace("line-height-", ""))] = normalized_value

            else:
                theme["colors"][to_camel_case(key)] = normalized_value

        if font_size_scale_map:
            for size_value, (token, px_size) in font_size_scale_map.items():
                theme["typography"]["fontSizes"][token] = f"{px_size}px"

        return theme

    def build_font_size_scale_mapping(self):
        typography_df = self.build_typography_frequency_report()
        if "Parsed Size" not in typography_df.columns:
            typography_df["Parsed Size"] = typography_df["Font Size"].apply(self._normalize_length)

        mapping = {}
        used_sizes = typography_df["Parsed Size"].dropna().unique()
        used_sizes.sort()

        for size in used_sizes:
            closest_token = min(STANDARD_FONT_SCALE.items(), key=lambda item: abs(item[1] - size))
            mapping[size] = closest_token

        return mapping

    def assign_m3_tokens_from_color_report(self):
        df = self.build_combined_color_frequency_report()
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
