import re
import os

def parse_graphql_file(filepath):
    """
    Extracts GraphQL Type and Fields from a `.graphql` file.
    """
    with open(filepath, "r") as f:
        content = f.read()

    type_match = re.search(r"type (\w+) \{([\s\S]+?)\}", content)
    if not type_match:
        return None

    type_name = type_match.group(1)
    field_block = type_match.group(2)

    fields = {}
    for line in field_block.splitlines():
        match = re.match(r"\s*(\w+):\s*([\w!\[\]]+)", line)
        if match:
            field_name, field_type = match.groups()
            fields[field_name] = field_type

    # --- Parse enums ---
    enums = {}
    for enum_match in re.finditer(r"enum (\w+) \{([\s\S]+?)\}", content):
        enum_name = enum_match.group(1)
        enum_values_raw = enum_match.group(2)

        # Clean up enum values
        values = [
            val.strip()
            for val in enum_values_raw.strip().splitlines()
            if val.strip()
        ]
        enums[enum_name] = values

    return type_name, fields, enums

def parse_graphql_directory(directory_path):
    """
    Parses all `.graphql` files in a directory and returns a dict of type_name -> fields
    """
    all_types = {}

    for filename in os.listdir(directory_path):
        if filename.endswith(".graphql"):
            filepath = os.path.join(directory_path, filename)
            result = parse_graphql_file(filepath)
            if result:
                type_name, fields = result
                all_types[type_name] = fields

    return all_types
