from jinja2 import Environment, FileSystemLoader
from pathlib import Path
import os
from utils.case_utils import split_and_hyphenate, pluralize
from config.topological_sort import extract_dependencies
from config.directory_maps import SCALAR_MAP
from utils.angular_form_generator_helper import detect_type

TEMPLATE_DIR = "templates"
env = Environment(
  loader=FileSystemLoader(TEMPLATE_DIR),
  trim_blocks=True,
  lstrip_blocks=True
)
env.globals["split_and_hyphenate"] = split_and_hyphenate
env.globals["pluralize"] = pluralize
env.globals['detect_type'] = detect_type

def ts_type(gql_type: str) -> str:

    base_type = gql_type.replace("!", "").replace("[", "").replace("]", "")
    mapped = SCALAR_MAP.get(base_type, base_type)  # Default to custom type name

    if gql_type.startswith("["):
        return f"{mapped}[]"
    return mapped

env.globals['ts_type'] = ts_type

def render_typescript_interface(type_name: str, fields: dict, parsed_data: dict, output_path: str):
    template = env.get_template("angular/interface.ts.j2")
    dependencies = sorted([
        dep for dep in extract_dependencies(fields) if dep in parsed_data
    ])

    content = template.render(
        type_name=type_name,
        fields=fields,
        dependencies=dependencies
    )

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] Interface saved: {os.path.relpath(output_path)}")


def render_graphql_response_interface(type_name: str, output_path: str):
    template = env.get_template("angular/i_graphql_response.ts.j2")
    content = template.render(type_name=type_name)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ Generated GraphQL response interface: {output_path}")

def render_angular_enum(enum_name: str, enum_values: list[str], output_path: str):
    template = env.get_template("angular/enum.ts.j2")
    content = template.render(enum_name=enum_name, enum_values=enum_values)
    
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] Enum generated: {os.path.relpath(output_path)}")

def render_table_column_config(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/table_columns.ts.j2")
    content = template.render(type_name=type_name, fields=fields)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ Generated column config: {output_path}")

def render_datasource_interface(type_name: str, output_path: str):
    template = env.get_template("angular/i_entity.datasource.ts.j2")
    content = template.render(type_name=type_name)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] DataSource interface saved: {os.path.relpath(output_path)}")


def render_graphql_datasource(type_name: str, output_path: str):
    template = env.get_template("angular/graphql.datasource.ts.j2")
    content = template.render(type_name=type_name)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] Concrete GraphQL datasource saved: {os.path.relpath(output_path)}")

def render_filter_input_interface(input_name, fields, output_path):
    template = env.get_template("angular/filter_input.ts.j2")

    def ts_type(gql_type):
        return TS_SCALAR_MAP.get(gql_type, gql_type)

    content = template.render(input_name=input_name, fields=fields, ts_type=ts_type)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ Filter input saved: {os.path.relpath(output_path)}")

def render_filter_keys_constant(type_name: str, filter_fields: dict, output_path: str):
    template = env.get_template("angular/filter_keys.constant.ts.j2")
    content = template.render(type_name=type_name, filter_fields=filter_fields)
    
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] Filter key set generated: {os.path.relpath(output_path)}")


def split_fields(fields: dict):
    scalars, relations = [], []
    for name, gql_type in fields.items():
        base = gql_type.replace("!", "").replace("[", "").replace("]", "")
        if base in SCALAR_MAP:
            scalars.append(name)
        else:
            relations.append(name)
    return scalars, relations

def render_get_query(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/get_entity.query.ts.j2")
    scalars, relations = split_fields(fields)

    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations,
    )

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] get-query saved: {os.path.relpath(output_path)}")


def render_query_entities_query(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/query_entities.query.ts.j2")
    scalars, relations = split_fields(fields)

    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations
    )

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] query-entities query saved: {os.path.relpath(output_path)}")

def render_put_mutation(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/put_entity.mutation.ts.j2")
    scalars, relations = split_fields(fields)

    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations
    )

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] put-entity mutation saved: {os.path.relpath(output_path)}")

def render_update_mutation(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/update_entity.mutation.ts.j2")
    scalars, relations = split_fields(fields)

    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations
    )

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] update-entity mutation saved: {os.path.relpath(output_path)}")

