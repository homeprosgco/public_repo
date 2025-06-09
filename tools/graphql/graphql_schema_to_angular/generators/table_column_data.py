import os
import re
from graphql_schema_to_angular.utils.case_utils import split_and_hyphenate


def generate_column_data_type(type_name, interface_dir, column_dir):
    """
    Generates a TypeScript column configuration based on an existing interface.
    """
    os.makedirs(columns_config_dir, exist_ok=True)
    # File paths
    interface_filename = f"{interface_dir}/{split_and_hyphenate(type_name)}.interface.ts"
    column_filename = f"{column_dir}/{split_and_hyphenate(type_name)}-columns.ts"

    # Ensure the interface exists
    if not os.path.exists(interface_filename):
        print(f"⚠️ Interface {interface_filename} not found. Skipping column generation.")
        return

    # Read the existing interface file
    with open(interface_filename, "r") as f:
        interface_content = f.readlines()

    # Regex to extract field names and types from the interface
    field_pattern = re.compile(r"^\s*(\w+):\s*([\w\[\]]+);")

    column_definitions = []

    for line in interface_content:
        match = field_pattern.match(line)
        if match:
            field_name, ts_type = match.groups()

            # ✅ Convert field name to PascalCase Header
            pascal_case_header = " ".join(
                word.capitalize() for word in re.split(r'(?=[A-Z])', field_name)
            ).strip()

            # ✅ Determine column type
            column_type = "text"
            if ts_type == "number":
                column_type = "number"
            elif ts_type == "boolean":
                column_type = "boolean"
            elif ts_type == "string":
                if "date" in field_name.lower() or "time" in field_name.lower():
                    column_type = "date"
            elif "[]" in ts_type:
                column_type = "array"

            # ✅ Add the column definition
            column_definitions.append(
                f'  {{ field: "{field_name}", header: "{pascal_case_header}", type: "{column_type}" }}'
            )

    # ✅ Convert type name to SCREAMING_SNAKE_CASE
    constant_name = "_".join(re.findall('[A-Z][^A-Z]*', type_name)).upper() + "_COLUMNS"

    # ✅ Create TypeScript column configuration file
    column_content = f"export const {constant_name} = [\n"
    column_content += ",\n".join(column_definitions)
    column_content += "\n];\n"

    # ✅ Write the column file
    with open(column_filename, "w") as f:
        f.write(column_content)

    print(f"✅ Created {column_filename}")