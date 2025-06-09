import subprocess
import os
from pathlib import Path
from config.directory_maps import FOLDER_MAP, get_feature_lib_paths
from utils.case_utils import split_and_hyphenate, pluralize
from scaffolder.angular_scaffolder import render_typescript_interface, render_graphql_response_interface, render_angular_repository_interface

WORKSPACE_ROOT = Path(__file__).resolve().parents[5]

def run_nx_angular_generate(type_name: str, parent_folder: str = "feature"):
    if type_name not in FOLDER_MAP:
        print(f"❌ Skipping {type_name} – not in FOLDER_MAP")
        return

    lib_name = f"{type_name.lower()}-angular"
    
    # Append the lib_name to the path
    directory = Path("libs") / parent_folder / FOLDER_MAP[type_name] / f"{type_name.lower()}-angular"
    directory_str = str(directory).replace("\\", "/")

    command = [
        "nx", "generate", "@nx/angular:library",
        f"--name={lib_name}",
        f"--directory={directory_str}",
        "--no-interactive"
    ]

    print(f"📦 Generating Angular lib at libs/{directory_str}/{lib_name}")

    try:
        subprocess.run(command, check=True, cwd=WORKSPACE_ROOT)
        print(f"✅ Angular lib generatedd at libs/{directory_str}/{lib_name}")
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to generate Angular lib for {type_name}: {e}")


