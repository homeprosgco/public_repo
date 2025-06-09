# import pytest
# import http.server
# import socketserver
# import threading
# import tempfile
# import shutil
# import os
# from pathlib import Path
# from bs4 import BeautifulSoup
# from lxml import html
# from collections import defaultdict
# import sys
# import psutil
# import functools

# sys.path.append(str(Path(__file__).resolve().parents[2]))

# from core.util.file_util.sg_file_util_class import SGFileUtils
# from core.crawler.sg_link_crawler_class import SGLinkCrawler
# from core.archiver.website_archiver import SGWebsiteArchiver
# from core.util.tailwind_color_util.tailwind_color_util import TailwindColorUtil
# from core.component_library.component_library import ComponentLibrary
# from core.emotion_component_generator.emotion_component_generator import EmotionComponentGenerator
# from core.component_emitter.component_emitter import ComponentEmitter
# from core.style_node_tree_builder.style_node_tree_builder import StyleNodeTreeBuilder
# from core.soup_id_coordinator.soup_id_coordinator import SoupIdCoordinator
# from core.css_processor.css_extractor.css_extractor import CSSExtractor
# from core.css_processor.variable_resolver.variable_resolver import CSSVariableResolver
# from core.css_processor.rule_mapper.rule_mapper import CSSRuleMapper
# from core.theme_token_generator.theme_token_generator import ThemeTokenGenerator

# def kill_port_5000():
#     for proc in psutil.process_iter(['pid', 'name']):
#         try:
#             for conn in proc.net_connections(kind='inet'):
#                 if conn.laddr.port == 5000:
#                     print(f"Killing PID {proc.pid} ({proc.name()}) using port 5000")
#                     proc.kill()
#         except (psutil.NoSuchProcess, psutil.AccessDenied):
#             continue

# def start_local_http_server(directory, port=5000):
#     handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(directory))
#     httpd = http.server.HTTPServer(("localhost", port), handler)
#     thread = threading.Thread(target=httpd.serve_forever)
#     thread.daemon = True
#     thread.start()
#     return httpd

# @pytest.mark.end_to_end
# def test_real_site_component_generation(tmp_path: Path):
#     kill_port_5000()
#     site_dir = (Path(__file__).parent / "../test_site_real").resolve()

#     if not site_dir.exists():
#         print(f"📁 Creating test site directory at {site_dir}")
#         site_dir.mkdir(parents=True, exist_ok=True)

#     assert site_dir.exists(), "❌ Test site directory does not exist"

#     temp_project_dir = tmp_path / "project"
#     shutil.copytree(site_dir, temp_project_dir)

#     httpd = start_local_http_server(temp_project_dir, port=5000)
#     base_url = "http://localhost:5000/"

#     template_name = "hmend"

#     fs = SGFileUtils(base_dir=temp_project_dir)
#     fs.mkdir(fs.get_archive_dir())
#     assert fs.get_archive_dir().exists()

#     archiver = SGWebsiteArchiver(fs, base_url=base_url)
    

#     try:
#         crawler = SGLinkCrawler(archiver.get_base_url())
#         crawler.crawl(limit=10)
#         results = crawler.get_results()
#         assert results["template_name"] is not None

#         archiver.set_template_name(results["template_name"])
#         archived = archiver.process_results(results)
#         assert archived

#         archiver.set_template_name(template_name)

#         ordered_css = archiver.get_template_css_order()
#         extractor = CSSExtractor(fs, ordered_css, css_dir=fs.get_template_styles_dir(template_name))
#         resolver = CSSVariableResolver(css_variables=extractor.css_variables)
#         rule_mapper = CSSRuleMapper(selector_extractor=extractor, variable_resolver=resolver)

#         def build_node_tree(soup):
#             soup_id = SoupIdCoordinator()
#             target = soup.body or soup
#             soup_id.assign_ids(target)
#             rule_map = rule_mapper.build_rule_map(target)
#             dom = html.fromstring(str(target))
#             node_tree = StyleNodeTreeBuilder.html_to_node_tree_from_lxml(dom)
#             StyleNodeTreeBuilder.apply_styles_to_node_tree(node_tree, rule_map["rule_map"])
#             return node_tree

#         tw_util = TailwindColorUtil()
#         index_path = archiver.get_index_html_path()
#         soup = BeautifulSoup(fs.read_file(index_path), "html.parser")
#         tree = build_node_tree(soup)
#         theme = ThemeTokenGenerator(tree, tw_util).theme()

#         component_library = ComponentLibrary(fs, theme)
#         emitter = ComponentEmitter(EmotionComponentGenerator(), component_library)
#         emitter.emit_single_component_tsx(tree, template_name)

#         # ✅ ASSERT: Check if component TSX files exist
#         output_dir = fs.get_generated_templates_dir(template_name)
#         tsx_files = list(output_dir.rglob("*.tsx"))
#         assert tsx_files, "❌ No TSX files were generated"
#         print(f"✅ Generated {len(tsx_files)} components in: {output_dir}")

#     finally:
#         httpd.shutdown()