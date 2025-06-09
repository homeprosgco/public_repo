import pytest
from pathlib import Path
import sys
from bs4 import BeautifulSoup
from unittest.mock import MagicMock, patch
from types import SimpleNamespace
import json

sys.path.append(str(Path(__file__).resolve().parents[3]))
from core.archiver.website_archiver import SGWebsiteArchiver


@pytest.fixture
def mock_fs(tmp_path):
    class MockFS:
        def __init__(self, base_dir):
            self.base_dir = base_dir

        def file_path(self, rel):
            return self.base_dir / rel

        def dir_path(self, rel):
            return self.base_dir / rel

        def read_file(self, rel):
            path = self.base_dir / rel
            return path.read_text() if path.exists() else None

        def write_text_file(self, rel, content, encoding="utf-8"):
            path = rel if isinstance(rel, Path) else self.base_dir / rel
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content, encoding=encoding)

        def write_binary_file(self, rel, content: bytes):
            path = rel if isinstance(rel, Path) else self.base_dir / rel
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(content)

        def get_template_archive_dir(self, template_name):
            return self.base_dir / "archive" / template_name

        def get_template_pages_dir(self, template_name):
            return self.get_template_archive_dir(template_name) / "pages"

    return MockFS(tmp_path)

@pytest.fixture
def archiver(mock_fs):
    return SGWebsiteArchiver(mock_fs)

def test_set_template_name(archiver):
    result = archiver.set_template_name("homepage")
    assert result.template_name == "homepage"

def test_get_local_path_with_collapse(mock_fs, archiver):
    archiver = archiver.set_template_name("homepage")
    result = archiver._get_local_path("/homepage/homepage/assets/css/style.css")

    assert "archive/homepage/assets/css/style.css" in str(result)

@patch("requests.get")
def test_download_file_success(mock_get, archiver):
    archiver.set_template_name("test")
    mock_resp = MagicMock()
    mock_resp.content = b"data"
    mock_resp.raise_for_status = lambda: None
    mock_get.return_value = mock_resp
    target_path = archiver._get_local_path("/style.css")
    archiver._download_file("http://example.com/style.css", target_path)
    
    assert target_path.exists()
    assert target_path.read_bytes() == b"data"

def test_download_assets_calls_download(monkeypatch, archiver):
    archiver.set_template_name("demo")
    archiver._download_file = MagicMock()
    archiver.download_assets({"style.css"}, {"script.js"}, {"logo.png"})
    assert archiver._download_file.call_count == 3

def test_save_pages_creates_files(archiver):
    archiver.set_template_name("test-template")
    pages = {"https://example.com/about": "<html>About</html>"}
    archiver.save_pages(pages)
    saved_path = archiver.fs.get_template_archive_dir("test-template") / "about/index.html"
    assert saved_path.exists()
    assert saved_path.read_text() == "<html>About</html>"

def test_save_results_excludes_page_content(archiver):
    data = {
        "template_name": "temp",
        "page_content": {"skip": "this"},
        "summary": "done"
    }
    archiver.save_results(data)
    results_path = archiver.fs.file_path("results.json")
    assert results_path.exists()
    content = json.loads(results_path.read_text())
    assert "page_content" not in content
    assert content["summary"] == "done"


def test_get_index_html_path_index_exists(archiver):
    archiver.set_template_name('homepage')
    pages_dir = archiver.fs.get_template_pages_dir("homepage")
    pages_dir.mkdir(parents=True, exist_ok=True)
    index_path = pages_dir / "index.html"
    index_path.write_text("<html></html>")

    result = archiver.get_index_html_path()
    assert result == index_path

def test_get_index_html_path_fallback_to_index_like(archiver):
    archiver.set_template_name('homepage')
    pages_dir = archiver.fs.get_template_pages_dir("homepage")
    pages_dir.mkdir(parents=True, exist_ok=True)
    index_like_path = pages_dir / "custom_index_page.html"
    index_like_path.write_text("<html></html>")

    result = archiver.get_index_html_path()
    assert result == index_like_path

def test_get_index_html_path_fallback_to_any_html(archiver):
    archiver.set_template_name('homepage')
    pages_dir = archiver.fs.get_template_pages_dir("homepage")
    pages_dir.mkdir(parents=True, exist_ok=True)
    any_html_path = pages_dir / "random_page.html"
    any_html_path.write_text("<html></html>")

    result = archiver.get_index_html_path()
    assert result == any_html_path

def test_get_index_html_path_none_when_empty(archiver):
    archiver.set_template_name('homepage')
    pages_dir = archiver.fs.get_template_pages_dir("homepage")
    pages_dir.mkdir(parents=True, exist_ok=True)

    result = archiver.get_index_html_path()
    assert result is None

def test_get_template_css_order(archiver, tmp_path):
    archiver.set_template_name("demo")
    pages_dir = archiver.fs.get_template_pages_dir("demo")
    pages_dir.mkdir(parents=True, exist_ok=True)
    html_path = pages_dir / "index.html"
    html_content = '<html><head><link rel="stylesheet" href="main.css"><link rel="stylesheet" href="theme.css"></head></html>'
    html_path.write_text(html_content)

    order = archiver.get_template_css_order()
    assert order == ["main.css", "theme.css"]

def test_get_template_css_order_with_fallback(archiver, tmp_path):
    archiver.set_template_name("fallback_demo")
    pages_dir = archiver.fs.get_template_pages_dir("fallback_demo")
    pages_dir.mkdir(parents=True, exist_ok=True)
    fallback_path = pages_dir / "fallback.html"
    fallback_content = '<html><head><link rel="stylesheet" href="fallback.css"></head></html>'
    fallback_path.write_text(fallback_content)

    order = archiver.get_template_css_order()
    assert order == ["fallback.css"]