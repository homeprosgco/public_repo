import os
from graphql_schema_to_angular.utils.case_utils import (
    split_and_hyphenate,
    to_pascal_case,
    to_kebab_case,
    to_camel_case,
    to_data_case,
    generate_form_controls,
    generate_primeng_form_template
)
from graphql_schema_to_angular.config.directory_maps import component_directory_map


def generate_angular_components(type_name, fields, components_dir):
    """
    Generates Angular components for the given GraphQL type inside the correct business domain.
    """
    os.makedirs(components_dir, exist_ok=True)
    for component_type, subdir in component_directory_map.items():
        subdir_path = os.path.join(components_dir, subdir)
        os.makedirs(subdir_path, exist_ok=True)

        if component_type in ["put", "update"]:
            generate_form_component(type_name, fields, subdir_path, component_type)
        else:
            generate_component(type_name, fields, subdir_path, component_type)


def generate_form_component(components_dir, type_name, fields, component_type, subdir):
    """Generates Angular Form Component (put & update) with Service Injection & Submission."""
    component_filename  = f"{components_dir}/{subdir}/{component_type}-{split_and_hyphenate(type_name + 's' if component_type == 'query' else type_name)}.component.ts"

    template_filename = f"{components_dir}/{subdir}/{component_type}-{split_and_hyphenate(type_name + 's' if component_type == 'query' else type_name)}.component.html"

    controls, dropdown_options = generate_form_controls(fields)  # Get form controls & dropdowns
    
    # Generate TypeScript dropdown options
    dropdowns_ts = "\n".join(
        [f"  {field}Options = this.getEnumOptions('{enum_name}');" for field, enum_name in dropdown_options.items()]
    )
    
    service_name = f"{component_type.capitalize()}{type_name}GQL"
    query_service_name = f"Get{type_name}GQL"
    service_import = f"import {{ {service_name} }} from '../../services';"
    query_service_import = (
        f"import {{ {query_service_name} }} from '../../services';"
        if component_type == "update"
        else ""
    )
    component_selector = (
        f"sg-{to_kebab_case(component_type)}-{split_and_hyphenate(type_name)}"
    )

    # Include ActivatedRoute only for update components
    activated_route_import = (
        "import { ActivatedRoute } from '@angular/router';"
        if component_type == "update"
        else ""
    )

    # Include update-specific logic
    update_logic = (
        f"""
        this.route.paramMap.subscribe(params => {{
            const entityId = params.get('id');
            if (entityId) {{
                this.get{type_name}GQL.watch({{ id: entityId }}).valueChanges.subscribe({{
                    next: (response) => {{
                        if (response.data && response.data.get{type_name}) {{
                            this.{to_data_case(type_name)}Form.patchValue(response.data.get{type_name});
                        }}
                    }},
                    error: (error) => {{
                        console.error('Error fetching {type_name}:', error);
                        this.uxService.showErrorMessage('Failed to fetch {type_name}.');
                    }}
                }});
            }}
        }});
    """
        if component_type == "update"
        else ""
    )

    component_content = f"""
    import {{ Component }} from "@angular/core";
    import {{ CommonModule }} from '@angular/common';
    import {{ MutationResult }} from "apollo-angular";
    import {{ FormBuilder, FormGroup, Validators, FormControl }} from '@angular/forms';
    import {{ ReactiveFormsModule }} from '@angular/forms';
    import {{ trigger, transition, style, animate }} from '@angular/animations';
    import {{ InputTextModule }} from 'primeng/inputtext';
    import {{ DropdownModule }} from 'primeng/dropdown';
    import {{ ButtonModule }} from 'primeng/button';
    import * as EnumValues from '../../../../enums';
    import {{ {component_type.capitalize()}{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-response.interface';
    {service_import}
    {query_service_import}
    import {{
    Observable,
    Subject,
    catchError,
    of,
    startWith,
    switchMap,
    tap,
    }} from 'rxjs';
    import {{
    DynamicTemplateLoaderComponent,
    UXService,
    }} from '@homeprosg-co/ui-base';
    {activated_route_import}

    @Component({{
        selector: '{component_selector}',
        imports: [
            CommonModule, 
            ReactiveFormsModule, 
            InputTextModule, 
            DropdownModule,
            ButtonModule, 
            DynamicTemplateLoaderComponent,
        ],
        standalone: true,
        templateUrl: './{component_type}-{split_and_hyphenate(type_name)}.component.html',
        animations: [
        trigger('fadeInOut', [
        transition(':enter', [
            style({{ opacity: 0 }}),
            animate('400ms ease-in', style({{ opacity: 1 }})),
        ]),
        transition(':leave', [animate('300ms ease-out', style({{ opacity: 0 }}))]),
        ]),
    ],
    }})
    export class {component_type.capitalize()}{type_name}Component {{
        // Convert form submission to an observable for dynamic UI handling
        {to_data_case(type_name)}Form$!: Observable<MutationResult<{component_type.capitalize()}{type_name}Response> | null>;
        {to_data_case(type_name)}Form: FormGroup;
        retrySubject = new Subject<void>();
        {dropdowns_ts}

        constructor(
            private fb: FormBuilder, 
            { "private route: ActivatedRoute," if component_type == "update" else ""}
            private {component_type}GQL: {service_name},
            {f"private get{type_name}GQL: {query_service_name}," if component_type == "update" else ""}
            private uxService: UXService
        ) {{
            this.{to_data_case(type_name)}Form = this.fb.group({{{controls}}});

            {update_logic}

            // Convert form submission into an observable (Handles success & error)
            this.{to_data_case(type_name)}Form$ = this.retrySubject.pipe(
                startWith(null),
                switchMap(() =>
                    this.{component_type}GQL.mutate({{ input: this.{to_data_case(type_name)}Form.value }}).pipe(
                    tap(() => {{
                        this.uxService.showSuccessMessage(
                        '{type_name} {"updated" if component_type == "update" else "created"} successfully!',
                        '/{component_selector}'
                        );
                    }}),
                    catchError((error) => {{
                        console.error('Error {"updating" if component_type == "update" else "creating"} {type_name}:', error);
                        this.uxService.showErrorMessage(
                        'Failed to {"update" if component_type == "update" else "create"} {type_name}. Please try again.',
                        );
                        return of(null); // Emit null to indicate an error
                    }}),
                )
            )
        );
        }}

    
        submit() {{
            if (this.{to_data_case(type_name)}Form.valid) {{
            this.retrySubject.next(); // Trigger mutation through retrySubject
            }}
        }}

        retry() {{
            this.retrySubject.next(); // Retry mutation
        }}
        
        getEnumOptions(enumName: keyof typeof EnumValues): Array<{{ label: string; value: string }}> {{
          const values = EnumValues[enumName as keyof typeof EnumValues];
          if (!values) return [];
          return Object.values(values).map((v) => ({{
            label: v as string,
            value: v as string,
          }}));
        }}
    }}
    """

    # Write the component TypeScript file
    with open(component_filename, "w") as f:
        f.write(component_content)
    print(f"✅ Created {component_filename}")

    # Generate the template (HTML) file
    form_variable_name = to_data_case(type_name) + "Form"
    template_content = generate_form_template(fields, form_variable_name, dropdown_options)
    with open(template_filename, "w") as f:
        f.write(template_content)
    print(f"✅ Created {template_filename}")


