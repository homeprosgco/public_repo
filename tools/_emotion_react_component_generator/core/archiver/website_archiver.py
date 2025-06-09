# Revised SGWebsiteArchiver class using SGFileUtils for file operations
from pathlib import Path
from urllib.parse import urljoin, urlparse
import requests
import json
from bs4 import BeautifulSoup

class SGWebsiteArchiver:
    def __init__(self, fs: 'SGFileUtils'):
        self.fs = fs
        self.template_name = ''

    def set_template_name(self, template_name) -> 'SGWebsiteArchiver':
        self.template_name = template_name
        return self

    def process_results(self, results: dict) -> bool:
        self.download_assets(
            stylesheets=results["stylesheets"],
            scripts=results["scripts"],
            images=results["images"]
        )
        self.save_pages(results["page_content"])
        self.save_results(results)

        return True

    def download_assets(self, stylesheets: set, scripts: set, images: set):
        print("\n⬇️ Downloading CSS Files")
        for css_url in stylesheets:
            out_path = self._get_local_path(css_url)
            self._download_file(css_url, out_path)

        print("\n📜 Downloading JS Files")
        for js_url in scripts:
            out_path = self._get_local_path(js_url)
            self._download_file(js_url, out_path)

        print("\n🖼️ Downloading Images")
        for img_url in images:
            out_path = self._get_local_path(img_url)
            self._download_file(img_url, out_path)

    def save_pages(self, page_content: dict):
        print("\n🗂️ Saving Crawled HTML Pages")

        for url, html in page_content.items():
            relative = Path(urlparse(url).path.lstrip("/") or "index.html")
            out_path = self.get_template_archive_dir() / relative

            if out_path.suffix == "":
                out_path = out_path / "index.html"

            self.fs.write_text_file(out_path, html)

            print(f"    💾 Saved {url} → {out_path}")

    def save_results(self, results: dict):
        results_path = self.fs.file_path("results.json")
        results_serializable = {k: v for k, v in results.items() if k != "page_content"}
        results_path.write_text(json.dumps(results_serializable, indent=2), encoding="utf-8")
        print(f"📄 Saved crawl results to: {results_path}")

    def _get_local_path(self, remote_path: str) -> Path:
        relative = Path(urlparse(remote_path).path.lstrip("/"))
        parts = list(relative.parts)

        # Remove all adjacent duplicates that match template_name
        collapsed = []

        i = 0

        while i < len(parts):
            if parts[i] == self.template_name:
                # Skip all adjacent template_name duplicates
                while i < len(parts) and parts[i] == self.template_name:
                    i += 1
            else:
                collapsed.append(parts[i])
                i += 1

        relative = Path(*collapsed)

        return self.fs.get_template_archive_dir(self.template_name) / relative

    #unused

    def get_template_archive_dir(self):
        return self.fs.get_template_archive_dir(self.template_name)


    def _download_file(self, url: str, local_path: Path):
        print(f"  - {url} → {local_path}")
        try:
            response = requests.get(url)
            response.raise_for_status()
            self.fs.write_binary_file(local_path, response.content)

            print(f"    ✅ Saved to {local_path}")
        except Exception as e:
            print(f"    ❌ Failed: {url} — {e}")

    def get_index_html_path(self) -> Path | None:
        template_pages_dir = self.fs.template_pages_dir(self.template_name)

        if not template_pages_dir.exists() or not template_pages_dir.is_dir():
            print(f"❌ Invalid directory: {template_pages_dir}")
            return None

        # Priority 1: any file named exactly 'index.html' anywhere
        exact_index_files = list(template_pages_dir.rglob("index.html"))
        if exact_index_files:
            return exact_index_files[0]

        # Priority 2: any file with 'index' in the name
        index_like = [p for p in template_pages_dir.rglob("*.html") if "index" in p.name.lower()]
        if index_like:
            return index_like[0]

        # Fallback: any .html file
        html_files = list(template_pages_dir.rglob("*.html"))
        if html_files:
            return html_files[0]

        print("❌ No HTML files found in the directory")
        return None


    def get_template_css_order(self) -> list[str]:

        index_path = self.get_index_html_path()
        
        fallback_path = None

        if not index_path or not index_path.exists():
            print("❌ No HTML index file found in the directory")
            return []

        html = self.fs.read_file(index_path)

        if not html:
            return []

        soup = BeautifulSoup(html, "html.parser")
        return [link.get("href") for link in soup.find_all("link", rel="stylesheet") if link.get("href")]

    def component_exists(self, component_path: str):
        return self.fs.is_file_path(component_path)

    def ui_components_relpath(self) -> str:
        return self.fs.generated_ui_components_relpath()

    def template_ui_block_components_dir(self) -> Path: 
        return self.fs.generated_ui_block_components_dir() / self.template_name

    def template_ui_block_components_relpath(self) -> str:
        return self.fs.generated_ui_block_components_relpath()

    def template_ui_content_block_components_dir(self) -> Path:
        return self.fs.generated_ui_content_block_components_dir()  / self.template_name

    def template_ui_content_block_components_relpath(self) -> str:
        return self.fs.generated_ui_content_block_components_relpath()

    def template_dir(self):
        return self.fs.generated_templates_dir() / self.template_name

    def generated_components_dir(self) -> Path:
        return self.components_lib_dir() / "generated_components"

    def ui_block_components_dir(self) -> Path: 
        return self.generated_components_dir() / "ui_block" / self.template_name

    def ui_content_block_components_dir(self) -> Path:
        return self.generated_components_dir() / "ui_content_block" / self.template_name

    def ui_components_dir(self) -> Path:
        return self.generated_components_dir() / "ui"

    def write_template_component_file(self, content: str, component_dir: str = "", component_name: str = "",  template_page: str = ""):

        if component_dir == 'ui_block':
            path = self.template_ui_block_components_dir() / template_page / component_name
        elif component_dir == 'ui_content_block':
            path = self.template_ui_content_block_components_dir() / template_page / component_name
        elif component_dir = 'ui':
            path = component_dir
        else:
            path = self.template_dir() / template_page
        
        # self.write_component_to_file(path, content)

        print(f"Component file written to: {path}.tsx")

    def template_assets_dir(self):
        return self.fs.template_archive_dir(self.template_name)

    def iterate_html_files(self):
        return self.fs.iter_file_contents_with_extension(str(self.template_assets_dir()), "html")

    def write_component_to_file(self, relative_path: str, content: str):
        self.fs.write_text_file(f"{relative_path}.tsx", content)

    def update_component_barrel_file(index_path, component_name):
        self.fs.update_index_file(index_path, component_name)