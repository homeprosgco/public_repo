import os
from typing import Dict, Tuple, List
from amplify_model_to_graphql_schema.models.amplify_helpers import AmplifyOperation
from amplify_model_to_graphql_schema.generator.utils import pluralize, format_args

def generate_root_type(name: str, fields: List[Tuple[str, AmplifyOperation]]):
  output = f"type {name} {{\n"
  for fname, op in fields:
      args_str = format_args(op._args)
      return_type = op._returns.field_type
      directive = ' @aws_cognito(groupClaim: "cognito:groups", groups: ["SuperAdmin"])' if getattr(op, "_is_admin", False) else ""
      output += f"  {fname}({args_str}): {return_type}{directive}\n"
  output += "}\n"
  return output


def generate_admin_queries(models: dict) -> str:
    lines = ["type Query {"]
    for model_name, fields in models.items():
        if not isinstance(fields, dict):  # Skip enums and operations
            continue
        plural_name = pluralize(model_name)
        query_name = f"getAll{plural_name}"
        lines.append(f"  {query_name}: [{model_name}] @aws_cognito(groupClaim: \"cognito:groups\", groups: [\"SuperAdmin\"])")
    lines.append("}")
    return "\n".join(lines)


def write_root_schema(models: Dict[str, any], output_dir: str):
    query_fields = []
    mutation_fields = []

    for name, definition in models.items():
        if isinstance(definition, AmplifyOperation):
            if definition.op_type == "query":
                query_fields.append((name, definition))
            elif definition.op_type == "mutation":
                mutation_fields.append((name, definition))

    root_sections = []
    if query_fields:
        root_sections.append(generate_root_type("Query", query_fields))
    if mutation_fields:
        root_sections.append(generate_root_type("Mutation", mutation_fields))

    # Write Query and Mutation types
    root_path = os.path.join(output_dir, "Root.graphql")
    with open(root_path, "w") as f:
        f.write("\n\n".join(root_sections))

    # Generate and append admin queries
    admin_block = generate_admin_queries(models)
    with open(root_path, "a") as f:
        f.write("\n\n" + admin_block)

    print("✅ Root.graphql written with queries, mutations, and admin queries.")

