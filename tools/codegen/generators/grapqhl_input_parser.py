import re


def parse_input_definitions(schema_dir):
    input_types = {}
    pattern = r'input\s+(\w+)\s*{([^}]+)}'

    for root, _, files in os.walk(schema_dir):
        for file in files:
            if file.endswith(".graphql"):
                with open(os.path.join(root, file), "r") as f:
                    content = f.read()
                    for match in re.finditer(pattern, content, re.MULTILINE | re.DOTALL):
                        input_name = match.group(1)
                        body = match.group(2)
                        fields = {}
                        for line in body.strip().splitlines():
                            parts = line.strip().split(":")
                            if len(parts) == 2:
                                name = parts[0].strip()
                                gql_type = parts[1].strip().replace("!", "")
                                fields[name] = gql_type
                        input_types[input_name] = fields

    return input_types
