import os
from typing import Dict, Any
from amplify_model_to_graphql_schema.models.amplify_helpers import AmplifyField, EnumRegistry
from amplify_model_to_graphql_schema.generator.utils import pluralize


def amplify_to_graphql(model_name: str, model_fields: Dict[str, AmplifyField], global_enums: Dict[str, list[str]] = None) -> str:
    global_enums = global_enums or {}
    local_enums = {}
    type_def = f"type {model_name} {{\n"
    create_input = f"input Create{model_name}Input {{\n"
    update_input = f"input Update{model_name}Input {{\n  id: ID!\n"
    soft_delete_input = f"input SoftDelete{model_name}Input {{\n  id: ID!\n}}\n"

    print(global_enums)

    for field, field_obj in model_fields.items():
        if not isinstance(field_obj, AmplifyField):
            continue

        gql_type = field_obj.field_type

        

        # Check if this is a known enum (in global registry)
        if gql_type in global_enums:
            print(gql_type)
            gql_type = gql_type
            local_enums[gql_type] = EnumRegistry.get(gql_type)
            
        elif field_obj.enum_values:
            # Define inline if not globally registered
            gql_type = gql_type
            local_enums[gql_type] = field_obj.enum_values

        if field_obj.is_array:
            gql_type = f"[{gql_type}]"

        if field_obj.is_reference and field_obj.relationship_type:
            directive = f" @{field_obj.relationship_type}"
        else:
            directive = ""

        if field_obj.is_required:
            gql_type += "!"

        type_def += f"  {field}: {gql_type}{directive}\n"

        if field != "id":
            create_input += f"  {field}: {gql_type}\n"
            update_input += f"  {field}: {gql_type}\n"

    # Append isDeleted if not present
    if "isDeleted" not in model_fields:
        type_def += "  isDeleted: Boolean!\n"
        create_input += "  isDeleted: Boolean = false\n"
        update_input += "  isDeleted: Boolean\n"

    type_def += "}\n"
    create_input += "}\n"
    update_input += "}\n"

    # Merge all enums (local + global)
    enum_defs = "\n".join(
        f"enum {name} {{\n  " + "\n  ".join(values) + "\n}" for name, values in local_enums.items()
    )

    filter_input = f"""
input {model_name}FilterInput {{
  field: String
  value: String
  operator: String
}}"""

    queries = f"""
type Query {{
  get{model_name}(id: ID!): {model_name}
  query{pluralize(model_name)}(
    limit: Int, 
    nextToken: String, 
    includeDeleted: Boolean = false,
    filters: {model_name}FilterInput
  ): [{model_name}]
}}"""

    mutations = f"""
type Mutation {{
  put{model_name}(input: Create{model_name}Input!): {model_name}
  update{model_name}(input: Update{model_name}Input!): {model_name}
  softDelete{model_name}(input: SoftDelete{model_name}Input!): {model_name}
  delete{model_name}(id: ID!): {model_name}
}}"""

    subscriptions = f"""
type Subscription {{
  onPut{model_name}: {model_name} @aws_subscribe(mutations: ["put{model_name}"])
  onUpdate{model_name}: {model_name} @aws_subscribe(mutations: ["update{model_name}"])
  onSoftDelete{model_name}: {model_name} @aws_subscribe(mutations: ["softDelete{model_name}"])
}}"""

    return (
        enum_defs
        + "\n"
        + type_def
        + create_input
        + update_input
        + soft_delete_input
        + filter_input
        + queries
        + mutations
        + subscriptions
    )