def generate_ng_lib(type_name: str, fields: dict,  enum_values: list[str], parsed_data: dict, GRAPHQL_DIR: str, parent_folder: str = "feature"):
  # set up folder architecture
    paths = get_feature_lib_paths(type_name, platform="angular")

    # Process
    #  generated typescript interface
    filename = split_and_hyphenate(type_name)
    
    interface_filename = f"{filename}.interface.ts"
    output_path = paths["data_models"] / interface_filename
    render_typescript_interface(type_name, fields, parsed_data, output_path)

    response_interface_filename = f"{filename}-response.interface.ts"
    response_output_path = paths["data_models"] / response_interface_filename
    render_graphql_response_interface(type_name, response_output_path)

    for enum_name, values in enum_values.items():
      enum_filename = split_and_hyphenate(enum_name)
      output_path = paths["enums"] / f"{enum_filename}.enum.ts"
      render_flutter_enum_model(enum_name, values, output_path)

    # Generate column config for sg-data-table
    column_config_path = paths["data_columns"] / f"{filename}-columns.ts"
    render_table_column_config(type_name, fields, str(column_config_path))


    input_types = parse_input_definitions(GRAPHQL_DIR)
    filter_input_name = f"{type_name}FilterInput"

    if filter_input_name in input_types:
        filters_path = paths["domain"] / "filters"
        output_file = filters_path / f"{filename}-filter.input.ts"
        render_filter_input_interface(filter_input_name, input_types[filter_input_name], str(output_file))

    # Only generate if filter_fields exist for this type
    filter_input = parsed_filter_inputs.get(type_name)
    if filter_input:
        filter_keys_file = filters_path / f"{filename}-filter.keys.ts"
        render_filter_keys_constant(
            type_name=type_name,
            filter_fields=filter_input,
            output_path=str(filter_keys_file)
        )

    # Generate data source interface
    datasource_filename = f"i-{filename}.datasource.ts"
    datasource_path = paths["datasources"] / datasource_filename
    render_datasource_interface(type_name, str(datasource_path))

    graphql_ds_filename = f"graphql-{filename}.datasource.ts"
    graphql_ds_path = paths["datasources"] / graphql_ds_filename
    render_graphql_datasource(type_name, str(graphql_ds_path))

    put_mutation_path = paths["mutations"] /  f"put-{filename}.mutation.ts"
    render_put_mutation(type_name, fields, str(put_mutation_path))

    get_query_file = paths["queries"] /  f"get-{filename}.query.ts"
    render_get_query(type_name, fields, str(get_query_file))

    query_entities_file = paths["queries"] / f"query-{pluralize(filename)}.query.ts"
    render_query_entities_query(type_name, fields, str(query_entities_file))

    update_mutation_path = paths["mutations"] / f"update-{filename}.mutation.ts"
    render_update_mutation(type_name, fields, str(update_mutation_path))

    soft_delete_path = paths["mutations"] / f"soft-delete-{filename}.mutation.ts"
    render_soft_delete_mutation(type_name, fields, str(soft_delete_path))

    delete_mutation_path = paths["mutations"]  / f"delete-{filename}.mutation.ts"
    render_delete_mutation(type_name, str(delete_mutation_path))

    on_put_subscription_path = paths["subscriptions"] / f"on-put-{filename}.subscription.ts"
    render_on_put_subscription(type_name, fields, str(on_put_subscription_path))

    on_update_subscription_path = paths["subscriptions"] / f"on-update-{filename}.subscription.ts"
    render_on_update_subscription(type_name, fields, str(on_update_subscription_path))

    on_soft_delete_subscription_path = paths["subscriptions"] / f"on-soft-delete-{filename}.subscription.ts"
    render_on_soft_delete_subscription(type_name, fields, str(on_soft_delete_subscription_path))

    repo_interface_path = paths["domain_repositories"] / f"i-{filename}.repository.ts"
    render_repository_interface(type_name, str(repo_interface_path))

    graphql_repo_path = paths["data_repositories"] / f"graphql-{filename}.repository.ts"
    render_graphql_repository(type_name, str(graphql_repo_path))

    # Use case paths
    usecases_path = paths["usecases"]

    render_get_usecase(type_name, usecases_path / f"get-{filename}.usecase.ts")
    render_query_usecase(type_name, usecases_path / f"query-{pluralize(filename)}.usecase.ts")
    render_put_usecase(type_name, usecases_path / f"put-{filename}.usecase.ts")
    render_update_usecase(type_name, usecases_path / f"update-{filename}.usecase.ts")
    render_delete_usecase(type_name, usecases_path / f"delete-{filename}.usecase.ts")
    render_soft_delete_usecase(type_name, usecases_path / f"soft-delete-{filename}.usecase.ts")

    list_component_path = paths["components"] / f"{filename}-list.component.ts"
    render_angular_list_component(type_name, str(list_component_path))

    detail_component_path = paths["components"] / f"{filename}-detail.component.ts"
    render_angular_detail_component(type_name, fields, str(detail_component_path))

    # Generate Angular Form Component
    form_component_dir = paths["components"] / f"{filename}-form"
    form_ts_path = form_component_dir / f"{filename}-form.component.ts"
    form_html_path = form_component_dir / f"{filename}-form.component.html"

    render_angular_form_component_ts(type_name, fields, str(form_ts_path))
    render_angular_form_component_html(type_name, fields, str(form_html_path))





    #  save it to the correct directory
    #  generated typescript response interface
    #  import the typescript interface / depends on the interface
    #  save it to the correct directory
    #  generated typescript enums
    #  save it to the correct directory
    #  service_directory_map = {
    #     "put": "create_service",
    #     "update": "update_service",
    #     "delete": "delete_service",
    #     "get": "detail_service",
    #     "query": "list_service",
    #     "on-put": "on_put_service",
    #  }
    #  generate service interface for each service action which is a key of the service_directory_map
    #  import the response interface, which is the return type of the query/mutation call
    #  save the service  interfaceto the correct directory
    #  generate the concrete service implementing the service interface
    #  import the client library from @homeprosgco/graphql_client
    #  make the constructor depend on the clent library interface imported from @homeprosgco/graphql_client
    #  implement crud for each key in the service_map_directory
    #  for each method pass the corresponding arguements based on the graphql operation arguements in the schema file
    #  generate repository interface for each service action which is a key of the service_directory_map
    #  map the response type to data wrapped in the response
    #  save each it to the correct directory
    #  generate the concrete repository that implements the interface
    #  save each it to the correct directory
    #  generate use cases for each service
    #  save each to the correct directory
    #  component_directory_map = {
    #     "put": "create_component",
    #     "update": "update_component",
    #     "delete": "delete_component",
    #     "get": "detail_component",
    #     "query": "list_component",
    #     "on-put": "on_put_component",
    #  }
    #  generate components for each key in the component directory map
    #  save each to the correct directory
    # {
    #   path: 'jobs',
    #   loadComponent: () => import('./components/job-list.component').then(m => m.JobListComponent)
    # }

    
