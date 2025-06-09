import os

def generate_enum_files(BASE_OUTPUT_DIR):
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

    ENUM_DIR = os.path.join(BASE_OUTPUT_DIR, "enums")
    os.makedirs(ENUM_DIR, exist_ok=True)

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