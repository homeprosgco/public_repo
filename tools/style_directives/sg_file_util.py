import json
from typing import Any
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
from bs4 import BeautifulSoup

from urllib.parse import urljoin, urlparse
import requests
import os
import re

base_dir = Path(__file__).parent

def sg_file_path(relative_path: str, mode: str = "r", encoding: str = "utf-8") -> str:
    return  base_dir / relative_path

def sg_read_file(relative_path: str, mode: str = "r", encoding: str = "utf-8") -> str | None:
    path = sg_file_path(relative_path)
    
    if not path.exists():
        print(f"File not found: {path}")
        return None

    with path.open(mode, encoding=encoding) as f:
        return f.read()

def sg_read_file_as_json(relative_path: str, mode: str = "r", encoding: str = "utf-8") -> Any:
    path = sg_file_path(relative_path)
    
    if not path.exists():
        print(f"File not found: {path}")
        return None

    with Path(sg_file_path(relative_path)).open("r", encoding="utf-8") as f:
        return json.load(f)

def sg_write_file(absolute_path: str, mode: str = "w", encoding: str = "utf-8") -> Any:

    with open(absolute_path, mode, encoding=None if "b" in mode else encoding) as f:
        f.write('')  # create empty file
    print(f"Created: {file_path}")

def sg_mkdir(relative_dir: str):
    path = base_dir / relative_dir
    path.mkdir(parents=True, exist_ok=True)

def sg_dir_path(relative_dir: str):
    return  base_dir / relative_dir

def sg_list_dir_files(relative_dir: str, ext: str):
    """
    List all files with a given extension in a directory (recursively).
    
    Args:
        relative_dir (str): Directory relative to the base.
        ext (str): Extension without the dot (e.g., 'html', 'css').

    Returns:
        Generator of Path objects for matched files.
    """
    dir_path = sg_dir_path(relative_dir)
    return Path(dir_path).rglob(f"*.{ext}")


def list_files_recursively(path: Path, indent=0):
        if not path.exists():
            print("❌ Path does not exist:", path)
            return

        for item in sorted(path.iterdir()):
            prefix = "  " * indent
            if item.is_dir():
                print(f"{prefix}📁 {item.name}/")
                list_files_recursively(item, indent + 1)
            else:
                print(f"{prefix}📄 {item.name}")

def save_html_to_file(html_str: str, filename: str = "generated_output.html") -> Path:
    output_path = Path(current_dir / filename)
    output_path.write_text(html_str, encoding="utf-8")
    return output_path.resolve()


def render_template_from_file(template_name: str, context: dict) -> str:
    env = Environment(loader=FileSystemLoader(sg_file_path("j2_templates")), trim_blocks=True, lstrip_blocks=True)
    template = env.get_template(template_name)
    return template.render(context)

def write_barrel_files_recursive(base_dir: Path, export_suffix: str = "", root: bool = True):
    """
    Recursively writes barrel `index.ts` files in all nested directories under base_dir.
    - `export_suffix` is appended to the module name, e.g., ".directive"
    - `root` determines if current level is base or nested (used to format relative paths)
    """
    if not base_dir.exists() or not base_dir.is_dir():
        return

    export_lines = []

    for item in sorted(base_dir.iterdir()):
        if item.name == "index.ts":
            continue

        if item.is_file() and item.suffix == ".ts":
            module_name = item.stem
            export_lines.append(f"export * from './{module_name}{export_suffix}';")

        elif item.is_dir():
            # Recursively generate barrels for subdirs
            write_barrel_files_recursive(item, export_suffix, root=False)
            export_lines.append(f"export * from './{item.name}';")

    if export_lines:
        index_file = base_dir / "index.ts"
        index_file.write_text("\n".join(export_lines) + "\n")
        print(f"🧾 Wrote barrel: {index_file}")

def extract_stylesheet_links(html_path: str) -> list[str]:
    content = sg_read_file(sg_file_path(html_path))
    soup = BeautifulSoup(content, 'html.parser')
    return [link.get('href') for link in soup.find_all('link', rel='stylesheet') if link.get('href')]

