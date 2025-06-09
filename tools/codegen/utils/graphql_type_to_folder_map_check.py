import os
import re
from config.directory_maps import FOLDER_MAP

def extract_type_names_from_file(file_path):
    with open(file_path, "r") as f:
        content = f.read()
    return re.findall(r"type (\w+)\s*{", content)

def find_all_graphql_types(schema_dir):
    type_names = set()
    for root, _, files in os.walk(schema_dir):
        for file in files:
            if file.endswith(".graphql"):
                file_path = os.path.join(root, file)
                types = extract_type_names_from_file(file_path)
                type_names.update(types)
    return type_names

def find_missing_folder_map_types(schema_dir):
    all_graphql_types = find_all_graphql_types(schema_dir)
    mapped_types = set(FOLDER_MAP.keys())

    missing_types = sorted(all_graphql_types - mapped_types)

    if missing_types:
        print("\n❗ Missing type mappings in FOLDER_MAP:")
        for type_name in missing_types:
            print(f" - {type_name}")
        print("\n📦 Suggested additions:")
        for type_name in missing_types:
            print(f'    "{type_name}": "<target-folder>",')
    else:
        print("✅ All GraphQL types are present in FOLDER_MAP.")
