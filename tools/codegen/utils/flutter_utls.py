def scaffold_flutter_template_dirs(base_path: str = "tools/scripts/python/codegen/templates/flutter"):
    from pathlib import Path

    structure = [
        "datasources",
        "models",
        "mutations",
        "subscriptions",
        "repositories",
        "usecases",
    ]

    for folder in structure:
        path = Path(base_path) / folder
        path.mkdir(parents=True, exist_ok=True)
        print(f"📁 Ensured template dir exists: {path}")

def write_starter_template(template_path: Path, starter_content: str):
    if not template_path.exists():
        template_path.write_text(starter_content.strip())
        print(f"📝 Created starter template: {template_path}")
