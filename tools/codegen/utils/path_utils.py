import os
import glob
from generators.graphql_parser import parse_graphql_file

def parse_graphql_directory(directory_path):
    """
    Processes all `.graphql` files in a directory and extracts types and fields.
    """
    results = {}

    for filepath in glob.glob(os.path.join(directory_path, "*.graphql")):
        result = parse_graphql_file(filepath)
        if result:
            type_name, fields = result
            results[type_name] = fields
        else:
            print(f"⚠️ No valid type definition found in: {filepath}")

    return results