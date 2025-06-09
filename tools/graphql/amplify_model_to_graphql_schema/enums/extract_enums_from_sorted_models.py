import re
import json

input_file = "aws_models.txt"         # Path to your source file
output_file = "enums_output.json"        # Output destination

# Regex to match: EnumName: a.enum(['val1', 'val2', ...])
enum_pattern = re.compile(r"(\w+)\s*:\s*a\.enum\(\s*\[([^\]]+)\]\s*\)")

# Store extracted enums
enum_dict = {}

with open(input_file, "r") as f:
    for line in f:
        match = enum_pattern.search(line)
        if match:
            enum_name = match.group(1)
            values_str = match.group(2)
            values = [v.strip().strip("'\"") for v in values_str.split(",")]
            enum_dict[enum_name] = values

# Save as JSON-style Python dictionary
with open(output_file, "w") as f:
    json.dump(enum_dict, f, indent=2)

print(f"✅ Extracted {len(enum_dict)} enums to {output_file}")
