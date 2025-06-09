# amplify_model_to_graphql_schema/generator/utils.py

def pluralize(name: str) -> str:
    if name.endswith("y") and name[-2] not in "aeiou":
        return name[:-1] + "ies"  # e.g. Property -> Properties
    elif name.endswith(("s", "sh", "ch", "x", "z")):
        return name + "es"        # e.g. Class -> Classes
    else:
        return name + "s"         # e.g. Job -> Jobs

def format_args(args_dict):
    return ', '.join(f"{k}: {v.field_type}" for k, v in args_dict.items())
