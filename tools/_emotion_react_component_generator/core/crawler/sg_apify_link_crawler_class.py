# main.py
import requests
import re
import time
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
from apify import Actor

class SGLinkCrawler:
    def __init__(self, root_url: str):
        self.root_url = urldefrag(root_url)[0]
        self.visited = set()
        self.to_visit = [self.root_url]
        self.stylesheets = set()
        self.scripts = set()
        self.images = set()
        self.links = set()
        self.page_content = {}
        self.template_name = None
        self.time_to_crawl = 0

    def crawl(self, limit: int = 20):
        start = time.time()

        while self.to_visit and len(self.visited) < limit:
            url = self.to_visit.pop(0)
            url = urldefrag(url)[0]

            if url in self.visited:
                continue
            if any(url.lower().endswith(ext) for ext in [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".ico"]):
                continue

            print(f"🌐 Crawling: {url}")
            try:
                headers = {"User-Agent": "SGLinkCrawler/1.0"}
                res = requests.get(url, headers=headers, timeout=10)
                res.raise_for_status()
            except Exception as e:
                print(f"❌ {url} failed: {e}")
                continue

            self.visited.add(url)
            self.page_content[url] = res.text
            soup = BeautifulSoup(res.text, "html.parser")

            if url == self.root_url and not self.template_name:
                if soup.title and soup.title.string:
                    self.template_name = soup.title.string.strip().split()[0]
                else:
                    parsed = urlparse(self.root_url)
                    hostname = parsed.netloc.replace("www.", "").split(":")[0]
                    self.template_name = hostname.replace(".", "-") or "untitled"

            self.stylesheets.update(
                urljoin(url, l.get("href")) for l in soup.find_all("link", rel="stylesheet") if l.get("href")
            )
            self.scripts.update(
                urljoin(url, s.get("src")) for s in soup.find_all("script") if s.get("src")
            )
            self.images.update(
                urljoin(url, i.get("src")) for i in soup.find_all("img") if i.get("src")
            )

            for tag in soup.find_all(style=True):
                matches = re.findall(r'url\([\'"]?(.*?)[\'"]?\)', tag["style"])
                self.images.update(urljoin(url, m) for m in matches)

            new_links = [
                urldefrag(urljoin(url, a.get("href")))[0]
                for a in soup.find_all("a")
                if a.get("href")
            ]

            for link in new_links:
                if link not in self.visited and link.startswith(self.root_url):
                    self.to_visit.append(link)
                    self.links.add(link)

        self.time_to_crawl = round(time.time() - start, 2)

    def get_results(self) -> dict:
        def relative_path(url):
            parsed = urlparse(url)
            return parsed.path.lstrip("/")

        return {
            "pages_visited": list(self.visited),
            "stylesheets": list(self.stylesheets),
            "scripts": list(self.scripts),
            "images": list(self.images),
            "links": list(self.links),
            "relative_paths": {
                "stylesheets": [relative_path(u) for u in self.stylesheets],
                "scripts": [relative_path(u) for u in self.scripts],
                "images": [relative_path(u) for u in self.images],
                "pages": [relative_path(u) for u in self.visited],
            },
            "template_name": self.template_name,
            "time_to_crawl": self.time_to_crawl,
            "page_content": self.page_content
        }

async def main():
    async with Actor:
        input_data = await Actor.get_input() or {}
        root_url = input_data.get("root_url", "https://example.com")
        limit = input_data.get("limit", 20)

        crawler = SGLinkCrawler(root_url)
        crawler.crawl(limit)

        results = crawler.get_results()
        await Actor.push_data(results)
        print(f"🕒 Crawl completed in {results['time_to_crawl']} seconds")
