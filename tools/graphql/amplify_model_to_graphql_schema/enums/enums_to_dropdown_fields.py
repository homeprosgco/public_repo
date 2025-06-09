import re

# Paste your enum block here as a multiline string
enum_block = """
AdContentAdStatus: a.enum(['Draft', 'PendingApproval', 'Approved', 'Active', 'Paused', 'Completed', 'Cancelled', 'Rejected'])
AdContentAdType: a.enum(['Banner', 'Video', 'Text', 'Carousel', 'Native', 'Popup', 'Interstitial', 'SocialMediaPost', 'Email', 'SearchAd'])
AdScheduleStatus: a.enum(['Pending', 'Scheduled', 'Running', 'Paused', 'Completed', 'Cancelled'])
AppointmentSlot: a.enum(['EarlyMorning', 'Morning', 'Afternoon', 'LateAfternoon'])
AppUserStatus: a.enum(['Active', 'Suspended', 'Terminated'])
AttendeeStatus: a.enum(['Invited', 'Confirmed', 'Declined', 'CheckedIn', 'Cancelled'])
BackgroundCheckStatus: a.enum(['NotInitiated', 'InProgress', 'Clear', 'Flagged', 'Failed'])
BathroomFloorCondition: a.enum(['Good', 'Bad'])
BathFloorType: a.enum(['Tile', 'Vinyl', 'Wood', 'Carpet'])
BidStatus: a.enum(['Draft', 'Submitted', 'UnderReview', 'Accepted', 'Rejected', 'Withdrawn'])
BidType: a.enum(['FixedPrice', 'TimeAndMaterials', 'CostPlus', 'Hourly'])
BookingStatus: a.enum(['Requested', 'PendingReview', 'Contacted', 'Scheduled', 'Confirmed', 'InProgress', 'Completed', 'Cancelled', 'NoShow', 'Rescheduled'])
CampaignMetricSource: a.enum(['GoogleAnalytics', 'FacebookAds', 'GoogleAds', 'TwitterAds', 'LinkedInAds', 'EmailMarketing', 'CRM', 'CustomTracking', 'Other'])
CampaignMetricType: a.enum(['Impressions', 'Clicks', 'Conversions', 'CTR', 'CPC', 'CPA', 'CPM', 'ROI', 'EngagementRate', 'BounceRate', 'LeadGeneration', 'SalesRevenue', 'CustomerAcquisitionCost', 'LifetimeValue'])
CampaignStatus: a.enum(['Draft', 'Planned', 'Active', 'Paused', 'Completed', 'Cancelled'])
ClaimStatus: a.enum(['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'])
CommunicationPreference: a.enum(['InAppNotifications', 'PushNotifications', 'SMS', 'Email', 'Phone'])
ContentManagementStatus: a.enum(['Draft', 'InReview', 'Approved', 'Published', 'Archived', 'Deleted'])
ContentManagementType: a.enum(['BlogPost', 'Article', 'Tutorial', 'FAQ', 'News', 'CaseStudy', 'WhitePaper', 'Video', 'Podcast', 'Infographic', 'Webinar'])
ContractStatus: a.enum(['Draft', 'PendingApproval', 'Active', 'Completed', 'Terminated', 'Cancelled'])
ConversionFunnelStepName: a.enum(['Awareness', 'Interest', 'Consideration', 'Intent', 'Evaluation', 'Purchase', 'Loyalty', 'Advocacy'])
CustomerType: a.enum(['Homeowner', 'JobProvider', 'PropertyOwner'])
DayOfWeek: a.enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
DoorLocation: a.enum(['FrontDoor', 'BedroomDoor', 'BathroomDoor'])
EstimateStatus: a.enum(['Draft', 'PendingReview', 'Submitted', 'AwaitingCustomerResponse', 'Approved', 'Declined', 'Revised', 'Expired', 'Accepted', 'Invoiced', 'Closed', 'Cancelled'])
ExpenseType: a.enum(['Company', 'Project'])
FeedbackResponseStatus: a.enum(['Pending', 'InProgress', 'Resolved', 'Closed', 'Reopened'])
FeedbackType: a.enum(['General', 'BugReport', 'FeatureRequest', 'ServiceComplaint', 'Praise', 'Other'])
FollowUpStatus: a.enum(['PENDING', 'COMPLETED', 'SKIPPED'])
FollowUpType: a.enum(['PHONE', 'EMAIL', 'NOTIFICATION'])
HandRailLocation: a.enum(['Interior', 'Exterior'])
HandRailMaterial: a.enum(['Metal', 'Wood'])
HiringStage: a.enum(['ReadyToHire', 'PlanningAndBudgeting'])
HiringTimeline: a.enum(['Within1Week', 'OneToTwoWeeks', 'MoreThanTwoWeeks', 'TimingIsFlexible'])
JobLeadStatus: a.enum(['New', 'Contacted', 'Qualified', 'ProposalSent', 'Negotiation', 'Won', 'Lost', 'Closed'])
JobPricingModel: a.enum(['FlatRate', 'Hourly', 'PerSquareFoot', 'CustomQuote'])
JobPriority: a.enum(['Critical', 'High', 'Medium', 'Low', 'Deferred'])
JobStatus: a.enum(['Pending', 'InProgress', 'OnHold', 'Completed', 'Cancelled', 'AwaitingReview', 'Scheduled'])
JobTaskPriority: a.enum(['Low', 'Medium', 'High', 'Critical'])
JobTaskStatus: a.enum(['NotStarted', 'InProgress', 'Completed', 'OnHold', 'Cancelled'])
LeaseStatus: a.enum(['Pending', 'Active', 'Terminated', 'Completed', 'Cancelled'])
NetworkProProspectStatus: a.enum(['New', 'Contacted', 'InProcess', 'Approved', 'Rejected', 'Hired', 'Declined'])
NetworkProStatus: a.enum(['Active', 'Inactive', 'Suspended', 'PendingVerification', 'Deactivated'])
NotificationPriority: a.enum(['Low', 'Medium', 'High', 'Critical'])
NotificationType: a.enum([
  'SystemAlert', 'JobUpdate', 'NewJobLead', 'PaymentReminder', 'Promotion', 'UserMessage',
  'AppointmentReminder', 'PlatformGoal', 'DocumentUpload', 'DocumentUpdate', 'InvoiceGenerated',
  'InvoiceDue', 'PaymentProcessed', 'FeedbackRequest', 'ReviewPosted', 'ContractSigned',
  'EstimateApproved', 'SupportTicketUpdate', 'ProjectDeadline', 'TeamMemberAssigned',
  'SubscriptionRenewal', 'ProfileUpdate', 'TaskReminder', 'CampaignPerformance',
  'LeadFollowUpReminder', 'AffiliateProgramUpdate', 'NewSupportTicket', 'AdScheduleUpdate',
  'ComplianceAlert',
])
OnlineStatus: a.enum(['Online', 'Offline', 'Away', 'Busy', 'Invisible'])
OwnershipStatus: a.enum(['Own', 'Rent'])
PaymentMethod: a.enum(['Check', 'Venmo', 'Cashapp', 'Zelle', 'Cash', 'Credit Card', 'Strip'])
PaymentStatus: a.enum(['Pending', 'Completed', 'Failed'])
ProjectStatus: a.enum(['Pending', 'InProgress', 'OnHold', 'Completed', 'Cancelled', 'AwaitingReview', 'Scheduled'])
PropertyStatus: a.enum(['Active', 'Pending', 'Rented', 'Sold'])
PropertyType: a.enum(['SingleFamily', 'MultiFamily', 'Apartment', 'Commercial', 'MobileHome'])
ProposalStatus: a.enum(['Draft', 'PendingReview', 'Submitted', 'UnderConsideration', 'ClientFeedbackRequired', 'Negotiation', 'Accepted', 'Declined', 'Revised', 'Expired', 'Withdrawn', 'Closed'])
RampMaterial: a.enum(['Wood', 'Aluminum'])
RampRunType: a.enum(['Straight', 'WithTurns'])
RampType: a.enum(['Permanent', 'Portable'])
RecipientType: a.enum(['RentTenant', 'InsuranceMember'])
ReviewVisibility: a.enum(['Public', 'Private', 'Internal'])
SatisfactionRating: a.enum(['VERY_DISSATISFIED', 'DISSATISFIED', 'NEUTRAL', 'SATISFIED', 'VERY_SATISFIED'])
SharedCustomerProspectStatus: a.enum(['New', 'Contacted', 'InProcess', 'Approved', 'Rejected', 'Hired', 'Declined'])
ShowerType: a.enum(['RollIn', 'WalkIn'])
ShowerWallCondition: a.enum(['Good', 'Bad'])
ShowerWallType: a.enum(['Tile', 'Fiberglass'])
ShowerWaterControlType: a.enum(['Knobs', 'Lever'])
SupportTicketPriority: a.enum(['Low', 'Medium', 'High', 'Critical'])
SupportTicketStatus: a.enum(['Open', 'InProgress', 'Resolved', 'Closed', 'OnHold', 'Escalated'])
TeamMemberType: a.enum(['Office', 'ServicePersonnel', 'Manager', 'Owner'])
TenantStatus: a.enum(['Active', 'Suspended', 'Terminated', 'PendingApproval'])
TenantType: a.enum(['Homeowner', 'PropertyManager', 'ProjectManger',  'NetworkPro'])
TrafficSourceType: a.enum(['OrganicSearch', 'PaidSearch', 'SocialMedia', 'Direct', 'Referral', 'Email', 'Affiliate', 'DisplayAds', 'InfluencerMarketing', 'ColdCall', 'NetworkPro'])
UserRoleName: a.enum([
  'Admin', 'NetworkPro', 'User', 'ProjectManager', 'JobManager', 'MarketingTeamMember',
  'CustomerSupportManager', 'FieldsOperationManager', 'AdministrativeDirector',
  'MarketingManager', 'ITSupport', 'SupportAgent', 'AccountManager', 'ContentManager',
  'FinancialOfficer', 'Homeowner', 'Tenant', 'PropertyManager', 'Stakeholder',
  'Recipient', 'Estimator',
])
WorkRequestPriority: a.enum(['Low', 'Medium', 'High', 'Urgent'])
WorkRequestStatus: a.enum(['New', 'InProgress', 'Completed', 'OnHold', 'Cancelled', 'Rejected'])
"""  # Truncated for brevity – paste full content

# Convert enum names to a `dropdown_fields` map using heuristics
dropdown_fields = {}

# Regex to extract EnumName from each line
pattern = re.compile(r"^(\w+):\s*a\.enum\(", re.MULTILINE)

matches = pattern.findall(enum_block)

for enum in matches:
    # Convert to camelCase field name heuristic (e.g., JobStatus → jobStatus)
    field_name = enum[0].lower() + re.sub(r"[A-Z]", lambda m: m.group(0).lower(), enum[1:])
    dropdown_fields[field_name] = enum

# Print result as Python dictionary
print("dropdown_fields = {")
for field, enum in sorted(dropdown_fields.items()):
    print(f'    "{field}": "{enum}",')
print("}")
