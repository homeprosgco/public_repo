from jinja2 import Environment, FileSystemLoader
from urllib.parse import urljoin, urlparse
import requests
import os
import re
from pathlib import Path
from bs4 import BeautifulSoup
import json
from typing import Any
from core.util.file_util.sg_file_util_abstract_class import *

class SGFileUtils(FileUtilsInterface):
    def __init__(self, base_dir: Path):
        self.base_dir = base_dir

    def is_file_path(self, path):
        file_path = Path(path)

        if file_path.is_file():
            return True

        return False

    def make_path(self, *parts: str) -> str:
        return str(Path(*parts))

    def file_path(self, relative_path: str) -> Path:
        return self.base_dir / relative_path

    def read_file(self, relative_path: str, mode="r", encoding="utf-8") -> str | None:
        path = self.file_path(relative_path)

        if not path.exists():
            print(f"File not found: {path}")
            return None
        with path.open(mode, encoding=encoding) as f:
            return f.read()

    def read_file_as_json(self, relative_path: str) -> Any:
        path = self.file_path(relative_path)
        if not path.exists():
            print(f"File not found: {path}")
            return None
        with path.open("r", encoding="utf-8") as f:
            return json.load(f)

    def mkdir(self, relative_dir: str):
        path = self.base_dir / relative_dir
        path.mkdir(parents=True, exist_ok=True)

    def dir_path(self, relative_dir: str):
        return self.base_dir / relative_dir

    def list_dir_files(self, relative_dir: str, ext: str):
        dir_path = self.dir_path(relative_dir)
        return Path(dir_path).rglob(f"*.{ext}")

    def directory_exists(self, full_path):
        dir_path =Path(full_path)

        if dir_path.exists() and dir_path.is_dir():
            return True
        
        path.mkdir(parents=True, exist_ok=True)
        return True

    def list_files_recursively(self, path: Path, indent=0):
        if not path.exists():
            print("❌ Path does not exist:", path)
            return
        for item in sorted(path.iterdir()):
            prefix = "  " * indent
            if item.is_dir():
                print(f"{prefix}📁 {item.name}/")
                self.list_files_recursively(item, indent + 1)
            else:
                print(f"{prefix}📄 {item.name}")

    def find_file_by_name(self, search_dir: str, file_name: str) -> Path | None:
        """
        Recursively searches for a file with the given name inside a directory.

        Args:
            search_dir (str): Relative directory to search.
            file_name (str): Exact name of the file to find.

        Returns:
            Path | None: The full Path if found, else None.
        """
        root = self.dir_path(search_dir)
        for path in root.rglob("*"):
            if path.is_file() and path.name == file_name:
                return path
        return None

    def iter_files_with_extension(self, search_dir: str, ext: str):
        """
        Generator that yields all files with a given extension under a directory.

        Args:
            search_dir (str): Relative directory to start search.
            ext (str): File extension to match (e.g., 'css', 'html').

        Yields:
            Path: Full Path object for each matching file.
        """
        root = self.dir_path(search_dir)
        pattern = f"*.{ext.lstrip('.')}"  # Ensure it works with or without dot
        yield from root.rglob(pattern)

    def iter_file_contents_with_extension(self, search_dir: str, ext: str, encoding: str = "utf-8"):
        """
        Generator that yields (Path, content) tuples for all files with a given extension.

        Args:
            search_dir (str): Directory to search under.
            ext (str): Extension to match (e.g., 'css', 'html').
            encoding (str): Encoding for reading files.

        Yields:
            tuple[Path, str]: Path to file and its decoded content.
        """
        for file_path in self.iter_files_with_extension(search_dir, ext):
            try:
                content = file_path.read_text(encoding=encoding)
                yield file_path, content
            except Exception as e:
                print(f"❌ Failed to read {file_path}: {e}")

    def tw_color_util_dir(self) -> Path:
        return self.base_dir / "core/util/tailwind_color_util"

    def archive_dir(self) -> Path:
        return self.base_dir / "archive"

    def template_archive_dir(self, template_name: str) -> Path:
        return self.archive_dir() / template_name

    def template_pages_dir(self, template_name: str) -> Path:
        return self.template_archive_dir(template_name)

    def template_styles_dir(self, template_name: str) -> str:
        return self.template_archive_dir(template_name)

    def components_lib_dir(self) -> Path:
        return self.base_dir / "lib"

    def generated_templates_dir(self) -> Path:
        return self.components_lib_dir() / "templates"

    def generated_components_dir(self) -> Path:
        return self.components_lib_dir() / "generated_components"

    def generated_ui_block_components_dir(self) -> Path: 
        return self.generated_components_dir() / "ui_block"

    def generated_ui_content_block_components_dir(self) -> Path:
        return self.generated_components_dir() / "ui_content_block"

    def generated_ui_components_dir(self) -> Path:
        return self.generated_components_dir() / "ui"

    def generated_components_lib_relpath(self) -> str:
        return str(Path("lib").as_posix())

    def generated_lib_templates_relpath(self) -> str:
        return f"{self.generated_components_lib_relpath()}/templates"

    def generated_components_relpath(self) -> str:
        return str(Path("generated_components").as_posix())

    def generated_ui_block_components_relpath(self) -> str:
        return f"{self.generated_components_relpath()}/ui_block"
    
    def generated_ui_content_block_components_relpath(self) -> str:
        return str(Path("ui_content_block").as_posix())

    def generated_ui_components_relpath(self) -> str:
        return str(Path("ui").as_posix())

    def write_text_absolute_file(self, absolute_path: str, content, mode="w", encoding="utf-8"):
        out_path = Path(absolute_path)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(content, encoding=encoding)
        print(f"✅ Wrote text file to: {out_path}")

    def write_text_file(self, relative_path: str, content: str, encoding: str = "utf-8"):
        out_path = self.file_path(relative_path)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(content, encoding=encoding)
        print(f"✅ Wrote text file to: {out_path}")

    def write_binary_file(self, relative_path: str, content: bytes):
        local_path = self.file_path(relative_path)
        local_path.parent.mkdir(parents=True, exist_ok=True)
        local_path.write_bytes(content)
        print(f"✅ Wrote binary file to: {local_path}")
    

    def save_html_to_file(self, html_str: str, filename: str = "generated_output.html") -> Path:
        output_path = self.base_dir / filename
        output_path.write_text(html_str, encoding="utf-8")
        return output_path.resolve()

    def render_template_from_file(self, template_name: str, context: dict) -> str:
        env = Environment(loader=FileSystemLoader(self.file_path("j2_templates")), trim_blocks=True, lstrip_blocks=True)
        template = env.get_template(template_name)
        return template.render(context)

    def write_barrel_files_recursive(self, base_dir: Path, export_suffix: str = "", root: bool = True):
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
                self.write_barrel_files_recursive(item, export_suffix, root=False)
                export_lines.append(f"export * from './{item.name}';")
        if export_lines:
            index_file = base_dir / "index.ts"
            index_file.write_text("\n".join(export_lines) + "\n")
            print(f"🧾 Wrote barrel: {index_file}")

    def update_index_file(self, index_path: Path, component_name: str):
        """
        Ensure the given component is exported from its index.ts file.
        Creates or updates the index.ts file to include the component export.
        """
        export_line = f"export * from './{component_name}';\n"

        # ✅ Ensure parent directory exists
        index_path.parent.mkdir(parents=True, exist_ok=True)

        if not index_path.exists():
            index_path.write_text(export_line)
            return

        content = index_path.read_text()
        lines = content.splitlines()

        # Avoid duplicate exports
        if any(export_line.strip() == line.strip() for line in lines):
            return

        lines.append(export_line.strip())
        index_path.write_text("\n".join(lines) + "\n")