def generate_component(components_dir, type_name, fields, component_type, subdir):
    """Generates reusable CRUD components using DynamicTemplateLoaderComponent."""

    pascal_case_type = to_pascal_case(type_name)  # Example: UserProfile → UserProfile
    pascal_case_component = to_pascal_case(component_type)  # Example: get → Get
    kebab_case_type = to_kebab_case(type_name)  # Example: UserProfile → user-profile
    kebab_case_component = to_kebab_case(component_type)  # Example: get → get

    camel_case_component = (
        to_camel_case(component_type) + type_name
    )  # Example: getUserProfile
    plural_type_name = type_name + "s" if component_type == "query" else type_name
    
    component_filename  = f"{components_dir}/{subdir}/{component_type}-{split_and_hyphenate(type_name + 's' if component_type == 'query' else type_name)}.component.ts"
    
    # Base imports for all component types
    base_imports = [
        "import { CommonModule } from '@angular/common';",
        "import { Observable, of, Subject } from 'rxjs';",
        "import { catchError, startWith, switchMap } from 'rxjs/operators';",
    ]
    
    service_name = f"{pascal_case_component}{plural_type_name}GQL"
    
    # Import the corresponding service
    service_import = f"import {{ {service_name} }} from '../../services';"
    base_imports.append(service_import)
    
    activated_route_import = f"import {{ActivatedRoute}} from '@angular/router';"

    # Apollo import based on component type
    apollo_import = "import { ApolloQueryResult } from '@apollo/client/core';"

    # Type import for GraphQL response
    response_import = f"import {{ {component_type.capitalize()}{plural_type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-response.interface';"
    
    component_imports = [f"CommonModule"]
    
    # Define the base import statement
    template_code = f"""
        <sg-dynamic-template-loader
            [data$]="{{{{ {camel_case_component}$ }}}}"
            [template]="{{{{ {camel_case_component}Template }}}}"
            [loadingTemplate]="{{{{ loadingTemplate }}}}"
            [errorTemplate]="{{{{ errorTemplate }}}}"
        ></sg-dynamic-template-loader>

        <!-- Success Template -->
        <ng-template #{{{{ {camel_case_component}Template }}}} let-data>
            <div class="data-container">
                <h3>{pascal_case_type} Details</h3>
                
                if component_type == "query" <sg-data-table [tableData]="data" [tableColumns]="productColumns"></sg-data-table>
                
                <ul>
                    <li *ngFor="let key of objectKeys(data)">
                        <strong>{{{{ key }}}}:</strong> {{{{ data[key] }}}}
                    </li>
                </ul>
            </div>
        </ng-template>

        <!-- Loading Template -->
        <ng-template #loadingTemplate>
            <div class="loading-container">
                <p-progressSpinner></p-progressSpinner>
                <p>Loading {pascal_case_type}...</p>
            </div>
        </ng-template>

        <!-- Error Template -->
        <ng-template #errorTemplate>
            <p class="error">⚠️ Error loading {pascal_case_type}. Please try again.</p>
            <button class="retry-button" (click)="retry()">🔄 Retry</button>
        </ng-template>
    """
    
    response_type = f"{component_type.capitalize()}{plural_type_name}Response" if component_type == "query" else f"{component_type.capitalize()}{type_name}Response"
    observable_type = f"Observable<ApolloQueryResult<{response_type}> | null>"
    
    # // ✅ ID input only for delete components
    id_input = ""
    observable_assignment = f"""
        this.{to_data_case(pascal_case_component)}{plural_type_name}$ = this.retrySubject.pipe(
            startWith(null),
            switchMap(() =>
                this.route.paramMap.pipe(
                    switchMap((params) => {{
                        const id = params.get("id");
                        if (!id) return of(null);
                        return this.{to_data_case(service_name)}.watch({{ id }}).valueChanges.pipe(
                            catchError(() => of(null))
                        );
                    }})
                )
            )
        );
    """
    delete_method = ""
    # Determine correct response type (plural for queries)
    columns_config = ""
    add_angular_core_import = ""
    
    
    # Determine the correct type of Observable based on component_type
    # Conditionally include the import statement only if component_type is "delete"
    if component_type == "delete":
        add_angular_core_import = ", input" if component_type == "delete" else ""
        apollo_import = 'import { MutationResult } from "apollo-angular";'
        base_imports.append("import { DeleteActionComponent } from '@homeprosg-co/ui-base';")
        component_imports.append(f"DeleteActionComponent")
        # Define the template dynamically
        template_code = f"""
            <!-- 🗑️ Delete Action Button -->
            <sg-delete-action
                [itemId]="{{{{ id }}}}"
                [itemType]="'{pascal_case_type}'"
                (confirmDelete)="deleteItem()"
            ></sg-delete-action>
        """
        observable_type = f"Observable<MutationResult<{response_type}> | null>"
        # Define `id` input field only for delete components
        id_input = "id = input<string>();" 
        # //Observable assignment only for non-delete components
        observable_assignment = ""
        # Define the deleteItem method only for delete components
        delete_observable = f"this.{to_data_case(pascal_case_component)}{plural_type_name}$"
        # // ✅ Delete method only for delete components
        delete_method = f"""
        deleteItem() {{
            {delete_observable} = this.retrySubject.pipe(
                startWith(null),
                switchMap(() =>
                    of(null).pipe(
                        switchMap(() => {{
                            if (!this.id()) return of(null);
                            return this.{to_data_case(service_name)}
                                .mutate({{ id: this.id() }})
                                .pipe(catchError(() => of(null)));
                        }})
                    )
                )
            );
        }}
        """
        
    elif component_type == "query":
        base_imports.append(activated_route_import)
        base_imports.append("import { DynamicTemplateLoaderComponent, UXService } from '@homeprosg-co/ui-base';")
        delete_component_import = f"import {{Delete{type_name}Component}} from '../delete_component/delete-{split_and_hyphenate(type_name)}.component';"
        base_imports.append(delete_component_import)
        component_imports.append(f"Delete{type_name}Component")
        component_imports.append(f"DynamicTemplateLoaderComponent")
        
        # ✅ Import Columns for Query Components
        snake_case_type_name = type_name.replace("-", "_").upper()
        constant_name = "_".join(re.findall('[A-Z][^A-Z]*', type_name)).upper() + "_COLUMNS"
        columns_import = f'import {{{constant_name}}}from "../../config/table_data_columns/{split_and_hyphenate(type_name)}-columns";'
        base_imports.append(columns_import)
        
        columns_config = "columnsConfig = USER_PROFILE_COLUMNS;"
        observable_type = f"Observable<ApolloQueryResult<{response_type}> | null>"
        
        # ✅ Use Table Inside Template Loader
        template_code = f"""
            <sg-dynamic-template-loader
                [data$]="{{{{ {camel_case_component}$ }}}}"
                [template]="{{{{ {camel_case_component}Template }}}}"
                [loadingTemplate]="{{{{ loadingTemplate }}}}"
                [errorTemplate]="{{{{ errorTemplate }}}}"
            ></sg-dynamic-template-loader>

            <!-- Success Template -->
            <ng-template #{{{{ {camel_case_component}Template }}}} let-data>
                <div class="data-container">
                    <h3>{pascal_case_type} Details</h3>
                    <sg-data-table [tableData]="data" [tableColumns]="columnsConfig"></sg-data-table>
                </div>
            </ng-template>

            <!-- Loading Template -->
            <ng-template #loadingTemplate>
                <div class="loading-container">
                    <p-progressSpinner></p-progressSpinner>
                    <p>Loading {pascal_case_type}...</p>
                </div>
            </ng-template>

            <!-- Error Template -->
            <ng-template #errorTemplate>
                <p class="error">⚠️ Error loading {pascal_case_type}. Please try again.</p>
                <button class="retry-button" (click)="retry()">🔄 Retry</button>
            </ng-template>
        """
    else:
        base_imports.append(activated_route_import)
        base_imports.append("import { DynamicTemplateLoaderComponent } from '@homeprosg-co/ui-base';")
        component_imports.append(f"DynamicTemplateLoaderComponent")
        
    # Generate the Angular core import statement dynamically
    angular_core_imports = f"import {{ Component{add_angular_core_import} }} from '@angular/core';"
    base_imports.append(angular_core_imports)
        
    # Merge all imports
    # Ensure all are lists before concatenation
    file_imports = "\n".join(
        base_imports  # List
        + [apollo_import]  # Convert single string to list
        + [response_import]  # Convert single string to list
    )

    component_selector = (
        f"sg-{to_kebab_case(component_type)}-{split_and_hyphenate(type_name)}"
    )
    component_imports_string = ", ".join(component_imports)
    class_name = f"{pascal_case_component}{type_name}Component"
    # Use it inside your component
    observable_variable = f"{to_data_case(pascal_case_component)}{plural_type_name}$!: {observable_type};"
    
    route_dependency = ", private route: ActivatedRoute" if component_type in ["get", "query"] else ""
    
    # Generate constructor dynamically
    constructor_code = f"""
    constructor(private {to_data_case(service_name)}: {service_name}{route_dependency}) {{
        {observable_assignment}
    }}
    """

        
    # ✅ Updated component with DynamicTemplateLoaderComponent
    component_content = f"""
    {file_imports}

    @Component({{
        selector: '{component_selector}',
        imports: [{component_imports_string}],
        standalone: true,
        template: `{template_code}`,
    }})
    export class {class_name} {{
        {observable_variable}
        retrySubject = new Subject<void>();
        {id_input}  
        {columns_config}

        {constructor_code }
        
        {delete_method}  

        retry() {{
            this.retrySubject.next(); // Retry loading data
        }}

        objectKeys(obj: any): string[] {{
            return obj ? Object.keys(obj) : [];
        }}
    }}
    """

    # ✅ Write the Component TypeScript File
    with open(component_filename, "w") as f:
        f.write(component_content)
    print(f"✅ Created {component_filename}")