def extract_image_links(html_path: str) -> list[str]:
    content = sg_read_file(sg_file_path(html_path))
    soup = BeautifulSoup(content, 'html.parser')

    img_srcs = [img.get('src') for img in soup.find_all('img') if img.get('src')]

    style_urls = []
    for tag in soup.find_all(style=True):
        style = tag['style']
        matches = re.findall(r'background-image\s*:\s*url\([\'"]?(.*?)[\'"]?\)', style)
        style_urls.extend(matches)

    return img_srcs + style_urls

def extract_script_links(html_path: str) -> list[str]:
    content = sg_read_file(sg_file_path(html_path))
    soup = BeautifulSoup(content, 'html.parser')

    return [
        script.get('src')
        for script in soup.find_all('script')
        if script.get('src')
    ]

def download_css_files(css_dir: str, download_stylesheets: list[str], base_url: str) -> None:
    print("\n⬇️ Downloading CSS Files")
    sg_mkdir(css_dir)
    css_dir_path = sg_dir_path(css_dir)

    for css_path in download_stylesheets:
        full_url = urljoin(base_url, css_path)
        file_name = os.path.basename(css_path)
        out_path = css_dir_path / file_name

        print(f"  - {file_name} ← {full_url}")
        try:
            response = requests.get(full_url)
            response.raise_for_status()
            out_path.write_bytes(response.content)
            print(f"    ✅ Saved to {out_path}")
        except Exception as e:
            print(f"    ❌ Failed: {e}")

# def download_css_files(css_dir: str, download_stylesheets: list[str], base_url: str) -> None:
#     print("\n⬇️ Downloading CSS Files")

#     for css_path in download_stylesheets:
#         full_url = urljoin(base_url, css_path)
#         out_path = sg_dir_path(os.path.join(css_dir, css_path))
#         out_path.parent.mkdir(parents=True, exist_ok=True)

#         print(f"  - {css_path} ← {full_url}")
#         try:
#             response = requests.get(full_url)
#             response.raise_for_status()
#             out_path.write_bytes(response.content)
#             print(f"    ✅ Saved to {out_path}")
#         except Exception as e:
#             print(f"    ❌ Failed: {e}")

def download_image_files(image_dir: str, image_links: list[str], base_url: str) -> None:
    print("\n🖼️ Downloading Image Files")

    for img_path in image_links:
        full_url = urljoin(base_url, img_path)
        out_path = sg_dir_path(os.path.join(image_dir, img_path.lstrip('/')))
        out_path.parent.mkdir(parents=True, exist_ok=True)

        print(f"  - {img_path} ← {full_url}")
        try:
            response = requests.get(full_url)
            response.raise_for_status()
            out_path.write_bytes(response.content)
            print(f"    ✅ Saved to {out_path}")
        except Exception as e:
            print(f"    ❌ Failed: {e}")

def download_script_files(script_dir: str, script_paths: list[str], base_url: str) -> None:
    print("\n📜 Downloading JS Script Files")

    script_dir_path = Path(script_dir)
    script_dir_path.mkdir(parents=True, exist_ok=True)

    for script_path in script_paths:
        parsed = urlparse(script_path)
        is_remote = bool(parsed.scheme) and parsed.scheme in {"http", "https"}

        # Determine full download URL
        full_url = script_path if is_remote else urljoin(base_url, script_path)

        # Determine output path
        if is_remote:
            file_name = os.path.basename(parsed.path)
            out_path = script_dir_path / file_name
        else:
            out_path = script_dir_path / Path(script_path)
            out_path.parent.mkdir(parents=True, exist_ok=True)

        print(f"  - {script_path} ← {full_url}")

        try:
            response = requests.get(full_url)
            response.raise_for_status()
            out_path.write_bytes(response.content)
            print(f"    ✅ Saved to {out_path}")
        except Exception as e:
            print(f"    ❌ Failed: {e}")
