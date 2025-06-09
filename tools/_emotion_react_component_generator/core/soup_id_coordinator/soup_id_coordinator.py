from bs4 import BeautifulSoup, Tag
import hashlib
from typing import Union
import uuid

class SoupIdCoordinator:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(SoupIdCoordinator, cls).__new__(cls)
        return cls._instance

    def assign_ids(self, soup: BeautifulSoup):
        def _assign(tag: Tag):
            if isinstance(tag, Tag):
                if not tag.has_attr("data-el-id"):
                    tag["data-el-id"] = str(uuid.uuid4())

                for child in tag.children:
                    if isinstance(child, Tag):  # ✅ important filter
                        _assign(child)

        _assign(soup)
