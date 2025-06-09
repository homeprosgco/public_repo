import pytest
from pathlib import Path
import sys
from bs4 import BeautifulSoup

sys.path.append(str(Path(__file__).resolve().parents[3]))

from core.soup_id_coordinator.soup_id_coordinator import SoupIdCoordinator

def test_assign_ids_unique_and_present():
    html = """
    <html>
        <body>
            <div>
                <p>Hello</p>
                <span>World</span>
            </div>
        </body>
    </html>
    """
    soup = BeautifulSoup(html, "html.parser")

    coordinator = SoupIdCoordinator()
    coordinator.assign_ids(soup)

    # Extract all tags
    all_tags = soup.select("*")

    # Ensure all tags have data-el-id
    ids = [tag.get("data-el-id") for tag in all_tags]

    assert all(id_ is not None for id_ in ids), "All tags should have data-el-id"
    assert len(ids) == len(set(ids)), "All data-el-ids should be unique"
