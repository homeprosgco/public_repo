import os
from graphql_schema_to_angular.utils.case_utils import split_and_hyphenate
from graphql_schema_to_angular.config.directory_maps import service_directory_map

def generate_angular_services(type_name, fields, services_dir):
    """
    Generates Apollo Angular services from a GraphQL type.
    """
    # GraphQL Operations
    operations = {
        "put": f"""import {{ Injectable }} from '@angular/core';
import {{ gql, Mutation }} from 'apollo-angular';
import {{ {type_name} }} from '../../interface/{split_and_hyphenate(type_name)}.interface';
import {{ Put{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-responses.interface';

@Injectable({{ providedIn: 'root' }})
export class Put{type_name}GQL extends Mutation<Put{type_name}Response> {{
  document = gql`
    mutation Put{type_name}($input: Create{type_name}Input!) {{
      put{type_name}(input: $input) {{
        {' '.join(fields.keys())}
      }}
    }}
  `;
}}""",
        "update": f"""import {{ Injectable }} from '@angular/core';
import {{ gql, Mutation }} from 'apollo-angular';
import {{ {type_name} }} from '../../interface/{split_and_hyphenate(type_name)}.interface';
import {{ Update{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-responses.interface';

@Injectable({{ providedIn: 'root' }})
export class Update{type_name}GQL extends Mutation<Update{type_name}Response> {{
  document = gql`
    mutation Update{type_name}($input: Update{type_name}Input!) {{
      update{type_name}(input: $input) {{
        {' '.join(fields.keys())}
      }}
    }}
  `;
}}""",
        "delete": f"""import {{ Injectable }} from '@angular/core';
import {{ gql, Mutation }} from 'apollo-angular';
import {{ Delete{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-responses.interface';

@Injectable({{ providedIn: 'root' }})
export class Delete{type_name}GQL extends Mutation<Delete{type_name}Response> {{
  document = gql`
    mutation Delete{type_name}($id: ID!) {{
      delete{type_name}(id: $id) {{
        id
      }}
    }}
  `;
}}""",
        "get": f"""import {{ Injectable }} from '@angular/core';
import {{ gql, Query }} from 'apollo-angular';
import {{ {type_name} }} from '../../interface/{split_and_hyphenate(type_name)}.interface';
import {{ Get{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-responses.interface';

@Injectable({{ providedIn: 'root' }})
export class Get{type_name}GQL extends Query<Get{type_name}Response> {{
  document = gql`
    query Get{type_name}($id: ID!) {{
      get{type_name}(id: $id) {{
        {' '.join(fields.keys())}
      }}
    }}
  `;
}}""",
        "query": f"""import {{ Injectable }} from '@angular/core';
import {{ gql, Query }} from 'apollo-angular';
import {{ {type_name} }} from '../../interface/{split_and_hyphenate(type_name)}.interface';
import {{ Query{type_name}sResponse }} from '../../interface/{split_and_hyphenate(type_name)}-responses.interface';

@Injectable({{ providedIn: 'root' }})
export class Query{type_name}sGQL extends Query<Query{type_name}sResponse> {{
  document = gql`
    query Query{type_name}s($limit: Int, $nextToken: String) {{
      query{type_name}s(limit: $limit, nextToken: $nextToken) {{
        items {{
          {' '.join(fields.keys())}
        }}
        nextToken
      }}
    }}
  `;
}}""",
        "on-put": f"""import {{ Injectable }} from '@angular/core';
import {{ gql, Subscription }} from 'apollo-angular';
import {{ OnPut{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-responses.interface';

@Injectable({{ providedIn: 'root' }})
export class OnPut{type_name}GQL extends Subscription<OnPut{type_name}Response> {{
  document = gql`
    subscription OnPut{type_name} {{
      onPut{type_name} {{
        {' '.join(fields.keys())}
      }}
    }}
  `;
}}"""
    }

    # Create required service directories
    os.makedirs(services_dir, exist_ok=True)
    for subdir in service_directory_map.values():
        os.makedirs(f"{services_dir}/{subdir}", exist_ok=True)

    # Write service files
    for service_type, content in operations.items():
        subdir = service_directory_map[service_type]
        filename = f"{services_dir}/{subdir}/{service_type}-{split_and_hyphenate(type_name)}.service.ts"
        with open(filename, "w") as f:
            f.write(content)
        print(f"✅ Created {filename}")
