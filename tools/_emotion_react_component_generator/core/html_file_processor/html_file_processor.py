from typing import Callable
from bs4 import BeautifulSoup
from pathlib import Path

def process_html_files(archiver, limit: int, callback: Callable[[Path, BeautifulSoup], None]):
    """
    Iterates over HTML files under 'pages' directory and invokes the callback
    with file path and parsed BeautifulSoup object, up to `limit` files.

    Args:
        fs (SGFileUtils): File utility instance.
        limit (int): Max number of files to process.
        callback (Callable): Function taking (Path, BeautifulSoup).
    """
    count = 0
    
    for file_path, html_content in archiver.iterate_html_files():
        if not html_content:
            continue  # skip empty or unreadable files

        try:
            soup = BeautifulSoup(html_content, "html.parser")
        except Exception as e:
            print(f"⚠️ Failed to parse {file_path}: {e}")
            continue

        callback(file_path, soup)
        count += 1

        if count >= limit:
            break
