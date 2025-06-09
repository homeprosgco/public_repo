import sys
import os
import re

def to_pascal_case(text):
    """ Convert a string to PascalCase """
    return "".join(word.capitalize() for word in text.replace("-", "_").split("_"))

def to_kebab_case(text):
    """ Convert a string to kebab-case """
    return text.replace("_", "-").lower()

def to_camel_case(text):
    """
    Converts a kebab-case (hyphenated) string to camelCase.
    Removes hyphens and capitalizes the next character, keeping the first letter lowercase.
    """
    parts = text.split('-')
    return parts[0].lower() + ''.join(word.capitalize() for word in parts[1:])

def split_and_hyphenate(text):
    """
    Detects capital letters in a PascalCase or camelCase string,
    splits them, and adds hyphens to convert them into kebab-case.
    """
    return re.sub(r'(?<!^)(?=[A-Z])', '-', text).lower()

def to_data_case(text, query=False):
         # Convert first letter to lowercase
    camel_case_text = text[0].lower() + text[1:]

    # Append 's' for pluralization if query is True
    return camel_case_text + "s" if query else camel_case_text

def generate_naming(component_dir, type_name, component_type, subdir):
    """
    Generates correct Angular component naming outputs.
    """

    pascal_case_type = to_pascal_case(type_name)  # WorkRequest → WorkRequest
    pascal_case_component = to_pascal_case(component_type)  # on-put → OnPut
    kebab_case_type = to_kebab_case(type_name)  # WorkRequest → work-request
    kebab_case_component = to_kebab_case(component_type)  # on-put → on-put

    # CamelCase for Injected Service Variable
    camel_case_component = to_camel_case(component_type) + type_name  # onPutWorkRequest
    plural_type_name = type_name + "s" if component_type == "query" else type_name

    # Construct filenames & paths
    component_filename = f"{component_dir}/{subdir}/{kebab_case_component}-{split_and_hyphenate(type_name)}.component.ts"
    service_name = f"{pascal_case_component}{type_name}GQL"
    class_name = f"{pascal_case_component}{type_name}"
    component_selector = f"sg-{kebab_case_component}-{split_and_hyphenate(type_name)}"

    # Print the generated outputs
    print("\n🚀 **Generated Outputs** 🚀\n")
    print(f"✅ **Component File Path:**   {component_filename}")
    print(f"✅ **Service Name:**          {service_name}")
    print(f"✅ **Injected Service Name:** {camel_case_component}")
    print(f"✅ **Component ClassName:**    {class_name}")
    print(f"✅ **Prop Name:**    {to_data_case(type_name)}")
    print(f"✅ **Component Selector:**    {component_selector}\n")

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: python3 naming.py <component_dir> <type_name> <component_type> <subdir>")
        sys.exit(1)

    component_dir = sys.argv[1]
    type_name = sys.argv[2]
    component_type = sys.argv[3]
    subdir = sys.argv[4]

    generate_naming(component_dir, type_name, component_type, subdir)



# ./features/work-requests/components WorkRequest on-put on_put_component
