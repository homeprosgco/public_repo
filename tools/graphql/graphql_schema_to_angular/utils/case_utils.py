import re

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

def camel_case_to_title(field_name):
    """Converts camelCase or PascalCase field names into Title Case."""
    return re.sub(r'([a-z])([A-Z])', r'\1 \2', field_name).title()


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
