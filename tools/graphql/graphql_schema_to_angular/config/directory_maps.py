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
    # Core Services
    "File": "core/assets/files",
    "Resource": "core/assets/resources",
    # Authentication & Authorization
    "AppUser": "user-management/users",
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
    # Work Requests
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
    # Finance
    "Expense": "finance/expenses",
    "Invoice": "finance/invoices",
    "Payment": "finance/payments",
    "SubscriptionPlan": "finance/subscription-plans",
    # Field Services
    "Scheduling": "field-services/scheduling",
    "Logistics": "field-services/logistics",
    "WorkTracking": "field-services/work-tracking",
    # Property
    "Property": "properties",
    # Products & Materials
    "Product": "products",
    # Contracts
    "Contract": "contracts",
    # Communication
    "ChatRoom": "chat/chat-rooms",
    "ChatMessage": "chat/chat-messages",
    "ChatAttachment": "chat/chat-attachments",
    "ChatRoomUser": "chat/user-chat-rooms",
    # ADA Compliance
    "ShowerConversionEstimate": "ada-management/shower-conversions-estimates",
    "WoodRampEstimate": "ada-management/ramp-estimates",
    "DoorWideningEstimate": "ada-management/door-widening-estimates",
    "GrabBarEstimate": "ada-management/grab-bar-installation-estimates",
    "ChoreServiceEstimate": "ada-management/chore-services-estimates",
}
