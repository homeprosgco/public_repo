# import sys
import os
# sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../..")))

from amplify_model_to_graphql_schema.models.a_model_parser import extract_models
from amplify_model_to_graphql_schema.generator.graphql_builder import amplify_to_graphql
from amplify_model_to_graphql_schema.generator.root_generator import write_root_schema
from amplify_model_to_graphql_schema.models.amplify_helpers import EnumRegistry
import json

# 📌 Path setup
current_dir = os.path.dirname(os.path.abspath(__file__))
input_path = os.path.join(current_dir, "aws_models.txt")
output_dir = os.path.join(current_dir, "graphql")
os.makedirs(output_dir, exist_ok=True)

# 📥 Load and extract models
with open(input_path, "r") as f:
    js_models = f.read()

models = extract_models(js_models)

# 🔁 Inject inverse belongsTo relationships
for source_model, fields in models.items():
    if not isinstance(fields, dict):
        continue

    for field_name, field_def in fields.items():

        if getattr(field_def, "relationship_type", None) in ["hasMany", "hasOne"]:
            target_model = field_def.field_type
            inverse_field = source_model.lower()
            target_fields = models.get(target_model)

            if target_fields is None:
                print(f"⚠️ Target model '{target_model}' not found.")
                continue

            already_linked = any(
                f.relationship_type == "belongsTo" and f.field_type == source_model
                for f in target_fields.values()
                if hasattr(f, "relationship_type")
            )
            if not already_linked:
                print(f"🔁 Adding belongsTo('{source_model}') to '{target_model}.{inverse_field}'")
                target_fields[inverse_field] = field_def.__class__(
                    source_model
                ).with_relationship("belongsTo")

with open("enums/enums_output.json") as f:
    for enum_name, values in json.load(f).items():
        EnumRegistry.register(enum_name, values)         

global_enums = EnumRegistry.all()

# 📦 Generate .graphql schema files
for model_name, model_fields in models.items():
    if not isinstance(model_fields, dict):
        continue
    gql_schema = amplify_to_graphql(model_name, model_fields, global_enums)
    with open(os.path.join(output_dir, f"{model_name}.graphql"), "w") as f:
        f.write(gql_schema)
    print(f"✅ Saved schema: {model_name}.graphql")

# 🧠 Generate Root.graphql (Query/Mutation/Admin Queries)
write_root_schema(models, output_dir)
