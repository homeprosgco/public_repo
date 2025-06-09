import re

def split_and_hyphenate(text):
    """
    Detects capital letters in a PascalCase or camelCase string,
    splits them, and adds hyphens to convert them into kebab-case.
    """
    return re.sub(r"(?<!^)(?=[A-Z])", "-", text).lower()


def to_pascal_case(text):
    """Convert a string to PascalCase"""
    return "".join(word.capitalize() for word in text.replace("-", "_").split("_"))


def to_kebab_case(text):
    """Convert a string to kebab-case"""
    return text.replace("_", "-").lower()


def to_camel_case(text):
    """
    Converts a kebab-case (hyphenated) string to camelCase.
    Removes hyphens and capitalizes the next character, keeping the first letter lowercase.
    """
    parts = text.split("-")
    return parts[0].lower() + "".join(word.capitalize() for word in parts[1:])


def to_data_case(text, query=False):
    # Convert first letter to lowercase
    camel_case_text = text[0].lower() + text[1:]

    # Append 's' for pluralization if query is True
    return camel_case_text + "s" if query else camel_case_text

def camel_case_to_title(field_name):
    """Converts camelCase or PascalCase field names into Title Case."""
    return re.sub(r'([a-z])([A-Z])', r'\1 \2', field_name).title()

def pluralize(name: str) -> str:
    if name.endswith("y") and name[-2] not in "aeiou":
        return name[:-1] + "ies"  # e.g. Property -> Properties
    elif name.endswith(("s", "sh", "ch", "x", "z")):
        return name + "es"        # e.g. Class -> Classes
    else:
        return name + "s"         # e.g. Job -> Jobs

def format_args(args_dict):
    return ', '.join(f"{k}: {v.field_type}" for k, v in args_dict.items())



