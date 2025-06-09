import { Account, AccountProfile, BeneficiaryInput, CompanyProfileInput, CustomerInput, EstimateInput, ExpenseInput, InvoiceInput, ItemInput, JobInput, JobLeadInput, PaymentInput, ProjectInput, ProposalInput, ProspectInput, UserProfile, WorkServiceInput } from "@graphql-schema/*";
import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ServerContext } from "../_interface/server-context.interface";

@Resolver('Account')
export class AccountResolver {

  @Query()
  async allAccounts(@Context() ctx: ServerContext): Promise<AccountProfile[]> {
    return await ctx.accounts.allAccounts() as AccountProfile[];
  }

  @Query()
  async account(@Context() ctx: ServerContext) {
    return await ctx.accounts.accountById(ctx.accountId);
  }

  @Query()
  async accountProfile(@Context() ctx: ServerContext) {
    return await ctx.accounts.accountProfileById(ctx.accountId);
  }

  @Query()
  async accountId(@Context() ctx: ServerContext) {
    const accountProfile = await ctx.accounts.accountProfileById(ctx.accountId);
    return {
      id: accountProfile.id
    }
  }

  @Query()
  async accountsWithUsersGreaterThan(@Args('usersCountInput') input: number, @Context() ctx: ServerContext) {
    return await ctx.accounts.accountsWithUsersGreaterThan(input);
  }

  @Query()
  async activeAccounts(@Context() ctx: ServerContext) {
    return await ctx.accounts.getActiveAccounts();
  }

  @ResolveField('beneficiaries')
  async beneficiaries(@Parent() account: Account, @Context() ctx: ServerContext) {
    await ctx.beneficiaries.getBeneficiaries(account.id);
  }

  @ResolveField('beneficiariesByCustomerId')
  async beneficiariesByCustomerId(@Parent() account: Account, @Args('customerId') customerId: string, @Context() ctx: ServerContext) {
    return await ctx.beneficiaries.getBeneficiariesByCustomerId(account.id, customerId);
  }

  @ResolveField('beneficiaryLastAdded')
  async beneficiaryLastAdded(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.beneficiaries.getLastAddedBeneficiary(account.id);
  }

  @ResolveField('beneficiaryLastUpdated')
  async benficairyLastUpdated(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.beneficiaries.getLastUpdatedBeneficiary(account.id);
  }

  @ResolveField('companyProfile')
  async companyProfile(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.companyProfile.getCompanyProfile(account.id);
  }

  @ResolveField('customers')
  async customers(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.customers.getCustomers(account.id);
  }

  @ResolveField('customerById')
  async customerById(@Parent() account: Account, @Args('customerId') customerId: string, @Context() ctx: ServerContext) {
    return await ctx.customers.getCustomerById(account.id, customerId);
  }

  @ResolveField('customersByType')
  async customersByType(@Parent() account: Account, @Args('customerType') customerType: string, @Context() ctx: ServerContext) {
    return await ctx.customers.getCustomersByType(account.id, customerType);
  }

  @ResolveField('customerLastAdded')
  async customerLastAdded(@Context() ctx: ServerContext) {
    return await ctx.customers.getLastAddedCustomer(ctx.accountId);
  }

