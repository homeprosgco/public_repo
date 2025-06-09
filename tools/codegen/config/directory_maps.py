SCALAR_MAP = {
    "ID": "string",
    "String": "string",
    "Boolean": "boolean",
    "Int": "number",
    "Float": "number",
    "AWSDateTime": "string",
    "AWSDate": "string",
    "AWSJSON": "any",
}

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

# Mapping of GraphQL operation to Angular service subdirectory
service_directory_map = {
    "put": "create_service",
    "update": "update_service",
    "delete": "delete_service",
    "get": "detail_service",
    "query": "list_service",
    "on-put": "on_put_service",
}

# Mapping of GraphQL operation to Angular component subdirectory
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
    # App owners/admin section below
  
    # Authentication & Authorization
    "AppUser": "user-management/users",
    "Role": "user-management/roles",
    "Permission": "user-management/permissions",

    # Admin & System Management
    "Tenant": "admin/tenants",
    "AdminDashboard": "admin/admin-dashboard",

     # Bookings from website
    "Booking": "bookings",
    "Bid": "bookings/bids",

    # Communication
    "ChatRoom": "chat/chat-rooms",
    "ChatMessage": "chat/chat-messages",
    "ChatAttachment": "chat/chat-attachments",
    "ChatRoomUser": "chat/user-chat-rooms",

    # Marketing & Lead Generation
    "Campaign": "marketing/campaigns",
    "JobLead": "marketing/lead-management/job-leads",
    "SharedCustomerProspect": "marketing/lead-management/shared-customer-prospects",
    "NetworkProProspect": "marketing/lead-management/network-pro-prospects",
    "AdContent": "marketing/ad-content",
    "AdSchedule": "marketing/ad-schedules",
    "MarketingContent": "marketing/content",
    "AffiliateProgram": "marketing/affiliates",

    # Business Intelligence & Analytics
    "TrafficSource": "analytics/traffic-sources",
    "ConversionFunnel": "analytics/conversion-funnels",
    "AudienceSegment": "analytics/audience-segments",
    "CampaignAudience": "analytics/campaign-audiences",
    "CampaignMetric": "analytics/campaign-metrics",

    # Customer & Support Operations
    "Customer": "customer-management",
    "FollowUp": "customer-management/follow-ups",
    "Recipient": "customer-management/recipients",
    "Feedback": "customer-management/feedback",
    "SupportTicket": "customer-management/support-tickets",
    "Contact": "customer-management/contacts",

    # ADA Compliance
    "ShowerConversionEstimate": "ada-management/shower-conversions-estimates",
    "WoodRampEstimate": "ada-management/ramp-estimates",
    "DoorWideningEstimate": "ada-management/door-widening-estimates",
    "GrabBarEstimate": "ada-management/grab-bar-installation-estimates",
    "ChoreServiceEstimate": "ada-management/chore-services-estimates",

    # end App owners/admin section below

    # Every thing below here falls under what each Tenant has. including customer from above
    # but since one of our services is to manage the relationship of our tenants is in the
    # App feature section which is controlled by the App owners

    # Business Operations
    "Team": "business-management/teams",
    "TeamMember": "business-management/team-members",
    "Operations": "business-management/operations",
    "TeamTeamMembers": "business-management/team-members",  # Nested relation
    "Invite": "business-management/invites",
    "JobTask": "business-management/job-tasks",

    # Projects & Jobs
    "Project": "projects",
    "Job": "projects/job-management/jobs",
    "Estimate": "projects/job-management/estimates",
    "Proposal": "projects/job-management/proposals",
    "MaterialList": "projects/job-management/material-lists",
    "JobService": "projects/job-management/job-services",
    "MaintenanceLog": "projects/job-management/maintenance-logs",
    "Review": "projects/job-management/reviews",
    "Warranty": "projects/job-management/warranties",
    "WarrantyClaim": "projects/job-management//warranty-claims",

    # Events
    "CalendarEvent": "events/calendar-events",
    "WorkScheduleEvent": "events/work-schedules",

    # Products & Materials
    "Product": "products",

    # Property Management
    "Property": "property-management",
    "Unit": "property-management/units",
    "Lease": "property-management/leases",

    # Finance
    "Expense": "finance/expenses",
    "Invoice": "finance/invoices",
    "Payment": "finance/payments",
    "SubscriptionPlan": "finance/subscription-plans",

    # Work Requests
    "WorkRequest": "work-requests",

    # Field Services
    "Scheduling": "field-services/scheduling",
    "Logistics": "field-services/logistics",
    "WorkTracking": "field-services/work-tracking",

     # Files and Documents Services
    "File": "core/assets/files",
    "Resource": "core/assets/resources",

    # Contracts
    "Contract": "contracts",

}

def get_feature_lib_paths(type_name: str, parent_folder: str = "feature", platform: str = "angular"):
    assert platform in ("angular", "flutter"), "Platform must be 'angular' or 'flutter'"

    lib_base = (
        WORKSPACE_ROOT /
        "libs" /
        parent_folder /
        FOLDER_MAP[type_name] /
        f"{type_name.lower()}-{platform}"
    )

    # Angular has /src/lib, Flutter does not
    if platform == "angular":
        lib_base = lib_base / "src" / "lib"
    else:
        lib_base = lib_base / "lib"

    paths = {
        "base": lib_base,
        "data": lib_base / "data",
        "datasources": lib_base / "data" / "datasources",
        "data_repositories": lib_base / "data" / "repositories",
        "data_models": lib_base / "data" / "models",
        "enums": lib_base / "data" / "enums",
        "data_queries": lib_base / "data" / "queries",
        "data_mutations": lib_base / "data" / "mutations",
        "data_columns": lib_base / "data" / "columns",
        "data_subscriptions": lib_base / "data" / "subscriptions",
        "domain_filters": lib_base / "domain" / "filters",
        "domain_repositories": lib_base / "domain" / "repositories",
        "usecases": lib_base / "domain" / "usecases",
        "presentation": lib_base / "presentation",
        "providers": lib_base / "presentation" / "providers",
        "components": lib_base / "presentation" / "components",
        "widgets": lib_base / "presentation" / "widgets",
        "ui": lib_base / "presentation" / "ui",
    }

    for key, path in paths.items():
        os.makedirs(path, exist_ok=True)
        print(f"📁 Created: {path}")

    return paths

