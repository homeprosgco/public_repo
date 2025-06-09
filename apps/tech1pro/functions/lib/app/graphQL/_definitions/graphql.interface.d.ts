export declare enum AuthUserResultOperationType {
    REGISTER_AUTH_USER = "REGISTER_AUTH_USER",
    SIGNIN_AUTH_USER = "SIGNIN_AUTH_USER"
}
export declare enum CustomerType {
    INDIVIDUAL = "INDIVIDUAL",
    COMPANY = "COMPANY"
}
export declare enum EstimateStatus {
    ACCEPTED = "ACCEPTED",
    DENIED = "DENIED",
    DRAFT = "DRAFT",
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
export declare enum JobStatus {
    NEW = "NEW",
    SCHEDULED = "SCHEDULED",
    IN_PROGRESS = "IN_PROGRESS",
    ON_HOLD = "ON_HOLD",
    COMPLETE = "COMPLETE",
    INVOICED = "INVOICED"
}
export declare enum PaymentDirection {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING"
}
export declare enum ReferenceType {
    INVOICE = "INVOICE",
    JOB = "JOB",
    PROJECT = "PROJECT"
}
export declare enum ProjectStatus {
    NEW = "NEW",
    SCHEDULED = "SCHEDULED",
    IN_PROGRESS = "IN_PROGRESS",
    ON_HOLD = "ON_HOLD",
    COMPLETE = "COMPLETE",
    INVOICED = "INVOICED"
}
export declare enum ProposalStatus {
    DRAFT = "DRAFT",
    ACCEPTED = "ACCEPTED",
    DENIED = "DENIED",
    EXPIRED = "EXPIRED",
    SENT = "SENT",
    VIEWED = "VIEWED"
}
export declare enum ProspectType {
    INDIVIDUAL = "INDIVIDUAL",
    COMPANY = "COMPANY"
}
export interface AccountProfileInput {
    accountOwnerId: string;
    userIds?: Nullable<string[]>;
}
export interface AuthUserInput {
    email: string;
    password: string;
}
export interface AuthUserEmailInput {
    email: string;
}
export interface CreateUserTokenInput {
    userId: string;
    accountId: string;
}
export interface NewAccountUserInput {
    accountId: string;
    email: string;
    password: string;
}
export interface BeneficiaryInput {
    address?: Nullable<AddressInput>;
    customerId: string;
    displayName: string;
    email?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phone?: Nullable<string>;
    type: string;
    created?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface CompanyProfileInput {
    companyName: string;
    phone: string;
    email: string;
    accountId?: Nullable<string>;
    serviceCategory: string;
    address: AddressInput;
    logoURL?: Nullable<string>;
    fax?: Nullable<string>;
    socials?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    bio?: Nullable<string>;
}
export interface CustomerInput {
    address?: Nullable<AddressInput>;
    addressId?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phone?: Nullable<string>;
    prospectId?: Nullable<string>;
    type: string;
    created?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface EstimateInput {
    activities?: Nullable<ActivityInput[]>;
    address: AddressInput;
    addressId?: Nullable<string>;
    category?: Nullable<string>;
    comments?: Nullable<CommentInput[]>;
    createdById: string;
    fileURLs?: Nullable<Nullable<string>[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    jobLeadId?: Nullable<string>;
    lineItems?: Nullable<LineItemInput[]>;
    lineWorkServices?: Nullable<LineWorkServiceInput[]>;
    notes?: Nullable<NoteInput[]>;
    number: number;
    prospectId?: Nullable<string>;
    referenceId?: Nullable<string>;
    status: string;
    viewedDate?: Nullable<string>;
    created?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface ExpenseInput {
    amount: string;
    category: string;
    created: string;
    createdById: string;
    imageURL?: Nullable<string>;
    location: string;
    subCategory?: Nullable<string>;
    updated?: Nullable<string>;
    userId: string;
}
export interface InvoiceInput {
    activities?: Nullable<ActivityInput[]>;
    address?: Nullable<AddressInput>;
    addressId?: Nullable<string>;
    category?: Nullable<string>;
    comments?: Nullable<CommentInput[]>;
    created?: Nullable<string>;
    createdById: string;
    customerId: string;
    estimateId?: Nullable<string>;
    fileURLs?: Nullable<Nullable<string>[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    jobId?: Nullable<string>;
    jobLeadId?: Nullable<string>;
    lineItems?: Nullable<LineItemInput[]>;
    lineWorkServices?: Nullable<LineWorkServiceInput[]>;
    notes?: Nullable<NoteInput[]>;
    number: number;
    projectId?: Nullable<string>;
    proposalId?: Nullable<string>;
    referenceId?: Nullable<string>;
    status: string;
    updated?: Nullable<string>;
}
export interface ItemInput {
    category: string;
    description?: Nullable<string>;
    imageURL?: Nullable<string>;
    websiteReferences?: Nullable<string[]>;
    name: string;
    purchasePrice: string;
    salePrice: string;
    sku?: Nullable<string>;
    modelNumber?: Nullable<string>;
    brand?: Nullable<string>;
    make?: Nullable<string>;
    installLinks?: Nullable<string[]>;
    orderLinks?: Nullable<string[]>;
    created?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface ItemSku {
    sku: string;
}
export interface JobLeadInput {
    prospectId: string;
    leadSource: string;
    status: string;
    category: string;
    requestedWorkScope: string;
    createdById: string;
    created: string;
    address: AddressInput;
    notes?: Nullable<NoteInput[]>;
    comments?: Nullable<CommentInput[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activities?: Nullable<ActivityInput[]>;
    referenceId?: Nullable<string>;
}
export interface JobInput {
    customerId: string;
    status: string;
    category: string;
    requestedWorkScope: string;
    definedWorkScope: string;
    createdById: string;
    address: AddressInput;
    proposalId?: Nullable<string>;
    estimateId?: Nullable<string>;
    addressId?: Nullable<string>;
    jobLeadId?: Nullable<string>;
    notes?: Nullable<NoteInput[]>;
    comments?: Nullable<CommentInput[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activities?: Nullable<ActivityInput[]>;
    assignedToId?: Nullable<string>;
    startDate?: Nullable<string>;
    poNumber?: Nullable<string>;
    jobManagerId?: Nullable<string>;
    created?: Nullable<string>;
    updated?: Nullable<string>;
    lineItems?: Nullable<LineItemInput[]>;
    lineWorkServices?: Nullable<LineWorkServiceInput[]>;
}
export interface PaymentInput {
    amount: string;
    created: string;
    to: string;
    for: string;
    direction: string;
    referenceId: string;
    referenceType: string;
    createdById: string;
    updated?: Nullable<string>;
    note?: Nullable<string>;
}
export interface ProjectInput {
    activities?: Nullable<ActivityInput[]>;
    address: AddressInput;
    addressId?: Nullable<string>;
    category: string;
    comments?: Nullable<CommentInput[]>;
    created?: Nullable<string>;
    createdById: string;
    customerId: string;
    definedWorkScope: string;
    estimateIds?: Nullable<string[]>;
    fieldTeamMemeberIds?: Nullable<string[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    jobIds?: Nullable<string[]>;
    jobLeadId?: Nullable<string>;
    notes?: Nullable<NoteInput[]>;
    officeTeamMemberIds?: Nullable<string[]>;
    projectManagerId?: Nullable<string>;
    referenceId?: Nullable<string>;
    requestedWorkScope: string;
    startDate?: Nullable<string>;
    status: string;
    updated?: Nullable<string>;
}
export interface ProposalInput {
    prospectId: string;
    status: string;
    category: string;
    requestedWorkScope: string;
    definedWorkScope: string;
    created: string;
    createdById: string;
    address: AddressInput;
    jobLeadId: string;
    notes?: Nullable<NoteInput[]>;
    comments?: Nullable<CommentInput[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activities?: Nullable<Nullable<ActivityInput>[]>;
    referenceId?: Nullable<string>;
    lineWorkServices?: Nullable<LineWorkServiceInput[]>;
}
export interface ProspectInput {
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<AddressInput>;
    type: string;
}
export interface AddressInput {
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
}
export interface ContactInfoInput {
    displayName: string;
    email?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<AddressInput>;
}
export interface CommentInput {
    userId: string;
    comment: string;
    created: string;
}
export interface ActivityInput {
    userId: string;
    activity: string;
    created: string;
}
export interface NoteInput {
    userId: string;
    note: string;
    created: string;
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
export interface CreateUserInput {
    displayName?: Nullable<string>;
    email: string;
    password: string;
}
export interface UserProfileInput {
    displayName?: Nullable<string>;
    email: string;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phone?: Nullable<string>;
    profileURL?: Nullable<string>;
    password?: Nullable<string>;
    activeAccountId?: Nullable<string>;
}
export interface WorkServiceInput {
    category: string;
    description?: Nullable<string>;
    name: string;
    notes?: Nullable<NoteInput[]>;
    salePrice: string;
    lineItems?: Nullable<LineItemInput[]>;
    costGuides?: Nullable<string[]>;
    timeToComplete?: Nullable<number>;
    created?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface WorkServiceNameInput {
    name: string;
}
export interface Contact {
    displayName: string;
    email?: Nullable<string>;
    firstname?: Nullable<string>;
    id?: Nullable<string>;
    lastname?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<Address>;
    type: string;
    created?: Nullable<string>;
}
export interface AccountProfile {
    __typename?: 'AccountProfile';
    accountOwnerId: string;
    activeAccount?: Nullable<boolean>;
    created?: Nullable<string>;
    id?: Nullable<string>;
    userIds?: Nullable<string[]>;
}
export interface AccountId {
    __typename?: 'AccountId';
    id: string;
}
export interface Account {
    __typename?: 'Account';
    beneficiaries?: Nullable<Beneficiary[]>;
    beneficiariesByCustomerId?: Nullable<Beneficiary[]>;
    beneficiaryLastAdded?: Nullable<Beneficiary>;
    beneficiaryLastUpdated?: Nullable<Beneficiary>;
    companyProfile?: Nullable<CompanyProfile>;
    customers?: Nullable<Customer[]>;
    customerById?: Nullable<Customer>;
    customerByEmail?: Nullable<Customer>;
    customerByPhoneNumbers?: Nullable<Customer>;
    customersByType?: Nullable<Customer[]>;
    customerLastAdded?: Nullable<Customer>;
    customerLastUpdated?: Nullable<Customer>;
    estimates?: Nullable<Estimate[]>;
    estimateById?: Nullable<Estimate>;
    estimatesCreatedBy?: Nullable<Estimate[]>;
    estimatesByDate?: Nullable<Estimate[]>;
    estimatesByProspectId?: Nullable<Estimate[]>;
    estimatesByJobLeadId?: Nullable<Estimate[]>;
    estimateByProposalId?: Nullable<Estimate>;
    estimateByNumber?: Nullable<Estimate>;
    estimatesByStatus?: Nullable<Estimate[]>;
    estimateByReferenceId?: Nullable<Estimate>;
    estimatesByCategory?: Nullable<Estimate[]>;
    estimateLastAdded?: Nullable<Estimate>;
    estimateLastUpdated?: Nullable<Estimate>;
    expenses?: Nullable<Expense[]>;
    expenseById?: Nullable<Expense>;
    expensesByCategory?: Nullable<Expense[]>;
    expensesByDate?: Nullable<Expense[]>;
    expensesCreatedBy?: Nullable<Expense[]>;
    expenseLastAdded?: Nullable<Expense>;
    expenseLastUpdated?: Nullable<Expense>;
    id: string;
    items?: Nullable<Item[]>;
    itemById?: Nullable<Item>;
    itemsByCategory?: Nullable<Item[]>;
    itemBySku?: Nullable<Item>;
    itemLastAdded?: Nullable<Item>;
    itemLastUpdated?: Nullable<Item>;
    invoices?: Nullable<Invoice[]>;
    invoicesByCategory?: Nullable<Invoice[]>;
    invoicesByCustomerId?: Nullable<Invoice[]>;
    invoicesCreatedBy?: Nullable<Invoice[]>;
    invoicesByDate?: Nullable<Invoice[]>;
    invoicesByEstimateId?: Nullable<Invoice[]>;
    invoiceById?: Nullable<Invoice>;
    invoicesByJobId?: Nullable<Invoice[]>;
    invoicesByJobLeadId?: Nullable<Invoice[]>;
    invoiceByNumber?: Nullable<Invoice>;
    invoicesByProjectId?: Nullable<Invoice[]>;
    invoicesByProposalId?: Nullable<Invoice[]>;
    invoicesByProspectId?: Nullable<Invoice[]>;
    invoicesByReferenceId?: Nullable<Invoice[]>;
    invoicesByStatus?: Nullable<Invoice[]>;
    invoiceLastAdded?: Nullable<Invoice>;
    invoiceLastUpdated?: Nullable<Invoice>;
    jobs?: Nullable<Job[]>;
    jobsByCategory?: Nullable<Job[]>;
    jobsByCustomerId?: Nullable<Job[]>;
    jobsByDate?: Nullable<Job[]>;
    jobsByEstimateId?: Nullable<Job[]>;
    jobById?: Nullable<Job>;
    jobsByStatus?: Nullable<Job[]>;
    jobsCreatedBy?: Nullable<Nullable<Job>[]>;
    jobsByJobLeadId?: Nullable<Job[]>;
    jobsByJobManager?: Nullable<Job[]>;
    jobByPONumber?: Nullable<Job>;
    jobLastAdded?: Nullable<Job>;
    jobLastUpdated?: Nullable<Job>;
    jobLeads?: Nullable<JobLead[]>;
    jobLeadById?: Nullable<JobLead>;
    jobLeadsByDate?: Nullable<JobLead[]>;
    jobLeadsByStatus?: Nullable<JobLead[]>;
    jobLeadsByLeadSource?: Nullable<JobLead[]>;
    jobLeadsCreatedBy?: Nullable<JobLead[]>;
    jobLeadsByCategory?: Nullable<JobLead[]>;
    jobLeadLastAdded?: Nullable<JobLead>;
    jobLeadLastUpdated?: Nullable<JobLead>;
    owner?: Nullable<UserProfile>;
    payments?: Nullable<Payment[]>;
    paymentById?: Nullable<Payment>;
    paymentsByDate?: Nullable<Payment[]>;
    paymentsByDirection?: Nullable<Payment[]>;
    paymentsByReferenceId?: Nullable<Payment[]>;
    paymentsByReferenceType?: Nullable<Payment[]>;
    paymentsCreatedBy?: Nullable<Payment[]>;
    paymentsFor?: Nullable<Payment[]>;
    paymentsTo?: Nullable<Payment[]>;
    paymentLastAdded?: Nullable<Payment>;
    paymentLastUpdated?: Nullable<Payment>;
    profile?: Nullable<AccountProfile>;
    projects?: Nullable<Project[]>;
    projectsByCategory?: Nullable<Project[]>;
    projectsByCustomerId?: Nullable<Project[]>;
    projectsCreatedBy?: Nullable<Project[]>;
    projectsByDate?: Nullable<Project[]>;
    projectById?: Nullable<Project>;
    projectsByJobLeadId?: Nullable<Project[]>;
    projectsByProjectManager?: Nullable<Project[]>;
    projectsByReferenceId?: Nullable<Project>;
    projectsWithTeamMember?: Nullable<Project[]>;
    projectsWithFieldTeamMember?: Nullable<Project[]>;
    projectLastAdded?: Nullable<Project>;
    projectLastUpdated?: Nullable<Project>;
    proposals?: Nullable<Proposal[]>;
    proposalById?: Nullable<Proposal>;
    proposalsByJobLeadId?: Nullable<Proposal>;
    proposalsByStatus?: Nullable<Proposal[]>;
    proposalsCreatedBy?: Nullable<Proposal[]>;
    proposalsByReferenceId?: Nullable<Proposal>;
    proposalsByDate?: Nullable<Proposal[]>;
    proposalLastAdded?: Nullable<Proposal>;
    proposalLastUpdated?: Nullable<Proposal>;
    prospects?: Nullable<Prospect[]>;
    prospectById?: Nullable<Prospect>;
    prospectLastAdded?: Nullable<Prospect>;
    prospectLastUpdated?: Nullable<Prospect>;
    workServices?: Nullable<WorkService[]>;
    workServiceById?: Nullable<WorkService>;
    workServicesByCategory?: Nullable<WorkService[]>;
    workServiceLastAdded?: Nullable<WorkService>;
    workServiceLastUpdated?: Nullable<WorkService>;
}
export interface IQuery {
    __typename?: 'IQuery';
    account(): Account | Promise<Account>;
    accountProfile(): AccountProfile | Promise<AccountProfile>;
    accountId(): AccountId | Promise<AccountId>;
    accountsWithUsersGreaterThan(usersCountInput: number): AccountProfile[] | Promise<AccountProfile[]>;
    activeAccounts(): AccountProfile[] | Promise<AccountProfile[]>;
    allAccounts(): Nullable<AccountProfile[]> | Promise<Nullable<AccountProfile[]>>;
    authUserResponse(): Nullable<AuthUserResponse> | Promise<Nullable<AuthUserResponse>>;
    userById(uid: string): Nullable<User> | Promise<Nullable<User>>;
    userProfileById(userProfileId: string): UserProfile | Promise<UserProfile>;
    allUsers(): UserProfile[] | Promise<UserProfile[]>;
}
export interface IMutation {
    __typename?: 'IMutation';
    addBeneficiary(beneficiaryInput: BeneficiaryInput): Account | Promise<Account>;
    addCustomer(customerInput: CustomerInput): Account | Promise<Account>;
    addEstimate(estimateInput: EstimateInput): Account | Promise<Account>;
    addInvoice(invoiceInput: InvoiceInput): Account | Promise<Account>;
    addProspect(prospectInput: ProspectInput): Account | Promise<Account>;
    addTeamMember(userId: string): AccountProfile | Promise<AccountProfile>;
    createCompanyProfile(companyProfileInput: CompanyProfileInput): Account | Promise<Account>;
    createExpense(expenseInput: ExpenseInput): Account | Promise<Account>;
    createItem(itemInput: ItemInput): Account | Promise<Account>;
    createJob(jobInput: JobInput): Account | Promise<Account>;
    createJobLead(jobLeadInput: JobLeadInput): Account | Promise<Account>;
    createPayment(paymentInput: PaymentInput): Account | Promise<Account>;
    createProject(projectInput: ProjectInput): Account | Promise<Account>;
    createProposal(proposalInput: ProposalInput): Account | Promise<Account>;
    createWorkService(workServiceInput: WorkServiceInput): Account | Promise<Account>;
    removeBeneficiary(beneficiaryIdInput: string): Account | Promise<Account>;
    removeCompanyProfile(companyIdInput: string): Account | Promise<Account>;
    removeCustomer(customerIdInput: string): Account | Promise<Account>;
    removeEstimate(estimateIdInput: string): Account | Promise<Account>;
    removeExpense(expenseIdInput: string): Account | Promise<Account>;
    removeInvoice(invoiceIdInput: string): Account | Promise<Account>;
    removeItem(itemIdInput: string): Account | Promise<Account>;
    removeJob(jobIdInput: string): Account | Promise<Account>;
    removeJobLead(jobLeadIdInput: string): Account | Promise<Account>;
    removePayment(paymentIdInput: string): Account | Promise<Account>;
    removeProject(projectIdInput: string): Account | Promise<Account>;
    removeProposal(proposalIdInput: string): Account | Promise<Account>;
    removeProspect(prospectIdInput: string): Account | Promise<Account>;
    removeWorkService(workServiceIdInput: string): Account | Promise<Account>;
    seedTeamMembers(): AccountProfile[] | Promise<AccountProfile[]>;
    setActiveAccounts(): Nullable<AccountProfile[]> | Promise<Nullable<AccountProfile[]>>;
    updateBeneficiary(beneficiaryIdInput: string, updateBeneficiaryInput: BeneficiaryInput): Account | Promise<Account>;
    updateCompanyProfile(companyIdInput: string, updateCompanyProfileInput: CompanyProfileInput): Account | Promise<Account>;
    updateCustomer(customerIdInput: string, updateCustomerInput: CustomerInput): Account | Promise<Account>;
    updateEstimate(estimateIdInput: string, updateEstimateInput: EstimateInput): Account | Promise<Account>;
    updateExpense(expenseIdInput: string, updateExpenseInput: ExpenseInput): Account | Promise<Account>;
    updateInvoice(invoiceIdInput: string, updateInvoiceInput: InvoiceInput): Account | Promise<Account>;
    updateItem(itemIdInput: string, updateItemInput: ItemInput): Account | Promise<Account>;
    updateJob(jobIdInput: string, updateJobInput: JobInput): Account | Promise<Account>;
    updateJobLead(jobLeadIdInput: string, updateJobLeadInput: JobLeadInput): Account | Promise<Account>;
    updatePayment(paymentIdInput: string, updatePaymentInput: PaymentInput): Account | Promise<Account>;
    updateProject(projectIdInput: string, updateProjectInput: ProjectInput): Account | Promise<Account>;
    updateProposal(proposalIdInput: string, updateProposalInput: ProposalInput): Account | Promise<Account>;
    updateProspect(prospectIdInput: string, updateProspectInput: ProspectInput): Account | Promise<Account>;
    updateWorkService(workServiceIdInput: string, updateWorkServiceInput: WorkServiceInput): Account | Promise<Account>;
    convertProspectToCustomer(prospectIdInput: string): Account | Promise<Account>;
    convertJobLeadToJob(jobLeadIdInput: string): Account | Promise<Account>;
    convertEstimateToInvoice(estimateIdInput: string): Account | Promise<Account>;
    convertProposalToInvoice(proposalIdInput: string): Account | Promise<Account>;
    addJobToProject(jobInput: JobInput): Account | Promise<Account>;
    authUserCustomSigninToken(input: AuthUserEmailInput): Nullable<Token> | Promise<Nullable<Token>>;
    createUserToken(input: CreateUserTokenInput): Token | Promise<Token>;
    registerAccountUser(input: NewAccountUserInput): Nullable<AuthUserResponse> | Promise<Nullable<AuthUserResponse>>;
    registerAuthUser(input: AuthUserInput): Nullable<AuthUserResponse> | Promise<Nullable<AuthUserResponse>>;
    signinAuthUser(input: AuthUserInput): Nullable<AuthUserResponse> | Promise<Nullable<AuthUserResponse>>;
    seedAuthUsers(): Nullable<AuthUserResponse[]> | Promise<Nullable<AuthUserResponse[]>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    createUserProfile(userProfileInput: UserProfileInput): UserProfile | Promise<UserProfile>;
    updateUserProfile(userProfileUpdate: UserProfileInput): UserProfile | Promise<UserProfile>;
    removeUserProfile(userProfileId: string): string | Promise<string>;
}
export interface Token {
    __typename?: 'Token';
    token: string;
}
export interface AuthUserResponse {
    __typename?: 'AuthUserResponse';
    idToken?: Nullable<string>;
    operationResult: string;
    operationType: string;
    status: string;
    statusCode: number;
}
export interface Beneficiary extends Contact {
    __typename?: 'Beneficiary';
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    created?: Nullable<string>;
    customerId: string;
    email?: Nullable<string>;
    displayName: string;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    id?: Nullable<string>;
    phone?: Nullable<string>;
    type: string;
    updated?: Nullable<string>;
}
export interface CompanyProfile {
    __typename?: 'CompanyProfile';
    accountId?: Nullable<string>;
    address?: Nullable<Address>;
    bio?: Nullable<string>;
    companyName: string;
    created?: Nullable<string>;
    fax?: Nullable<string>;
    id?: Nullable<string>;
    logoURL?: Nullable<string>;
    email: string;
    phone: string;
    serviceCategory?: Nullable<string>;
    socials?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface Customer {
    __typename?: 'Customer';
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    created?: Nullable<string>;
    customerId?: Nullable<string>;
    email?: Nullable<string>;
    displayName: string;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    id?: Nullable<string>;
    phone?: Nullable<string>;
    prospectId?: Nullable<string>;
    type: string;
    updated?: Nullable<string>;
}
export interface Estimate {
    __typename?: 'Estimate';
    activities?: Nullable<Activity[]>;
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    category?: Nullable<string>;
    comments?: Nullable<Comment[]>;
    created: string;
    createdById: string;
    expires?: Nullable<string>;
    fileURLs?: Nullable<Nullable<string>[]>;
    id?: Nullable<string>;
    imageURLs?: Nullable<Nullable<string>[]>;
    jobLeadId?: Nullable<string>;
    lineItems?: Nullable<LineItem[]>;
    lineWorkServices?: Nullable<LineWorkService[]>;
    notes?: Nullable<Note[]>;
    number: number;
    prospectId: string;
    referenceId?: Nullable<string>;
    serviceAddress: Address;
    status: string;
    updated?: Nullable<string>;
    viewedDate?: Nullable<string>;
}
export interface Expense {
    __typename?: 'Expense';
    amount: string;
    category: string;
    created: string;
    createdById: string;
    id?: Nullable<string>;
    imageURL?: Nullable<string>;
    location: string;
    subCategory?: Nullable<string>;
    updated?: Nullable<string>;
    userId: string;
}
export interface Invoice {
    __typename?: 'Invoice';
    activities?: Nullable<Activity[]>;
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    category?: Nullable<string>;
    comments?: Nullable<Comment[]>;
    created?: Nullable<string>;
    createdById: string;
    customerId: string;
    estimateId?: Nullable<string>;
    fileURLs?: Nullable<Nullable<string>[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    id?: Nullable<string>;
    jobId?: Nullable<string>;
    jobLeadId?: Nullable<string>;
    lineItems?: Nullable<LineItem[]>;
    lineWorkServices?: Nullable<LineWorkService[]>;
    notes?: Nullable<Note[]>;
    number: number;
    projectId?: Nullable<string>;
    proposalId?: Nullable<string>;
    referenceId?: Nullable<string>;
    status: string;
    viewedDate?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface Item {
    __typename?: 'Item';
    brand?: Nullable<string>;
    category: string;
    created?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    imageURL?: Nullable<string>;
    installLinks?: Nullable<string[]>;
    make?: Nullable<string>;
    modelNumber?: Nullable<string>;
    name: string;
    orderLinks?: Nullable<string[]>;
    purchasePrice: string;
    salePrice: string;
    sku?: Nullable<string>;
    updated?: Nullable<string>;
    websiteReferences?: Nullable<string[]>;
}
export interface JobLead {
    __typename?: 'JobLead';
    id?: Nullable<string>;
    prospectId: string;
    leadSource: string;
    status: string;
    createdById: string;
    notes?: Nullable<Note[]>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<string[]>;
    fileURLs?: Nullable<string[]>;
    category: string;
    activities?: Nullable<Activity[]>;
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    requestedWorkScope: string;
    created?: Nullable<string>;
    updated?: Nullable<string>;
    referenceId?: Nullable<string>;
}
export interface Job {
    __typename?: 'Job';
    id?: Nullable<string>;
    customerId: string;
    status: string;
    createdById: string;
    definedWorkScope: string;
    jobLeadId?: Nullable<string>;
    notes?: Nullable<Note[]>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<string[]>;
    fileURLs?: Nullable<string[]>;
    category: string;
    activities?: Nullable<Activity[]>;
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    requestedWorkScope: string;
    created: string;
    updated?: Nullable<string>;
    assignedToId?: Nullable<string>;
    startDate?: Nullable<string>;
    completedDate?: Nullable<string>;
    estimateId?: Nullable<string>;
    proposalId?: Nullable<string>;
    poNumber?: Nullable<string>;
    jobManagerId?: Nullable<string>;
    lineItems?: Nullable<LineItem[]>;
    lineWorkServices?: Nullable<LineWorkService[]>;
}
export interface Payment {
    __typename?: 'Payment';
    id?: Nullable<string>;
    amount: string;
    direction: string;
    created: string;
    to: string;
    for: string;
    referenceId: string;
    referenceType: string;
    createdById: string;
    updated?: Nullable<string>;
    note?: Nullable<string>;
}
export interface Project {
    __typename?: 'Project';
    activities?: Nullable<Activity[]>;
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    category: string;
    comments?: Nullable<Comment[]>;
    created?: Nullable<string>;
    createdById: string;
    customerId: string;
    definedWorkScope: string;
    estimateIds?: Nullable<string[]>;
    fieldTeamMemeberIds?: Nullable<string[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    id?: Nullable<string>;
    imageURLs?: Nullable<Nullable<string>[]>;
    jobIds?: Nullable<string[]>;
    jobLeadId?: Nullable<string>;
    notes?: Nullable<Note[]>;
    officeTeamMemberIds?: Nullable<string[]>;
    projectManagerId?: Nullable<string>;
    referenceId?: Nullable<string>;
    requestedWorkScope: string;
    startDate?: Nullable<string>;
    status: string;
    updated?: Nullable<string>;
    completedDate?: Nullable<string>;
}
export interface Proposal {
    __typename?: 'Proposal';
    id?: Nullable<string>;
    prospectId: string;
    status: string;
    category: string;
    requestedWorkScope: string;
    definedWorkScope: string;
    createdById: string;
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    jobLeadId: string;
    notes?: Nullable<Note[]>;
    comments?: Nullable<Comment[]>;
    imageURLs?: Nullable<Nullable<string>[]>;
    fileURLs?: Nullable<Nullable<string>[]>;
    activities?: Nullable<Activity[]>;
    referenceId?: Nullable<string>;
    created: string;
    updated?: Nullable<string>;
    lineWorkServices?: Nullable<LineWorkService[]>;
}
export interface Prospect extends Contact {
    __typename?: 'Prospect';
    id?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    displayName: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<Address>;
    addressId?: Nullable<string>;
    type: string;
    created?: Nullable<string>;
    updated?: Nullable<string>;
}
export interface Address {
    __typename?: 'Address';
    id?: Nullable<string>;
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
}
export interface ContactInfo {
    __typename?: 'ContactInfo';
    displayName: string;
    email?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<Address>;
}
export interface Comment {
    __typename?: 'Comment';
    id?: Nullable<string>;
    userId: string;
    comment: string;
    created: string;
}
export interface Activity {
    __typename?: 'Activity';
    id?: Nullable<string>;
    userId: string;
    activity: string;
    created: string;
}
export interface Note {
    __typename?: 'Note';
    id?: Nullable<string>;
    userId: string;
    note: string;
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
export interface UserProfile {
    __typename?: 'UserProfile';
    id: string;
    displayName?: Nullable<string>;
    email: string;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phone?: Nullable<string>;
    profileURL?: Nullable<string>;
    idToken?: Nullable<string>;
    refreshToken?: Nullable<string>;
    created?: Nullable<string>;
    activeAccountId?: Nullable<string>;
}
export interface User {
    __typename?: 'User';
    uid: string;
    email?: Nullable<string>;
}
export interface WorkService {
    __typename?: 'WorkService';
    category: string;
    costGuides?: Nullable<string[]>;
    created?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    lineItems?: Nullable<LineItem[]>;
    name: string;
    notes?: Nullable<Note[]>;
    salePrice: string;
    timeToComplete?: Nullable<number>;
    updated?: Nullable<string>;
}
declare type Nullable<T> = T | null;
export {};
