import os
import re
from pathlib import Path

# Define Input & Output Paths
GRAPHQL_DIR = "../amplify_model_to_graphql_schema/schemas"
BASE_OUTPUT_DIR = "./features"

# Define mapping for service & component directories
service_directory_map = {
    "put": "create_service",
    "update": "update_service",
    "delete": "delete_service",
    "get": "detail_service",
    "query": "list_service",
    "on-put": "on_put_service",
}

component_directory_map = {
    "put": "create_component",
    "update": "update_component",
    "delete": "delete_component",
    "get": "detail_component",
    "query": "list_component",
    "on-put": "on_put_component",
}

# Folder mapping (GraphQL Type → Business Domain)
FOLDER_MAP = {
    # Core Services
    "File": "core/assets/files",
    "Resource": "core/assets/resources",
    # Authentication & Authorization
    "UserProfile": "user-management/profiles",
    "Role": "user-management/roles",
    "Permission": "user-management/permissions",
    # Admin & System Management
    "Tenant": "admin/tenants",
    "AdminDashboard": "admin/admin-dashboard",
    # Business Intelligence & Analytics
    "TrafficSource": "analytics/traffic-sources",
    "ConversionFunnel": "analytics/conversion-funnels",
    "AudienceSegment": "analytics/audience-segments",
    "CampaignAudience": "analytics/campaign-audiences",
    "CampaignMetric": "analytics/campaign-metrics",
    # Business Operations
    "Team": "business-management/teams",
    "TeamMember": "business-management/team-members",
    "Operations": "business-management/operations",
    # Projects & Jobs
    "Project": "projects",
    "Job": "projects/job-management/jobs",
    "JobTask": "projects/job-management/job-tasks",
    "Estimate": "projects/estimates",
    "Proposal": "projects/proposals",
    "MaterialList": "projects/material-lists",
    "JobService": "projects/job-management/job-services",
    # Work Requests & JobService Requests
    "WorkRequest": "work-requests",
    # Customer & Support Operations
    "Customer": "customers/",
    "Recipient": "customers/recipients",
    "Feedback": "customers/feedback",
    "Review": "customers/reviews",
    "SupportTicket": "customers/support-tickets",
    "Contact": "customers/contacts",
    # Marketing & Lead Generation
    "Campaign": "marketing/campaigns",
    "JobLead": "marketing/lead-management/job-leads",
    "SharedCustomerProspect": "marketing/lead-management/shared-customer-propspects",
    "NetworkProProspect": "marketing/lead-management/network-pro-prospects",
    "AdContent": "marketing/ad-content",
    "AdSchedule": "marketing/ad-schedules",
    # Finance & Payments
    "Expense": "finance/expenses",
    "Invoice": "finance/invoices",
    "Payment": "finance/payments",
    "SubscriptionPlan": "finance/subscription-plans",
    # Field Services
    "Scheduling": "field-services/scheduling",
    "Logistics": "field-services/logistics",
    "WorkTracking": "field-services/work-tracking",
    # Property Management
    "Property": "properties",
    # Products & Materials
    "Product": "products",
    # Contracts & Agreements
    "Contract": "contracts",
    # Communication & Chat
    "ChatRoom": "chat/chat-rooms",
    "ChatMessage": "chat/chat-messages",
    "ChatAttachment": "chat/chat-attachments",
    "ChatRoomUser": "chat/user-chat-rooms",
    # ADA Compliance & Accessibility Services
    "ShowerConversionEstimate": "ada-management/shower-conversions-estimates",
    "WoodRampEstimate": "ada-management/ramp-estimates",
    "DoorWideningEstimate": "ada-management/door-widening-estimates",
    "GrabBarEstimate": "ada-management/grab-bar-installation-estimates",
    "ChoreServiceEstimate": "ada-management/chore-services-estimates",
}


def parse_graphql_file(filepath):
    """
    Extracts GraphQL Type and Fields from a `.graphql` file.
    """
    with open(filepath, "r") as f:
        content = f.read()

    type_match = re.search(r"type (\w+) \{([\s\S]+?)\}", content)
    if not type_match:
        return None

    type_name = type_match.group(1)
    field_block = type_match.group(2)

    fields = {}
    for line in field_block.splitlines():
        match = re.match(r"\s*(\w+):\s*([\w!\[\]]+)", line)
        if match:
            field_name, field_type = match.groups()
            fields[field_name] = field_type

    return type_name, fields