  @ResolveField('customerLastUpdated')
  async customerLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.customers.getLastUpdatedCustomer(ctx.accountId);
  }

  @ResolveField('estimates')
  async estimates(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.estimates.getEstimates(ctx.accountId);
  }

  @ResolveField('estimateById')
  async estimateById(@Parent() account: Account, @Args('estimateId') estimateId: string, @Context() ctx: ServerContext) {
    return await ctx.estimates.getEstimateById(account.id, estimateId);
  }

  @ResolveField('estimatesCreatedBy')
  async estimatesCreatedBy(@Parent() account: Account, @Context() ctx: ServerContext)  {
    return await ctx.estimates.getEstimatesWhereEqual(account.id, "userId", ctx.user.id);
  }

  @ResolveField('estimatesByProspectId')
  async estimatesByProspectId(@Parent() account: Account, @Args('prospectId') prospectId: string, @Context() ctx: ServerContext) {
    return (await ctx.estimates.getEstimatesWhereEqual(account.id, "prospectId", prospectId));
  }

  @ResolveField('estimatesByJobLeadId')
  async estimatesByJobLeadId(@Parent() account: Account, @Args('jobLeadId') jobLeadId: string, @Context() ctx: ServerContext) {
    return (await ctx.estimates.getEstimatesWhereEqual(account.id, "jobLeadId", jobLeadId));
  }

  @ResolveField('estimateByProposalId')
  async estimateByProposalId(@Parent() account: Account, @Args('proposalId') proposalId: string, @Context() ctx: ServerContext) {
    return await ctx.estimates.getEstimatesWhereEqual(account.id, "proposalId", proposalId);
  }

  @ResolveField('estimateByNumber')
  async estimateByNumber(@Parent() account: Account, @Args('number') number: number, @Context() ctx: ServerContext) {
    return (await ctx.estimates.getEstimatesWhereEqual(account.id, "number", number))[0];
  }

  @ResolveField('estimatesByStatus')
  async estimatesByStatus(@Parent() account: Account, @Args('estimateStatus') estimateStatus: string, @Context() ctx: ServerContext) {
    return await ctx.estimates.getEstimatesWhereEqual(account.id, "status", estimateStatus);
  }

  @ResolveField('estimateByReferenceId')
  async estimateByReferenceId(@Parent() account: Account, @Args('referenceId') referenceId: string, @Context() ctx: ServerContext) {
    return (await ctx.estimates.getEstimatesWhereEqual(account.id, "referenceId", referenceId))[0];
  }

  @ResolveField('estimatesByCategory')
  async estimatesByCategory(@Parent() account: Account, @Args('category') category: string, @Context() ctx: ServerContext) {
    return (await ctx.estimates.getEstimatesWhereEqual(account.id, "category", category))
  }

  @ResolveField('estimateLastAdded')
  async estimateLastAdded(@Context() ctx: ServerContext) {
    return await ctx.estimates.getLastAddedEstimate(ctx.accountId);
  }

  @ResolveField('estimateLastUpdated')
  async estimateLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.estimates.getLastUpdatedEstimate(ctx.accountId);
  }

  // expeneses resolve fields
  
  @ResolveField('expenses')
  async expenses(@Parent() account: Account, @Context() ctx: ServerContext) {
    return ctx.expenses.getExpenses(account.id);
  }

  @ResolveField('expenseById')
  async expenseById(@Parent() account: Account, @Args('expenseId') expenseId: string, @Context() ctx: ServerContext) {
    return await ctx.expenses.getExpenseById(account.id, expenseId);
  }

  @ResolveField('expensesByCategory')
  async expensesByCategory(@Parent() account: Account, @Args('category') category: string, @Context() ctx: ServerContext) {
    return await ctx.expenses.getExpensesWhereEqual(account.id, "category", category);
  }

  @ResolveField('expensesCreatedBy')
  async expensesCreatedBy(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.expenses.getExpensesWhereEqual(account.id, "createdById", userId);
  }

  @ResolveField('expenseLastAdded')
  async expenseLastAdded(@Context() ctx: ServerContext) {
    return await ctx.expenses.getLastAddedExpense(ctx.accountId);
  }

  @ResolveField('expenseLastUpdated')
  async expenseLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.expenses.getLastUpdatedExpense(ctx.accountId);
  }

  // items resolve fields

  @ResolveField('items')
  async items(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.items.getItems(ctx.accountId);
  }

  @ResolveField('itemById')
  async itemById(@Parent() account: Account, @Args('itemId') itemId: string, @Context() ctx: ServerContext) {
    return await ctx.items.getItemById(account.id, itemId);
  }

  @ResolveField('itemsByCategory')
  async itemsByCatgory(@Parent() account: Account, @Args('category') category: string, @Context() ctx: ServerContext) {
    return await ctx.items.getItemsWhereEqual(account.id, "category", category);
  }

  @ResolveField('itemBySku')
  async itemBySku(@Parent() account: Account, @Args('sku') sku: string, @Context() ctx: ServerContext) {
    return (await ctx.items.getItemsWhereEqual(account.id, "sku", sku))[0];
  }
  
  @ResolveField('itemLastAdded')
  async itemLastAdded(@Context() ctx: ServerContext) {
    return await ctx.items.getLastAddedItem(ctx.accountId);
  }

  @ResolveField('itemLastUpdated')
  async itemLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.items.getLastUpdatedItem(ctx.accountId);
  }

  @ResolveField('invoices')
  async invoices(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoices(ctx.accountId);
  }

  @ResolveField('invoicesByCustomerId')
  async invoicesByCustomerId(@Parent() account: Account, @Args('customerId') customerId: string, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoicesWhereEqual(account.id, "customerId", customerId);
  }

  @ResolveField('invoiceById')
  async invoiceById(@Parent() account: Account, @Args('invoiceId') invoiceId: string, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoiceById(account.id, invoiceId);
  }

  @ResolveField('invoicesCreatedBy')
  async invoicesCreatedBy(@Parent() account: Account, @Context() ctx: ServerContext)  {
    return await ctx.invoices.getInvoicesWhereEqual(account.id, "userId", ctx.user.id);
  }

  @ResolveField('invoicesByEstimateId')
  async invoicesByEstimateId(@Parent() account: Account, @Args('estimateId') estimateId: string, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoicesWhereEqual(account.id, "estimateId", estimateId);
  }

  @ResolveField('invoicesByProspectId')
  async invoicesByProspectId(@Parent() account: Account, @Args('prospectId') prospectId: string, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoicesWhereEqual(account.id, "prospectId", prospectId);
  }

  @ResolveField('invoicesByJobId')
  async invoicesByJobId(@Parent() account: Account, @Args('jobId') jobId: string, @Context() ctx: ServerContext) {
    return (await ctx.invoices.getInvoicesWhereEqual(account.id, "jobId", jobId));
  }

  @ResolveField('invoicesByJobLeadId')
  async invoicesByJobLeadId(@Parent() account: Account, @Args('jobLeadId') jobLeadId: string, @Context() ctx: ServerContext) {
    return (await ctx.invoices.getInvoicesWhereEqual(account.id, "jobLeadId", jobLeadId));
  }

  @ResolveField('invoicesByProposalId')
  async invoicesByProposalId(@Parent() account: Account, @Args('proposalId') proposalId: string, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoicesWhereEqual(account.id, "proposalId", proposalId);
  }

  @ResolveField('invoicesByProjectId')
  async invoicesByProjectId(@Parent() account: Account, @Args('projectId') projectId: string, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoicesWhereEqual(account.id, "projectId", projectId);
  }

  @ResolveField('invoiceByNumber')
  async invoiceByNumber(@Parent() account: Account, @Args('number') number: number, @Context() ctx: ServerContext) {
    return (await ctx.invoices.getInvoicesWhereEqual(account.id, "number", number))[0];
  }

  @ResolveField('invoicesByStatus')
  async invoicesByStatus(@Parent() account: Account, @Args('invoiceStatus') invoiceStatus: string, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoicesWhereEqual(account.id, "status", invoiceStatus);
  }

  @ResolveField('invoicesByReferenceId')
  async invoicesByReferenceId(@Parent() account: Account, @Args('referenceId') referenceId: string, @Context() ctx: ServerContext) {
    return await ctx.invoices.getInvoicesWhereEqual(account.id, "referenceId", referenceId);
  }

  @ResolveField('invoicesByCategory')
  async invoicesByCategory(@Parent() account: Account, @Args('category') category: string, @Context() ctx: ServerContext) {
    return (await ctx.invoices.getInvoicesWhereEqual(account.id, "category", category))
  }

  @ResolveField('invoiceLastAdded')
  async invoiceLastAdded(@Context() ctx: ServerContext) {
    return await ctx.invoices.getLastAddedInvoice(ctx.accountId);
  }

  @ResolveField('invoiceLastUpdated')
  async invoiceLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.invoices.getLastUpdatedInvoice(ctx.accountId);
  }

  @ResolveField('jobs')
  async jobs(@Context() ctx: ServerContext) {
    return await ctx.jobs.getJobs(ctx.accountId);
  }

  @ResolveField('jobsByCategory')
  async jobsByCategory(@Parent() account: Account, @Args('category') category: string, @Context() ctx: ServerContext) {
    return await ctx.jobs.getJobsWhereEqual(account.id, "category", category);
  }

  @ResolveField('jobsByCustomerId')
  async jobsByCustomer(@Parent() account: Account, @Args('customerId') customerId: string, @Context() ctx: ServerContext) {
    return await ctx.jobs.getJobsWhereEqual(account.id, "customerId", customerId)
  }

  @ResolveField('jobsByEstimateId')
  async jobsByEstimateId(@Parent() account: Account, @Args('estimateId') estimateId: string, @Context() ctx: ServerContext) {
    return await  ctx.jobs.getJobsWhereEqual(account.id, "estimateId", estimateId);
  }

  @ResolveField('jobById')
  async jobById(@Parent() account: Account, @Args('jobId') jobId: string, @Context() ctx: ServerContext) {
    return await ctx.jobs.getJobById(account.id, jobId);
  }

  @ResolveField('jobsByStatus')
  async jobsByStatus(@Parent() account: Account, @Args('jobStatus') jobStatus: string, @Context() ctx: ServerContext) {
    return await ctx.jobs.getJobsWhereEqual(account.id, "status", jobStatus);
  }

  @ResolveField('jobsCreatedBy')
  async jobsCreatedBy(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.jobs.getJobsWhereEqual(account.id, "createdById", userId);
  }

  @ResolveField('jobsByJobLeadId')
  async jobsByJobLead(@Parent() account: Account, @Args('jobLeadId') jobLeadId: string, @Context() ctx: ServerContext){
    return await ctx.jobs.getJobsWhereEqual(account.id, "jobLeadid", jobLeadId);
  }

  @ResolveField('jobsByJobManager')
  async jobsByJobManager(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.jobs.getJobsWhereEqual(account.id, "jobManagerId", userId);
  }

  @ResolveField('jobByPONumber')
  async jobByPoNumber(@Parent() account: Account, @Args('poNumber') poNumber: string, @Context() ctx: ServerContext) {
    return await ctx.jobs.getJobsWhereEqual(account.id, "poNumber", poNumber);
  }

  @ResolveField('jobLastAdded')
  async jobLastAdded(@Context() ctx: ServerContext) {
    return await ctx.jobs.getLastAddedJob(ctx.accountId);
  }

  @ResolveField('jobLastUpdated')
  async jobLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.jobs.getLastUpdatedJob(ctx.accountId);
  }

  @ResolveField('jobLeads')
  async jobLeads(@Context() ctx: ServerContext) {
    return await ctx.jobLeads.getJobLeads(ctx.accountId);
  }

  @ResolveField('jobLeadById')
  async jobLeadById(@Parent() account: Account, @Args('jobLeadId') jobLeadId: string, @Context() ctx: ServerContext) {
    return await ctx.jobLeads.getJobLeadById(account.id, jobLeadId);
  }

  @ResolveField('jobLeadsByStatus')
  async jobLeadsByStatus(@Parent() account: Account, @Args('status') status: string, @Context() ctx: ServerContext) {
    return await ctx.jobLeads.getJobLeadsWhereEqual(account.id, "status", status);
  }

  @ResolveField('jobLeadsCreatedBy')
  async jobLeadsCreatedBy(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.jobLeads.getJobLeadsWhereEqual(account.id, "createdById", userId);
  }

  @ResolveField('jobLeadsByCategory')
  async jobLeadsByCategory(@Parent() account: Account, @Args('category') category: string, @Context() ctx: ServerContext) {
    return await ctx.jobLeads.getJobLeadsWhereEqual(account.id, "category", category);
  }

  @ResolveField('jobLeadLastAdded')
  async jobLeadLastAdded(@Context() ctx: ServerContext) {
    return await ctx.jobLeads.getLastAddedJobLead(ctx.accountId);
  }

  @ResolveField('jobLeadLastUpdated')
  async jobLeadLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.jobLeads.getLastUpdatedJobLead(ctx.accountId);
  }

  // account profile resolve fields
  
  @ResolveField('owner')
  async owner(@Parent() account: Account, @Context() ctx: ServerContext) {
    const { accountOwnerId } = await ctx.accounts.accountProfileById(account.id);
    return await ctx.users.getUserById(accountOwnerId);
  }

  // payments resolve fields

  @ResolveField('payments')
  async payments(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.payments.getPayments(account.id);
  }

  @ResolveField('paymentById')
  async paymentById(@Parent() account: Account, @Args('paymentId') paymentId: string, @Context() ctx: ServerContext) {
    return await ctx.payments.getPaymentById(account.id, paymentId);
  }

  @ResolveField('paymentsByDirection')
  async paymentsByDirection(@Parent() account: Account, @Args('direction') direction: string, @Context() ctx: ServerContext) {
    return await ctx.payments.getPaymentsWhereEqual(account.id, "direction", direction);
  }

  @ResolveField('paymentsByReferenceId')
  async paymentsByReferenceId(@Parent() account: Account, @Args('referenceId') referenceId: string, @Context() ctx: ServerContext) {
    return await ctx.payments.getPaymentsWhereEqual(account.id, "referenceId", referenceId);
  }

  @ResolveField('paymentsByReferenceType')
  async paymentsByReferenceType(@Parent() account: Account, @Args('referenceType') referenceType: string, @Context() ctx: ServerContext) {
    return await ctx.payments.getPaymentsWhereEqual(account.id, "referenceType", referenceType);
  }

  @ResolveField('paymentsCreatedBy')
  async paymentsCreatedBy(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.payments.getPaymentsWhereEqual(account.id, "createdById", userId);
  }

  @ResolveField('paymentsFor')
  async paymentsFor(@Parent() account: Account, @Args('for') paymentFor: string, @Context() ctx: ServerContext) {
    return await ctx.payments.getPaymentsWhereEqual(account.id, "for", paymentFor);
  }

  @ResolveField('paymentsTo')
  async paymentsTo(@Parent() account: Account, @Args('entityName') entityName: string, @Context() ctx: ServerContext) {
    return await ctx.payments.getPaymentsWhereEqual(account.id, "to", entityName);
  }

  @ResolveField('paymentLastAdded')
  async paymentLastAdded(@Context() ctx: ServerContext) {
    return await ctx.payments.getLastAddedPayment(ctx.accountId);
  }

  @ResolveField('paymentLastUpdated')
  async paymentLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.payments.getLastUpdatedPayment(ctx.accountId);
  }

  // accountProfile resolve fields
  
  @ResolveField('profile')
  async profile(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.accounts.accountProfileById(account.id);
  }

  // projects resolve fields

  @ResolveField('projects')
  async projects(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjects(account.id);
  }

  @ResolveField('projectById')
  async projectById(@Parent() account: Account, @Args('projectId') projectId: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectById(account.id, projectId)
  }

  @ResolveField('projectsByCategory')
  async projectsByCategory(@Parent() account: Account, @Args('category') category: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectsWhereEqual(account.id, "category", category);
  }

  @ResolveField('projectsByCustomerId')
  async projectsByCustomerId(@Parent() account: Account, @Args('customerId') customerId: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectsWhereEqual(account.id, "customerId", customerId);
  }

  @ResolveField('projectsCreatedBy')
  async projectsCreatedBy(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectsWhereEqual(account.id, "createdById", userId);
  }

  @ResolveField('projectsByJobLeadId')
  async projectsByJobLeadId(@Parent() account: Account, @Args('jobLeadId') jobLeadId: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectsWhereEqual(account.id, "jobLeadId", jobLeadId)
  }

  @ResolveField('projectsByProjectManager')
  async projectsByProjectManager(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectsWhereEqual(account.id, "projectManagerId", userId)
  }

  @ResolveField('projectsByReferenceId')
  async projectsByReferenceId(@Parent() account: Account, @Args('referenceId') referenceId: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectsWhereEqual(account.id, "referenceId", referenceId);
  }

  @ResolveField('projectsWithTeamMember')
  async projectsWithTeamMember(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectsWhereArrayIncludes(account.id, "officeTeamMemberIds", userId);
  }

  @ResolveField('projectsWithFieldTeamMember')
  async projectsWithFieldTeamMember(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.projects.getProjectsWhereArrayIncludes(account.id, "fieldTeamMemberIds", userId);
  }

  @ResolveField('projectLastAdded')
  async projectLastAdded(@Context() ctx: ServerContext) {
    return await ctx.projects.getLastAddedProject(ctx.accountId);
  }

  @ResolveField('projectLastUpdated')
  async projectLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.projects.getLastUpdatedProject(ctx.accountId);
  }

  // proposals resolve 
  
  @ResolveField('proposals')
  async proposals(@Context() ctx: ServerContext) {
    return await ctx.proposals.getProposals(ctx.accountId);
  }

  @ResolveField('proposalById')
  async proposalById(@Parent() account: Account, @Args('proposalId') proposalId: string, @Context() ctx: ServerContext) {
    return await ctx.proposals.getProposalById(account.id, proposalId);
  }

  @ResolveField('proposalsByJobLeadId')
  async proposalsByJobLeadId(@Parent() account: Account, @Args('jobLeadId') jobLeadId: string, @Context() ctx: ServerContext) {
    return await ctx.proposals.getProposalsWhereEqual(account.id, "jobLeadId", jobLeadId);
  }

  @ResolveField('proposalsByStatus')
  async proposalsByStatus(@Parent() account: Account, @Args('proposalStatus') proposalStatus: string, @Context() ctx: ServerContext) {
    return await ctx.proposals.getProposalsWhereEqual(account.id, "status", proposalStatus);
  }

  @ResolveField('proposalsCreatedBy')
  async proposalsCreatedBy(@Parent() account: Account, @Args('userId') userId: string, @Context() ctx: ServerContext) {
    return await ctx.proposals.getProposalsWhereEqual(account.id, "createdById", userId);
  }

  @ResolveField('proposalsByReferenceId')
  async proposalsByReferenceId(@Parent() account: Account, @Args('referenceId') referenceId: string, @Context() ctx: ServerContext) {
    return await ctx.proposals.getProposalsWhereEqual(account.id, "referenceId", referenceId);
  }

  @ResolveField('proposalLastAdded')
  async proposalLastAdded(@Context() ctx: ServerContext) {
    return await ctx.proposals.getLastAddedProposal(ctx.accountId);
  }

  @ResolveField('projectLastUpdated')
  async proposalLastUpdated(@Context() ctx: ServerContext) {
    return await ctx.proposals.getLastUpdatedProposal(ctx.accountId);
  }

  // prospect resolve fields

  @ResolveField('prospects')
  async prospects(@Parent() account: Account, @Context() ctx: ServerContext) {
    const { id } = account;
    return await ctx.prospects.getProspects(id);
  }

  @ResolveField('prospectById')
  async prospectById(@Parent() account: Account, @Args('prospectId') prospectId: string, @Context() ctx: ServerContext) {
    return await ctx.prospects.getProspectById(account.id, prospectId);
  }

  @ResolveField('prospectLastAdded')
  async prospectLastAdded(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.prospects.getLastAddedProspect(account.id);
  }

  @ResolveField('prospectLastUpdated')
  async prospectLastUpdated(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.prospects.getLastUpdatedProspect(account.id);
  }

  // workService resolve fields

  @ResolveField('workServices')
  async workServices(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.workServices.getWorkServices(account.id);
  }

  @ResolveField('workServiceById')
  async workServiceById(@Parent() account: Account, @Args('workServiceId') workServiceId: string, @Context() ctx: ServerContext) {
    return await ctx.workServices.getWorkServiceById(account.id, workServiceId);
  }

  @ResolveField('workServicesByCategory')
  async workServicesByCategory(@Parent() account: Account, @Args('category') category: string, @Context() ctx: ServerContext) {
    return ctx.workServices.getWorkServicesWhereEqual(account.id, "category", category);
  }

  @ResolveField('workServiceLastAdded')
  async workServiceLastAdded(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.workServices.getLastAddedWorkService(account.id);
  }

  @ResolveField('workServiceLastUpdated')
  async workServiceLastUpdated(@Parent() account: Account, @Context() ctx: ServerContext) {
    return await ctx.workServices.getLastUpdatedWorkService(account.id);
  }

  @Mutation()
  async seedTeamMembers(@Context() ctx: ServerContext) {
    const accounts = await ctx.accounts.allAccounts() as AccountProfile[];
    const users = await ctx.users.getAllUsers() as UserProfile[];
    return await ctx.accounts.seedTeamMembers(accounts, users);
  }

  @Mutation()
  async setActiveAccounts(@Context() ctx: ServerContext) {
    return await ctx.accounts.setActiveAccounts();
  }

  @Mutation()
  async createCompanyProfile(@Args('companyProfileInput') companyProfileInput: CompanyProfileInput, @Context() ctx: ServerContext) {
    await ctx.companyProfile.addCompanyProfile(ctx.accountId, companyProfileInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateCompanyProfile(@Args('companyProfileIdInput') companyProfileIdInput: string, @Args('updateCompanyProfileInput') companyProfileInput: CompanyProfileInput, @Context() ctx: ServerContext) {
    await ctx.companyProfile.updateCompanyProfile(ctx.accountId, companyProfileIdInput, companyProfileInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeCompanyProfile(@Args('companyProfileIdInput') companyProfileIdInput: string, @Context() ctx: ServerContext) {
    await ctx.companyProfile.deleteCompanyProfile(ctx.accountId, companyProfileIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async addTeamMember(@Args('userId') userId: string, @Context() ctx: ServerContext) {
    await ctx.accounts.addTeamMember(ctx.accountId, userId);
    return this.#account(ctx);
  }

  @Mutation()
  async addProspect(@Args('prospectInput') prospectInput: ProspectInput, @Context() ctx: ServerContext) {
    await ctx.prospects.addProspect(ctx.accountId, prospectInput);
    return this.#account(ctx);
  }

  @Mutation()
  async convertProspectToCustomer(@Args('prospectIdInput') prospectId: string, @Context() ctx: ServerContext) {
    const {id, ...prospect} = await ctx.prospects.getProspectById(ctx.accountId, prospectId);
    await ctx.customers.addCustomer(ctx.accountId, prospect);
    return this.#account(ctx);
  }

  @Mutation()
  async updateProspect(@Args('prospectIdInput') prospectIdInput: string, @Args('updateProspectInput') prospectInput: ProspectInput, @Context() ctx: ServerContext) {
    await ctx.prospects.updateProspect(ctx.accountId, prospectIdInput, prospectInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeProspect(@Args('prospectIdInput') prospectId: string, @Context() ctx: ServerContext) {
    await ctx.prospects.deleteProspect(ctx.accountId, prospectId);
    return this.#account(ctx);
  }

  @Mutation()
  async addCustomer(@Args('customerInput') customerInput: CustomerInput, @Context() ctx: ServerContext) {
    await ctx.customers.addCustomer(ctx.accountId, customerInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeCustomer(@Args('customerIdInput') customerIdInput: string, @Context() ctx: ServerContext) {
    await ctx.customers.deleteCustomer(ctx.accountId, customerIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateCustomer(@Args('customerIdInput') customerIdInput: string, @Args('updateCustomerInput') customerInput: CustomerInput, @Context() ctx: ServerContext) {
    await ctx.customers.updateCustomer(ctx.accountId, customerIdInput, customerInput);
    return this.#account(ctx);
  }

  @Mutation()
  async addBeneficiary(@Args('beneficiaryInput') beneficiaryInput: BeneficiaryInput, @Context() ctx: ServerContext) {
    await ctx.beneficiaries.addBeneficiary(ctx.accountId, beneficiaryInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeBeneficiary(@Args('beneficiaryIdInput') beneficiaryIdInput: string, @Context() ctx: ServerContext) {
    await ctx.beneficiaries.deleteBeneficiary(ctx.accountId, beneficiaryIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateBeneficiary(@Args('beneficiaryIdInput') beneficiaryIdInput: string, @Args('upateBeneficiaryInput') beneficiaryInput: BeneficiaryInput, @Context() ctx: ServerContext) {
    await ctx.beneficiaries.updateBeneficiary(ctx.accountId, beneficiaryIdInput, beneficiaryInput);
    return this.#account(ctx);
  }

  @Mutation()
  async createJobLead(@Args('jobLeadInput') jobLeadInput: JobLeadInput, @Context() ctx: ServerContext) {
    await ctx.jobLeads.addJobLead(ctx.accountId, jobLeadInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateJobLead(@Args('jobLeadIdInput') jobLeadIdInput: string, @Args('updateJobLeadInput') jobLeadInput: JobLeadInput, @Context() ctx: ServerContext) {
    await ctx.jobLeads.updateJobLead(ctx.accountId, jobLeadIdInput, jobLeadInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeJobLead(@Args('jobLeadIdInput') jobLeadIdInput: string, @Context() ctx: ServerContext) {
    await ctx.jobLeads.deleteJobLead(ctx.accountId, jobLeadIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async createItem(@Args('itemInput') itemInput: ItemInput, @Context() ctx: ServerContext) {
    await ctx.items.addItem(ctx.accountId, itemInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateItem(@Args('itemIdInput') itemIdInput: string, @Args('updateItemInput') itemInput: ItemInput, @Context() ctx: ServerContext) {
    await ctx.items.updateItem(ctx.accountId, itemIdInput, itemInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeItem(@Args('itemIdInput') itemIdInput: string, @Context() ctx: ServerContext) {
    await ctx.items.deleteItem(ctx.accountId, itemIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async createWorkService(@Args('workServiceInput') workServiceInput: WorkServiceInput, @Context() ctx: ServerContext) {
    await ctx.workServices.addWorkService(ctx.accountId, workServiceInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateWorkService(@Args('workServiceIdInput') workServiceIdInput: string, @Args('updateWorkServiceInput') workServiceInput: WorkServiceInput, @Context() ctx: ServerContext) {
    await ctx.workServices.updateWorkService(ctx.accountId, workServiceIdInput, workServiceInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeWorkService(@Args('workServiceIdInput') workServiceIdInput: string, @Context() ctx: ServerContext) {
    await ctx.workServices.deleteWorkService(ctx.accountId, workServiceIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async createProposal(@Args('proposalInput') proposalInput: ProposalInput, @Context() ctx: ServerContext) {
    await ctx.proposals.addProposal(ctx.accountId, proposalInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateProposal(@Args('proposalIdInput') proposalIdInput: string, @Args('updateProposalInput') proposalInput: ProposalInput, @Context() ctx: ServerContext) {
    await ctx.proposals.updateProposal(ctx.accountId, proposalIdInput, proposalInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeProposal(@Args('proposalIdInput') proposalIdInput: string, @Context() ctx: ServerContext) {
    await ctx.proposals.deleteProposal(ctx.accountId, proposalIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async addEstimate(@Args('estimateInput') estimateInput: EstimateInput, @Context() ctx: ServerContext) {
    await ctx.estimates.addEstimate(ctx.accountId, estimateInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateEstimate(@Args('estimateIdInput') estimateIdInput: string, @Args('updateEstimateInput') estimateInput: EstimateInput, @Context() ctx: ServerContext) {
    await ctx.estimates.updateEstimate(ctx.accountId, estimateIdInput, estimateInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeEstimate(@Args('estimateIdInput') estimateIdInput: string, @Context() ctx: ServerContext) {
    await ctx.estimates.deleteEstimate(ctx.accountId, estimateIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async createJob(@Args('jobInput') jobInput: JobInput, @Context() ctx: ServerContext) {
    await ctx.jobs.addJob(ctx.accountId, jobInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateJob(@Args('jobIdInput') jobIdInput: string, @Args('updateJobInput') jobInput: JobInput, @Context() ctx: ServerContext) {
    await ctx.jobs.updateJob(ctx.accountId, jobIdInput, jobInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeJob(@Args('jobIdInput') jobIdInput: string, @Context() ctx: ServerContext) {
    await ctx.jobs.deleteJob(ctx.accountId, jobIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async createProject(@Args('projectInput') projectInput: ProjectInput, @Context() ctx: ServerContext) {
    await ctx.projects.addProject(ctx.accountId, projectInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateProject(@Args('projectIdInput') projectIdInput: string, @Args('updateProjectInput') projectInput: ProjectInput, @Context() ctx: ServerContext) {
    await ctx.projects.updateProject(ctx.accountId, projectIdInput, projectInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeProject(@Args('projectIdInput') projectIdInput: string, @Context() ctx: ServerContext) {
    await ctx.projects.deleteProject(ctx.accountId, projectIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async addInvoice(@Args('invoiceInput') invoiceInput: InvoiceInput, @Context() ctx: ServerContext) {
    await ctx.invoices.addInvoice(ctx.accountId, invoiceInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateInvoice(@Args('invoiceIdInput') invoiceIdInput: string, @Args('updateInvoiceInput') invoiceInput: InvoiceInput, @Context() ctx: ServerContext) {
    await ctx.invoices.updateInvoice(ctx.accountId, invoiceIdInput, invoiceInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeInvoice(@Args('invoiceIdInput') invoiceIdInput: string, @Context() ctx: ServerContext) {
    await ctx.invoices.deleteInvoice(ctx.accountId, invoiceIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async createExpense(@Args('expenseInput') expenseInput: ExpenseInput, @Context() ctx: ServerContext) {
    await ctx.expenses.addExpense(ctx.accountId, expenseInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removeExpense(@Args('expenseIdInput') expenseIdInput: string, @Context() ctx: ServerContext) {
    await ctx.expenses.deleteExpense(ctx.accountId, expenseIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updateExpense(@Args('expenseIdInput') expenseIdInput: string, @Args('updateExpenseInput') expenseInput: ExpenseInput, @Context() ctx: ServerContext) {
    await ctx.expenses.updateExpense(ctx.accountId, expenseIdInput, expenseInput);
    return this.#account(ctx);
  }

  @Mutation()
  async createPayment(@Args('paymentInput') paymentInput: PaymentInput, @Context() ctx: ServerContext) {
    await ctx.payments.addPayment(ctx.accountId, paymentInput);
    return this.#account(ctx);
  }

  @Mutation()
  async removePayment(@Args('paymentIdInput') paymentIdInput: string, @Context() ctx: ServerContext) {
    await ctx.payments.deletePayment(ctx.accountId, paymentIdInput);
    return this.#account(ctx);
  }

  @Mutation()
  async updatePayment(@Args('paymentIdInput') paymentIdInput: string, @Args('updatePaymentInput') paymentInput: PaymentInput, @Context() ctx: ServerContext) {
    await ctx.payments.updatePayment(ctx.accountId, paymentIdInput, paymentInput);
    return this.#account(ctx);
  }

  async #account(ctx: ServerContext) {
    return await ctx.accounts.accountById(ctx.accountId);
  }

}