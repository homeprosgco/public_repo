import pytest
import sys
from pathlib import Path
from bs4 import BeautifulSoup

sys.path.append(str(Path(__file__).resolve().parents[3]))

from core.util.file_util.sg_file_util_class import SGFileUtils
from core.html_file_processor.html_file_processor import process_html_files  # your processing fn

class DummyFS:
    def __init__(self):
        self.base_dir = Path("/mock")

    def get_archive_dir(self) -> Path:
        return self.base_dir / "core/feed_files/archive"

    def get_template_archive_dir(self, template_name: str) -> Path:
        return self.get_archive_dir() / template_name

    def get_template_pages_dir(self, template_name: str) -> Path:
        return self.get_template_archive_dir(template_name) / "pages"

    def iter_file_contents_with_extension(self, search_dir, ext, encoding="utf-8"):
        return [
            (Path("pages/test1.html"), "<html><body><h1>Test1</h1></body></html>"),
            (Path("pages/test2.html"), "<html><body><h1>Test2</h1></body></html>")
        ]

def test_process_html_files_calls_callback():
    fs = DummyFS()
    seen = []

    def callback(path, soup):
        seen.append((path.name, soup.find("h1").text))

    process_html_files(fs, 'DemoTemplate', limit=1, callback=callback)

    assert len(seen) == 1
    assert seen[0][0] == "test1.html"
    assert seen[0][1] == "Test1"