def split_and_hyphenate(text):
    """
    Detects capital letters in a PascalCase or camelCase string,
    splits them, and adds hyphens to convert them into kebab-case.
    """
    return re.sub(r"(?<!^)(?=[A-Z])", "-", text).lower()


def to_pascal_case(text):
    """Convert a string to PascalCase"""
    return "".join(word.capitalize() for word in text.replace("-", "_").split("_"))


def to_kebab_case(text):
    """Convert a string to kebab-case"""
    return text.replace("_", "-").lower()


def to_camel_case(text):
    """
    Converts a kebab-case (hyphenated) string to camelCase.
    Removes hyphens and capitalizes the next character, keeping the first letter lowercase.
    """
    parts = text.split("-")
    return parts[0].lower() + "".join(word.capitalize() for word in parts[1:])


def to_data_case(text, query=False):
    # Convert first letter to lowercase
    camel_case_text = text[0].lower() + text[1:]

    # Append 's' for pluralization if query is True
    return camel_case_text + "s" if query else camel_case_text


def get_output_directory(type_name):
    """
    Determines the correct directory for a given GraphQL type.
    """
    return f"{BASE_OUTPUT_DIR}/{FOLDER_MAP.get(type_name, 'misc')}"


def generate_services_and_components(type_name, fields):
    """
    Generates Angular Services & Components within the correct business domain.
    """
    output_dir = get_output_directory(type_name)
    interface_dir = f"{output_dir}/interface"
    services_dir = f"{output_dir}/services"
    components_dir = f"{output_dir}/components"

    os.makedirs(interface_dir, exist_ok=True)
    os.makedirs(services_dir, exist_ok=True)
    os.makedirs(components_dir, exist_ok=True)

    for subdir in service_directory_map.values():
        os.makedirs(f"{services_dir}/{subdir}", exist_ok=True)
    for subdir in component_directory_map.values():
        os.makedirs(f"{components_dir}/{subdir}", exist_ok=True)

    generate_interface(type_name, fields, interface_dir)
    generate_response_interface(type_name, interface_dir)
    generate_angular_services(type_name, fields, services_dir)
    generate_angular_components(type_name, fields, components_dir)


def generate_interface(type_name, fields, interface_dir):
    """
    Generates TypeScript Interface for the GraphQL Type and Response Types.
    """
    interface_filename = f"{interface_dir}/{split_and_hyphenate(type_name)}.interface.ts"
    response_filename = f"{interface_dir}/{split_and_hyphenate(type_name)}-responses.interface.ts"

    ts_types = {
        "Float": "number",
        "Int": "number",
        "Boolean": "boolean",
        "AWSDateTime": "string",
    }

    # Create the main interface for the GraphQL type
    interface_content = f"export interface {type_name} {{\n"
    for field, gql_type in fields.items():
        ts_type = ts_types.get(gql_type.replace("!", ""), "string")
        if gql_type.startswith("["):
            ts_type += "[]"
        interface_content += f"  {field}: {ts_type};\n"
    interface_content += "}\n"

    # Write the main interface file
    with open(interface_filename, "w") as f:
        f.write(interface_content)
    print(f"✅ Created {interface_filename}")

