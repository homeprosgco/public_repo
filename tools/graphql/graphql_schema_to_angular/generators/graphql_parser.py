import re

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

    return type_name, fields
