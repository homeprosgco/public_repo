from jinja2 import Environment, FileSystemLoader
from pathlib import Path
import os

TEMPLATE_DIR = "templates"
env = Environment(
  loader=FileSystemLoader(TEMPLATE_DIR),
  trim_blocks=True,
  lstrip_blocks=True
)
env.globals["split_and_hyphenate"] = split_and_hyphenate
env.globals["pluralize"] = pluralize

def dart_type(graphql_type: str) -> str:
    graphql_type = graphql_type.replace('!', '').replace('[', '').replace(']', '')

    return {
        "ID": "String",
        "String": "String",
        "Boolean": "bool",
        "Int": "int",
        "Float": "double",
        "AWSDateTime": "DateTime",
        "AWSJSON": "Map<String, dynamic>",
    }.get(graphql_type, graphql_type)

env.globals["dart_type"] = dart_type

def render_flutter_model(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/model.freezed.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, fields=fields, filename=filename)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] model saved: {os.path.relpath(output_path)}")

def render_flutter_enum_model(enum_name: str, values: list[str], output_path: str):
    template = env.get_template("flutter/model.enum.dart.j2")
    content = template.render(enum_name=enum_name, values=values)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] enum saved: {os.path.relpath(output_path)}")


def render_flutter_datasource_interface(type_name: str, output_path: str):
    template = env.get_template("flutter/i_entity_graphql_datasource.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] Interface saved: {os.path.relpath(output_path)}")

def render_flutter_graphql_datasource(type_name: str, output_path: str):
    template = env.get_template("flutter/graphql_entity_datasource.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] GraphQL datasource saved: {os.path.relpath(output_path)}")

def render_flutter_put_mutation(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/put_entity.mutation.graphql.j2")
    scalars, relations = split_fields(fields)
    content = template.render(type_name=type_name, scalars=scalars, relations=relations)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] put mutation saved: {os.path.relpath(output_path)}")

def render_flutter_filter_input_model(input_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/filter_input_model.dart.j2")
    content = template.render(input_name=input_name, fields=fields)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] filter input model saved: {os.path.relpath(output_path)}")

def render_flutter_filter_keys_constant(type_name: str, filter_fields: list[str], output_path: str):
    template = env.get_template("flutter/filter_keys.constant.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename, filter_fields=filter_fields)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] filter keys constant saved: {os.path.relpath(output_path)}")


def render_flutter_get_query(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/get_entity.query.graphql.j2")
    scalars, relations = split_fields(fields)
    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations,
    )
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] get query saved: {os.path.relpath(output_path)}")

def render_flutter_query_entities(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/query_entities.query.graphql.j2")
    scalars, relations = split_fields(fields)
    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations,
    )
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] query entities saved: {os.path.relpath(output_path)}")

def render_flutter_update_mutation(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/update_entity.mutation.graphql.j2")
    scalars, relations = split_fields(fields)
    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations
    )
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] update mutation saved: {os.path.relpath(output_path)}")

def render_flutter_soft_delete_mutation(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/soft_delete_entity.mutation.graphql.j2")
    scalars, relations = split_fields(fields)
    content = template.render(type_name=type_name, scalars=scalars, relations=relations)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] soft-delete mutation saved: {os.path.relpath(output_path)}")


def render_flutter_delete_mutation(type_name: str, output_path: str):
    template = env.get_template("flutter/delete_entity.mutation.graphql.j2")
    content = template.render(type_name=type_name)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] delete mutation saved: {os.path.relpath(output_path)}")

def render_flutter_on_put_subscription(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/on_put_entity.subscription.graphql.j2")
    scalars, relations = split_fields(fields)
    content = template.render(type_name=type_name, scalars=scalars, relations=relations)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] onPut subscription saved: {os.path.relpath(output_path)}")

def render_flutter_on_soft_delete_subscription(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/on_soft_delete_entity.subscription.graphql.j2")
    scalars, relations = split_fields(fields)
    content = template.render(type_name=type_name, scalars=scalars, relations=relations)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] onSoftDelete subscription saved: {os.path.relpath(output_path)}")

def render_flutter_on_update_subscription(type_name: str, fields: dict, output_path: str):
    template = env.get_template("flutter/on_update_entity.subscription.graphql.j2")
    scalars, relations = split_fields(fields)
    content = template.render(type_name=type_name, scalars=scalars, relations=relations)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] onUpdate subscription saved: {os.path.relpath(output_path)}")

def render_flutter_repository_interface(type_name: str, output_path: str):
    template = env.get_template("flutter/i_entity_repository.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] Repository interface saved: {os.path.relpath(output_path)}")

def render_flutter_graphql_repository(type_name: str, output_path: str):
    template = env.get_template("flutter/graphql_entity.repository.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] GraphQL repository saved: {os.path.relpath(output_path)}")

def render_flutter_put_usecase(type_name: str, output_path: str):
    template = env.get_template("flutter/put_entity.usecase.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] put use case saved: {os.path.relpath(output_path)}")

def render_flutter_get_usecase(type_name: str, output_path: str):
    template = env.get_template("flutter/get_entity.usecase.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] get use case saved: {os.path.relpath(output_path)}")

def render_flutter_query_usecase(type_name: str, output_path: str):
    template = env.get_template("flutter/query_entity.usecase.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] query use case saved: {os.path.relpath(output_path)}")

def render_flutter_update_usecase(type_name: str, output_path: str):
    template = env.get_template("flutter/update_entity.usecase.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] update use case saved: {os.path.relpath(output_path)}")

def render_flutter_soft_delete_usecase(type_name: str, output_path: str):
    template = env.get_template("flutter/soft_delete_entity.usecase.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] soft-delete use case saved: {os.path.relpath(output_path)}")

def render_flutter_delete_usecase(type_name: str, output_path: str):
    template = env.get_template("flutter/delete_entity.usecase.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] delete use case saved: {os.path.relpath(output_path)}")

def render_flutter_datasource_provider(type_name: str, output_path: str):
    template = env.get_template("flutter/riverpod_datasource_provider.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] datasource provider saved: {os.path.relpath(output_path)}")

def render_flutter_repository_provider(type_name: str, output_path: str):
    template = env.get_template("flutter/riverpod_repository_provider.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] repository provider saved: {os.path.relpath(output_path)}")

def render_flutter_usecase_providers(type_name: str, output_path: str):
    template = env.get_template("flutter/riverpod_usecase_providers.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename, pluralize=pluralize)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] usecase providers saved: {os.path.relpath(output_path)}")

def render_flutter_action_providers(type_name: str, output_path: str):
    template = env.get_template("flutter/riverpod_action_providers.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename, pluralize=pluralize)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] action providers saved: {os.path.relpath(output_path)}")

def render_flutter_upload_provider(output_path: str):
    template = env.get_template("flutter/file_upload_providers.dart.j2")
    content = template.render()  # no dynamic data needed

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] Riverpod upload provider saved: {os.path.relpath(output_path)}")

def render_flutter_list_screen(type_name: str, output_path: str):
    template = env.get_template("flutter/ui/list_screen.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename, pluralize=pluralize)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] list screen generated: {os.path.relpath(output_path)}")

def render_flutter_detail_screen(type_name: str, output_path: str):
    template = env.get_template("flutter/ui/detail_screen.dart.j2")
    filename = split_and_hyphenate(type_name)
    content = template.render(type_name=type_name, filename=filename)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Flutter] detail screen generated: {os.path.relpath(output_path)}")


