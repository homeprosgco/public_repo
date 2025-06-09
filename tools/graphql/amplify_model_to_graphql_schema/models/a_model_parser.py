import re
from typing import Dict, Any
from amplify_model_to_graphql_schema.models.amplify_helpers import a, AmplifyField, EnumRegistry


def extract_models(js_text: str) -> Dict[str, Dict[str, Any]]:
  """
  Extracts multiple AWS Amplify models from JavaScript-style object notation.

  :param js_text: JavaScript-like AWS Amplify model definitions as a string.
  :return: Dictionary {model_name: model_fields}
  """
  models = {}

  # Find all model definitions (modelName: a.model({...}))
  model_matches = re.finditer(
      r"(\w+)\s*:\s*a\.model\(\s*\{([\s\S]+?)\}\s*\)", js_text
  )

  for match in model_matches:
      model_name = match.group(1)
      model_content = match.group(2)

      # Remove single-line comments
      model_content = re.sub(r"\s*//.*", "", model_content)

      # Convert JavaScript-style keys to Python dictionary keys
      model_content = re.sub(r"(\b[a-zA-Z_]\w*)\s*:", r'"\1":', model_content)

      # Convert JS Boolean `true` -> Python `True`, `false` -> Python `False`, `null` -> `None`
      model_content = (
          model_content.replace("true", "True")
          .replace("false", "False")
          .replace("null", "None")
      )

      # Fix function calls and `.required()` handling
      model_content = re.sub(r"(\.required\(\))", "", model_content)

      # Fix potential trailing commas
      model_content = re.sub(r",\s*([\}\]])", r"\1", model_content)

      # Convert to a valid Python dictionary
      try:
          amplify_model = eval(
              f"{{{model_content}}}",
              {
                  "a": a,
                  "belongsTo": a.belongsTo,
                  "hasMany": a.hasMany,
                  "hasOne": a.hasOne,
                  "ref": a.ref,
                  "id": a.id,
                  "string": a.string,
                  "float": a.float,
                  "integer": a.integer,
                  "boolean": a.boolean,
                  "datetime": a.datetime,
                  "date": a.date,
                  "json": a.json,
                  "email": a.email,
                  "url": a.url,
                  "enum": a.enum,
                  "phone": a.phone,
                  "mutation": a.mutation,
                  "query": a.query,
              },
          )
      except SyntaxError as e:
          raise ValueError(f"Syntax Error in model conversion: {e}")

      models[model_name] = amplify_model

  return models
