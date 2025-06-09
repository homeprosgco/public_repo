import re

def extract_models(text):
    pattern = r'(\w+):\s*a\.model\((\{.*?\})\)'
    matches = re.findall(pattern, text, re.DOTALL)
    return matches  # List of (ModelName, modelBody)

def sort_models_by_name(models):
    return sorted(models, key=lambda x: x[0])

def format_models(models):
    return '\n\n'.join(f'{name}: a.model({body})' for name, body in models)

def sort_model_definitions(input_file, output_file):
    with open(input_file, 'r') as f:
        content = f.read()

    models = extract_models(content)
    sorted_models = sort_models_by_name(models)
    formatted_output = format_models(sorted_models)

    with open(output_file, 'w') as f:
        f.write(formatted_output)

# Example usage
sort_model_definitions('aws_models.txt', 'sorted_models.txt')
