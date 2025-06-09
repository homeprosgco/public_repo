import pytest
from pathlib import Path
import tempfile
import shutil
import sys

sys.path.append(str(Path(__file__).resolve().parents[4]))
from core.util.file_util.sg_file_util_class import SGFileUtils

@pytest.fixture
def temp_dir():
    path = Path(tempfile.mkdtemp())
    yield path
    shutil.rmtree(path)

@pytest.fixture
def file_utils(temp_dir):
    print(temp_dir)
    return SGFileUtils(base_dir=temp_dir)

def test_file_path(file_utils, temp_dir):
    assert file_utils.file_path("test.txt") == temp_dir / "test.txt"

def test_read_file(file_utils):
    file_path = file_utils.file_path("test.txt")
    file_path.write_text("hello")
    assert file_utils.read_file("test.txt") == "hello"

def test_read_file_failure(file_utils):
    file_path = file_utils.file_path("test.txt")
    assert file_utils.read_file(file_path) == None

def test_read_file_as_json(file_utils):
    data = {"a": 1, "b": 2}
    path = file_utils.file_path("data.json")
    path.write_text('{"a": 1, "b": 2}')
    result = file_utils.read_file_as_json("data.json")
    assert result == data

def test_write_file_creates_empty_file(file_utils):
    path = file_utils.file_path("newfile.txt")
    file_utils.write_text_absolute_file(str(path), "")
    assert path.exists() and path.read_text() == ""

def test_mkdir_creates_directory(file_utils):
    subdir = "nested/dir"
    file_utils.mkdir(subdir)
    assert file_utils.dir_path(subdir).exists()

def test_list_dir_files(file_utils):
    file_utils.mkdir("docs")
    file_utils.file_path("docs/test1.txt").write_text("A")
    file_utils.file_path("docs/test2.txt").write_text("B")
    files = list(file_utils.list_dir_files("docs", "txt"))
    assert len(files) == 2

def test_save_html_to_file(file_utils):
    html = "<html><body>Hi</body></html>"
    path = file_utils.save_html_to_file(html, "test.html")
    assert path.read_text() == html

def test_find_file_by_name(file_utils):
    file_utils.mkdir("a")
    target = file_utils.file_path("a/target.css")
    target.write_text("body {}")
    found = file_utils.find_file_by_name("a", "target.css")
    assert found == target

def test_iter_files_with_extension(file_utils):
    file_utils.file_path("one.css").write_text("body {}")
    file_utils.file_path("two.css").write_text("body { margin: 0; }")
    files = list(file_utils.iter_files_with_extension(".", "css"))
    assert len(files) == 2

def test_iter_file_contents_with_extension(file_utils):
    file_utils.file_path("one.html").write_text("<h1>One</h1>")
    file_utils.file_path("two.html").write_text("<h1>Two</h1>")
    results = list(file_utils.iter_file_contents_with_extension(".", "html"))
    assert len(results) == 2
    assert all("<h1>" in content for _, content in results)

def test_update_index_file_creates_new_file(file_utils):
    index_path = file_utils.file_path("components/index.ts")
    index_path.parent.mkdir(parents=True, exist_ok=True)
    file_utils.update_index_file(index_path, "Hero")
    assert index_path.exists()
    assert "export * from './Hero';" in index_path.read_text()

def test_update_index_file_appends_if_not_present(file_utils):
    index_path = file_utils.file_path("components/index.ts")
    index_path.parent.mkdir(parents=True, exist_ok=True)
    index_path.write_text("export * from './Button';\n")
    file_utils.update_index_file(index_path, "Hero")
    content = index_path.read_text()
    assert "export * from './Button';" in content
    assert "export * from './Hero';" in content

def test_update_index_file_avoids_duplicates(file_utils):
    index_path = file_utils.file_path("components/index.ts")
    index_path.parent.mkdir(parents=True, exist_ok=True)
    index_path.write_text("export * from './Hero';\n")
    file_utils.update_index_file(index_path, "Hero")
    content = index_path.read_text()
    assert content.count("export * from './Hero';") == 1
