import os
import argparse
from generators.graphql_parser import parse_graphql_file
from generators.interfaces import generate_interface, generate_response_interface
from generators.enums import generate_enum_files
from generators.services import generate_angular_services
from generators.components import generate_angular_components
from generators.dashboard import generate_dashboard_component
from generators.barrel_files import generate_feature_barrel, generate_recursive_barrel_files
from utils.path_utils import get_output_directory, get_module_from_folder_map
from config.directory_maps import service_directory_map, component_directory_map

# Get absolute path to "../../amplify_model_to_graphql_schema/graphql" from current working dir
GRAPHQL_DIR = os.path.abspath(
    os.path.join(os.getcwd(), "../amplify_model_to_graphql_schema/graphql")
)
BASE_OUTPUT_DIR = "homeprosgco_graphql_cloud_server"


def generate_services_and_components(
        type_name, fields, generate_interfaces, generate_services, generate_components
    ):
    """
    Generates Angular Services & Components within the correct business domain.
    """
    output_dir = get_output_directory(BASE_OUTPUT_DIR, type_name)
    interface_dir = f"{output_dir}/interface"
    services_dir = f"{output_dir}/services"
    components_dir = f"{output_dir}/components"
    table_data_columns_config_dir =f"{output_dir}/config/table_data_columns"

    # Generate interfaces
    if generate_interfaces:
        os.makedirs(interface_dir, exist_ok=True)
        generate_interface(type_name, fields, interface_dir)
        generate_response_interface(type_name, interface_dir)
        generate_enum_files(BASE_OUTPUT_DIR)

    # Generate selected services
    if generate_services:
        os.makedirs(services_dir, exist_ok=True)
        for service_type in generate_services:
            if service_type in service_directory_map:
                service_subdir = service_directory_map[service_type]
                os.makedirs(f"{services_dir}/{service_subdir}", exist_ok=True)
                generate_angular_services(type_name, fields, services_dir, service_type)

    # Generate selected components
    if generate_components:
        os.makedirs(components_dir, exist_ok=True)
        for component_type in generate_components:
            if component_type == "on-put":
                continue  # Skip "on-put" components
            
            if component_type in component_directory_map:
                component_subdir = component_directory_map[component_type]
                os.makedirs(f"{components_dir}/{component_subdir}", exist_ok=True)
                generate_angular_components(
                    type_name, fields, components_dir, component_type
                )

# Process GraphQL Files
def main():
    """Main execution function."""
    parser = argparse.ArgumentParser(
        description="Generate Angular services and components from a GraphQL schema."
    )
    parser.add_argument("graphql_type", help="Specify the GraphQL type to process")
    parser.add_argument(
        "--interfaces", action="store_true", help="Generate interface files"
    )
    parser.add_argument(
        "--services",
        nargs="*",
        choices=service_directory_map.keys(),
        help="Specify which services to generate (e.g., put, query, delete)",
    )
    parser.add_argument(
        "--components",
        nargs="*",
        choices=component_directory_map.keys(),
        help="Specify which components to generate (e.g., put, query, delete)",
    )
    parser.add_argument(
        "--dashboards",
        action="store_true",
        help="Generate dashboard components for all modules",
    )

    args = parser.parse_args()

    graphql_type = args.graphql_type
    generate_interfaces = args.interfaces
    service_list = args.services if args.services else []
    component_list = args.components if args.components else []

    # Dependency validation
    if component_list and not service_list:
        print("❌ Components require services. Use --services along with --components.")
        return

    if service_list and not generate_interfaces:
        print("❌ Services require interfaces. Use --interfaces along with --services.")
        return

    graphql_file = f"{GRAPHQL_DIR}/{graphql_type}.graphql"
    if not os.path.exists(graphql_file):
        print(os.getcwd())
        print(f"❌ GraphQL file '{graphql_file}' not found!")
        return
    
    result = parse_graphql_file(graphql_file)
    if result:
        type_name, fields = result
        generate_services_and_components(
            type_name, fields, generate_interfaces, service_list, component_list
        )

    # ✅ Generate dashboard component for the parent module of the GraphQL type
    if args.dashboards:
        module_name = get_module_from_folder_map(graphql_type)
        generate_dashboard_component(module_name, BASE_OUTPUT_DIR)
        

    # ✅ Generate barrel files only if something was created
    generate_recursive_barrel_files(BASE_OUTPUT_DIR)
    generate_feature_barrel(BASE_OUTPUT_DIR)


if __name__ == "__main__":
    main()

# nx run graphql_schema_to_angular:default --args="AppUser --interfaces --services put query --components put query"

# python3 graphql_to_angular_dry_run.py UserProfilev--dashboards --interfaces
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards --interfaces --services put
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards --interfaces --services put query
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards --interfaces --services put update get query delete on-put --components put update get query delete on-put
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards --interfaces --services put query --components put query
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards