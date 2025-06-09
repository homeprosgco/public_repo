import re

# Read the input file
input_file = "aws_models.txt"  # Change this to the actual file path
output_file = "updated_models.txt"

# Read the file content
with open(input_file, "r", encoding="utf-8") as file:
    content = file.read()

# Regular expression to find models
model_pattern = re.compile(r'([a-zA-Z0-9]+):\s*a\.model\((\{.*?\})\)', re.DOTALL)

def add_timestamps(model_definition):
    """Add created and updated attributes if not already present."""
    if "created:" not in model_definition and "updated:" not in model_definition:
        model_definition = model_definition.rstrip(" }") + "\n  created: a.datetime(),\n  updated: a.datetime()\n}"
    return model_definition

# Process each model and update its definition
updated_content = content
for match in model_pattern.finditer(content):
    model_name, model_def = match.groups()
    updated_model_def = add_timestamps(model_def)
    updated_content = updated_content.replace(match.group(0), f"{model_name}: a.model({updated_model_def})")

# Save the updated content to a new file
with open(output_file, "w") as file:
    file.write(updated_content)

print(f"Updated models saved to {output_file}")
