import os
from pathlib import Path
from graphql_schema_to_angular.config.directory_maps import service_directory_map, component_directory_map

# Recursively generate barrel files (`index.ts`)
def generate_recursive_barrel_files(directory):
    """
    Recursively generates index.ts barrel files for all subdirectories,
    ensuring that both feature-level and nested-level exports are handled correctly.
    This function:
    - Creates `index.ts` in every directory
    - Ensures `on-put` services/components are separately handled
    - Works recursively for deeply nested structures
    """
    for root, dirs, files in os.walk(directory):
        if root.endswith("__pycache__"):  # Ignore Python cache directories
            continue

        barrel_file = os.path.join(root, "index.ts")
        exports = []

        # Always export `components/`, `services/`, and `interface/` if present
        if "components" in dirs:
            exports.append("export * from './components';")
        if "services" in dirs:
            exports.append("export * from './services';")
        if "interface" in dirs:
            exports.append("export * from './interface';")

        # Export all other subdirectories (except components/services/interface to avoid duplicate exports)
        for subdir in sorted(dirs):
            if subdir not in ["components", "services", "interface"]:
                exports.append(f"export * from './{subdir}';")

        # If in a `services` directory, create its barrel file separately
        if root.endswith("services"):
            service_exports = []
            for service_type, subdir in service_directory_map.items():
                if service_type != "on-put":
                    service_exports.append(
                        f"export * from './{subdir}/{service_type}-{Path(root).parent.name.replace('_', '-').lower()}.service';"
                    )

            # Ensure `on-put` is separately handled
            service_exports.append(
                f"export * from './on-put-{Path(root).parent.name.replace('_', '-').lower()}.service';"
            )

            # Write `services/index.ts`
            service_barrel_file = os.path.join(root, "index.ts")
            with open(service_barrel_file, "w") as f:
                f.write("\n".join(service_exports) + "\n")
            print(f"✅ Created services barrel file: {service_barrel_file}")

        # If in a `components` directory, create its barrel file separately
        if root.endswith("components"):
            component_exports = []
            for component_type, subdir in component_directory_map.items():
                if component_type != "on-put":
                    component_exports.append(
                        f"export * from './{subdir}/{component_type}-{Path(root).parent.name.replace('_', '-').lower()}.component';"
                    )

            # Ensure `on-put` is separately handled
            component_exports.append(
                f"export * from './on-put-{Path(root).parent.name.replace('_', '-').lower()}.component';"
            )

            # Write `components/index.ts`
            component_barrel_file = os.path.join(root, "index.ts")
            with open(component_barrel_file, "w") as f:
                f.write("\n".join(component_exports) + "\n")
            print(f"✅ Created components barrel file: {component_barrel_file}")

        # If there are TypeScript files in this directory (excluding `index.ts`), add their exports
        for file in files:
            if file.endswith(".ts") and file != "index.ts":
                file_name = file.replace(".ts", "")
                exports.append(f"export * from './{file_name}';")

        # Only create `index.ts` if there are items to export
        if exports:
            with open(barrel_file, "w") as f:
                f.write("\n".join(exports) + "\n")
            print(f"✅ Created barrel file: {barrel_file}")

# Generate main `/features/index.ts` for all feature domains
def generate_feature_barrel(base_output_dir):
    feature_exports = []

    for feature_dir in os.listdir(base_output_dir):
        feature_path = os.path.join(base_output_dir, feature_dir)
        if os.path.isdir(feature_path):
            feature_exports.append(f"export * from './{feature_dir}';")

    barrel_filename = f"{base_output_dir}/index.ts"
    with open(barrel_filename, "w") as f:
        f.write("\n".join(feature_exports))
    print(f"✅ Created top-level features barrel file")