import sys
import os
from pathlib import Path
from lxml import html
from collections import defaultdict

base_dir = Path(__file__).resolve().parent
sys.path.append(str(base_dir))

from core.util.file_util.sg_file_util_class import *
from core.crawler.sg_link_crawler_class import *
from core.archiver.website_archiver import *
from core.css_processor.css_extractor.css_extractor import *
from core.css_processor.variable_resolver.variable_resolver import *
from core.css_processor.rule_mapper.rule_mapper import *
from core.soup_id_coordinator.soup_id_coordinator import *

from core.util.print_util.print_util import *
from core.html_file_processor.html_file_processor import *
from core.style_node_tree_builder.style_node_tree_builder import *
from core.util.tailwind_color_util.tailwind_color_util import *
from core.theme_token_generator.theme_token_generator import *
from core.emotion_component_generator.emotion_component_generator import *
from core.component_emitter.component_emitter import *
from core.component_library.component_library import *


if __name__ == "__main__":
    initial_url = 'https://htmldemo.net/hmend/hmend/'
    setup_project_files = False
    crawl_limit = 20
    results = defaultdict(dict)
    archived = True
    
    if setup_project_files:
        crawler = SGLinkCrawler(initial_url)
        crawler.crawl(limit=crawl_limit)
        results = crawler.get_results()

    template_name = results.get("template_name", "hmend")

    if template_name:
        fs = SGFileUtils(base_dir=base_dir)
        archiver = SGWebsiteArchiver(fs)
        archiver.set_template_name(template_name)
        if not archived:
            archived = archiver.process_results(results)

        if archived:
            soup_id_coordinator = SoupIdCoordinator()

            def build_node_tree(soup: BeautifulSoup):
                target = soup.body or soup
                soup_id_coordinator.assign_ids(target)
                rule_map = rule_mapper.build_rule_map(target)
                html_with_el_ids = str(target)
                dom = html.fromstring(html_with_el_ids)
                node_tree = StyleNodeTreeBuilder.html_to_node_tree_from_lxml(dom)
                StyleNodeTreeBuilder.apply_styles_to_node_tree(node_tree, rule_map['rule_map'], archiver)

                return node_tree

            ordered_css = archiver.get_template_css_order()
            extractor = CSSExtractor(
                file_utils=fs, 
                css_paths=ordered_css, 
                css_dir=archiver.template_assets_dir()
            )
            resolver = CSSVariableResolver(css_variables=extractor.css_variables)
            rule_mapper = CSSRuleMapper(selector_extractor=extractor, variable_resolver=resolver)

            tw_color_util = TailwindColorUtil()
            template_index_path = archiver.get_index_html_path()

            if not template_index_path:
                raise FileNotFoundError("❌ Could not find index.html or fallback HTML file.")
            
            soup = BeautifulSoup(fs.read_file(template_index_path), "html.parser")
            tree = build_node_tree(soup)
            theme = ThemeTokenGenerator(tree, tw_color_util).theme()

            component_library = ComponentLibrary(archiver, theme)
            emotion_component_generator = EmotionComponentGenerator(component_library)
            component_emitter = ComponentEmitter(generator=emotion_component_generator)
            
            def handle_html_file(path, soup):
                print(f"📄 {path.name}")
                node_tree = build_node_tree(soup)
                StyleNodeTreeBuilder.replace_theme_values_in_node_tree(node_tree, theme)
                template_page = path.stem.replace('-', '_')
                component_emitter.annotate_node_with_used_components(node_tree)
                top_level_component = component_emitter.emit_single_component_tsx(node_tree, template_name, template_page, diagnostic=True)
                # print(top_level_component)
                # component_emitter.emit_page_component_tsx(template_name)

            process_html_files(archiver, limit=1, callback=handle_html_file)
