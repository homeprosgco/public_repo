import subprocess
import os
from pathlib import Path
from config.directory_maps import FOLDER_MAP, get_feature_lib_paths

WORKSPACE_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../../.."))

def run_flutter_package(type_name: str, parent_folder: str = "feature"):
    if type_name not in FOLDER_MAP:
        print(f"❌ Skipping {type_name} – not in FOLDER_MAP")
        return

    lib_path = Path("libs") / parent_folder / FOLDER_MAP[type_name] / f"{type_name.lower()}-flutter"
    full_path_str = str(lib_path).replace("\\", "/")

    command = [
        "nx", "generate", "@nxrocks/nx-flutter:project",
        full_path_str,
        "--template=package",
        "--org=com.homeprosgco",
        f"--description=Flutter data package for {type_name}",
        "--no-interactive"
    ]

    print(f"📦 Generating Flutter lib at {full_path_str}")

    try:
        subprocess.run(command, check=True, cwd=WORKSPACE_ROOT)
        print(f"✅ Flutter package generated: {full_path_str}")
    except subprocess.CalledProcessError as e:
        print(f"❌ Flutter generation failed for {type_name}: {e}")

def generate_flutter_lib(type_name: str, fields: dict,  enum_values: list[str], parsed_data: dict, GRAPHQL_DIR: str, parent_folder: str = "feature"):
    #  set up folder architecture
    paths = get_feature_lib_paths(type_name, platform="flutter")

    #  generated typescript interface
    filename = split_and_hyphenate(type_name)

    for enum_name, values in enum_values.items():
      enum_filename = split_and_hyphenate(enum_name)
      output_path = paths["enums"] / f"{enum_filename}.dart"
      render_flutter_enum_model(enum_name, values, output_path)
    
    flutter_model_path = paths["data_models"] / f"{filename}.dart"
    render_flutter_model(type_name, fields, str(flutter_model_path))

    interface_filename = f"i_{filename}_graphql_datasource.dart"
    interface_output_path = paths["datasources"] / interface_filename
    render_flutter_datasource_interface(type_name, str(interface_output_path))

    graphql_ds_path = paths["datasources"] / f"graphql_{filename}_datasource.dart"
    render_flutter_graphql_datasource(type_name, str(graphql_ds_path))

    put_mutation_path = paths["data_mutations"]  / f"put_{filename}.mutation.graphql"
    render_flutter_put_mutation(type_name, fields, str(put_mutation_path))

    get_query_path = paths["data_queries"] / f"get_{filename}.query.graphql"
    render_flutter_get_query(type_name, fields, str(get_query_path))

    filter_input_model_path = paths["data_models"] / f"{filename}_filter_input.dart"
    render_flutter_filter_input_model(input_name, input_fields, str(filter_input_model_path))

    filter_keys_path = paths["data_models"] / f"{filename}_filter_keys.constant.dart"
    render_flutter_filter_keys_constant(type_name, filter_input_fields, str(filter_keys_path))

    query_entities_path = paths["data_queries"] / f"query_{pluralize(filename)}.query.graphql"
    render_flutter_query_entities(type_name, fields, str(query_entities_path))

    update_mutation_path = paths["data_mutations"] / f"update_{filename}.mutation.graphql"
    render_flutter_update_mutation(type_name, fields, str(update_mutation_path))

    soft_delete_mutation_path = paths["data_mutations"] / f"soft_delete_{filename}.mutation.graphql"
    render_flutter_soft_delete_mutation(type_name, fields, str(soft_delete_mutation_path))

    delete_mutation_path = paths["data_mutations"] / f"delete_{filename}.mutation.graphql"
    render_flutter_delete_mutation(type_name, str(delete_mutation_path))

    on_put_subscription_path = paths["data_queries"] / f"on_put_{filename}.subscription.graphql"
    render_flutter_on_put_subscription(type_name, fields, str(on_put_subscription_path))

    on_soft_delete_subscription_path = paths["data_queries"] / f"on_soft_delete_{filename}.subscription.graphql"
    render_flutter_on_soft_delete_subscription(type_name, fields, str(on_soft_delete_subscription_path))

    on_update_subscription_path = paths["data_queries"] / f"on_update_{filename}.subscription.graphql"
    render_flutter_on_update_subscription(type_name, fields, str(on_update_subscription_path))

    repo_interface_path = paths["domain_repositories"] / f"i_{filename}_repository.dart"
    render_flutter_repository_interface(type_name, str(repo_interface_path))

    graphql_repo_path = paths["data_repositories"] / f"graphql_{filename}_repository.dart"
    render_flutter_graphql_repository(type_name, str(graphql_repo_path))

    put_usecase_path = paths["usecases"] / f"put_{filename}.usecase.dart"
    render_flutter_put_usecase(type_name, str(put_usecase_path))

    query_usecase_path = paths["usecases"] / f"query_{pluralize(filename)}.usecase.dart"
    render_flutter_query_usecase(type_name, str(query_usecase_path))

    get_usecase_path = paths["usecases"] / f"get_{filename}.usecase.dart"
    render_flutter_get_usecase(type_name, str(get_usecase_path))

    update_usecase_path = paths["usecases"] / f"update_{filename}.usecase.dart"
    render_flutter_update_usecase(type_name, str(update_usecase_path))

    delete_usecase_path = paths["usecases"] / f"delete_{filename}.usecase.dart"
    render_flutter_delete_usecase(type_name, str(delete_usecase_path))

    soft_delete_usecase_path = paths["usecases"] / f"soft_delete_{filename}.usecase.dart"
    render_flutter_soft_delete_usecase(type_name, str(soft_delete_usecase_path))

    # Riverpod Providers
    provider_base_path = paths["providers"]

    render_flutter_datasource_provider(
        type_name, provider_base_path / f"{filename}_datasource_provider.dart"
    )
    render_flutter_repository_provider(
        type_name, provider_base_path / f"{filename}_repository_provider.dart"
    )
    render_flutter_usecase_providers(
        type_name, provider_base_path / f"{filename}_usecase_providers.dart"
    )
    render_flutter_action_providers(
        type_name, provider_base_path / f"{filename}_action_providers.dart"
    )

    upload_provider_path = paths["presentation"] / "providers" / "file_upload_providers.dart"
    render_flutter_model(type_name, fields, str(flutter_model_path))

    ui_path = paths["ui"]

    render_flutter_list_screen(type_name, ui_path / f"{filename}_list_screen.dart")
    render_flutter_detail_screen(type_name, ui_path / f"{filename}_detail_screen.dart")


