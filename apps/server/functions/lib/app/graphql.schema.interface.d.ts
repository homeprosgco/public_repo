export declare enum CustomerType {
    INDIVIDUAL = "INDIVIDUAL",
    COMPANY = "COMPANY"
}
export declare enum ProspectType {
    INDIVIDUAL = "INDIVIDUAL",
    COMPANY = "COMPANY"
}
export declare enum LeadSource {
    CRAIGSLIST = "CRAIGSLIST",
    BILLBOARD = "BILLBOARD",
    DIRECT_MAIL = "DIRECT_MAIL",
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM",
    YELP = "YELP",
    REFERRAL = "REFERRAL"
}
export declare enum LeadStatus {
    NEW = "NEW",
    LRM = "LRM",
    PENDING_IMAGES = "PENDING_IMAGES",
    VISIT_SCHEDULED = "VISIT_SCHEDULED",
    ESTIMATED = "ESTIMATED",
    ESTIMATE_DENIED = "ESTIMATE_DENIED",
    CONVERTED_JOB = "CONVERTED_JOB"
}
export declare enum JobStatus {
    NEW = "NEW",
    SCHEDULED = "SCHEDULED",
    IN_PROGRESS = "IN_PROGRESS",
    ON_HOLD = "ON_HOLD",
    COMPLETE = "COMPLETE",
    INVOICED = "INVOICED",
    INVOICE_PAID = "INVOICE_PAID",
    PENDING = "PENDING"
}
export declare enum ProjectStatus {
    NEW = "NEW",
    SCHEDULED = "SCHEDULED",
    IN_PROGRESS = "IN_PROGRESS",
    ON_HOLD = "ON_HOLD",
    COMPLETE = "COMPLETE",
    INVOICED = "INVOICED",
    INVOICE_PAID = "INVOICE_PAID",
    PENDING = "PENDING"
}
export declare enum EstimateStatus {
    DRAFT = "DRAFT",
    ACCEPTED = "ACCEPTED",
    DENIED = "DENIED",
    EXPIRED = "EXPIRED",
    SENT = "SENT",
    VIEWED = "VIEWED"
}
export declare enum InvoiceStatus {
    DRAFT = "DRAFT",
    SENT = "SENT",
    PAID = "PAID",
    OVERDUE = "OVERDUE",
    UNPAID = "UNPAID",
    VIEWED = "VIEWED"
}
export declare enum ProposalStatus {
    DRAFT = "DRAFT",
    ACCEPTED = "ACCEPTED",
    DENIED = "DENIED",
    EXPIRED = "EXPIRED",
    SENT = "SENT",
    VIEWED = "VIEWED"
}
export declare enum AuthUserResultOperationType {
    REGISTER_AUTH_USER = "REGISTER_AUTH_USER",
    SIGNIN_AUTH_USER = "SIGNIN_AUTH_USER"
}
export interface IHtmlEmailMessage {
    from: string;
    to: string;
    subject: string;
    text?: Nullable<string>;
    html?: Nullable<string>;
}
export interface CompanyProfileInput {
    compnayName: string;
    mainPhone: string;
    mainEmail: string;
    accountId: string;
    serviceCategory: string;
    address: AddressInput;
    logoURL?: Nullable<string>;
    fax?: Nullable<string>;
    socials?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    bio?: Nullable<string>;
}
export interface BeneficiaryInput {
    customerId: string;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<AddressInput>;
    type: string;
}
export interface CustomerInput {
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<AddressInput>;
    type: CustomerType;
}
export interface ProspectInput {
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<AddressInput>;
    type: ProspectType;
}
export interface JobLeadInput {
    prospectId: string;
    leadSource: LeadSource;
    status: LeadStatus;
    category: string;
    requestedWorkScope: string;
    createdById: string;
    address: AddressInput;
    notes?: Nullable<string>;
    comments?: Nullable<CommentInput[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<ActivityInput[]>;
}
export interface JobInput {
    customerId: string;
    status: JobStatus;
    category: string;
    requestedWorkScope: string;
    definedWorkScope: string;
    createdById: string;
    address: AddressInput;
    jobLeadId?: Nullable<string>;
    notes?: Nullable<string>;
    comments?: Nullable<CommentInput[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<ActivityInput[]>;
    assignedTo?: Nullable<string>;
    startDate?: Nullable<string>;
    estimateId?: Nullable<string>;
    poNumber?: Nullable<string>;
    jobManager?: Nullable<string>;
}
export interface ProjectInput {
    customerId: string;
    status: ProjectStatus;
    category: string;
    requestedWorkScope: string;
    definedWorkScope: string;
    createdById: string;
    address: AddressInput;
    jobLeadId?: Nullable<string>;
    jobIds?: Nullable<string[]>;
    notes?: Nullable<string>;
    comments?: Nullable<CommentInput[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<ActivityInput[]>;
    projectManagerId: string;
    officeTeamMemberIds?: Nullable<string[]>;
    fieldTeamMemeberIds?: Nullable<string[]>;
    startDate?: Nullable<string>;
    estimateIds?: Nullable<string[]>;
    referenceNumber?: Nullable<number>;
}
export interface EstimateInput {
    jobLeadId?: Nullable<string>;
    proposalId?: Nullable<string>;
    createdById: string;
    number: number;
    lineItems?: Nullable<LineItemInput[]>;
    lineWorkServices?: Nullable<LineWorkServiceInput[]>;
    notes?: Nullable<string>;
    comments?: Nullable<CommentInput[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<ActivityInput[]>;
    referenceId?: Nullable<string>;
    addressId: AddressInput;
    status: string;
    category?: Nullable<string>;
    viewedDate?: Nullable<string>;
    prospectId?: Nullable<string>;
}
export interface InvoiceInput {
    customerId: string;
    jobId?: Nullable<string>;
    projectId?: Nullable<string>;
    estimateId?: Nullable<string>;
    companyId?: Nullable<string>;
    jobLeadId?: Nullable<string>;
    proposalId?: Nullable<string>;
    createdById: string;
    number: number;
    status: InvoiceStatus;
    lineItems?: Nullable<LineItemInput[]>;
    lineWorkServices?: Nullable<LineWorkServiceInput[]>;
    notes?: Nullable<string>;
    comments?: Nullable<CommentInput[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<ActivityInput[]>;
    referenceId?: Nullable<string>;
    address: AddressInput;
    category?: Nullable<string>;
}
export interface ItemInput {
    category: string;
    description?: Nullable<string>;
    imageURL?: Nullable<string>;
    websiteReferences?: Nullable<string[]>;
    name: string;
    purchasePrice: string;
    salePrice?: Nullable<string>;
    sku?: Nullable<string>;
}
export interface ItemSku {
    sku: string;
}
export interface ProposalInput {
    prospectId: string;
    status: ProposalStatus;
    category: string;
    requestedWorkScope: string;
    definedWorkScope: string;
    createdById: string;
    address: AddressInput;
    jobLeadId: string;
    notes?: Nullable<string>;
    comments?: Nullable<Nullable<CommentInput>[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<Nullable<ActivityInput>[]>;
    referenceId?: Nullable<string>;
}
export interface WorkServiceInput {
    category: string;
    description?: Nullable<string>;
    name: string;
    notes?: Nullable<string>;
    salePrice: string;
    lineItems?: Nullable<LineItemInput[]>;
}
export interface WorkServiceNameInput {
    name: string;
}
export interface AuthUserInput {
    email: string;
    password: string;
}
export interface CreateUserTokenInput {
    userId: string;
    accountId: string;
}
export interface NewAccountUserInput {
    email: string;
    password: string;
    accountId: string;
}
export interface OriginLocationInput {
    city: string;
    state: string;
    zipcode?: Nullable<string>;
}
export interface AddressInput {
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
}
export interface CommentInput {
    userId: string;
    comment: string;
}
export interface ActivityInput {
    userId: string;
    activity: string;
}
export interface GetByID {
    id: string;
}
export interface GetByCustomerID {
    customerId: string;
}
export interface GetByProposalID {
    prosalId: string;
}
export interface GetByJobLeadID {
    jobLeadId: string;
}
export interface GetByJobID {
    jobId: string;
}
export interface GetByCategory {
    category: string;
}
export interface GetByReferenceID {
    referenceId: string;
}
export interface GetByStatus {
    status: string;
}
export interface LineItemInput {
    quantity: number;
    item: ItemInput;
}
export interface LineWorkServiceInput {
    quantity: number;
    workService: WorkServiceInput;
}
export interface MailgunMessageResult {
    __typename?: 'MailgunMessageResult';
    id?: Nullable<string>;
    message?: Nullable<string>;
    status?: Nullable<number>;
    details?: Nullable<string>;
}
export interface IMutation {
    __typename?: 'IMutation';
    sendHtmlEmailMessage(input: IHtmlEmailMessage): MailgunMessageResult | Promise<MailgunMessageResult>;
    sendTextEmail(input: IHtmlEmailMessage): MailgunMessageResult | Promise<MailgunMessageResult>;
    sendLinkNewUserInvitationEmail(): MailgunMessageResult | Promise<MailgunMessageResult>;
    sendTestEmail(): MailgunMessageResult | Promise<MailgunMessageResult>;
    createCompanyProfile(companyInput: CompanyProfileInput): CompanyProfile | Promise<CompanyProfile>;
    updateCompanyProfile(companyIdInput: GetByID, updateCompanyProfileInput: CompanyProfileInput): CompanyProfile | Promise<CompanyProfile>;
    removeCompanyProfile(companyIdInput: GetByID): string | Promise<string>;
    createBeneficiary(beneficiaryInput: BeneficiaryInput): Beneficiary | Promise<Beneficiary>;
    updateBeneficiary(beneficiaryIdInput: GetByID, updateBeneficiaryInput: BeneficiaryInput): Beneficiary | Promise<Beneficiary>;
    removeBeneficiary(beneficiaryIdInput: GetByID): string | Promise<string>;
    createCustomer(customerInput: CustomerInput): Customer | Promise<Customer>;
    updateCustomer(customerIdInput: GetByID, updateCustomerInput: CustomerInput): Customer | Promise<Customer>;
    removeCustomer(customerIdInput: GetByID): string | Promise<string>;
    createProspect(prospectInput: ProspectInput): Prospect | Promise<Prospect>;
    updateProspect(prospectIdInput: GetByID, updateProspectInput: ProspectInput): Prospect | Promise<Prospect>;
    removeProspect(prospectIdInput: GetByID): string | Promise<string>;
    createJobLead(jobLeadInput: JobLeadInput): JobLead | Promise<JobLead>;
    updateJobLead(jobLeadIdInput: GetByID, updateJobLeadInput: JobLeadInput): JobLead | Promise<JobLead>;
    removeJobLead(jobLeadIdInput: GetByID): string | Promise<string>;
    createJob(jobInput: JobInput): Job | Promise<Job>;
    updateJob(jobIdInput: GetByID, updateJobInput: JobInput): Job | Promise<Job>;
    removeJob(jobIdInput: GetByID): string | Promise<string>;
    createProject(projectInput: ProjectInput): Project | Promise<Project>;
    updateProject(projectIdInput: GetByID, updateProjectInput: ProjectInput): Project | Promise<Project>;
    removeProject(projectIdInput: GetByID): string | Promise<string>;
    createEstimate(estimateInput: EstimateInput): Estimate | Promise<Estimate>;
    updateEstimate(estimateIdInput: GetByID, updateEstimateInput: EstimateInput): Estimate | Promise<Estimate>;
    removeEstimate(estimateIdInput: GetByID): string | Promise<string>;
    createInvoice(invoiceInput: InvoiceInput): Invoice | Promise<Invoice>;
    updateInvoice(invoiceIdInput: GetByID, updateInvoiceInput: InvoiceInput): Invoice | Promise<Invoice>;
    removeInvoice(invoiceIdInput: GetByID): string | Promise<string>;
    createItem(itemInput: ItemInput): Item | Promise<Item>;
    updateItem(itemIdInput: GetByID, updateItemInput: ItemInput): Item | Promise<Item>;
    removeItem(itemIdInput: GetByID): string | Promise<string>;
    createProposal(proposalInput: ProposalInput): Proposal | Promise<Proposal>;
    updateProposal(proposalIdInput: GetByID, updateProposalInput: ProposalInput): Proposal | Promise<Proposal>;
    removeProposal(proposalIdInput: GetByID): string | Promise<string>;
    createWorkService(workServiceInput: WorkServiceInput): WorkService | Promise<WorkService>;
    updateWorkService(workServiceIdInput: GetByID, updateWorkServiceInput: WorkServiceInput): WorkService | Promise<WorkService>;
    removeWorkService(workServiceIdInput: GetByID): string | Promise<string>;
    registerAuthUser(input: AuthUserInput): Nullable<AuthUserResponse> | Promise<Nullable<AuthUserResponse>>;
    signinAuthUser(input: AuthUserInput): Nullable<AuthUserResponse> | Promise<Nullable<AuthUserResponse>>;
    registerAccountUser(input: NewAccountUserInput): Nullable<AuthUserResponse> | Promise<Nullable<AuthUserResponse>>;
    createUserToken(input: CreateUserTokenInput): Token | Promise<Token>;
    login(): Nullable<Truckstop> | Promise<Nullable<Truckstop>>;
    loadSearch(input: OriginLocationInput): Truckstop | Promise<Truckstop>;
}
export interface AccountProfile {
    __typename?: 'AccountProfile';
    accountOwnerId?: Nullable<string>;
    created?: Nullable<string>;
    userIds?: Nullable<string[]>;
}
export interface Account {
    __typename?: 'Account';
    id?: Nullable<string>;
    companyProfile?: Nullable<CompanyProfile>;
    prospects?: Nullable<Prospect[]>;
    prospectById?: Nullable<Prospect>;
    jobLeads?: Nullable<JobLead[]>;
    jobLeadById?: Nullable<JobLead>;
    jobLeadsByStatus?: Nullable<JobLead[]>;
    jobLeadsByLeadSource?: Nullable<JobLead[]>;
    jobLeadsCreatedBy?: Nullable<JobLead[]>;
    jobLeadsByCategory?: Nullable<JobLead[]>;
    jobLeadsByDate?: Nullable<JobLead[]>;
    proposals?: Nullable<Proposal[]>;
    proposalById?: Nullable<Proposal>;
    proposalByJobLeadId?: Nullable<Proposal>;
    proposalsByStatus?: Nullable<Proposal[]>;
    proposalsCreatedBy?: Nullable<Proposal[]>;
    proposalByReferenceId?: Nullable<Proposal>;
    proposalsByDate?: Nullable<Proposal[]>;
    estimates?: Nullable<Estimate[]>;
    estimateById?: Nullable<Estimate>;
    estimatesCreatedBy?: Nullable<Estimate[]>;
    estimateByProspectId?: Nullable<Estimate>;
    estimteByJobLeadId?: Nullable<Estimate>;
    estimateByProposalid?: Nullable<Estimate>;
    estimateByNumber?: Nullable<Estimate>;
    estimatesByStatus?: Nullable<Estimate[]>;
    estimatesExpired?: Nullable<Estimate[]>;
    estimateByReferenceId?: Nullable<Estimate>;
    estimatesByCategory?: Nullable<Estimate[]>;
    items?: Nullable<Item[]>;
    itemById?: Nullable<Item>;
    itemsByCategory?: Nullable<Item[]>;
    itemBySku?: Nullable<Item>;
    workServices?: Nullable<WorkService[]>;
    workServiceById?: Nullable<WorkService>;
    workServicesByCategory?: Nullable<WorkService[]>;
    customers?: Nullable<Customer[]>;
    customerById?: Nullable<Customer>;
    customerByEmail?: Nullable<Customer>;
    customerByPhoneNumbers?: Nullable<Customer>;
    customersByType?: Nullable<Customer[]>;
    customerInvoices?: Nullable<Invoice[]>;
    customerBeneficiaries?: Nullable<Beneficiary[]>;
    beneficiaries?: Nullable<Beneficiary[]>;
    beneficiariesByCustomerId?: Nullable<Beneficiary[]>;
    jobs?: Nullable<Job[]>;
    jobById?: Nullable<Job>;
    jobByEstimateId?: Nullable<Job>;
    jobsByCustomerId?: Nullable<Job[]>;
    jobsByStatus?: Nullable<Job[]>;
    jobsByCategory?: Nullable<Job[]>;
    jobsCreatedBy?: Nullable<Nullable<Job>[]>;
    jobByJobLeadId?: Nullable<Job>;
    jobByPONumber?: Nullable<Job>;
    jobsByJobManager?: Nullable<Job[]>;
    projects?: Nullable<Project[]>;
    projectById?: Nullable<Project>;
    projectsByCustomerId?: Nullable<Project[]>;
    projectsByCategory?: Nullable<Project[]>;
    projectsCreatedBy?: Nullable<Project[]>;
    projectsByJobLeadId?: Nullable<Project[]>;
    projectsByProjectManager?: Nullable<Project[]>;
    projectsWithTeamMember?: Nullable<Project[]>;
    projectsWithFieldTeamMember?: Nullable<Project[]>;
    projectByReferenceNumber?: Nullable<Project>;
    invoices?: Nullable<Invoice[]>;
    invoiceById?: Nullable<Invoice>;
    invoiceByJobId?: Nullable<Invoice>;
    invoiceByProjectId?: Nullable<Invoice>;
    invoiceByEstimateId?: Nullable<Invoice>;
    invoiceByProposalId?: Nullable<Invoice>;
    invoicesCreateBy?: Nullable<Invoice[]>;
    invoicesByDate?: Nullable<Invoice[]>;
    invoiceByNumber?: Nullable<Invoice>;
    invoicesByStatus?: Nullable<Invoice[]>;
    invoicebyReferenceId?: Nullable<Invoice>;
}
export interface IQuery {
    __typename?: 'IQuery';
    account(accountId: string): Nullable<Account> | Promise<Nullable<Account>>;
    beneficiaries(): Beneficiary[] | Promise<Beneficiary[]>;
    beneficiaryById(beneficiaryIdInput: GetByID): Beneficiary | Promise<Beneficiary>;
    customers(): Customer[] | Promise<Customer[]>;
    customerById(customerIdInput: GetByID): Customer | Promise<Customer>;
    prospects(): Prospect[] | Promise<Prospect[]>;
    prospectById(prospectIdInput: GetByID): Prospect | Promise<Prospect>;
    jobLeads(): JobLead[] | Promise<JobLead[]>;
    jobLeadById(jobLeadIdInput: GetByID): JobLead | Promise<JobLead>;
    jobs(): Job[] | Promise<Job[]>;
    jobById(jobIdInput: GetByID): Job | Promise<Job>;
    projects(): Project[] | Promise<Project[]>;
    projectById(projectIdInput: GetByID): Project | Promise<Project>;
    estimates(): Estimate[] | Promise<Estimate[]>;
    estimatesByCategory(categoryInput: GetByCategory): Estimate[] | Promise<Estimate[]>;
    estimateById(estimateIdInput: GetByID): Estimate | Promise<Estimate>;
    invoices(): Invoice[] | Promise<Invoice[]>;
    invoicesByCategory(categoryInput: GetByCategory): Invoice[] | Promise<Invoice[]>;
    invoicesByStatus(statusInput: GetByStatus): Invoice[] | Promise<Invoice[]>;
    invoiceById(invoiceIdInput: GetByID): Invoice | Promise<Invoice>;
    invoiceByReferenceId(referenceIdInput: GetByReferenceID): Invoice | Promise<Invoice>;
    invoiceByAddress(addressInput: AddressInput): Invoice[] | Promise<Invoice[]>;
    items(): Item[] | Promise<Item[]>;
    itemsByCategory(categoryInput: GetByCategory): Item[] | Promise<Item[]>;
    itemById(itemIdInput: GetByID): Item | Promise<Item>;
    itemBySku(itemSkuInput: ItemSku): Item | Promise<Item>;
    proposals(): Proposal[] | Promise<Proposal[]>;
    proposalById(proposalIdInput: GetByID): Proposal | Promise<Proposal>;
    workServices(): WorkService[] | Promise<WorkService[]>;
    workServicesByCategory(categoryInput: GetByCategory): WorkService[] | Promise<WorkService[]>;
    workServiceById(workServiceIdInput: GetByID): WorkService | Promise<WorkService>;
    workServiceByName(workServiceNameInput: WorkServiceNameInput): WorkService | Promise<WorkService>;
    authUserResponse(): Nullable<AuthUserResponse> | Promise<Nullable<AuthUserResponse>>;
    author(): Nullable<Author> | Promise<Nullable<Author>>;
    puppeteerBrowser(): Nullable<PuppeteerBrowser> | Promise<Nullable<PuppeteerBrowser>>;
    truckstop(): Truckstop | Promise<Truckstop>;
}
export interface CompanyProfile {
    __typename?: 'CompanyProfile';
    id: string;
    compnayName: string;
    mainPhone: string;
    mainEmail: string;
    accountId: string;
    serviceCategory?: Nullable<string>;
    address?: Nullable<Address>;
    logoURL?: Nullable<string>;
    fax?: Nullable<string>;
    socials?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    created?: Nullable<string>;
    bio?: Nullable<string>;
}
export interface Beneficiary {
    __typename?: 'Beneficiary';
    customerId?: Nullable<string>;
    id?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<Address>;
    type: string;
    created?: Nullable<string>;
}
export interface Customer {
    __typename?: 'Customer';
    id?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<Address>;
    type: CustomerType;
    created?: Nullable<string>;
}
export interface Prospect {
    __typename?: 'Prospect';
    id?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<Address>;
    type: ProspectType;
    created?: Nullable<string>;
}
export interface JobLead {
    __typename?: 'JobLead';
    id?: Nullable<string>;
    prospectId: string;
    leadSource?: Nullable<LeadSource>;
    status: LeadStatus;
    createdById: string;
    notes?: Nullable<string>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<string[]>;
    fileURLs?: Nullable<string[]>;
    category: string;
    activities?: Nullable<Activity[]>;
    address?: Nullable<Address>;
    requestedWorkScope: string;
    created?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface Job {
    __typename?: 'Job';
    id?: Nullable<string>;
    customerId: string;
    status: JobStatus;
    createdById: string;
    definedWorkScope: string;
    jobLeadId?: Nullable<string>;
    notes?: Nullable<string>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<string[]>;
    fileURLs?: Nullable<string[]>;
    category: string;
    activity?: Nullable<Activity[]>;
    address: Address;
    requestedWorkScope: string;
    created: string;
    updated?: Nullable<string>;
    assignedTo?: Nullable<string>;
    startDate?: Nullable<string>;
    completedDate?: Nullable<string>;
    estimateId?: Nullable<string>;
    proposalId?: Nullable<string>;
    poNumber?: Nullable<string>;
    jobManagerId?: Nullable<string>;
}
export interface Project {
    __typename?: 'Project';
    customerId: string;
    status: ProjectStatus;
    category: string;
    requestedWorkScope: string;
    definedWorkScope: string;
    createdById: string;
    created: string;
    address?: Nullable<Address>;
    jobLeadId?: Nullable<string>;
    jobIds?: Nullable<string[]>;
    notes?: Nullable<string>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<Activity[]>;
    projectManagerId: string;
    officeTeamMemberIds?: Nullable<string[]>;
    fieldTeamMemeberIds?: Nullable<string[]>;
    startDate?: Nullable<string>;
    estimateIds?: Nullable<string[]>;
    referenceNumber?: Nullable<number>;
    completedDate?: Nullable<string>;
}
export interface Estimate {
    __typename?: 'Estimate';
    created: string;
    createdById: string;
    id?: Nullable<string>;
    prospectId: string;
    prospect?: Nullable<Prospect>;
    companyId?: Nullable<string>;
    jobLeadId?: Nullable<string>;
    jobLead?: Nullable<JobLead>;
    proposalId?: Nullable<string>;
    proposal?: Nullable<Proposal>;
    number: number;
    status: string;
    updated?: Nullable<string>;
    expires?: Nullable<string>;
    lineItems?: Nullable<LineItem[]>;
    lineWorkServices?: Nullable<LineWorkService[]>;
    notes?: Nullable<string>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<Activity[]>;
    referenceId?: Nullable<string>;
    serviceAddress: Address;
    category?: Nullable<string>;
    viewedDate?: Nullable<string>;
}
export interface Invoice {
    __typename?: 'Invoice';
    customerId: string;
    jobId?: Nullable<string>;
    projectId?: Nullable<string>;
    estimateId?: Nullable<string>;
    companyId?: Nullable<string>;
    jobLeadId?: Nullable<string>;
    proposalId?: Nullable<string>;
    createdById: string;
    created: string;
    number: number;
    status: InvoiceStatus;
    updated?: Nullable<string>;
    lineItems?: Nullable<LineItem[]>;
    lineWorkServices?: Nullable<LineWorkService[]>;
    notes?: Nullable<string>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<Activity[]>;
    referenceId?: Nullable<string>;
    serviceAddress: Address;
    category?: Nullable<string>;
    viewedDate?: Nullable<string>;
}
export interface Item {
    __typename?: 'Item';
    id: string;
    category: string;
    description?: Nullable<string>;
    imageURL?: Nullable<string>;
    websiteReferences?: Nullable<string[]>;
    name: string;
    purchasePrice: string;
    salePrice?: Nullable<string>;
    sku?: Nullable<string>;
}
export interface Proposal {
    __typename?: 'Proposal';
    id: string;
    prospectId: string;
    status: ProposalStatus;
    category: string;
    requestedWorkScope: string;
    definedWorkScope: string;
    createdById: string;
    address?: Nullable<Address>;
    jobLeadId: string;
    notes?: Nullable<string>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activity?: Nullable<Activity[]>;
    referenceId?: Nullable<string>;
    created: string;
    updated?: Nullable<string>;
}
export interface WorkService {
    __typename?: 'WorkService';
    id: string;
    category: string;
    description?: Nullable<string>;
    name: string;
    notes?: Nullable<string>;
    salePrice: string;
    lineItems?: Nullable<LineItem[]>;
}
export interface Token {
    __typename?: 'Token';
    token: string;
}
export interface AuthUserResponse {
    __typename?: 'AuthUserResponse';
    status: string;
    operationType: AuthUserResultOperationType;
    operationResult: string;
    statusCode: number;
    idToken?: Nullable<string>;
}
export interface Author {
    __typename?: 'Author';
    firstName?: Nullable<string>;
}
export interface PuppeteerBrowser {
    __typename?: 'PuppeteerBrowser';
    connectionURL?: Nullable<string>;
    openPagesURLs?: Nullable<Nullable<string>[]>;
}
export interface Truckstop {
    __typename?: 'Truckstop';
    isLoggedIn?: Nullable<boolean>;
    startNewSearch?: Nullable<boolean>;
    operationMsg?: Nullable<string>;
    isSearchContainerOpen?: Nullable<boolean>;
    originLocationInputState?: Nullable<OriginLocationInputState>;
    loadsContainerTabsState?: Nullable<LoadsContainerTabsState>;
    loadSearch?: Nullable<LoadSearch>;
}
export interface OriginLocationInputState {
    __typename?: 'OriginLocationInputState';
    originInput: string;
    inputValue: string;
    status: string;
}
export interface LoadsContainerTabsState {
    __typename?: 'LoadsContainerTabsState';
    openTabsCityStates: TabCityState[];
    activeTabIndex: number;
}
export interface TabCityState {
    __typename?: 'TabCityState';
    originLocation: string;
    destinationLocation: string;
}
export interface LoadSearch {
    __typename?: 'LoadSearch';
    action: string;
    city?: Nullable<string>;
    state: string;
}
export interface User {
    __typename?: 'User';
    disabled?: Nullable<boolean>;
    email?: Nullable<string>;
    emailVerified?: Nullable<boolean>;
    id: string;
    idToken?: Nullable<string>;
    refreshToken?: Nullable<string>;
    created: string;
}
export interface UserProfile {
    __typename?: 'UserProfile';
    firstname: string;
    lastname: string;
    jobTitle?: Nullable<string>;
    jobType?: Nullable<string>;
    jobDescription?: Nullable<string>;
    jobArea?: Nullable<string>;
}
export interface Address {
    __typename?: 'Address';
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
}
export interface Comment {
    __typename?: 'Comment';
    userId: string;
    comment: string;
    created: string;
}
export interface Activity {
    __typename?: 'Activity';
    userId: string;
    activity: string;
    created: string;
}
export interface LineItem {
    __typename?: 'LineItem';
    quantity: number;
    item: Item;
}
export interface LineWorkService {
    __typename?: 'LineWorkService';
    quantity: number;
    workService: WorkService;
}
declare type Nullable<T> = T | null;
export {};