def generate_response_interface(type_name, interface_dir):
    os.makedirs(interface_dir, exist_ok=True)
    response_filename = f"{interface_dir}/{split_and_hyphenate(type_name)}-responses.interface.ts"

    response_content = (
        f"import {{ {type_name} }} from './{split_and_hyphenate(type_name)}.interface';\n\n"
        f"export interface Delete{type_name}Response {{\n"
        f"    delete{type_name}: {{ id: string }};\n"
        f"}}\n\n"
        f"export interface Put{type_name}Response {{\n"
        f"    put{type_name}: {type_name};\n"
        f"}}\n\n"
        f"export interface Get{type_name}Response {{\n"
        f"    get{type_name}: {type_name};\n"
        f"}}\n\n"
        f"export interface Query{type_name}sResponse {{\n"
        f"    query{type_name}s: {{ items: {type_name}[]; nextToken?: string }};\n"
        f"}}\n\n"
        f"export interface Update{type_name}Response {{\n"
        f"    update{type_name}: {type_name};\n"
        f"}}\n\n"
        f"export interface OnPut{type_name}Response {{\n"
        f"    onPut{type_name}: {type_name};\n"
        f"}}\n"
    )

    with open(response_filename, "w") as f:
        f.write(response_content)
    print(f"✅ Created {response_filename}")

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
            }}
        """,
    }

    # Generate Service Files
    for service_type, content in operations.items():
        subdir = service_directory_map[service_type]
        service_filename = f"{services_dir}/{subdir}/{service_type}-{split_and_hyphenate(type_name)}.service.ts"
        with open(service_filename, "w") as f:
            f.write(content)
        print(f"✅ Created {service_filename}")


def generate_angular_components(type_name, fields, components_dir):
    """
    Generates Angular components for the given GraphQL type inside the correct business domain.
    """
    for component_type, subdir in component_directory_map.items():
        subdir_path = f"{components_dir}/{subdir}"

        # Generate form-based components for put & update
        if component_type in ["put", "update"]:
            generate_form_component(
                components_dir, type_name, fields, component_type, subdir
            )

        # Generate standard UI components for listing, viewing, and deleting
        else:
            generate_component(
                components_dir, type_name, fields, component_type, subdir
            )


def generate_form_component(components_dir, type_name, fields, component_type, subdir):
    """Generates Angular Form Component (put & update) with Service Injection & Submission"""
    component_filename = f"{components_dir}/{subdir}/{component_type}-{split_and_hyphenate(type_name)}.component.ts"
    template_filename = f"{components_dir}/{subdir}/{component_type}-{split_and_hyphenate(type_name)}.component.html"

    service_name = f"{component_type.capitalize()}{type_name}GQL"
    service_import = f"import {{ {service_name} }} from '../../services';"
    component_selector = (
        f"sg-{to_kebab_case(component_type)}-{split_and_hyphenate(type_name)}"
    )

    component_content = f"""{
                            f'import {{ Component, input }} from "@angular/core";'
                            if component_type in ["update"] else 
                            'import { Component } from "@angular/core";'
                        }
                            import {{ FormBuilder, FormGroup, Validators, FormControl }} from '@angular/forms';
                            import {{ CommonModule }} from '@angular/common';
                            import {{ ReactiveFormsModule }} from '@angular/forms';
                            import {{ InputTextModule }} from 'primeng/inputtext';
                            import {{ ButtonModule }} from 'primeng/button';
                            {service_import}

                            @Component({{
                                selector: '{component_selector}',
                                imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
                                standalone: true,
                                templateUrl: './{component_type}-{split_and_hyphenate(type_name)}.component.html'
                            }})
                            export class {component_type.capitalize()}{type_name}Component {{
                                {to_data_case(type_name)}Form: FormGroup;
                                successMessage = '';
                                {'id = input<string>();' if component_type in ["update"] else ''}

                                constructor(private fb: FormBuilder, private {component_type}GQL: {service_name}) {{
                                    this.{to_data_case(type_name)}Form = this.fb.group({{
                                        {generate_form_controls(fields)}
                                    }});
                                }}

                                submit() {{
                                    if (this.{to_data_case(type_name)}Form.valid) {{
                                        this.{component_type}GQL.mutate({{ input: this.{to_data_case(type_name)}Form.value }}).subscribe({{
                                            next: () => (this.successMessage = '{type_name} {component_type} successfully!'),
                                            error: (err) => console.error('Error', err),
                                        }});
                                    }}
                                }}
                            }}
                        """

    # Write the component TypeScript file
    with open(component_filename, "w") as f:
        f.write(component_content)
    print(f"✅ Created {component_filename}")

    # Generate the template (HTML) file
    template_content = f"""<form [formGroup]="{type_name.lower()}Form" (ngSubmit)="submit()">
    {generate_primeng_form_template(fields)}

    <p-button type="submit" label="Submit" [disabled]="{type_name.lower()}Form.invalid"></p-button>
    <p *ngIf="successMessage">{{{{ successMessage }}}}</p>
    </form>"""

    with open(template_filename, "w") as f:
        f.write(template_content)
    print(f"✅ Created {template_filename}")


def generate_component(components_dir, type_name, fields, component_type, subdir):
    print(f"{components_dir} {type_name} {component_type} {subdir}")
    """ Generates Basic CRUD Components (delete, get, query, on-put) with Service Injection """

    pascal_case_type = to_pascal_case(type_name)  # WorkRequest → WorkRequest
    pascal_case_component = to_pascal_case(component_type)  # on-put → OnPut
    kebab_case_type = to_kebab_case(type_name)  # WorkRequest → work-request
    kebab_case_component = to_kebab_case(component_type)  # on-put → on-put

    # CamelCase for Injected Service Variable
    camel_case_component = to_camel_case(component_type) + type_name  # onPutWorkRequest
    # Append 's' to type_name if component_type is 'query'
    plural_type_name = type_name + "s" if component_type == "query" else type_name
    # Construct filenames & paths
    component_filename = f"{components_dir}/{subdir}/{kebab_case_component}-{split_and_hyphenate(type_name)}.component.ts"
    service_name = f"{pascal_case_component}{plural_type_name}GQL"
    class_name = f"{pascal_case_component}{type_name}"
    component_selector = (
        f"sg-{to_kebab_case(component_type)}-{split_and_hyphenate(type_name)}"
    )
    service_import = f"import {{ {service_name} }} from '../../services';"

    component_content = f"""
                        {
                            f'import {{ Component, input }} from "@angular/core";'
                            if component_type in ["delete", "get"] else 
                            'import { Component } from "@angular/core";'
                        }
                        import {{ CommonModule }} from '@angular/common';
                        import {{ FormsModule }} from '@angular/forms';
                        {service_import}

                        @Component({{
                            selector: '{component_selector}',
                            imports: [CommonModule, FormsModule],
                            standalone: true,
                            template: `<h2>{pascal_case_type} {pascal_case_component}</h2>
                                <p>Feature: {pascal_case_component}</p>`
                        }})
                        export class {class_name}Component {{
                            {to_data_case(type_name)}: any;
                            successMessage = '';
                            {'id = input<string>();' if component_type in ["delete", "get"] else ''}

                            constructor(private {to_data_case(service_name)}: {service_name}) {{
                                this.loadData();
                            }}

                            loadData() {{
                                {
                                    f'this.{to_data_case(service_name)}.watch({{id: this.id}}).valueChanges.subscribe(response => this.{to_data_case(type_name)} = response.data);'
                                    if component_type == "get" else 
                                    f'this.{to_data_case(service_name)}.watch().valueChanges.subscribe(response => this.{to_data_case(type_name)} = response.data);'
                                    if component_type == "query" else ""
                                }
                                {
                                    f'this.{to_data_case(service_name)}.mutate({{ id: this.id}}).subscribe(response => this.{to_data_case(type_name)} = response.data);'
                                    if component_type in ["delete"] else ""
                                }
                                {
                                    f'this.{to_data_case(service_name)}.subscribe(response => this.{to_data_case(type_name)} = response.data);'
                                    if component_type == "on-put" else ""
                                }
                            }}
                        }}
                        """

    # Write the Component TypeScript File
    with open(component_filename, "w") as f:
        f.write(component_content)
    print(f"✅ Created {component_filename}")


def generate_form_controls(fields):
    """Generates Form Controls for PrimeNG FormBuilder"""
    controls = []
    for field, gql_type in fields.items():
        # Handle optional fields
        required = "Validators.required" if "!" in gql_type else ""
        field_type = "['']" if gql_type.startswith("[") else "''"
        controls.append(f"    {field}: new FormControl({field_type}, {required})")

    return ",\n".join(controls)


def generate_primeng_form_template(fields):
    """Generates Form Template with PrimeNG Components"""
    inputs = []
    for field in fields:
        inputs.append(
            f"""
            <label>{field.capitalize()}:</label>
            <p-inputText formControlName="{field}" />
            <div *ngIf="{field}Form.get('{field}')?.invalid && {field}Form.get('{field}')?.touched">
                Invalid {field}.
            </div>"""
        )

    return "\n".join(inputs)


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


# Process GraphQL Files
if __name__ == "__main__":
    # Parse all GraphQL files and generate features
    for graphql_file in os.listdir(GRAPHQL_DIR):
        filepath = os.path.join(GRAPHQL_DIR, graphql_file)
        if filepath.endswith(".graphql"):
            result = parse_graphql_file(filepath)
            if result:
                type_name, fields = result
                generate_services_and_components(type_name, fields)

    # ✅ Now generate barrel files after all directories are created
    generate_recursive_barrel_files(BASE_OUTPUT_DIR)
    generate_feature_barrel(BASE_OUTPUT_DIR)
