import os

def generate_dashboard_component(module_name: str, base_output_dir: str):
    """Generates a standalone Angular dashboard component for a given module."""
    
    if not module_name:
        print("❌ Module name is required. Skipping dashboard generation.")
        return

    # Convert module name to PascalCase for class name
    class_name = (
        "".join(word.capitalize() for word in module_name.split("-"))
        + "DashboardComponent"
    )
    selector_name = f"sg-{module_name}"

    # Angular component content
    component_template = f"""import {{ Component }} from '@angular/core';

@Component({{
  standalone: true,
  selector: '{selector_name}',
  template: `<h1>{class_name} Dashboard</h1>`,
}})
export class {class_name} {{}}
"""

    # Output directory logic
    module_dir = os.path.join(base_output_dir, module_name)
    os.makedirs(module_dir, exist_ok=True)

    # Write to file
    component_filename = os.path.join(module_dir, f"{module_name}-dashboard.component.ts")
    with open(component_filename, "w") as f:
        f.write(component_template)

    print(f"✅ Created Dashboard Component: {component_filename}")
