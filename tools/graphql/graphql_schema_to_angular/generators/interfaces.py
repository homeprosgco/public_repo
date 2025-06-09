import os
from graphql_schema_to_angular.utils.case_utils import split_and_hyphenate

def generate_interface(type_name, fields, interface_dir):
    """
    Generates TypeScript Interface for the GraphQL Type.
    """
    interface_filename = f"{interface_dir}/{split_and_hyphenate(type_name)}.interface.ts"

    ts_types = {
        "Float": "number",
        "Int": "number",
        "Boolean": "boolean",
        "AWSDateTime": "string",
    }

    # Create the main interface for the GraphQL type
    interface_content = f"export interface {type_name} {{\n"
    for field, gql_type in fields.items():
        ts_type = ts_types.get(gql_type.replace("!", ""), "string")
        if gql_type.startswith("["):
            ts_type += "[]"
        interface_content += f"  {field}: {ts_type};\n"
    interface_content += "}\n"

    # Write the main interface file
    os.makedirs(interface_dir, exist_ok=True)
    with open(interface_filename, "w") as f:
        f.write(interface_content)
    print(f"✅ Created {interface_filename}")


def generate_response_interface(type_name, interface_dir):
    os.makedirs(interface_dir, exist_ok=True)
    response_filename = f"{interface_dir}/{split_and_hyphenate(type_name)}-responses.interface.ts"

    response_content = (
        f"import {{ {type_name} }} from './{split_and_hyphenate(type_name)}.interface';\n\n"
        f"export interface Delete{type_name}Response {{\n"
        f"    delete{type_name}: {{ id: string }};\n"
        f"}}\n\n"
        f"export interface Put{type_name}Response {{\n"
        f"    put{type_name}: {type_name};\n"
        f"}}\n\n"
        f"export interface Get{type_name}Response {{\n"
        f"    get{type_name}: {type_name};\n"
        f"}}\n\n"
        f"export interface Query{type_name}sResponse {{\n"
        f"    query{type_name}s: {{ items: {type_name}[]; nextToken?: string }};\n"
        f"}}\n\n"
        f"export interface Update{type_name}Response {{\n"
        f"    update{type_name}: {type_name};\n"
        f"}}\n\n"
        f"export interface OnPut{type_name}Response {{\n"
        f"    onPut{type_name}: {type_name};\n"
        f"}}\n"
    )

    with open(response_filename, "w") as f:
        f.write(response_content)
    print(f"✅ Created {response_filename}")
