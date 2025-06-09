import os
import re
from pathlib import Path
import argparse

# Get absolute path to "../../amplify_model_to_graphql_schema/graphql" from current working dir
GRAPHQL_DIR = os.path.abspath(
    os.path.join(os.getcwd(), "../../amplify_model_to_graphql_schema/graphql")
)
BASE_OUTPUT_DIR = "homeprosgco_graphql_cloud_server"
ENUM_DIR = os.path.join(BASE_OUTPUT_DIR, "enums")
os.makedirs(ENUM_DIR, exist_ok=True)

# Define top-level module directories
modules = [
    "auth",
    "admin",
    "business-management",
    "project-management",
    "work-requests-management",
    "customer-management",
    "marketing",
    "job-task-management"
    "finance-management",
    "field-service-management",
    "property-management",
    "products",
    "contracts",
    "ada-management",
    "chat",
    "user-management",
    "analytics",
    "assets"
]

# Define mapping for service & component directories
service_directory_map = {
    "put": "put_service",
    "update": "update_service",
    "delete": "delete_service",
    "get": "get_service",
    "query": "query_service",
    "on-put": "on_put_service",
}

component_directory_map = {
    "put": "put_component",
    "update": "update_component",
    "delete": "delete_component",
    "get": "get_component",
    "query": "query_component",
    "on-put": "on_put_component",
}

