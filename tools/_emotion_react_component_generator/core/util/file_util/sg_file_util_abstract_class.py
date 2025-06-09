from abc import ABC, abstractmethod
from pathlib import Path
from typing import Any, Generator, Union

class FileUtilsInterface(ABC):
    @abstractmethod
    def file_path(self, relative_path: str) -> Path:
        pass

    @abstractmethod
    def read_file(self, relative_path: str, mode: str = "r", encoding: str = "utf-8") -> str | None:
        pass

    @abstractmethod
    def read_file_as_json(self, relative_path: str) -> Any:
        pass

    @abstractmethod
    def write_text_absolute_file(self, absolute_path: str, mode: str = "w", encoding: str = "utf-8"):
        pass

    @abstractmethod
    def mkdir(self, relative_dir: str):
        pass

    @abstractmethod
    def write_text_file(self, relative_path: str, content: str, encoding: str = "utf-8"):
        """Writes a text file after ensuring its directory exists (if applicable)."""
        pass

    @abstractmethod
    def write_binary_file(self, relative_path: str, content: bytes):
        """Writes binary content after ensuring parent directories exist (if local)."""
        pass

    @abstractmethod
    def dir_path(self, relative_dir: str) -> Path:
        pass

    @abstractmethod
    def list_dir_files(self, relative_dir: str, ext: str):
        pass

    @abstractmethod
    def save_html_to_file(self, html_str: str, filename: str = "generated_output.html") -> Path:
        pass

    @abstractmethod
    def list_files_recursively(self, path: Path, indent: int = 0):
        pass

    @abstractmethod
    def render_template_from_file(self, template_name: str, context: dict) -> str:
        pass

    @abstractmethod
    def write_barrel_files_recursive(self, base_dir: Path, export_suffix: str = "", root: bool = True):
        pass

    @abstractmethod
    def find_file_by_name(self, search_dir: str, file_name: str) -> Path | None:
        pass

    @abstractmethod
    def iter_files_with_extension(self, search_dir: str, ext: str) -> Generator[Path, None, None]:
        pass

    @abstractmethod
    def iter_file_contents_with_extension(self, search_dir: str, ext: str, encoding: str = "utf-8") -> Generator[tuple[Path, str], None, None]:
        pass

    @abstractmethod
    def archive_dir(self) -> Path: pass

    @abstractmethod
    def template_archive_dir(self, template_name: str) -> Path: pass

    @abstractmethod
    def template_pages_dir(self, template_name: str) -> Path: pass

    @abstractmethod
    def generated_components_dir(self) -> Path: pass

    @abstractmethod
    def generated_templates_dir(self, template_name: str) -> Path: pass

    @abstractmethod
    def generated_ui_content_block_components_dir(self, template_name: str) -> Path: pass

    @abstractmethod
    def generated_ui_block_components_dir(self, template_name: str) -> Path: pass

    @abstractmethod
    def generated_ui_components_dir(self, template_name: str) -> Path: pass

    @abstractmethod
    def tw_color_util_dir(self) -> Path: pass

    @abstractmethod
    def template_styles_dir(self, template_name: str) -> Path: pass