def render_soft_delete_mutation(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/soft_delete_entity.mutation.ts.j2")
    scalars, relations = split_fields(fields)

    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations
    )

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] soft-delete mutation saved: {os.path.relpath(output_path)}")

def render_delete_mutation(type_name: str, output_path: str):
    template = env.get_template("angular/delete_entity.mutation.ts.j2")
    content = template.render(type_name=type_name)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] delete-entity mutation saved: {os.path.relpath(output_path)}")

def render_on_put_subscription(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/on_put_entity.subscription.ts.j2")
    scalars, relations = split_fields(fields)

    content = template.render(
        type_name=type_name,
        scalars=scalars,
        relations=relations
    )

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] onPut subscription saved: {os.path.relpath(output_path)}")

def render_on_update_subscription(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/on_update_entity.subscription.ts.j2")
    scalars, relations = split_fields(fields)

    content = template.render(type_name=type_name, scalars=scalars, relations=relations)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] onUpdate subscription saved: {os.path.relpath(output_path)}")

def render_on_soft_delete_subscription(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/on_soft_delete_entity.subscription.ts.j2")
    scalars, relations = split_fields(fields)

    content = template.render(type_name=type_name, scalars=scalars, relations=relations)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] onSoftDelete subscription saved: {os.path.relpath(output_path)}")


def render_repository_interface(type_name: str, output_path: str):
    template = env.get_template("angular/i_entity.repository.ts.j2")
    content = template.render(type_name=type_name)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] repository interface saved: {os.path.relpath(output_path)}")

def render_graphql_repository(type_name: str, output_path: str):
    template = env.get_template("angular/graphql_entity.repository.ts.j2")
    content = template.render(type_name=type_name)

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] graphql repository saved: {os.path.relpath(output_path)}")


def render_get_usecase(type_name: str, output_path: str):
    template = env.get_template("angular/get_entity.usecase.ts.j2")
    content = template.render(type_name=type_name)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] get use case saved: {os.path.relpath(output_path)}")

def render_query_usecase(type_name: str, output_path: str):
    template = env.get_template("angular/query_entity.usecase.ts.j2")
    content = template.render(type_name=type_name)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] get use case saved: {os.path.relpath(output_path)}")

def render_put_usecase(type_name: str, output_path: str):
    template = env.get_template("angular/put_entity.usecase.ts.j2")
    content = template.render(type_name=type_name)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] get use case saved: {os.path.relpath(output_path)}")

def render_update_usecase(type_name: str, output_path: str):
    template = env.get_template("angular/update_entity.usecase.ts.j2")
    content = template.render(type_name=type_name)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] get use case saved: {os.path.relpath(output_path)}")

def render_delete_usecase(type_name: str, output_path: str):
    template = env.get_template("angular/delete_entity.usecase.ts.j2")
    content = template.render(type_name=type_name)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] get use case saved: {os.path.relpath(output_path)}")

def render_soft_delete_usecase(type_name: str, output_path: str):
    template = env.get_template("angular/soft_delete_entity.usecase.ts.j2")
    content = template.render(type_name=type_name)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ [Angular] get use case saved: {os.path.relpath(output_path)}")

def render_angular_list_component(type_name: str, output_path: str):
    template = env.get_template("angular/components/list_component.ts.j2")
    content = template.render(type_name=type_name)
    
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ Generated Angular list component: {output_path}")

def render_angular_detail_component(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/components/detail_component.ts.j2")
    content = template.render(type_name=type_name, filename=split_and_hyphenate(type_name), fields=fields)
    
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ Generated Angular detail component: {output_path}")

def render_angular_form_component_ts(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/form/form_component_ts.j2")
    content = template.render(
        type_name=type_name,
        filename=split_and_hyphenate(type_name),
        fields=fields,
    )
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ Generated Angular form component TS: {output_path}")


def render_angular_form_component_html(type_name: str, fields: dict, output_path: str):
    template = env.get_template("angular/form/form_component_html.j2")
    content = template.render(
        type_name=type_name,
        filename=split_and_hyphenate(type_name),
        fields=fields,
    )
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(content)
    print(f"✅ Generated Angular form component HTML: {output_path}")