# Folder mapping (GraphQL Type → Business Domain)
FOLDER_MAP = {
    # Core Services
    "File": "assets/files",
    "Resource": "assets/resources",
    # Authentication & Authorization
    "AppUser": "user-management/app-users",
    "Role": "user-management/roles",
    "Permission": "user-management/permissions",
    # Admin & System Management
    "Tenant": "admin/account-tenants",
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
    "Project": "project-management",
    "Job": "project-management/job-management/jobs",
    "Estimate": "project-management/estimates",
    "Proposal": "project-management/proposals",
    "MaterialList": "project-management/material-lists",
    "JobService": "project-management/job-management/job-services",
    # JobTasks
    "JobTask": "job-task-management",
    # Work Requests 
    "WorkRequest": "work-requests-management",
    # Customer & Support Operations
    "Customer": "customer-management/",
    "Recipient": "customer-management/recipients",
    "Feedback": "customer-management/feedback",
    "Review": "customer-management/reviews",
    "SupportTicket": "customer-management/support-tickets",
    "Contact": "customer-management/contacts",
    # Marketing & Lead Generation
    "Campaign": "marketing/campaigns",
    "JobLead": "marketing/lead-management/job-leads",
    "SharedCustomerProspect": "marketing/lead-management/shared-customer-propspects",
    "NetworkProProspect": "marketing/lead-management/network-pro-prospects",
    "AdContent": "marketing/ad-content",
    "AdSchedule": "marketing/ad-schedules",
    # Finance & Payments
    "Expense": "finance-management/expenses",
    "Invoice": "finance-management/invoices",
    "Payment": "finance-management/payments",
    "SubscriptionPlan": "finance-management/subscription-plans",
    # Field Services
    "Scheduling": "field-service-management/scheduling",
    "Logistics": "field-service-management/logistics",
    "WorkTracking": "field-service-management/work-tracking",
    # Property Management
    "Property": "property-management",
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


def get_module_from_folder_map(graphql_type):
    """Retrieve the parent module from the FOLDER_MAP."""
    if graphql_type in FOLDER_MAP:
        # Extract top-level directory from the mapped path
        return FOLDER_MAP[graphql_type].split("/")[0]  # Get first directory
    return None  # Return None if type is not found


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

def camel_case_to_title(field_name):
    """Converts camelCase or PascalCase field names into Title Case."""
    return re.sub(r'([a-z])([A-Z])', r'\1 \2', field_name).title()

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


def generate_services_and_components(
        type_name, fields, generate_interfaces, generate_services, generate_components
    ):
    """
    Generates Angular Services & Components within the correct business domain.
    """
    output_dir = get_output_directory(type_name)
    interface_dir = f"{output_dir}/interface"
    services_dir = f"{output_dir}/services"
    components_dir = f"{output_dir}/components"
    table_data_columns_config_dir =f"{output_dir}/config/table_data_columns"

    os.makedirs(interface_dir, exist_ok=True)
    os.makedirs(services_dir, exist_ok=True)
    os.makedirs(components_dir, exist_ok=True)
    os.makedirs(table_data_columns_config_dir, exist_ok=True)

    # Generate interfaces
    if generate_interfaces:
        generate_interface(type_name, fields, interface_dir)
        generate_response_interface(type_name, interface_dir)
        generate_column_data_type(type_name, interface_dir, table_data_columns_config_dir)
        generate_enum_files()

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

def generate_dashboard_component(module_name):
    """Generates a dashboard component for a given module."""
    if not module_name:
        print("❌ Module not found in FOLDER_MAP. Skipping dashboard generation.")
        return

    # Convert module name to PascalCase for class name
    class_name = (
        "".join(word.capitalize() for word in module_name.split("-"))
        + "DashboardComponent"
    )
    selector_name = f"sg-{module_name}"

    # Angular component template
    component_template = f"""import {{ Component }} from '@angular/core';
  @Component({{
      standalone: true,
      selector: '{selector_name}',
      template: `<h1>{class_name} Dashboard</h1>`,
  }})
  export class {class_name} {{}}
    """

    # Ensure the module directory exists
    module_dir = os.path.join(BASE_OUTPUT_DIR, module_name)
    os.makedirs(module_dir, exist_ok=True)

    # Write the component file
    component_filename = os.path.join(
        module_dir, f"{module_name}-dashboard.component.ts"
    )
    with open(component_filename, "w") as f:
        f.write(component_template)

    print(f"✅ Created Dashboard Component: {component_filename}")


def generate_interface(type_name, fields, interface_dir):
    """
    Generates TypeScript Interface for the GraphQL Type and Response Types.
    """
    interface_filename = (
        f"{interface_dir}/{split_and_hyphenate(type_name)}.interface.ts"
    )

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
    response_filename = (
        f"{interface_dir}/{split_and_hyphenate(type_name)}-response.interface.ts"
    )

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

def generate_enum_files():
    enum_definitions = {
      "AdContentAdStatus": [
        "Draft",
        "PendingApproval",
        "Approved",
        "Active",
        "Paused",
        "Completed",
        "Cancelled",
        "Rejected"
      ],
      "AdContentAdType": [
        "Banner",
        "Video",
        "Text",
        "Carousel",
        "Native",
        "Popup",
        "Interstitial",
        "SocialMediaPost",
        "Email",
        "SearchAd"
      ],
      "AdScheduleStatus": [
        "Pending",
        "Scheduled",
        "Running",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "AppointmentSlot": [
        "EarlyMorning",
        "Morning",
        "Afternoon",
        "LateAfternoon"
      ],
      "AppUserStatus": [
        "Active",
        "Suspended",
        "Terminated"
      ],
      "AttendeeStatus": [
        "Invited",
        "Confirmed",
        "Declined",
        "CheckedIn",
        "Cancelled"
      ],
      "BackgroundCheckStatus": [
        "NotInitiated",
        "InProgress",
        "Clear",
        "Flagged",
        "Failed"
      ],
      "BathroomFloorCondition": [
        "Good",
        "Bad"
      ],
      "BathFloorType": [
        "Tile",
        "Vinyl",
        "Wood",
        "Carpet"
      ],
      "BidStatus": [
        "Draft",
        "Submitted",
        "UnderReview",
        "Accepted",
        "Rejected",
        "Withdrawn"
      ],
      "BidType": [
        "FixedPrice",
        "TimeAndMaterials",
        "CostPlus",
        "Hourly"
      ],
      "BookingStatus": [
        "Requested",
        "PendingReview",
        "Contacted",
        "Scheduled",
        "Confirmed",
        "InProgress",
        "Completed",
        "Cancelled",
        "NoShow",
        "Rescheduled"
      ],
      "CampaignMetricSource": [
        "GoogleAnalytics",
        "FacebookAds",
        "GoogleAds",
        "TwitterAds",
        "LinkedInAds",
        "EmailMarketing",
        "CRM",
        "CustomTracking",
        "Other"
      ],
      "CampaignMetricType": [
        "Impressions",
        "Clicks",
        "Conversions",
        "CTR",
        "CPC",
        "CPA",
        "CPM",
        "ROI",
        "EngagementRate",
        "BounceRate",
        "LeadGeneration",
        "SalesRevenue",
        "CustomerAcquisitionCost",
        "LifetimeValue"
      ],
      "CampaignStatus": [
        "Draft",
        "Planned",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "ClaimStatus": [
        "OPEN",
        "IN_PROGRESS",
        "RESOLVED",
        "CLOSED"
      ],
      "CommunicationPreference": [
        "InAppNotifications",
        "PushNotifications",
        "SMS",
        "Email",
        "Phone"
      ],
      "ContentManagementStatus": [
        "Draft",
        "InReview",
        "Approved",
        "Published",
        "Archived",
        "Deleted"
      ],
      "ContentManagementType": [
        "BlogPost",
        "Article",
        "Tutorial",
        "FAQ",
        "News",
        "CaseStudy",
        "WhitePaper",
        "Video",
        "Podcast",
        "Infographic",
        "Webinar"
      ],
      "ContractStatus": [
        "Draft",
        "PendingApproval",
        "Active",
        "Completed",
        "Terminated",
        "Cancelled"
      ],
      "ConversionFunnelStepName": [
        "Awareness",
        "Interest",
        "Consideration",
        "Intent",
        "Evaluation",
        "Purchase",
        "Loyalty",
        "Advocacy"
      ],
      "CustomerType": [
        "Homeowner",
        "JobProvider",
        "PropertyOwner"
      ],
      "DayOfWeek": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "DoorLocation": [
        "FrontDoor",
        "BedroomDoor",
        "BathroomDoor"
      ],
      "EstimateStatus": [
        "Draft",
        "PendingReview",
        "Submitted",
        "AwaitingCustomerResponse",
        "Approved",
        "Declined",
        "Revised",
        "Expired",
        "Accepted",
        "Invoiced",
        "Closed",
        "Cancelled"
      ],
      "ExpenseType": [
        "Company",
        "Project"
      ],
      "FeedbackResponseStatus": [
        "Pending",
        "InProgress",
        "Resolved",
        "Closed",
        "Reopened"
      ],
      "FeedbackType": [
        "General",
        "BugReport",
        "FeatureRequest",
        "ServiceComplaint",
        "Praise",
        "Other"
      ],
      "FollowUpStatus": [
        "PENDING",
        "COMPLETED",
        "SKIPPED"
      ],
      "FollowUpType": [
        "PHONE",
        "EMAIL",
        "NOTIFICATION"
      ],
      "HandRailLocation": [
        "Interior",
        "Exterior"
      ],
      "HandRailMaterial": [
        "Metal",
        "Wood"
      ],
      "HiringStage": [
        "ReadyToHire",
        "PlanningAndBudgeting"
      ],
      "HiringTimeline": [
        "Within1Week",
        "OneToTwoWeeks",
        "MoreThanTwoWeeks",
        "TimingIsFlexible"
      ],
      "JobLeadStatus": [
        "New",
        "Contacted",
        "Qualified",
        "ProposalSent",
        "Negotiation",
        "Won",
        "Lost",
        "Closed"
      ],
      "JobPricingModel": [
        "FlatRate",
        "Hourly",
        "PerSquareFoot",
        "CustomQuote"
      ],
      "JobPriority": [
        "Critical",
        "High",
        "Medium",
        "Low",
        "Deferred"
      ],
      "JobStatus": [
        "Pending",
        "InProgress",
        "OnHold",
        "Completed",
        "Cancelled",
        "AwaitingReview",
        "Scheduled"
      ],
      "JobTaskPriority": [
        "Low",
        "Medium",
        "High",
        "Critical"
      ],
      "JobTaskStatus": [
        "NotStarted",
        "InProgress",
        "Completed",
        "OnHold",
        "Cancelled"
      ],
      "LeaseStatus": [
        "Pending",
        "Active",
        "Terminated",
        "Completed",
        "Cancelled"
      ],
      "NetworkProProspectStatus": [
        "New",
        "Contacted",
        "InProcess",
        "Approved",
        "Rejected",
        "Hired",
        "Declined"
      ],
      "NetworkProStatus": [
        "Active",
        "Inactive",
        "Suspended",
        "PendingVerification",
        "Deactivated"
      ],
      "NotificationPriority": [
        "Low",
        "Medium",
        "High",
        "Critical"
      ],
      "OnlineStatus": [
        "Online",
        "Offline",
        "Away",
        "Busy",
        "Invisible"
      ],
      "OwnershipStatus": [
        "Own",
        "Rent"
      ],
      "PaymentMethod": [
        "Check",
        "Venmo",
        "Cashapp",
        "Zelle",
        "Cash",
        "Credit Card",
        "Strip"
      ],
      "PaymentStatus": [
        "Pending",
        "Completed",
        "Failed"
      ],
      "ProjectStatus": [
        "Pending",
        "InProgress",
        "OnHold",
        "Completed",
        "Cancelled",
        "AwaitingReview",
        "Scheduled"
      ],
      "PropertyStatus": [
        "Active",
        "Pending",
        "Rented",
        "Sold"
      ],
      "PropertyType": [
        "SingleFamily",
        "MultiFamily",
        "Apartment",
        "Commercial",
        "MobileHome"
      ],
      "ProposalStatus": [
        "Draft",
        "PendingReview",
        "Submitted",
        "UnderConsideration",
        "ClientFeedbackRequired",
        "Negotiation",
        "Accepted",
        "Declined",
        "Revised",
        "Expired",
        "Withdrawn",
        "Closed"
      ],
      "RampMaterial": [
        "Wood",
        "Aluminum"
      ],
      "RampRunType": [
        "Straight",
        "WithTurns"
      ],
      "RampType": [
        "Permanent",
        "Portable"
      ],
      "RecipientType": [
        "RentTenant",
        "InsuranceMember"
      ],
      "ReviewVisibility": [
        "Public",
        "Private",
        "Internal"
      ],
      "SatisfactionRating": [
        "VERY_DISSATISFIED",
        "DISSATISFIED",
        "NEUTRAL",
        "SATISFIED",
        "VERY_SATISFIED"
      ],
      "SharedCustomerProspectStatus": [
        "New",
        "Contacted",
        "InProcess",
        "Approved",
        "Rejected",
        "Hired",
        "Declined"
      ],
      "ShowerType": [
        "RollIn",
        "WalkIn"
      ],
      "ShowerWallCondition": [
        "Good",
        "Bad"
      ],
      "ShowerWallType": [
        "Tile",
        "Fiberglass"
      ],
      "ShowerWaterControlType": [
        "Knobs",
        "Lever"
      ],
      "SupportTicketPriority": [
        "Low",
        "Medium",
        "High",
        "Critical"
      ],
      "SupportTicketStatus": [
        "Open",
        "InProgress",
        "Resolved",
        "Closed",
        "OnHold",
        "Escalated"
      ],
      "TeamMemberType": [
        "Office",
        "ServicePersonnel",
        "Manager",
        "Owner"
      ],
      "TenantStatus": [
        "Active",
        "Suspended",
        "Terminated",
        "PendingApproval"
      ],
      "TenantType": [
        "Homeowner",
        "PropertyManager",
        "ProjectManger",
        "NetworkPro"
      ],
      "TrafficSourceType": [
        "OrganicSearch",
        "PaidSearch",
        "SocialMedia",
        "Direct",
        "Referral",
        "Email",
        "Affiliate",
        "DisplayAds",
        "InfluencerMarketing",
        "ColdCall",
        "NetworkPro"
      ],
      "WorkRequestPriority": [
        "Low",
        "Medium",
        "High",
        "Urgent"
      ],
      "WorkRequestStatus": [
        "New",
        "InProgress",
        "Completed",
        "OnHold",
        "Cancelled",
        "Rejected"
      ]
    }

    for enum_name, values in enum_definitions.items():
        filename = f"{enum_name}Enum.ts"
        filepath = os.path.join(ENUM_DIR, filename)

        content = f"export enum {enum_name}Enum {{\n"
        content += "\n".join([f"  {value} = '{value}'," for value in values])
        content += "\n}\n"

        with open(filepath, "w") as f:
            f.write(content)
        print(f"✅ Enum generated: {filepath}")

    # ✅ Create the barrel file
    index_file = os.path.join(ENUM_DIR, "index.ts")
    with open(index_file, "w") as f:
        for enum_name in enum_definitions.keys():
            f.write(f"export * from './{enum_name}Enum';\n")
    print(f"✅ Barrel file created: {index_file}")


def generate_angular_services(type_name, fields, services_dir, service_type):
    """
    Generates Apollo Angular services from a GraphQL type.
    """
    # GraphQL Operations
    operations = {
        "put": f"""import {{ Injectable }} from '@angular/core';
    import {{ gql, Mutation }} from 'apollo-angular';
    import {{ Put{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-response.interface';

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
    import {{ Update{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-response.interface';

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
    import {{ Delete{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-response.interface';

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
    import {{ Get{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-response.interface';

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
    import {{ Query{type_name}sResponse }} from '../../interface/{split_and_hyphenate(type_name)}-response.interface';

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
    import {{ OnPut{type_name}Response }} from '../../interface/{split_and_hyphenate(type_name)}-response.interface';

    @Injectable({{ providedIn: 'root' }})
    export class OnPut{type_name}GQL extends Subscription<OnPut{type_name}Response> {{
        document = gql`
            subscription OnPut{type_name} {{
            onPut{type_name} {{
                {' '.join(fields.keys())}
            }}
            }}
        `;
    }}""",
    }
    content = operations[service_type]
    # Generate Service Files
    subdir = service_directory_map[service_type]
    service_filename = f"{services_dir}/{subdir}/{service_type}-{split_and_hyphenate(type_name + 's' if service_type == 'query' else type_name)}.service.ts"
    with open(service_filename, "w") as f:
        f.write(content)
    print(f"✅ Created {service_filename}")


def generate_angular_components(type_name, fields, components_dir, component_type):
    """
    Generates Angular components for the given GraphQL type inside the correct business domain.
    """
    subdir = component_directory_map[component_type]
    subdir_path = f"{components_dir}/{subdir}"

    # Generate form-based components for put & update
    if component_type in ["put", "update"]:
        generate_form_component(
            components_dir, type_name, fields, component_type, subdir
        )

    # Generate standard UI components for listing, viewing, and deleting
    else:
        generate_component(components_dir, type_name, fields, component_type, subdir)


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


# Extend support for file uploads (e.g., p-fileUpload for profile pictures)?
# Auto-detect and generate dropdowns, checkboxes, and file uploads?


def generate_form_controls(fields):
    """
    Generates Angular FormControl definitions for each field and identifies dropdown options.
    Filters out relationships, IDs, status fields, and timestamps.
    """
    dropdown_fields = {
        "adcontentadstatus": "AdContentAdStatus",
        "adcontentadtype": "AdContentAdType",
        "adschedulestatus": "AdScheduleStatus",
        "appointmentslot": "AppointmentSlot",
        "appuserstatus": "AppUserStatus",
        "attendeestatus": "AttendeeStatus",
        "backgroundcheckstatus": "BackgroundCheckStatus",
        "bathfloortype": "BathFloorType",
        "bathroomfloorcondition": "BathroomFloorCondition",
        "bidstatus": "BidStatus",
        "bidtype": "BidType",
        "bookingstatus": "BookingStatus",
        "campaignmetricsource": "CampaignMetricSource",
        "campaignmetrictype": "CampaignMetricType",
        "campaignstatus": "CampaignStatus",
        "claimstatus": "ClaimStatus",
        "communicationpreference": "CommunicationPreference",
        "contentmanagementstatus": "ContentManagementStatus",
        "contentmanagementtype": "ContentManagementType",
        "contractstatus": "ContractStatus",
        "conversionfunnelstepname": "ConversionFunnelStepName",
        "customertype": "CustomerType",
        "dayofweek": "DayOfWeek",
        "doorlocation": "DoorLocation",
        "estimatestatus": "EstimateStatus",
        "expensetype": "ExpenseType",
        "feedbackresponsestatus": "FeedbackResponseStatus",
        "feedbacktype": "FeedbackType",
        "followupstatus": "FollowUpStatus",
        "followuptype": "FollowUpType",
        "handraillocation": "HandRailLocation",
        "handrailmaterial": "HandRailMaterial",
        "hiringstage": "HiringStage",
        "hiringtimeline": "HiringTimeline",
        "jobleadstatus": "JobLeadStatus",
        "jobpricingmodel": "JobPricingModel",
        "jobpriority": "JobPriority",
        "jobstatus": "JobStatus",
        "jobtaskpriority": "JobTaskPriority",
        "jobtaskstatus": "JobTaskStatus",
        "leasestatus": "LeaseStatus",
        "networkproprospectstatus": "NetworkProProspectStatus",
        "networkprostatus": "NetworkProStatus",
        "notificationpriority": "NotificationPriority",
        "notificationtype": "NotificationType",
        "onlinestatus": "OnlineStatus",
        "ownershipstatus": "OwnershipStatus",
        "paymentmethod": "PaymentMethod",
        "paymentstatus": "PaymentStatus",
        "projectstatus": "ProjectStatus",
        "propertystatus": "PropertyStatus",
        "propertytype": "PropertyType",
        "proposalstatus": "ProposalStatus",
        "rampmaterial": "RampMaterial",
        "rampruntype": "RampRunType",
        "ramptype": "RampType",
        "recipienttype": "RecipientType",
        "reviewvisibility": "ReviewVisibility",
        "satisfactionrating": "SatisfactionRating",
        "sharedcustomerprospectstatus": "SharedCustomerProspectStatus",
        "showertype": "ShowerType",
        "showerwallcondition": "ShowerWallCondition",
        "showerwalltype": "ShowerWallType",
        "showerwatercontroltype": "ShowerWaterControlType",
        "supportticketpriority": "SupportTicketPriority",
        "supportticketstatus": "SupportTicketStatus",
        "teammembertype": "TeamMemberType",
        "tenantstatus": "TenantStatus",
        "tenanttype": "TenantType",
        "trafficsourcetype": "TrafficSourceType",
        "userrolename": "UserRoleName",
        "workrequestpriority": "WorkRequestPriority",
        "workrequeststatus": "WorkRequestStatus",
    }

    primitive_types = {"String", "Int", "Float", "Boolean", "AWSDateTime", "ID"}

    controls = []
    dropdown_options = {}

    for field, gql_type in fields.items():
        base_type = gql_type.replace("!", "").replace("[", "").replace("]", "")

        if (
            field in {"id", "created", "updated", "isDeleted"}
            or "status" in field.lower()
            or base_type not in primitive_types
        ):
            continue

        # Detect dropdown fields
        if field in dropdown_fields:
            enum_name = dropdown_fields[field]
            controls.append(
                f" {field}: new FormControl('', Validators.required),"
            )
            dropdown_options[field] = enum_name
        elif "email" in field.lower():
            controls.append(
                f" {field}: new FormControl('', [Validators.required, Validators.email]),"
            )
        elif "phone" in field.lower():
            controls.append(
                f"{field}: new FormControl('', Validators.required), "
            )
        elif any(k in field.lower() for k in ["url", "file", "attachment", "photo"]):
            controls.append(f" {field}: new FormControl([]),")
        elif "date" in field.lower() or "time" in field.lower():
            controls.append(
                f" {field}: new FormControl('', Validators.required),"
            )
        elif any(k in field.lower() for k in ["price", "cost", "amount", "rating"]):
            controls.append(
                f" {field}: new FormControl(0, Validators.required), "
            )
        elif any(k in field.lower() for k in ["description", "notes", "message", "terms"]):
            controls.append(
                f" {field}: new FormControl('', Validators.required),  "
            )
        else:
            controls.append(
                f"  {field}: new FormControl('', Validators.required), "
            )

    if controls:
        controls[-1] = controls[-1].rstrip()  # Remove trailing comma or space

    return "\n".join(controls), dropdown_options




def generate_form_template(fields, form_name, dropdown_options):
    """Generates a reusable Angular form template using PrimeNG components dynamically."""
    template = [
        "<sg-dynamic-template-loader",
        f'  [data$]="{form_name}$"',
        f'  [template]="{form_name}Template"',
        '  [loadingTemplate]="loadingTemplate"',
        '  [errorTemplate]="errorTemplate"',
        ">",
        "</sg-dynamic-template-loader>",
        "",
        "<!-- Form Template -->",
        f"<ng-template #{form_name}Template let-data>",
        f'  <form [formGroup]="{form_name}" (ngSubmit)="submit()">',
    ]

    for field in fields:
        field_label = camel_case_to_title(field)  # Convert camelCase to Title Case
        # Default to text input
        input_component = f'<p-inputText formControlName="{field}" />'

        # {'accountType': 'UserRoleName'}

        # Handle special cases for different input types
        if field in dropdown_options:
            input_component = (
                f'<p-dropdown formControlName="{field}" '
                f'[options]="{field}Options" '
                f'optionLabel="label" optionValue="value" placeholder="Select {field_label}" />'
            )
        elif "email" in field.lower():
            input_component = '<p-inputText type="email" formControlName="{field}" />'
        elif "phone" in field.lower():
            input_component = '<p-inputMask mask="(999) 999-9999" formControlName="{field}" />'
        elif any(keyword in field.lower() for keyword in ["date", "timestamp", "deadline"]):
            input_component = '<p-calendar formControlName="{field}" showIcon="true" />'
        elif any(keyword in field.lower() for keyword in ["price", "cost", "amount", "budget", "rating"]):
            input_component = '<p-inputNumber formControlName="{field}" />'
        elif any(keyword in field.lower() for keyword in ["description", "notes", "terms", "message", "scope"]):
            input_component = '<p-textarea formControlName="{field}" rows="3" autoResize="true" />'
        elif any(keyword in field.lower() for keyword in ["isRecurring", "requiresPaverLanding"]):
            input_component = '<p-inputSwitch formControlName="{field}" />'

        # Add Label & Input Field
        template.append(f'    <label>{field_label}:</label>')
        template.append(f"    {input_component}")

        # Add Validation Message (only for required fields)
        template.append(
            f"    <div *ngIf=\"{form_name}.get('{field}')?.invalid && "
            f"{form_name}.get('{field}')?.touched\" @fadeInOut>"
        )
        template.append(f'      Invalid {field_label}.')
        template.append("    </div>\n")

    # Add Submit Button
    template.extend(
        [
            "    <p-button",
            '      type="submit"',
            '      label="Submit"',
            f'      [disabled]="{form_name}.invalid || isSubmitting"',
            "    >",
            '      <ng-container *ngIf="isSubmitting; else buttonText">',
            "        🔄 Submitting...",
            "      </ng-container>",
            "      <ng-template #buttonText> Submit </ng-template>",
            "    </p-button>",
            "  </form>",
            f"</ng-template>",
            "",
            "<!-- Loading Template -->",
            "<ng-template #loadingTemplate>",
            '  <div class="loading-container">',
            "    <p-progressSpinner></p-progressSpinner>",
            "    <p>Updating data...</p>",
            "  </div>",
            "</ng-template>",
            "",
            "<!-- Error Template with Retry -->",
            "<ng-template #errorTemplate>",
            '  <div class="error-container">',
            '    <p class="error" @fadeInOut>⚠️ Error updating data. Please try again.</p>',
            '    <button class="retry-button" (click)="retry()">🔄 Retry</button>',
            "  </div>",
            "</ng-template>",
        ]
    )

    return "\n".join(template)


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


def generate_column_data_type(type_name, interface_dir, column_dir):
    """
    Generates a TypeScript column configuration based on an existing interface.
    """

    # File paths
    interface_filename = f"{interface_dir}/{split_and_hyphenate(type_name)}.interface.ts"
    column_filename = f"{column_dir}/{split_and_hyphenate(type_name)}-columns.ts"

    # Ensure the interface exists
    if not os.path.exists(interface_filename):
        print(f"⚠️ Interface {interface_filename} not found. Skipping column generation.")
        return

    # Read the existing interface file
    with open(interface_filename, "r") as f:
        interface_content = f.readlines()

    # Regex to extract field names and types from the interface
    field_pattern = re.compile(r"^\s*(\w+):\s*([\w\[\]]+);")

    column_definitions = []

    for line in interface_content:
        match = field_pattern.match(line)
        if match:
            field_name, ts_type = match.groups()

            # ✅ Convert field name to PascalCase Header
            pascal_case_header = " ".join(
                word.capitalize() for word in re.split(r'(?=[A-Z])', field_name)
            ).strip()

            # ✅ Determine column type
            column_type = "text"
            if ts_type == "number":
                column_type = "number"
            elif ts_type == "boolean":
                column_type = "boolean"
            elif ts_type == "string":
                if "date" in field_name.lower() or "time" in field_name.lower():
                    column_type = "date"
            elif "[]" in ts_type:
                column_type = "array"

            # ✅ Add the column definition
            column_definitions.append(
                f'  {{ field: "{field_name}", header: "{pascal_case_header}", type: "{column_type}" }}'
            )

    # ✅ Convert type name to SCREAMING_SNAKE_CASE
    constant_name = "_".join(re.findall('[A-Z][^A-Z]*', type_name)).upper() + "_COLUMNS"

    # ✅ Create TypeScript column configuration file
    column_content = f"export const {constant_name} = [\n"
    column_content += ",\n".join(column_definitions)
    column_content += "\n];\n"

    # ✅ Write the column file
    with open(column_filename, "w") as f:
        f.write(column_content)

    print(f"✅ Created {column_filename}")




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
        generate_dashboard_component(module_name)
        

    # ✅ Generate barrel files only if something was created
    generate_recursive_barrel_files(BASE_OUTPUT_DIR)
    generate_feature_barrel(BASE_OUTPUT_DIR)


if __name__ == "__main__":
    main()

# python3 graphql_to_angular_dry_run.py UserProfilev--dashboards --interfaces
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards --interfaces --services put
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards --interfaces --services put query
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards --interfaces --services put update get query delete on-put --components put update get query delete on-put
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards --interfaces --services put query --components put query
# python3 graphql_to_angular_dry_run.py UserProfile --dashboards
