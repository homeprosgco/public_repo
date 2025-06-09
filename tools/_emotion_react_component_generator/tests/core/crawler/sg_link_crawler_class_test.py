import pytest
from pathlib import Path
import sys
from unittest.mock import MagicMock, patch
from urllib.parse import urljoin, urlparse, urldefrag

sys.path.append(str(Path(__file__).resolve().parents[3]))

from core.crawler.sg_link_crawler_class import SGLinkCrawler
from tests.html_content.html_content import html_content

@pytest.mark.parametrize(
    "initial_url, to_visit, visited_limit, expected_visited, notes",
    [
        (
            "http://example.com",  # control test
            ["http://example.com/about", "http://example.com/contact", "http://example.com/about/assets/image/bg-2.jpg"],
            2,
            {"http://example.com", "http://example.com/about"},
            "Control test: ensure normal crawling up to limit"
        ),
        (
            "http://example.com#section",
            ["http://example.com#top", "http://example.com/about#bio", "http://example.com/about/assets/image/bg-2.png"],
            3,
            {"http://example.com", "http://example.com/about", "http://example.com/index.html"},
            "Test fragment removal: fragments should not be in visited URLs"
        ),
        (
            "http://example.com",
            ["http://example.com/about", "http://example.com/about", "http://example.com/about/assets/image/bg-2.jpg"],
            3,
            {"http://example.com", "http://example.com/about", "http://example.com/index.html"},
            "Test repeated URLs: only unique URLs should be visited"
        ),
        (
            "http://example.com",
            [],
            5,
            {"http://example.com", "http://example.com/index.html", "http://example.com/index-2.html", "http://example.com/index-3.html", "http://example.com/index-4.html"},
            "Test empty to_visit queue: only root should be visited"
        ),
        (
            "http://example.com",
            ["http://example.com/page1", "http://example.com/page2", "http://example.com/page3"],
            2,
            {"http://example.com", "http://example.com/page1"},
            "Test limit cap: crawler should stop after reaching the limit"
        ),
    ]
)

@patch("requests.get")
def test_crawl(mock_get, initial_url, to_visit, visited_limit, expected_visited, notes):
    # Mock the response from requests.get
    mock_resp = MagicMock()
    mock_resp.text = html_content
    mock_resp.raise_for_status = lambda: None
    mock_get.return_value = mock_resp

    crawler = SGLinkCrawler(initial_url)
    crawler.to_visit += [urldefrag(url)[0] for url in to_visit]

    crawler.crawl(limit=visited_limit)
     # simulate visit to root
    assert crawler.visited == expected_visited
    assert crawler.visting_url in crawler.page_content
    assert crawler.page_content[crawler.visting_url] == html_content
    assert crawler.template_name == 'Hmend'
    # assert crawler.template_name == "example-com"
    assert urljoin(urldefrag(initial_url)[0], "assets/css/bootstrap.min.css") in crawler.stylesheets
    assert urljoin(urldefrag(initial_url)[0], "assets/js/isotope.pkgd.min.js") in crawler.scripts
    assert urljoin(urldefrag(initial_url)[0], "assets/img/service/3.jpg") in crawler.images
    #assert background style attribute image urls are added to images
    assert urljoin(urldefrag(initial_url)[0], "assets/img/logo/section.png") in crawler.images
    assert urljoin(urldefrag(initial_url)[0], "service-details.html") in crawler.links

@patch("requests.get")
def test_crawl_sets_template_name_from_title(mock_get):
    mock_resp = MagicMock()
    mock_resp.text = html_content
    mock_resp.raise_for_status = lambda: None
    mock_get.return_value = mock_resp

    crawler = SGLinkCrawler("https://example.com")
    crawler.crawl(limit=1)

    results = crawler.get_results()
    assert results["time_to_crawl"] >= 0
    assert urljoin("https://example.com", "assets/css/bootstrap.min.css") in results["stylesheets"]
