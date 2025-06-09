import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  beneficiaries?: Maybe<Array<Beneficiary>>;
  beneficiariesByCustomerId?: Maybe<Array<Beneficiary>>;
  beneficiaryLastAdded?: Maybe<Beneficiary>;
  beneficiaryLastUpdated?: Maybe<Beneficiary>;
  companyProfile?: Maybe<CompanyProfile>;
  customerByEmail?: Maybe<Customer>;
  customerById?: Maybe<Customer>;
  customerByPhoneNumbers?: Maybe<Customer>;
  customerLastAdded?: Maybe<Customer>;
  customerLastUpdated?: Maybe<Customer>;
  customers?: Maybe<Array<Customer>>;
  customersByType?: Maybe<Array<Customer>>;
  estimateById?: Maybe<Estimate>;
  estimateByNumber?: Maybe<Estimate>;
  estimateByProposalId?: Maybe<Estimate>;
  estimateByReferenceId?: Maybe<Estimate>;
  estimateLastAdded?: Maybe<Estimate>;
  estimateLastUpdated?: Maybe<Estimate>;
  estimates?: Maybe<Array<Estimate>>;
  estimatesByCategory?: Maybe<Array<Estimate>>;
  estimatesByDate?: Maybe<Array<Estimate>>;
  estimatesByJobLeadId?: Maybe<Array<Estimate>>;
  estimatesByProspectId?: Maybe<Array<Estimate>>;
  estimatesByStatus?: Maybe<Array<Estimate>>;
  estimatesCreatedBy?: Maybe<Array<Estimate>>;
  expenseById?: Maybe<Expense>;
  expenseLastAdded?: Maybe<Expense>;
  expenseLastUpdated?: Maybe<Expense>;
  expenses?: Maybe<Array<Expense>>;
  expensesByCategory?: Maybe<Array<Expense>>;
  expensesByDate?: Maybe<Array<Expense>>;
  expensesCreatedBy?: Maybe<Array<Expense>>;
  id: Scalars['String'];
  invoiceById?: Maybe<Invoice>;
  invoiceByNumber?: Maybe<Invoice>;
  invoiceLastAdded?: Maybe<Invoice>;
  invoiceLastUpdated?: Maybe<Invoice>;
  invoices?: Maybe<Array<Invoice>>;
  invoicesByCategory?: Maybe<Array<Invoice>>;
  invoicesByCustomerId?: Maybe<Array<Invoice>>;
  invoicesByDate?: Maybe<Array<Invoice>>;
  invoicesByEstimateId?: Maybe<Array<Invoice>>;
  invoicesByJobId?: Maybe<Array<Invoice>>;
  invoicesByJobLeadId?: Maybe<Array<Invoice>>;
  invoicesByProjectId?: Maybe<Array<Invoice>>;
  invoicesByProposalId?: Maybe<Array<Invoice>>;
  invoicesByProspectId?: Maybe<Array<Invoice>>;
  invoicesByReferenceId?: Maybe<Array<Invoice>>;
  invoicesByStatus?: Maybe<Array<Invoice>>;
  invoicesCreatedBy?: Maybe<Array<Invoice>>;
  itemById?: Maybe<Item>;
  itemBySku?: Maybe<Item>;
  itemLastAdded?: Maybe<Item>;
  itemLastUpdated?: Maybe<Item>;
  items?: Maybe<Array<Item>>;
  itemsByCategory?: Maybe<Array<Item>>;
  jobById?: Maybe<Job>;
  jobByPONumber?: Maybe<Job>;
  jobLastAdded?: Maybe<Job>;
  jobLastUpdated?: Maybe<Job>;
  jobLeadById?: Maybe<JobLead>;
  jobLeadLastAdded?: Maybe<JobLead>;
  jobLeadLastUpdated?: Maybe<JobLead>;
  jobLeads?: Maybe<Array<JobLead>>;
  jobLeadsByCategory?: Maybe<Array<JobLead>>;
  jobLeadsByDate?: Maybe<Array<JobLead>>;
  jobLeadsByLeadSource?: Maybe<Array<JobLead>>;
  jobLeadsByStatus?: Maybe<Array<JobLead>>;
  jobLeadsCreatedBy?: Maybe<Array<JobLead>>;
  jobs?: Maybe<Array<Job>>;
  jobsByCategory?: Maybe<Array<Job>>;
  jobsByCustomerId?: Maybe<Array<Job>>;
  jobsByDate?: Maybe<Array<Job>>;
  jobsByEstimateId?: Maybe<Array<Job>>;
  jobsByJobLeadId?: Maybe<Array<Job>>;
  jobsByJobManager?: Maybe<Array<Job>>;
  jobsByStatus?: Maybe<Array<Job>>;
  jobsCreatedBy?: Maybe<Array<Maybe<Job>>>;
  owner?: Maybe<UserProfile>;
  paymentById?: Maybe<Payment>;
  paymentLastAdded?: Maybe<Payment>;
  paymentLastUpdated?: Maybe<Payment>;
  payments?: Maybe<Array<Payment>>;
  paymentsByDate?: Maybe<Array<Payment>>;
  paymentsByDirection?: Maybe<Array<Payment>>;
  paymentsByReferenceId?: Maybe<Array<Payment>>;
  paymentsByReferenceType?: Maybe<Array<Payment>>;
  paymentsCreatedBy?: Maybe<Array<Payment>>;
  paymentsFor?: Maybe<Array<Payment>>;
  paymentsTo?: Maybe<Array<Payment>>;
  profile?: Maybe<AccountProfile>;
  projectById?: Maybe<Project>;
  projectLastAdded?: Maybe<Project>;
  projectLastUpdated?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsByCategory?: Maybe<Array<Project>>;
  projectsByCustomerId?: Maybe<Array<Project>>;
  projectsByDate?: Maybe<Array<Project>>;
  projectsByJobLeadId?: Maybe<Array<Project>>;
  projectsByProjectManager?: Maybe<Array<Project>>;
  projectsByReferenceId?: Maybe<Project>;
  projectsCreatedBy?: Maybe<Array<Project>>;
  projectsWithFieldTeamMember?: Maybe<Array<Project>>;
  projectsWithTeamMember?: Maybe<Array<Project>>;
  proposalById?: Maybe<Proposal>;
  proposalLastAdded?: Maybe<Proposal>;
  proposalLastUpdated?: Maybe<Proposal>;
  proposals?: Maybe<Array<Proposal>>;
  proposalsByDate?: Maybe<Array<Proposal>>;
  proposalsByJobLeadId?: Maybe<Proposal>;
  proposalsByReferenceId?: Maybe<Proposal>;
  proposalsByStatus?: Maybe<Array<Proposal>>;
  proposalsCreatedBy?: Maybe<Array<Proposal>>;
  prospectById?: Maybe<Prospect>;
  prospectLastAdded?: Maybe<Prospect>;
  prospectLastUpdated?: Maybe<Prospect>;
  prospects?: Maybe<Array<Prospect>>;
  workServiceById?: Maybe<WorkService>;
  workServiceLastAdded?: Maybe<WorkService>;
  workServiceLastUpdated?: Maybe<WorkService>;
  workServices?: Maybe<Array<WorkService>>;
  workServicesByCategory?: Maybe<Array<WorkService>>;
};


export type AccountBeneficiariesByCustomerIdArgs = {
  customerId: Scalars['String'];
};


export type AccountCustomerByEmailArgs = {
  customerEmails: Array<Scalars['String']>;
};


export type AccountCustomerByIdArgs = {
  customerId: Scalars['String'];
};


export type AccountCustomerByPhoneNumbersArgs = {
  customerPhoneNumbers: Array<Scalars['String']>;
};


export type AccountCustomersByTypeArgs = {
  customerType: Scalars['String'];
};


export type AccountEstimateByIdArgs = {
  estimateId: Scalars['String'];
};


export type AccountEstimateByNumberArgs = {
  number: Scalars['Int'];
};


export type AccountEstimateByProposalIdArgs = {
  proposalId: Scalars['String'];
};


export type AccountEstimateByReferenceIdArgs = {
  referenceId: Scalars['String'];
};


export type AccountEstimatesByCategoryArgs = {
  category: Scalars['String'];
};


export type AccountEstimatesByDateArgs = {
  after: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
};


export type AccountEstimatesByJobLeadIdArgs = {
  jobLeadId: Scalars['String'];
};


export type AccountEstimatesByProspectIdArgs = {
  prospectId: Scalars['String'];
};


export type AccountEstimatesByStatusArgs = {
  estimateStatus: Scalars['String'];
};


export type AccountExpenseByIdArgs = {
  expenseId?: InputMaybe<Scalars['String']>;
};


export type AccountExpensesByCategoryArgs = {
  category: Scalars['String'];
};


export type AccountExpensesByDateArgs = {
  after: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
};


export type AccountExpensesCreatedByArgs = {
  userId: Scalars['String'];
};


export type AccountInvoiceByIdArgs = {
  invoiceId: Scalars['String'];
};


export type AccountInvoiceByNumberArgs = {
  number: Scalars['Int'];
};


export type AccountInvoicesByCategoryArgs = {
  category: Scalars['String'];
};


export type AccountInvoicesByCustomerIdArgs = {
  customerId: Scalars['String'];
};


export type AccountInvoicesByDateArgs = {
  after: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
};


export type AccountInvoicesByEstimateIdArgs = {
  estimateId: Scalars['String'];
};


export type AccountInvoicesByJobIdArgs = {
  jobId: Scalars['String'];
};


export type AccountInvoicesByJobLeadIdArgs = {
  jobLeadId: Scalars['String'];
};


export type AccountInvoicesByProjectIdArgs = {
  projectId: Scalars['String'];
};


export type AccountInvoicesByProposalIdArgs = {
  proposalId: Scalars['String'];
};


export type AccountInvoicesByProspectIdArgs = {
  prospectId: Scalars['String'];
};


export type AccountInvoicesByReferenceIdArgs = {
  referenceId: Scalars['String'];
};


export type AccountInvoicesByStatusArgs = {
  invoiceStatus: Scalars['String'];
};


export type AccountInvoicesCreatedByArgs = {
  userId: Scalars['String'];
};


export type AccountItemByIdArgs = {
  itemId: Scalars['String'];
};


export type AccountItemBySkuArgs = {
  sku: Scalars['String'];
};


export type AccountItemsByCategoryArgs = {
  category: Scalars['String'];
};


export type AccountJobByIdArgs = {
  jobId: Scalars['String'];
};


export type AccountJobByPoNumberArgs = {
  poNumber: Scalars['String'];
};


export type AccountJobLeadByIdArgs = {
  jobLeadId: Scalars['String'];
};


export type AccountJobLeadsByCategoryArgs = {
  category: Scalars['String'];
};


export type AccountJobLeadsByDateArgs = {
  after: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
};


export type AccountJobLeadsByLeadSourceArgs = {
  leadSource: Scalars['String'];
};


export type AccountJobLeadsByStatusArgs = {
  status: Scalars['String'];
};


export type AccountJobLeadsCreatedByArgs = {
  userId: Scalars['String'];
};


export type AccountJobsByCategoryArgs = {
  category: Scalars['String'];
};


export type AccountJobsByCustomerIdArgs = {
  customerId: Scalars['String'];
};


export type AccountJobsByDateArgs = {
  after: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
};


export type AccountJobsByEstimateIdArgs = {
  estimateId: Scalars['String'];
};


export type AccountJobsByJobLeadIdArgs = {
  jobLeadId: Scalars['String'];
};


export type AccountJobsByJobManagerArgs = {
  userId: Scalars['String'];
};


export type AccountJobsByStatusArgs = {
  jobStatus: Scalars['String'];
};


export type AccountJobsCreatedByArgs = {
  userId: Scalars['String'];
};


export type AccountPaymentByIdArgs = {
  paymentId: Scalars['String'];
};


export type AccountPaymentsByDateArgs = {
  after: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
};


export type AccountPaymentsByDirectionArgs = {
  direction: Scalars['String'];
};


export type AccountPaymentsByReferenceIdArgs = {
  referenceId: Scalars['String'];
};


export type AccountPaymentsByReferenceTypeArgs = {
  referenceType: Scalars['String'];
};


export type AccountPaymentsCreatedByArgs = {
  userId: Scalars['String'];
};


export type AccountPaymentsForArgs = {
  category: Scalars['String'];
};


export type AccountPaymentsToArgs = {
  entityName: Scalars['String'];
};


export type AccountProjectByIdArgs = {
  projectId: Scalars['String'];
};


export type AccountProjectsByCategoryArgs = {
  category: Scalars['String'];
};


export type AccountProjectsByCustomerIdArgs = {
  customerId: Scalars['String'];
};


export type AccountProjectsByDateArgs = {
  after: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
};


export type AccountProjectsByJobLeadIdArgs = {
  jobLeadId: Scalars['String'];
};


export type AccountProjectsByProjectManagerArgs = {
  userId: Scalars['String'];
};


export type AccountProjectsByReferenceIdArgs = {
  referenceId: Scalars['String'];
};


export type AccountProjectsCreatedByArgs = {
  userId: Scalars['String'];
};


export type AccountProjectsWithFieldTeamMemberArgs = {
  userId: Scalars['String'];
};


export type AccountProjectsWithTeamMemberArgs = {
  userId: Scalars['String'];
};


export type AccountProposalByIdArgs = {
  proposalId: Scalars['String'];
};


export type AccountProposalsByDateArgs = {
  after: Scalars['String'];
  before?: InputMaybe<Scalars['String']>;
};


export type AccountProposalsByJobLeadIdArgs = {
  jobLeadId: Scalars['String'];
};


export type AccountProposalsByReferenceIdArgs = {
  referenceId: Scalars['String'];
};


export type AccountProposalsByStatusArgs = {
  proposalStatus: Scalars['String'];
};


export type AccountProposalsCreatedByArgs = {
  userId: Scalars['String'];
};


export type AccountProspectByIdArgs = {
  prospectId: Scalars['String'];
};


export type AccountWorkServiceByIdArgs = {
  workServiceId: Scalars['String'];
};


export type AccountWorkServicesByCategoryArgs = {
  category: Scalars['String'];
};

export type AccountId = {
  __typename?: 'AccountId';
  id: Scalars['String'];
};

export type AccountProfile = {
  __typename?: 'AccountProfile';
  accountOwnerId: Scalars['String'];
  activeAccount?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  userIds?: Maybe<Array<Scalars['String']>>;
};

export type AccountProfileInput = {
  accountOwnerId: Scalars['String'];
  userIds?: InputMaybe<Array<Scalars['String']>>;
};

export type Activity = {
  __typename?: 'Activity';
  activity: Scalars['String'];
  created: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ActivityInput = {
  activity: Scalars['String'];
  created: Scalars['String'];
  userId: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipcode: Scalars['String'];
};

export type AddressInput = {
  city: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipcode: Scalars['String'];
};

export type AuthUserEmailInput = {
  email: Scalars['String'];
};

export type AuthUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthUserResponse = {
  __typename?: 'AuthUserResponse';
  idToken?: Maybe<Scalars['String']>;
  operationResult: Scalars['String'];
  operationType: Scalars['String'];
  status: Scalars['String'];
  statusCode: Scalars['Int'];
};

export enum AuthUserResultOperationType {
  RegisterAuthUser = 'REGISTER_AUTH_USER',
  SigninAuthUser = 'SIGNIN_AUTH_USER'
}

export type Beneficiary = Contact & {
  __typename?: 'Beneficiary';
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  customerId: Scalars['String'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type BeneficiaryInput = {
  address?: InputMaybe<AddressInput>;
  created?: InputMaybe<Scalars['String']>;
  customerId: Scalars['String'];
  displayName: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String'];
  created: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type CommentInput = {
  comment: Scalars['String'];
  created: Scalars['String'];
  userId: Scalars['String'];
};

export type CompanyProfile = {
  __typename?: 'CompanyProfile';
  accountId?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  bio?: Maybe<Scalars['String']>;
  companyName: Scalars['String'];
  created?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logoURL?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  serviceCategory?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type CompanyProfileInput = {
  accountId?: InputMaybe<Scalars['String']>;
  address: AddressInput;
  bio?: InputMaybe<Scalars['String']>;
  companyName: Scalars['String'];
  email: Scalars['String'];
  fax?: InputMaybe<Scalars['String']>;
  logoURL?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  serviceCategory: Scalars['String'];
  socials?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  address?: Maybe<Address>;
  created?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  address?: Maybe<Address>;
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type ContactInfoInput = {
  address?: InputMaybe<AddressInput>;
  displayName: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  displayName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserTokenInput = {
  accountId: Scalars['String'];
  userId: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  prospectId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type CustomerInput = {
  address?: InputMaybe<AddressInput>;
  addressId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  displayName: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  prospectId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};

export enum CustomerType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

export type Estimate = {
  __typename?: 'Estimate';
  activities?: Maybe<Array<Activity>>;
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  created: Scalars['String'];
  createdById: Scalars['String'];
  expires?: Maybe<Scalars['String']>;
  fileURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  imageURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobLeadId?: Maybe<Scalars['String']>;
  lineItems?: Maybe<Array<LineItem>>;
  lineWorkServices?: Maybe<Array<LineWorkService>>;
  notes?: Maybe<Array<Note>>;
  number: Scalars['Int'];
  prospectId: Scalars['String'];
  referenceId?: Maybe<Scalars['String']>;
  serviceAddress: Address;
  status: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  viewedDate?: Maybe<Scalars['String']>;
};

export type EstimateInput = {
  activities?: InputMaybe<Array<ActivityInput>>;
  address: AddressInput;
  addressId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Array<CommentInput>>;
  created?: InputMaybe<Scalars['String']>;
  createdById: Scalars['String'];
  fileURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobLeadId?: InputMaybe<Scalars['String']>;
  lineItems?: InputMaybe<Array<LineItemInput>>;
  lineWorkServices?: InputMaybe<Array<LineWorkServiceInput>>;
  notes?: InputMaybe<Array<NoteInput>>;
  number: Scalars['Int'];
  prospectId?: InputMaybe<Scalars['String']>;
  referenceId?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
  viewedDate?: InputMaybe<Scalars['String']>;
};

export enum EstimateStatus {
  Accepted = 'ACCEPTED',
  Denied = 'DENIED',
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  Sent = 'SENT',
  Viewed = 'VIEWED'
}

export type Expense = {
  __typename?: 'Expense';
  amount: Scalars['String'];
  category: Scalars['String'];
  created: Scalars['String'];
  createdById: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  imageURL?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  subCategory?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ExpenseInput = {
  amount: Scalars['String'];
  category: Scalars['String'];
  created: Scalars['String'];
  createdById: Scalars['String'];
  imageURL?: InputMaybe<Scalars['String']>;
  location: Scalars['String'];
  subCategory?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type GetByCategory = {
  category: Scalars['String'];
};

export type GetByCustomerId = {
  customerId: Scalars['String'];
};

export type GetById = {
  id: Scalars['String'];
};

export type GetByJobId = {
  jobId: Scalars['String'];
};

export type GetByJobLeadId = {
  jobLeadId: Scalars['String'];
};

export type GetByProposalId = {
  prosalId: Scalars['String'];
};

export type GetByReferenceId = {
  referenceId: Scalars['String'];
};

export type GetByStatus = {
  status: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  activities?: Maybe<Array<Activity>>;
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  created?: Maybe<Scalars['String']>;
  createdById: Scalars['String'];
  customerId: Scalars['String'];
  estimateId?: Maybe<Scalars['String']>;
  fileURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  imageURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobId?: Maybe<Scalars['String']>;
  jobLeadId?: Maybe<Scalars['String']>;
  lineItems?: Maybe<Array<LineItem>>;
  lineWorkServices?: Maybe<Array<LineWorkService>>;
  notes?: Maybe<Array<Note>>;
  number: Scalars['Int'];
  projectId?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  viewedDate?: Maybe<Scalars['String']>;
};

export type InvoiceInput = {
  activities?: InputMaybe<Array<ActivityInput>>;
  address?: InputMaybe<AddressInput>;
  addressId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Array<CommentInput>>;
  created?: InputMaybe<Scalars['String']>;
  createdById: Scalars['String'];
  customerId: Scalars['String'];
  estimateId?: InputMaybe<Scalars['String']>;
  fileURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobId?: InputMaybe<Scalars['String']>;
  jobLeadId?: InputMaybe<Scalars['String']>;
  lineItems?: InputMaybe<Array<LineItemInput>>;
  lineWorkServices?: InputMaybe<Array<LineWorkServiceInput>>;
  notes?: InputMaybe<Array<NoteInput>>;
  number: Scalars['Int'];
  projectId?: InputMaybe<Scalars['String']>;
  proposalId?: InputMaybe<Scalars['String']>;
  referenceId?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};

export enum InvoiceStatus {
  Draft = 'DRAFT',
  Overdue = 'OVERDUE',
  Paid = 'PAID',
  Sent = 'SENT',
  Unpaid = 'UNPAID',
  Viewed = 'VIEWED'
}

export type Item = {
  __typename?: 'Item';
  brand?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageURL?: Maybe<Scalars['String']>;
  installLinks?: Maybe<Array<Scalars['String']>>;
  make?: Maybe<Scalars['String']>;
  modelNumber?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  orderLinks?: Maybe<Array<Scalars['String']>>;
  purchasePrice: Scalars['String'];
  salePrice: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  websiteReferences?: Maybe<Array<Scalars['String']>>;
};

export type ItemInput = {
  brand?: InputMaybe<Scalars['String']>;
  category: Scalars['String'];
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  imageURL?: InputMaybe<Scalars['String']>;
  installLinks?: InputMaybe<Array<Scalars['String']>>;
  make?: InputMaybe<Scalars['String']>;
  modelNumber?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  orderLinks?: InputMaybe<Array<Scalars['String']>>;
  purchasePrice: Scalars['String'];
  salePrice: Scalars['String'];
  sku?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  websiteReferences?: InputMaybe<Array<Scalars['String']>>;
};

export type ItemSku = {
  sku: Scalars['String'];
};

export type Job = {
  __typename?: 'Job';
  activities?: Maybe<Array<Activity>>;
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  assignedToId?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  completedDate?: Maybe<Scalars['String']>;
  created: Scalars['String'];
  createdById: Scalars['String'];
  customerId: Scalars['String'];
  definedWorkScope: Scalars['String'];
  estimateId?: Maybe<Scalars['String']>;
  fileURLs?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  imageURLs?: Maybe<Array<Scalars['String']>>;
  jobLeadId?: Maybe<Scalars['String']>;
  jobManagerId?: Maybe<Scalars['String']>;
  lineItems?: Maybe<Array<LineItem>>;
  lineWorkServices?: Maybe<Array<LineWorkService>>;
  notes?: Maybe<Array<Note>>;
  poNumber?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['String']>;
  requestedWorkScope: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type JobInput = {
  activities?: InputMaybe<Array<ActivityInput>>;
  address: AddressInput;
  addressId?: InputMaybe<Scalars['String']>;
  assignedToId?: InputMaybe<Scalars['String']>;
  category: Scalars['String'];
  comments?: InputMaybe<Array<CommentInput>>;
  created?: InputMaybe<Scalars['String']>;
  createdById: Scalars['String'];
  customerId: Scalars['String'];
  definedWorkScope: Scalars['String'];
  estimateId?: InputMaybe<Scalars['String']>;
  fileURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobLeadId?: InputMaybe<Scalars['String']>;
  jobManagerId?: InputMaybe<Scalars['String']>;
  lineItems?: InputMaybe<Array<LineItemInput>>;
  lineWorkServices?: InputMaybe<Array<LineWorkServiceInput>>;
  notes?: InputMaybe<Array<NoteInput>>;
  poNumber?: InputMaybe<Scalars['String']>;
  proposalId?: InputMaybe<Scalars['String']>;
  requestedWorkScope: Scalars['String'];
  startDate?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};

export type JobLead = {
  __typename?: 'JobLead';
  activities?: Maybe<Array<Activity>>;
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  created?: Maybe<Scalars['String']>;
  createdById: Scalars['String'];
  fileURLs?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  imageURLs?: Maybe<Array<Scalars['String']>>;
  leadSource: Scalars['String'];
  notes?: Maybe<Array<Note>>;
  prospectId: Scalars['String'];
  referenceId?: Maybe<Scalars['String']>;
  requestedWorkScope: Scalars['String'];
  status: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type JobLeadInput = {
  activities?: InputMaybe<Array<ActivityInput>>;
  address: AddressInput;
  category: Scalars['String'];
  comments?: InputMaybe<Array<CommentInput>>;
  created: Scalars['String'];
  createdById: Scalars['String'];
  fileURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadSource: Scalars['String'];
  notes?: InputMaybe<Array<NoteInput>>;
  prospectId: Scalars['String'];
  referenceId?: InputMaybe<Scalars['String']>;
  requestedWorkScope: Scalars['String'];
  status: Scalars['String'];
};

export enum JobStatus {
  Complete = 'COMPLETE',
  Invoiced = 'INVOICED',
  InProgress = 'IN_PROGRESS',
  New = 'NEW',
  OnHold = 'ON_HOLD',
  Scheduled = 'SCHEDULED'
}

export type LineItem = {
  __typename?: 'LineItem';
  item: Item;
  quantity: Scalars['Int'];
};

export type LineItemInput = {
  item: ItemInput;
  quantity: Scalars['Int'];
};

export type LineWorkService = {
  __typename?: 'LineWorkService';
  quantity: Scalars['Int'];
  workService: WorkService;
};

export type LineWorkServiceInput = {
  quantity: Scalars['Int'];
  workService: WorkServiceInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBeneficiary: Account;
  addCustomer: Account;
  addEstimate: Account;
  addInvoice: Account;
  addJobToProject: Account;
  addProspect: Account;
  addTeamMember: AccountProfile;
  authUserCustomSigninToken?: Maybe<Token>;
  convertEstimateToInvoice: Account;
  convertJobLeadToJob: Account;
  convertProposalToInvoice: Account;
  convertProspectToCustomer: Account;
  createCompanyProfile: Account;
  createExpense: Account;
  createItem: Account;
  createJob: Account;
  createJobLead: Account;
  createPayment: Account;
  createProject: Account;
  createProposal: Account;
  createUser: User;
  createUserProfile: UserProfile;
  createUserToken: Token;
  createWorkService: Account;
  registerAccountUser?: Maybe<AuthUserResponse>;
  registerAuthUser?: Maybe<AuthUserResponse>;
  removeBeneficiary: Account;
  removeCompanyProfile: Account;
  removeCustomer: Account;
  removeEstimate: Account;
  removeExpense: Account;
  removeInvoice: Account;
  removeItem: Account;
  removeJob: Account;
  removeJobLead: Account;
  removePayment: Account;
  removeProject: Account;
  removeProposal: Account;
  removeProspect: Account;
  removeUserProfile: Scalars['String'];
  removeWorkService: Account;
  seedAuthUsers?: Maybe<Array<AuthUserResponse>>;
  seedTeamMembers: Array<AccountProfile>;
  setActiveAccounts?: Maybe<Array<AccountProfile>>;
  signinAuthUser?: Maybe<AuthUserResponse>;
  updateBeneficiary: Account;
  updateCompanyProfile: Account;
  updateCustomer: Account;
  updateEstimate: Account;
  updateExpense: Account;
  updateInvoice: Account;
  updateItem: Account;
  updateJob: Account;
  updateJobLead: Account;
  updatePayment: Account;
  updateProject: Account;
  updateProposal: Account;
  updateProspect: Account;
  updateUserProfile: UserProfile;
  updateWorkService: Account;
};


export type MutationAddBeneficiaryArgs = {
  beneficiaryInput: BeneficiaryInput;
};


export type MutationAddCustomerArgs = {
  customerInput: CustomerInput;
};


export type MutationAddEstimateArgs = {
  estimateInput: EstimateInput;
};


export type MutationAddInvoiceArgs = {
  invoiceInput: InvoiceInput;
};


export type MutationAddJobToProjectArgs = {
  jobInput: JobInput;
};


export type MutationAddProspectArgs = {
  prospectInput: ProspectInput;
};


export type MutationAddTeamMemberArgs = {
  userId: Scalars['String'];
};


export type MutationAuthUserCustomSigninTokenArgs = {
  input: AuthUserEmailInput;
};


export type MutationConvertEstimateToInvoiceArgs = {
  estimateIdInput: Scalars['String'];
};


export type MutationConvertJobLeadToJobArgs = {
  jobLeadIdInput: Scalars['String'];
};


export type MutationConvertProposalToInvoiceArgs = {
  proposalIdInput: Scalars['String'];
};


export type MutationConvertProspectToCustomerArgs = {
  prospectIdInput: Scalars['String'];
};


export type MutationCreateCompanyProfileArgs = {
  companyProfileInput: CompanyProfileInput;
};


export type MutationCreateExpenseArgs = {
  expenseInput: ExpenseInput;
};


export type MutationCreateItemArgs = {
  itemInput: ItemInput;
};


export type MutationCreateJobArgs = {
  jobInput: JobInput;
};


export type MutationCreateJobLeadArgs = {
  jobLeadInput: JobLeadInput;
};


export type MutationCreatePaymentArgs = {
  paymentInput: PaymentInput;
};


export type MutationCreateProjectArgs = {
  projectInput: ProjectInput;
};


export type MutationCreateProposalArgs = {
  proposalInput: ProposalInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserProfileArgs = {
  userProfileInput: UserProfileInput;
};


export type MutationCreateUserTokenArgs = {
  input: CreateUserTokenInput;
};


export type MutationCreateWorkServiceArgs = {
  workServiceInput: WorkServiceInput;
};


export type MutationRegisterAccountUserArgs = {
  input: NewAccountUserInput;
};


export type MutationRegisterAuthUserArgs = {
  input: AuthUserInput;
};


export type MutationRemoveBeneficiaryArgs = {
  beneficiaryIdInput: Scalars['String'];
};


export type MutationRemoveCompanyProfileArgs = {
  companyIdInput: Scalars['String'];
};


export type MutationRemoveCustomerArgs = {
  customerIdInput: Scalars['String'];
};


export type MutationRemoveEstimateArgs = {
  estimateIdInput: Scalars['String'];
};


export type MutationRemoveExpenseArgs = {
  expenseIdInput: Scalars['String'];
};


export type MutationRemoveInvoiceArgs = {
  invoiceIdInput: Scalars['String'];
};


export type MutationRemoveItemArgs = {
  itemIdInput: Scalars['String'];
};


export type MutationRemoveJobArgs = {
  jobIdInput: Scalars['String'];
};


export type MutationRemoveJobLeadArgs = {
  jobLeadIdInput: Scalars['String'];
};


export type MutationRemovePaymentArgs = {
  paymentIdInput: Scalars['String'];
};


export type MutationRemoveProjectArgs = {
  projectIdInput: Scalars['String'];
};


export type MutationRemoveProposalArgs = {
  proposalIdInput: Scalars['String'];
};


export type MutationRemoveProspectArgs = {
  prospectIdInput: Scalars['String'];
};


export type MutationRemoveUserProfileArgs = {
  userProfileId: Scalars['String'];
};


export type MutationRemoveWorkServiceArgs = {
  workServiceIdInput: Scalars['String'];
};


export type MutationSigninAuthUserArgs = {
  input: AuthUserInput;
};


export type MutationUpdateBeneficiaryArgs = {
  beneficiaryIdInput: Scalars['String'];
  updateBeneficiaryInput: BeneficiaryInput;
};


export type MutationUpdateCompanyProfileArgs = {
  companyIdInput: Scalars['String'];
  updateCompanyProfileInput: CompanyProfileInput;
};


export type MutationUpdateCustomerArgs = {
  customerIdInput: Scalars['String'];
  updateCustomerInput: CustomerInput;
};


export type MutationUpdateEstimateArgs = {
  estimateIdInput: Scalars['String'];
  updateEstimateInput: EstimateInput;
};


export type MutationUpdateExpenseArgs = {
  expenseIdInput: Scalars['String'];
  updateExpenseInput: ExpenseInput;
};


export type MutationUpdateInvoiceArgs = {
  invoiceIdInput: Scalars['String'];
  updateInvoiceInput: InvoiceInput;
};


export type MutationUpdateItemArgs = {
  itemIdInput: Scalars['String'];
  updateItemInput: ItemInput;
};


export type MutationUpdateJobArgs = {
  jobIdInput: Scalars['String'];
  updateJobInput: JobInput;
};


export type MutationUpdateJobLeadArgs = {
  jobLeadIdInput: Scalars['String'];
  updateJobLeadInput: JobLeadInput;
};


export type MutationUpdatePaymentArgs = {
  paymentIdInput: Scalars['String'];
  updatePaymentInput: PaymentInput;
};


export type MutationUpdateProjectArgs = {
  projectIdInput: Scalars['String'];
  updateProjectInput: ProjectInput;
};


export type MutationUpdateProposalArgs = {
  proposalIdInput: Scalars['String'];
  updateProposalInput: ProposalInput;
};


export type MutationUpdateProspectArgs = {
  prospectIdInput: Scalars['String'];
  updateProspectInput: ProspectInput;
};


export type MutationUpdateUserProfileArgs = {
  userProfileUpdate: UserProfileInput;
};


export type MutationUpdateWorkServiceArgs = {
  updateWorkServiceInput: WorkServiceInput;
  workServiceIdInput: Scalars['String'];
};

export type NewAccountUserInput = {
  accountId: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Note = {
  __typename?: 'Note';
  created: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  note: Scalars['String'];
  userId: Scalars['String'];
};

export type NoteInput = {
  created: Scalars['String'];
  note: Scalars['String'];
  userId: Scalars['String'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['String'];
  created: Scalars['String'];
  createdById: Scalars['String'];
  direction: Scalars['String'];
  for: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  referenceId: Scalars['String'];
  referenceType: Scalars['String'];
  to: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export enum PaymentDirection {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

export type PaymentInput = {
  amount: Scalars['String'];
  created: Scalars['String'];
  createdById: Scalars['String'];
  direction: Scalars['String'];
  for: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  referenceId: Scalars['String'];
  referenceType: Scalars['String'];
  to: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  activities?: Maybe<Array<Activity>>;
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  completedDate?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  createdById: Scalars['String'];
  customerId: Scalars['String'];
  definedWorkScope: Scalars['String'];
  estimateIds?: Maybe<Array<Scalars['String']>>;
  fieldTeamMemeberIds?: Maybe<Array<Scalars['String']>>;
  fileURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  imageURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobIds?: Maybe<Array<Scalars['String']>>;
  jobLeadId?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Note>>;
  officeTeamMemberIds?: Maybe<Array<Scalars['String']>>;
  projectManagerId?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  requestedWorkScope: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type ProjectInput = {
  activities?: InputMaybe<Array<ActivityInput>>;
  address: AddressInput;
  addressId?: InputMaybe<Scalars['String']>;
  category: Scalars['String'];
  comments?: InputMaybe<Array<CommentInput>>;
  created?: InputMaybe<Scalars['String']>;
  createdById: Scalars['String'];
  customerId: Scalars['String'];
  definedWorkScope: Scalars['String'];
  estimateIds?: InputMaybe<Array<Scalars['String']>>;
  fieldTeamMemeberIds?: InputMaybe<Array<Scalars['String']>>;
  fileURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobIds?: InputMaybe<Array<Scalars['String']>>;
  jobLeadId?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Array<NoteInput>>;
  officeTeamMemberIds?: InputMaybe<Array<Scalars['String']>>;
  projectManagerId?: InputMaybe<Scalars['String']>;
  referenceId?: InputMaybe<Scalars['String']>;
  requestedWorkScope: Scalars['String'];
  startDate?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};

export enum ProjectStatus {
  Complete = 'COMPLETE',
  Invoiced = 'INVOICED',
  InProgress = 'IN_PROGRESS',
  New = 'NEW',
  OnHold = 'ON_HOLD',
  Scheduled = 'SCHEDULED'
}

export type Proposal = {
  __typename?: 'Proposal';
  activities?: Maybe<Array<Activity>>;
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  created: Scalars['String'];
  createdById: Scalars['String'];
  definedWorkScope: Scalars['String'];
  fileURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  imageURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobLeadId: Scalars['String'];
  lineWorkServices?: Maybe<Array<LineWorkService>>;
  notes?: Maybe<Array<Note>>;
  prospectId: Scalars['String'];
  referenceId?: Maybe<Scalars['String']>;
  requestedWorkScope: Scalars['String'];
  status: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type ProposalInput = {
  activities?: InputMaybe<Array<InputMaybe<ActivityInput>>>;
  address: AddressInput;
  category: Scalars['String'];
  comments?: InputMaybe<Array<CommentInput>>;
  created: Scalars['String'];
  createdById: Scalars['String'];
  definedWorkScope: Scalars['String'];
  fileURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageURLs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobLeadId: Scalars['String'];
  lineWorkServices?: InputMaybe<Array<LineWorkServiceInput>>;
  notes?: InputMaybe<Array<NoteInput>>;
  prospectId: Scalars['String'];
  referenceId?: InputMaybe<Scalars['String']>;
  requestedWorkScope: Scalars['String'];
  status: Scalars['String'];
};

export enum ProposalStatus {
  Accepted = 'ACCEPTED',
  Denied = 'DENIED',
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  Sent = 'SENT',
  Viewed = 'VIEWED'
}

export type Prospect = Contact & {
  __typename?: 'Prospect';
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type ProspectInput = {
  address?: InputMaybe<AddressInput>;
  displayName: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export enum ProspectType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

export type Query = {
  __typename?: 'Query';
  account: Account;
  accountId: AccountId;
  accountProfile: AccountProfile;
  accountsWithUsersGreaterThan: Array<AccountProfile>;
  activeAccounts: Array<AccountProfile>;
  allAccounts?: Maybe<Array<AccountProfile>>;
  allUsers: Array<UserProfile>;
  authUserResponse?: Maybe<AuthUserResponse>;
  userById?: Maybe<User>;
  userProfileById: UserProfile;
};


export type QueryAccountsWithUsersGreaterThanArgs = {
  usersCountInput: Scalars['Int'];
};


export type QueryUserByIdArgs = {
  uid: Scalars['String'];
};


export type QueryUserProfileByIdArgs = {
  userProfileId: Scalars['String'];
};

export enum ReferenceType {
  Invoice = 'INVOICE',
  Job = 'JOB',
  Project = 'PROJECT'
}

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  activeAccountId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  idToken?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  profileURL?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type UserProfileInput = {
  activeAccountId?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profileURL?: InputMaybe<Scalars['String']>;
};

export type WorkService = {
  __typename?: 'WorkService';
  category: Scalars['String'];
  costGuides?: Maybe<Array<Scalars['String']>>;
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lineItems?: Maybe<Array<LineItem>>;
  name: Scalars['String'];
  notes?: Maybe<Array<Note>>;
  salePrice: Scalars['String'];
  timeToComplete?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['String']>;
};

export type WorkServiceInput = {
  category: Scalars['String'];
  costGuides?: InputMaybe<Array<Scalars['String']>>;
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  lineItems?: InputMaybe<Array<LineItemInput>>;
  name: Scalars['String'];
  notes?: InputMaybe<Array<NoteInput>>;
  salePrice: Scalars['String'];
  timeToComplete?: InputMaybe<Scalars['Int']>;
  updated?: InputMaybe<Scalars['String']>;
};

export type WorkServiceNameInput = {
  name: Scalars['String'];
};

export type AddressFieldsFragment = { __typename?: 'Address', streetAddress: string, state: string, city: string, zipcode: string };

type ContactFields_Beneficiary_Fragment = { __typename?: 'Beneficiary', created?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, id?: string | null, phone?: string | null, displayName: string, type: string, address?: { __typename?: 'Address', streetAddress: string, state: string, city: string, zipcode: string } | null };

type ContactFields_Prospect_Fragment = { __typename?: 'Prospect', created?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, id?: string | null, phone?: string | null, displayName: string, type: string, address?: { __typename?: 'Address', streetAddress: string, state: string, city: string, zipcode: string } | null };

export type ContactFieldsFragment = ContactFields_Beneficiary_Fragment | ContactFields_Prospect_Fragment;

export type ProspectFieldsFragment = { __typename?: 'Prospect', created?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, id?: string | null, phone?: string | null, displayName: string, type: string, address?: { __typename?: 'Address', streetAddress: string, state: string, city: string, zipcode: string } | null };

export type BeneficiaryFieldsFragment = { __typename?: 'Beneficiary', customerId: string };

export type RegisterAuthUserMutationVariables = Exact<{
  input: AuthUserInput;
}>;


export type RegisterAuthUserMutation = { __typename?: 'Mutation', registerAuthUser?: { __typename?: 'AuthUserResponse', status: string, statusCode: number, operationType: string, operationResult: string, idToken?: string | null } | null };

export type SigninAuthUserMutationVariables = Exact<{
  input: AuthUserInput;
}>;


export type SigninAuthUserMutation = { __typename?: 'Mutation', signinAuthUser?: { __typename?: 'AuthUserResponse', status: string, statusCode: number, operationType: string, operationResult: string, idToken?: string | null } | null };

export type AuthUserCustomSigninTokenMutationVariables = Exact<{
  input: AuthUserEmailInput;
}>;


export type AuthUserCustomSigninTokenMutation = { __typename?: 'Mutation', authUserCustomSigninToken?: { __typename?: 'Token', token: string } | null };

export type SeedAuthUsersMutationVariables = Exact<{ [key: string]: never; }>;


export type SeedAuthUsersMutation = { __typename?: 'Mutation', seedAuthUsers?: Array<{ __typename?: 'AuthUserResponse', operationResult: string, operationType: string, status: string, statusCode: number }> | null };

export type SeedTeamMembersMutationVariables = Exact<{ [key: string]: never; }>;


export type SeedTeamMembersMutation = { __typename?: 'Mutation', seedTeamMembers: Array<{ __typename?: 'AccountProfile', accountOwnerId: string, activeAccount?: boolean | null, created?: string | null, id?: string | null, userIds?: Array<string> | null }> };

export type SetActiveAccountsMutationVariables = Exact<{ [key: string]: never; }>;


export type SetActiveAccountsMutation = { __typename?: 'Mutation', setActiveAccounts?: Array<{ __typename?: 'AccountProfile', accountOwnerId: string, activeAccount?: boolean | null, created?: string | null, id?: string | null, userIds?: Array<string> | null }> | null };

export type ActiveAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveAccountsQuery = { __typename?: 'Query', activeAccounts: Array<{ __typename?: 'AccountProfile', accountOwnerId: string, activeAccount?: boolean | null, created?: string | null, id?: string | null, userIds?: Array<string> | null }> };

export type AddBeneficiaryMutationVariables = Exact<{
  beneficiaryInput: BeneficiaryInput;
}>;


export type AddBeneficiaryMutation = { __typename?: 'Mutation', addBeneficiary: { __typename?: 'Account', beneficiaryLastAdded?: { __typename?: 'Beneficiary', addressId?: string | null, created?: string | null, email?: string | null, displayName: string, firstname?: string | null, lastname?: string | null, id?: string | null, phone?: string | null, type: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null } | null } };

export type UpdateBeneficiaryMutationVariables = Exact<{
  beneficiaryIdInput: Scalars['String'];
  updateBeneficiaryInput: BeneficiaryInput;
}>;


export type UpdateBeneficiaryMutation = { __typename?: 'Mutation', updateBeneficiary: { __typename?: 'Account', beneficiaryLastUpdated?: { __typename?: 'Beneficiary', addressId?: string | null, created?: string | null, email?: string | null, displayName: string, firstname?: string | null, lastname?: string | null, id?: string | null, phone?: string | null, type: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null } | null } };

export type RemoveBeneficiaryMutationVariables = Exact<{
  beneficiaryIdInput: Scalars['String'];
}>;


export type RemoveBeneficiaryMutation = { __typename?: 'Mutation', removeBeneficiary: { __typename?: 'Account', beneficiaries?: Array<{ __typename?: 'Beneficiary', addressId?: string | null, created?: string | null, email?: string | null, displayName: string, firstname?: string | null, lastname?: string | null, id?: string | null, phone?: string | null, type: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null }> | null } };

export type CreateCompanyProfileMutationVariables = Exact<{
  companyProfileInput: CompanyProfileInput;
}>;


export type CreateCompanyProfileMutation = { __typename?: 'Mutation', createCompanyProfile: { __typename?: 'Account', id: string, companyProfile?: { __typename?: 'CompanyProfile', bio?: string | null, companyName: string, created?: string | null, logoURL?: string | null, email: string, phone: string, website?: string | null } | null } };

export type UpdateCompanyProfileMutationVariables = Exact<{
  companyIdInput: Scalars['String'];
  updateCompanyProfileInput: CompanyProfileInput;
}>;


export type UpdateCompanyProfileMutation = { __typename?: 'Mutation', updateCompanyProfile: { __typename?: 'Account', companyProfile?: { __typename?: 'CompanyProfile', bio?: string | null, companyName: string, created?: string | null, logoURL?: string | null, email: string, phone: string, website?: string | null } | null } };

export type RemoveCompanyProfileMutationVariables = Exact<{
  companyIdInput: Scalars['String'];
}>;


export type RemoveCompanyProfileMutation = { __typename?: 'Mutation', removeCompanyProfile: { __typename?: 'Account', accountId: string } };

export type AddEstimateMutationVariables = Exact<{
  estimateInput: EstimateInput;
}>;


export type AddEstimateMutation = { __typename?: 'Mutation', addEstimate: { __typename?: 'Account', estimateLastAdded?: { __typename?: 'Estimate', category?: string | null, created: string, createdById: string, expires?: string | null, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, prospectId: string, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export type UpdateEstimateMutationVariables = Exact<{
  estimateIdInput: Scalars['String'];
  updateEstimateInput: EstimateInput;
}>;


export type UpdateEstimateMutation = { __typename?: 'Mutation', updateEstimate: { __typename?: 'Account', estimateLastUpdated?: { __typename?: 'Estimate', category?: string | null, created: string, createdById: string, expires?: string | null, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, prospectId: string, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export type RemoveEstimateMutationVariables = Exact<{
  estimateIdInput: Scalars['String'];
}>;


export type RemoveEstimateMutation = { __typename?: 'Mutation', removeEstimate: { __typename?: 'Account', estimates?: Array<{ __typename?: 'Estimate', category?: string | null, created: string, createdById: string, expires?: string | null, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, prospectId: string, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null }> | null } };

export type CreateExpenseMutationVariables = Exact<{
  expenseInput: ExpenseInput;
}>;


export type CreateExpenseMutation = { __typename?: 'Mutation', createExpense: { __typename?: 'Account', expenseLastAdded?: { __typename?: 'Expense', amount: string, category: string, created: string, createdById: string, id?: string | null, imageURL?: string | null, location: string, subCategory?: string | null, userId: string } | null } };

export type UpdateExpenseMutationVariables = Exact<{
  expenseIdInput: Scalars['String'];
  updateExpenseInput: ExpenseInput;
}>;


export type UpdateExpenseMutation = { __typename?: 'Mutation', updateExpense: { __typename?: 'Account', expenseLastUpdated?: { __typename?: 'Expense', amount: string, category: string, created: string, createdById: string, id?: string | null, imageURL?: string | null, location: string, subCategory?: string | null, userId: string } | null } };

export type RemoveExpenseMutationVariables = Exact<{
  expenseIdInput: Scalars['String'];
}>;


export type RemoveExpenseMutation = { __typename?: 'Mutation', removeExpense: { __typename?: 'Account', expenses?: Array<{ __typename?: 'Expense', amount: string, category: string, created: string, createdById: string, id?: string | null, imageURL?: string | null, location: string, subCategory?: string | null, userId: string }> | null } };

export type AddInvoiceMutationVariables = Exact<{
  invoiceInput: InvoiceInput;
}>;


export type AddInvoiceMutation = { __typename?: 'Mutation', addInvoice: { __typename?: 'Account', invoiceLastAdded?: { __typename?: 'Invoice', category?: string | null, created?: string | null, createdById: string, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export type UpdateInvoiceMutationVariables = Exact<{
  invoiceIdInput: Scalars['String'];
  updateInvoiceInput: InvoiceInput;
}>;


export type UpdateInvoiceMutation = { __typename?: 'Mutation', updateInvoice: { __typename?: 'Account', invoiceLastUpdated?: { __typename?: 'Invoice', category?: string | null, created?: string | null, createdById: string, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export type RemoveInvoiceMutationVariables = Exact<{
  invoiceIdInput: Scalars['String'];
}>;


export type RemoveInvoiceMutation = { __typename?: 'Mutation', removeInvoice: { __typename?: 'Account', invoices?: Array<{ __typename?: 'Invoice', category?: string | null, created?: string | null, createdById: string, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null }> | null } };

export type UpdateItemMutationVariables = Exact<{
  itemIdInput: Scalars['String'];
  updateItemInput: ItemInput;
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Account', itemLastUpdated?: { __typename?: 'Item', brand?: string | null, category: string, description?: string | null, id?: string | null, imageURL?: string | null, installLinks?: Array<string> | null, make?: string | null, modelNumber?: string | null, name: string, orderLinks?: Array<string> | null, purchasePrice: string, salePrice: string, sku?: string | null, websiteReferences?: Array<string> | null } | null } };

export type RemoveItemMutationVariables = Exact<{
  itemIdInput: Scalars['String'];
}>;


export type RemoveItemMutation = { __typename?: 'Mutation', removeItem: { __typename?: 'Account', items?: Array<{ __typename?: 'Item', brand?: string | null, category: string, description?: string | null, id?: string | null, imageURL?: string | null, installLinks?: Array<string> | null, make?: string | null, modelNumber?: string | null, name: string, orderLinks?: Array<string> | null, purchasePrice: string, salePrice: string, sku?: string | null, websiteReferences?: Array<string> | null }> | null } };

export type CreateJobLeadMutationVariables = Exact<{
  jobLeadInput: JobLeadInput;
}>;


export type CreateJobLeadMutation = { __typename?: 'Mutation', createJobLead: { __typename?: 'Account', jobLeadLastAdded?: { __typename?: 'JobLead', id?: string | null, prospectId: string, leadSource: string, status: string, createdById: string, category: string, addressId?: string | null, requestedWorkScope: string, created?: string | null, referenceId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null } | null } };

export type UpdateJobLeadMutationVariables = Exact<{
  jobLeadIdInput: Scalars['String'];
  updateJobLeadInput: JobLeadInput;
}>;


export type UpdateJobLeadMutation = { __typename?: 'Mutation', updateJobLead: { __typename?: 'Account', jobLeadLastUpdated?: { __typename?: 'JobLead', id?: string | null, prospectId: string, leadSource: string, status: string, createdById: string, category: string, addressId?: string | null, requestedWorkScope: string, created?: string | null, referenceId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null } | null } };

export type RemoveJobLeadMutationVariables = Exact<{
  jobLeadIdInput: Scalars['String'];
}>;


export type RemoveJobLeadMutation = { __typename?: 'Mutation', removeJobLead: { __typename?: 'Account', jobLeads?: Array<{ __typename?: 'JobLead', id?: string | null, prospectId: string, leadSource: string, status: string, createdById: string, category: string, addressId?: string | null, requestedWorkScope: string, created?: string | null, referenceId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null }> | null } };

export type CreateJobMutationVariables = Exact<{
  jobInput: JobInput;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', createJob: { __typename?: 'Account', jobLastAdded?: { __typename?: 'Job', customerId: string, id?: string | null, status: string, createdById: string, definedWorkScope: string, jobLeadId?: string | null, imageURLs?: Array<string> | null, fileURLs?: Array<string> | null, category: string, addressId?: string | null, requestedWorkScope: string, created: string, assignedToId?: string | null, startDate?: string | null, completedDate?: string | null, estimateId?: string | null, proposalId?: string | null, poNumber?: string | null, jobManagerId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null } | null } };

export type UpdateJobMutationVariables = Exact<{
  jobIdInput: Scalars['String'];
  updateJobInput: JobInput;
}>;


export type UpdateJobMutation = { __typename?: 'Mutation', updateJob: { __typename?: 'Account', jobLastUpdated?: { __typename?: 'Job', customerId: string, id?: string | null, status: string, createdById: string, definedWorkScope: string, jobLeadId?: string | null, imageURLs?: Array<string> | null, fileURLs?: Array<string> | null, category: string, addressId?: string | null, requestedWorkScope: string, created: string, assignedToId?: string | null, startDate?: string | null, completedDate?: string | null, estimateId?: string | null, proposalId?: string | null, poNumber?: string | null, jobManagerId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null } | null } };

export type RemoveJobMutationVariables = Exact<{
  jobIdInput: Scalars['String'];
}>;


export type RemoveJobMutation = { __typename?: 'Mutation', removeJob: { __typename?: 'Account', jobs?: Array<{ __typename?: 'Job', customerId: string, id?: string | null, status: string, createdById: string, definedWorkScope: string, jobLeadId?: string | null, imageURLs?: Array<string> | null, fileURLs?: Array<string> | null, category: string, addressId?: string | null, requestedWorkScope: string, created: string, assignedToId?: string | null, startDate?: string | null, completedDate?: string | null, estimateId?: string | null, proposalId?: string | null, poNumber?: string | null, jobManagerId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null }> | null } };

export type CreatePaymentMutationVariables = Exact<{
  paymentInput: PaymentInput;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'Account', paymentLastAdded?: { __typename?: 'Payment', id?: string | null, created: string, to: string, referenceId: string, referenceType: string, createdById: string, note?: string | null } | null } };

export type UpdatePaymentMutationVariables = Exact<{
  paymentIdInput: Scalars['String'];
  updatePaymentInput: PaymentInput;
}>;


export type UpdatePaymentMutation = { __typename?: 'Mutation', updatePayment: { __typename?: 'Account', paymentLastUpdated?: { __typename?: 'Payment', id?: string | null, created: string, to: string, referenceId: string, referenceType: string, createdById: string, note?: string | null } | null } };

export type RemovePaymentMutationVariables = Exact<{
  paymentIdInput: Scalars['String'];
}>;


export type RemovePaymentMutation = { __typename?: 'Mutation', removePayment: { __typename?: 'Account', payments?: Array<{ __typename?: 'Payment', id?: string | null, created: string, to: string, referenceId: string, referenceType: string, createdById: string, note?: string | null }> | null } };

export type CreateProposalMutationVariables = Exact<{
  proposalInput: ProposalInput;
}>;


export type CreateProposalMutation = { __typename?: 'Mutation', createProposal: { __typename?: 'Account', proposalLastAdded?: { __typename?: 'Proposal', id?: string | null, prospectId: string, status: string, category: string, requestedWorkScope: string, definedWorkScope: string, createdById: string, addressId?: string | null, jobLeadId: string, imageURLs?: Array<string | null> | null, fileURLs?: Array<string | null> | null, referenceId?: string | null, created: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null } | null } };

export type UpdateProposalMutationVariables = Exact<{
  proposalIdInput: Scalars['String'];
  updateProposalInput: ProposalInput;
}>;


export type UpdateProposalMutation = { __typename?: 'Mutation', updateProposal: { __typename?: 'Account', proposalLastUpdated?: { __typename?: 'Proposal', id?: string | null, prospectId: string, status: string, category: string, requestedWorkScope: string, definedWorkScope: string, createdById: string, addressId?: string | null, jobLeadId: string, imageURLs?: Array<string | null> | null, fileURLs?: Array<string | null> | null, referenceId?: string | null, created: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null } | null } };

export type RemoveProposalMutationVariables = Exact<{
  proposalIdInput: Scalars['String'];
}>;


export type RemoveProposalMutation = { __typename?: 'Mutation', removeProposal: { __typename?: 'Account', proposals?: Array<{ __typename?: 'Proposal', id?: string | null, prospectId: string, status: string, category: string, requestedWorkScope: string, definedWorkScope: string, createdById: string, addressId?: string | null, jobLeadId: string, imageURLs?: Array<string | null> | null, fileURLs?: Array<string | null> | null, referenceId?: string | null, created: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null }> | null } };

export type AddProspectMutationVariables = Exact<{
  prospectInput: ProspectInput;
}>;


export type AddProspectMutation = { __typename?: 'Mutation', addProspect: { __typename?: 'Account', prospectLastAdded?: { __typename?: 'Prospect', created?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, id?: string | null, phone?: string | null, displayName: string, type: string, address?: { __typename?: 'Address', streetAddress: string, state: string, city: string, zipcode: string } | null } | null } };

export type RemoveProspectMutationVariables = Exact<{
  prospectIdInput: Scalars['String'];
}>;


export type RemoveProspectMutation = { __typename?: 'Mutation', removeProspect: { __typename?: 'Account', prospects?: Array<{ __typename?: 'Prospect', created?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, id?: string | null, phone?: string | null, displayName: string, type: string, address?: { __typename?: 'Address', streetAddress: string, state: string, city: string, zipcode: string } | null }> | null } };

export type UpdateProspectMutationVariables = Exact<{
  prospectIdInput: Scalars['String'];
  updateProspectInput: ProspectInput;
}>;


export type UpdateProspectMutation = { __typename?: 'Mutation', updateProspect: { __typename?: 'Account', prospectLastUpdated?: { __typename?: 'Prospect', created?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, id?: string | null, phone?: string | null, displayName: string, type: string, address?: { __typename?: 'Address', streetAddress: string, state: string, city: string, zipcode: string } | null } | null } };

export type CreateWorkServiceMutationVariables = Exact<{
  workServiceInput: WorkServiceInput;
}>;


export type CreateWorkServiceMutation = { __typename?: 'Mutation', createWorkService: { __typename?: 'Account', workServiceLastAdded?: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export type UpdateWorkServiceMutationVariables = Exact<{
  workServiceIdInput: Scalars['String'];
  updateWorkServiceInput: WorkServiceInput;
}>;


export type UpdateWorkServiceMutation = { __typename?: 'Mutation', updateWorkService: { __typename?: 'Account', workServiceLastUpdated?: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export type RemoveWorkServiceMutationVariables = Exact<{
  workServiceIdInput: Scalars['String'];
}>;


export type RemoveWorkServiceMutation = { __typename?: 'Mutation', removeWorkService: { __typename?: 'Account', workServices?: Array<{ __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null }> | null } };

export type CreateItemMutationVariables = Exact<{
  itemInput: ItemInput;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Account', itemLastAdded?: { __typename?: 'Item', brand?: string | null, category: string, description?: string | null, id?: string | null, imageURL?: string | null, installLinks?: Array<string> | null, make?: string | null, modelNumber?: string | null, name: string, orderLinks?: Array<string> | null, purchasePrice: string, salePrice: string, sku?: string | null, websiteReferences?: Array<string> | null } | null } };

export type AllAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAccountsQuery = { __typename?: 'Query', allAccounts?: Array<{ __typename?: 'AccountProfile', id?: string | null, accountOwnerId: string }> | null };

export type AccountIdQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountIdQuery = { __typename?: 'Query', accountId: { __typename?: 'AccountId', id: string } };

export type BeneficiariesByCustomerIdQueryVariables = Exact<{
  customerId: Scalars['String'];
}>;


export type BeneficiariesByCustomerIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', beneficiariesByCustomerId?: Array<{ __typename?: 'Beneficiary', addressId?: string | null, created?: string | null, email?: string | null, displayName: string, firstname?: string | null, lastname?: string | null, id?: string | null, phone?: string | null, type: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null }> | null } };

export type BeneficiariesQueryVariables = Exact<{ [key: string]: never; }>;


export type BeneficiariesQuery = { __typename?: 'Query', account: { __typename?: 'Account', beneficiaries?: Array<{ __typename?: 'Beneficiary', addressId?: string | null, created?: string | null, email?: string | null, displayName: string, firstname?: string | null, lastname?: string | null, id?: string | null, phone?: string | null, type: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null }> | null } };

export type CompanyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyProfileQuery = { __typename?: 'Query', account: { __typename?: 'Account', companyProfile?: { __typename?: 'CompanyProfile', bio?: string | null, companyName: string, created?: string | null, logoURL?: string | null, email: string, phone: string, website?: string | null } | null } };

export type CustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomersQuery = { __typename?: 'Query', account: { __typename?: 'Account', customers?: Array<{ __typename?: 'Customer', addressId?: string | null, created?: string | null, email?: string | null, displayName: string, firstname?: string | null, lastname?: string | null, id?: string | null, phone?: string | null, prospectId?: string | null, type: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null }> | null } };

export type CustomerByIdQueryVariables = Exact<{
  customerId: Scalars['String'];
}>;


export type CustomerByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', customerById?: { __typename?: 'Customer', addressId?: string | null, created?: string | null, email?: string | null, displayName: string, firstname?: string | null, lastname?: string | null, id?: string | null, phone?: string | null, prospectId?: string | null, type: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null } | null } };

export type EstimatesQueryVariables = Exact<{ [key: string]: never; }>;


export type EstimatesQuery = { __typename?: 'Query', account: { __typename?: 'Account', estimates?: Array<{ __typename?: 'Estimate', category?: string | null, created: string, createdById: string, expires?: string | null, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, prospectId: string, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null }> | null } };

export type EstimateByIdQueryVariables = Exact<{
  estimateId: Scalars['String'];
}>;


export type EstimateByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', estimateById?: { __typename?: 'Estimate', category?: string | null, created: string, createdById: string, expires?: string | null, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, prospectId: string, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export type ExpensesQueryVariables = Exact<{ [key: string]: never; }>;


export type ExpensesQuery = { __typename?: 'Query', account: { __typename?: 'Account', expenses?: Array<{ __typename?: 'Expense', amount: string, category: string, created: string, createdById: string, id?: string | null, imageURL?: string | null, location: string, subCategory?: string | null, userId: string }> | null } };

export type ExpenseByIdQueryVariables = Exact<{
  expenseId: Scalars['String'];
}>;


export type ExpenseByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', expenseById?: { __typename?: 'Expense', amount: string, category: string, created: string, createdById: string, id?: string | null, imageURL?: string | null, location: string, subCategory?: string | null, userId: string } | null } };

export type InvoicesQueryVariables = Exact<{ [key: string]: never; }>;


export type InvoicesQuery = { __typename?: 'Query', account: { __typename?: 'Account', invoices?: Array<{ __typename?: 'Invoice', category?: string | null, created?: string | null, createdById: string, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null }> | null } };

export type InvoicesByIdQueryVariables = Exact<{
  invoiceId: Scalars['String'];
}>;


export type InvoicesByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', invoiceById?: { __typename?: 'Invoice', category?: string | null, created?: string | null, createdById: string, fileURLs?: Array<string | null> | null, id?: string | null, imageURLs?: Array<string | null> | null, jobLeadId?: string | null, number: number, referenceId?: string | null, status: string, viewedDate?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export type ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemsQuery = { __typename?: 'Query', account: { __typename?: 'Account', items?: Array<{ __typename?: 'Item', brand?: string | null, category: string, description?: string | null, id?: string | null, imageURL?: string | null, installLinks?: Array<string> | null, make?: string | null, modelNumber?: string | null, name: string, orderLinks?: Array<string> | null, purchasePrice: string, salePrice: string, sku?: string | null, websiteReferences?: Array<string> | null }> | null } };

export type ItemByIdQueryVariables = Exact<{
  itemId: Scalars['String'];
}>;


export type ItemByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', itemById?: { __typename?: 'Item', brand?: string | null, category: string, description?: string | null, id?: string | null, imageURL?: string | null, installLinks?: Array<string> | null, make?: string | null, modelNumber?: string | null, name: string, orderLinks?: Array<string> | null, purchasePrice: string, salePrice: string, sku?: string | null, websiteReferences?: Array<string> | null } | null } };

export type JobLeadByIdQueryVariables = Exact<{
  jobLeadId: Scalars['String'];
}>;


export type JobLeadByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', jobLeadById?: { __typename?: 'JobLead', id?: string | null, prospectId: string, leadSource: string, status: string, createdById: string, category: string, addressId?: string | null, requestedWorkScope: string, created?: string | null, referenceId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null } | null } };

export type JobLeadsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobLeadsQuery = { __typename?: 'Query', account: { __typename?: 'Account', jobLeads?: Array<{ __typename?: 'JobLead', id?: string | null, prospectId: string, leadSource: string, status: string, createdById: string, category: string, addressId?: string | null, requestedWorkScope: string, created?: string | null, referenceId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null }> | null } };

export type JobsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobsQuery = { __typename?: 'Query', account: { __typename?: 'Account', jobs?: Array<{ __typename?: 'Job', customerId: string, id?: string | null, status: string, createdById: string, definedWorkScope: string, jobLeadId?: string | null, imageURLs?: Array<string> | null, fileURLs?: Array<string> | null, category: string, addressId?: string | null, requestedWorkScope: string, created: string, assignedToId?: string | null, startDate?: string | null, completedDate?: string | null, estimateId?: string | null, proposalId?: string | null, poNumber?: string | null, jobManagerId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null }> | null } };

export type JobByIdQueryVariables = Exact<{
  jobId: Scalars['String'];
}>;


export type JobByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', jobById?: { __typename?: 'Job', customerId: string, id?: string | null, status: string, createdById: string, definedWorkScope: string, jobLeadId?: string | null, imageURLs?: Array<string> | null, fileURLs?: Array<string> | null, category: string, addressId?: string | null, requestedWorkScope: string, created: string, assignedToId?: string | null, startDate?: string | null, completedDate?: string | null, estimateId?: string | null, proposalId?: string | null, poNumber?: string | null, jobManagerId?: string | null, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null } | null } };

export type PaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentsQuery = { __typename?: 'Query', account: { __typename?: 'Account', payments?: Array<{ __typename?: 'Payment', id?: string | null, created: string, to: string, referenceId: string, referenceType: string, createdById: string, note?: string | null }> | null } };

export type PaymentByIdQueryVariables = Exact<{
  paymentId: Scalars['String'];
}>;


export type PaymentByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', paymentById?: { __typename?: 'Payment', id?: string | null, created: string, to: string, referenceId: string, referenceType: string, createdById: string, note?: string | null } | null } };

export type ProposalsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProposalsQuery = { __typename?: 'Query', account: { __typename?: 'Account', proposals?: Array<{ __typename?: 'Proposal', id?: string | null, prospectId: string, status: string, category: string, requestedWorkScope: string, definedWorkScope: string, createdById: string, addressId?: string | null, jobLeadId: string, imageURLs?: Array<string | null> | null, fileURLs?: Array<string | null> | null, referenceId?: string | null, created: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null }> | null } };

export type ProposalByIdQueryVariables = Exact<{
  proposalId: Scalars['String'];
}>;


export type ProposalByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', proposalById?: { __typename?: 'Proposal', id?: string | null, prospectId: string, status: string, category: string, requestedWorkScope: string, definedWorkScope: string, createdById: string, addressId?: string | null, jobLeadId: string, imageURLs?: Array<string | null> | null, fileURLs?: Array<string | null> | null, referenceId?: string | null, created: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null, lineWorkServices?: Array<{ __typename?: 'LineWorkService', quantity: number, workService: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null } }> | null } | null } };

export type AccountProspectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountProspectsQuery = { __typename?: 'Query', account: { __typename?: 'Account', prospects?: Array<{ __typename?: 'Prospect', id?: string | null, displayName: string, firstname?: string | null, lastname?: string | null, email?: string | null, phone?: string | null, type: string, address?: { __typename?: 'Address', streetAddress: string, city: string, state: string, zipcode: string } | null }> | null } };

export type AccountProspectByIdQueryVariables = Exact<{
  prospectId: Scalars['String'];
}>;


export type AccountProspectByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', prospectById?: { __typename?: 'Prospect', created?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, id?: string | null, phone?: string | null, displayName: string, type: string, address?: { __typename?: 'Address', streetAddress: string, state: string, city: string, zipcode: string } | null } | null } };

export type UserByProfileIdQueryVariables = Exact<{
  userProfileId: Scalars['String'];
}>;


export type UserByProfileIdQuery = { __typename?: 'Query', userProfileById: { __typename?: 'UserProfile', id: string, email: string, idToken?: string | null, activeAccountId?: string | null } };

export type WorkServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkServicesQuery = { __typename?: 'Query', account: { __typename?: 'Account', workServices?: Array<{ __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null }> | null } };

export type WorkServiceByIdQueryVariables = Exact<{
  workServiceId: Scalars['String'];
}>;


export type WorkServiceByIdQuery = { __typename?: 'Query', account: { __typename?: 'Account', workServiceById?: { __typename?: 'WorkService', category: string, costGuides?: Array<string> | null, created?: string | null, description?: string | null, id?: string | null, name: string, salePrice: string, timeToComplete?: number | null, lineItems?: Array<{ __typename?: 'LineItem', quantity: number, item: { __typename?: 'Item', category: string, description?: string | null, imageURL?: string | null, websiteReferences?: Array<string> | null, name: string, salePrice: string, purchasePrice: string, sku?: string | null, modelNumber?: string | null, brand?: string | null, make?: string | null, installLinks?: Array<string> | null, created?: string | null } }> | null, notes?: Array<{ __typename?: 'Note', id?: string | null, userId: string, note: string, created: string }> | null } | null } };

export const AddressFieldsFragmentDoc = gql`
    fragment addressFields on Address {
  streetAddress
  state
  city
  zipcode
}
    `;
export const ContactFieldsFragmentDoc = gql`
    fragment contactFields on Contact {
  created
  firstname
  lastname
  email
  id
  phone
  displayName
  address {
    ...addressFields
  }
  type
}
    ${AddressFieldsFragmentDoc}`;
export const ProspectFieldsFragmentDoc = gql`
    fragment prospectFields on Prospect {
  ...contactFields
}
    ${ContactFieldsFragmentDoc}`;
export const BeneficiaryFieldsFragmentDoc = gql`
    fragment beneficiaryFields on Beneficiary {
  customerId
}
    `;
export const RegisterAuthUserDocument = gql`
    mutation registerAuthUser($input: AuthUserInput!) {
  registerAuthUser(input: $input) {
    status
    statusCode
    operationType
    operationResult
    idToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterAuthUserGQL extends Apollo.Mutation<RegisterAuthUserMutation, RegisterAuthUserMutationVariables> {
    override document = RegisterAuthUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SigninAuthUserDocument = gql`
    mutation signinAuthUser($input: AuthUserInput!) {
  signinAuthUser(input: $input) {
    status
    statusCode
    operationType
    operationResult
    idToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SigninAuthUserGQL extends Apollo.Mutation<SigninAuthUserMutation, SigninAuthUserMutationVariables> {
    override document = SigninAuthUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AuthUserCustomSigninTokenDocument = gql`
    mutation authUserCustomSigninToken($input: AuthUserEmailInput!) {
  authUserCustomSigninToken(input: $input) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthUserCustomSigninTokenGQL extends Apollo.Mutation<AuthUserCustomSigninTokenMutation, AuthUserCustomSigninTokenMutationVariables> {
    override document = AuthUserCustomSigninTokenDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SeedAuthUsersDocument = gql`
    mutation seedAuthUsers {
  seedAuthUsers {
    operationResult
    operationType
    status
    statusCode
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SeedAuthUsersGQL extends Apollo.Mutation<SeedAuthUsersMutation, SeedAuthUsersMutationVariables> {
    override document = SeedAuthUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SeedTeamMembersDocument = gql`
    mutation seedTeamMembers {
  seedTeamMembers {
    accountOwnerId
    activeAccount
    created
    id
    userIds
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SeedTeamMembersGQL extends Apollo.Mutation<SeedTeamMembersMutation, SeedTeamMembersMutationVariables> {
    override document = SeedTeamMembersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetActiveAccountsDocument = gql`
    mutation setActiveAccounts {
  setActiveAccounts {
    accountOwnerId
    activeAccount
    created
    id
    userIds
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetActiveAccountsGQL extends Apollo.Mutation<SetActiveAccountsMutation, SetActiveAccountsMutationVariables> {
    override document = SetActiveAccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ActiveAccountsDocument = gql`
    query activeAccounts {
  activeAccounts {
    accountOwnerId
    activeAccount
    created
    id
    userIds
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActiveAccountsGQL extends Apollo.Query<ActiveAccountsQuery, ActiveAccountsQueryVariables> {
    override document = ActiveAccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddBeneficiaryDocument = gql`
    mutation addBeneficiary($beneficiaryInput: BeneficiaryInput!) {
  addBeneficiary(beneficiaryInput: $beneficiaryInput) {
    beneficiaryLastAdded {
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddBeneficiaryGQL extends Apollo.Mutation<AddBeneficiaryMutation, AddBeneficiaryMutationVariables> {
    override document = AddBeneficiaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateBeneficiaryDocument = gql`
    mutation updateBeneficiary($beneficiaryIdInput: String!, $updateBeneficiaryInput: BeneficiaryInput!) {
  updateBeneficiary(
    beneficiaryIdInput: $beneficiaryIdInput
    updateBeneficiaryInput: $updateBeneficiaryInput
  ) {
    beneficiaryLastUpdated {
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateBeneficiaryGQL extends Apollo.Mutation<UpdateBeneficiaryMutation, UpdateBeneficiaryMutationVariables> {
    override document = UpdateBeneficiaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveBeneficiaryDocument = gql`
    mutation removeBeneficiary($beneficiaryIdInput: String!) {
  removeBeneficiary(beneficiaryIdInput: $beneficiaryIdInput) {
    beneficiaries {
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveBeneficiaryGQL extends Apollo.Mutation<RemoveBeneficiaryMutation, RemoveBeneficiaryMutationVariables> {
    override document = RemoveBeneficiaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCompanyProfileDocument = gql`
    mutation createCompanyProfile($companyProfileInput: CompanyProfileInput!) {
  createCompanyProfile(companyProfileInput: $companyProfileInput) {
    id
    companyProfile {
      bio
      companyName
      created
      logoURL
      email
      phone
      website
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCompanyProfileGQL extends Apollo.Mutation<CreateCompanyProfileMutation, CreateCompanyProfileMutationVariables> {
    override document = CreateCompanyProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCompanyProfileDocument = gql`
    mutation updateCompanyProfile($companyIdInput: String!, $updateCompanyProfileInput: CompanyProfileInput!) {
  updateCompanyProfile(
    companyIdInput: $companyIdInput
    updateCompanyProfileInput: $updateCompanyProfileInput
  ) {
    companyProfile {
      bio
      companyName
      created
      logoURL
      email
      phone
      website
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCompanyProfileGQL extends Apollo.Mutation<UpdateCompanyProfileMutation, UpdateCompanyProfileMutationVariables> {
    override document = UpdateCompanyProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveCompanyProfileDocument = gql`
    mutation removeCompanyProfile($companyIdInput: String!) {
  removeCompanyProfile(companyIdInput: $companyIdInput) {
    accountId: id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveCompanyProfileGQL extends Apollo.Mutation<RemoveCompanyProfileMutation, RemoveCompanyProfileMutationVariables> {
    override document = RemoveCompanyProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddEstimateDocument = gql`
    mutation addEstimate($estimateInput: EstimateInput!) {
  addEstimate(estimateInput: $estimateInput) {
    estimateLastAdded {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      expires
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      prospectId
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddEstimateGQL extends Apollo.Mutation<AddEstimateMutation, AddEstimateMutationVariables> {
    override document = AddEstimateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateEstimateDocument = gql`
    mutation updateEstimate($estimateIdInput: String!, $updateEstimateInput: EstimateInput!) {
  updateEstimate(
    estimateIdInput: $estimateIdInput
    updateEstimateInput: $updateEstimateInput
  ) {
    estimateLastUpdated {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      expires
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      prospectId
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEstimateGQL extends Apollo.Mutation<UpdateEstimateMutation, UpdateEstimateMutationVariables> {
    override document = UpdateEstimateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveEstimateDocument = gql`
    mutation removeEstimate($estimateIdInput: String!) {
  removeEstimate(estimateIdInput: $estimateIdInput) {
    estimates {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      expires
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      prospectId
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveEstimateGQL extends Apollo.Mutation<RemoveEstimateMutation, RemoveEstimateMutationVariables> {
    override document = RemoveEstimateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateExpenseDocument = gql`
    mutation createExpense($expenseInput: ExpenseInput!) {
  createExpense(expenseInput: $expenseInput) {
    expenseLastAdded {
      amount
      category
      created
      createdById
      id
      imageURL
      location
      subCategory
      userId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateExpenseGQL extends Apollo.Mutation<CreateExpenseMutation, CreateExpenseMutationVariables> {
    override document = CreateExpenseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateExpenseDocument = gql`
    mutation updateExpense($expenseIdInput: String!, $updateExpenseInput: ExpenseInput!) {
  updateExpense(
    expenseIdInput: $expenseIdInput
    updateExpenseInput: $updateExpenseInput
  ) {
    expenseLastUpdated {
      amount
      category
      created
      createdById
      id
      imageURL
      location
      subCategory
      userId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateExpenseGQL extends Apollo.Mutation<UpdateExpenseMutation, UpdateExpenseMutationVariables> {
    override document = UpdateExpenseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveExpenseDocument = gql`
    mutation removeExpense($expenseIdInput: String!) {
  removeExpense(expenseIdInput: $expenseIdInput) {
    expenses {
      amount
      category
      created
      createdById
      id
      imageURL
      location
      subCategory
      userId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveExpenseGQL extends Apollo.Mutation<RemoveExpenseMutation, RemoveExpenseMutationVariables> {
    override document = RemoveExpenseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddInvoiceDocument = gql`
    mutation addInvoice($invoiceInput: InvoiceInput!) {
  addInvoice(invoiceInput: $invoiceInput) {
    invoiceLastAdded {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddInvoiceGQL extends Apollo.Mutation<AddInvoiceMutation, AddInvoiceMutationVariables> {
    override document = AddInvoiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateInvoiceDocument = gql`
    mutation updateInvoice($invoiceIdInput: String!, $updateInvoiceInput: InvoiceInput!) {
  updateInvoice(
    invoiceIdInput: $invoiceIdInput
    updateInvoiceInput: $updateInvoiceInput
  ) {
    invoiceLastUpdated {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateInvoiceGQL extends Apollo.Mutation<UpdateInvoiceMutation, UpdateInvoiceMutationVariables> {
    override document = UpdateInvoiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveInvoiceDocument = gql`
    mutation removeInvoice($invoiceIdInput: String!) {
  removeInvoice(invoiceIdInput: $invoiceIdInput) {
    invoices {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveInvoiceGQL extends Apollo.Mutation<RemoveInvoiceMutation, RemoveInvoiceMutationVariables> {
    override document = RemoveInvoiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateItemDocument = gql`
    mutation updateItem($itemIdInput: String!, $updateItemInput: ItemInput!) {
  updateItem(itemIdInput: $itemIdInput, updateItemInput: $updateItemInput) {
    itemLastUpdated {
      brand
      category
      description
      id
      imageURL
      installLinks
      make
      modelNumber
      name
      orderLinks
      purchasePrice
      salePrice
      sku
      websiteReferences
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateItemGQL extends Apollo.Mutation<UpdateItemMutation, UpdateItemMutationVariables> {
    override document = UpdateItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveItemDocument = gql`
    mutation removeItem($itemIdInput: String!) {
  removeItem(itemIdInput: $itemIdInput) {
    items {
      brand
      category
      description
      id
      imageURL
      installLinks
      make
      modelNumber
      name
      orderLinks
      purchasePrice
      salePrice
      sku
      websiteReferences
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveItemGQL extends Apollo.Mutation<RemoveItemMutation, RemoveItemMutationVariables> {
    override document = RemoveItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateJobLeadDocument = gql`
    mutation createJobLead($jobLeadInput: JobLeadInput!) {
  createJobLead(jobLeadInput: $jobLeadInput) {
    jobLeadLastAdded {
      id
      prospectId
      leadSource
      status
      createdById
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      referenceId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateJobLeadGQL extends Apollo.Mutation<CreateJobLeadMutation, CreateJobLeadMutationVariables> {
    override document = CreateJobLeadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateJobLeadDocument = gql`
    mutation updateJobLead($jobLeadIdInput: String!, $updateJobLeadInput: JobLeadInput!) {
  updateJobLead(
    jobLeadIdInput: $jobLeadIdInput
    updateJobLeadInput: $updateJobLeadInput
  ) {
    jobLeadLastUpdated {
      id
      prospectId
      leadSource
      status
      createdById
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      referenceId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateJobLeadGQL extends Apollo.Mutation<UpdateJobLeadMutation, UpdateJobLeadMutationVariables> {
    override document = UpdateJobLeadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveJobLeadDocument = gql`
    mutation removeJobLead($jobLeadIdInput: String!) {
  removeJobLead(jobLeadIdInput: $jobLeadIdInput) {
    jobLeads {
      id
      prospectId
      leadSource
      status
      createdById
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      referenceId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveJobLeadGQL extends Apollo.Mutation<RemoveJobLeadMutation, RemoveJobLeadMutationVariables> {
    override document = RemoveJobLeadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateJobDocument = gql`
    mutation createJob($jobInput: JobInput!) {
  createJob(jobInput: $jobInput) {
    jobLastAdded {
      customerId
      id
      status
      createdById
      definedWorkScope
      jobLeadId
      imageURLs
      fileURLs
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      assignedToId
      startDate
      completedDate
      estimateId
      proposalId
      poNumber
      jobManagerId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateJobGQL extends Apollo.Mutation<CreateJobMutation, CreateJobMutationVariables> {
    override document = CreateJobDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateJobDocument = gql`
    mutation updateJob($jobIdInput: String!, $updateJobInput: JobInput!) {
  updateJob(jobIdInput: $jobIdInput, updateJobInput: $updateJobInput) {
    jobLastUpdated {
      customerId
      id
      status
      createdById
      definedWorkScope
      jobLeadId
      imageURLs
      fileURLs
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      assignedToId
      startDate
      completedDate
      estimateId
      proposalId
      poNumber
      jobManagerId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateJobGQL extends Apollo.Mutation<UpdateJobMutation, UpdateJobMutationVariables> {
    override document = UpdateJobDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveJobDocument = gql`
    mutation removeJob($jobIdInput: String!) {
  removeJob(jobIdInput: $jobIdInput) {
    jobs {
      customerId
      id
      status
      createdById
      definedWorkScope
      jobLeadId
      imageURLs
      fileURLs
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      assignedToId
      startDate
      completedDate
      estimateId
      proposalId
      poNumber
      jobManagerId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveJobGQL extends Apollo.Mutation<RemoveJobMutation, RemoveJobMutationVariables> {
    override document = RemoveJobDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePaymentDocument = gql`
    mutation createPayment($paymentInput: PaymentInput!) {
  createPayment(paymentInput: $paymentInput) {
    paymentLastAdded {
      id
      created
      to
      referenceId
      referenceType
      createdById
      note
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePaymentGQL extends Apollo.Mutation<CreatePaymentMutation, CreatePaymentMutationVariables> {
    override document = CreatePaymentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePaymentDocument = gql`
    mutation updatePayment($paymentIdInput: String!, $updatePaymentInput: PaymentInput!) {
  updatePayment(
    paymentIdInput: $paymentIdInput
    updatePaymentInput: $updatePaymentInput
  ) {
    paymentLastUpdated {
      id
      created
      to
      referenceId
      referenceType
      createdById
      note
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePaymentGQL extends Apollo.Mutation<UpdatePaymentMutation, UpdatePaymentMutationVariables> {
    override document = UpdatePaymentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemovePaymentDocument = gql`
    mutation removePayment($paymentIdInput: String!) {
  removePayment(paymentIdInput: $paymentIdInput) {
    payments {
      id
      created
      to
      referenceId
      referenceType
      createdById
      note
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemovePaymentGQL extends Apollo.Mutation<RemovePaymentMutation, RemovePaymentMutationVariables> {
    override document = RemovePaymentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateProposalDocument = gql`
    mutation createProposal($proposalInput: ProposalInput!) {
  createProposal(proposalInput: $proposalInput) {
    proposalLastAdded {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateProposalGQL extends Apollo.Mutation<CreateProposalMutation, CreateProposalMutationVariables> {
    override document = CreateProposalDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProposalDocument = gql`
    mutation updateProposal($proposalIdInput: String!, $updateProposalInput: ProposalInput!) {
  updateProposal(
    proposalIdInput: $proposalIdInput
    updateProposalInput: $updateProposalInput
  ) {
    proposalLastUpdated {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProposalGQL extends Apollo.Mutation<UpdateProposalMutation, UpdateProposalMutationVariables> {
    override document = UpdateProposalDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveProposalDocument = gql`
    mutation removeProposal($proposalIdInput: String!) {
  removeProposal(proposalIdInput: $proposalIdInput) {
    proposals {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveProposalGQL extends Apollo.Mutation<RemoveProposalMutation, RemoveProposalMutationVariables> {
    override document = RemoveProposalDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddProspectDocument = gql`
    mutation addProspect($prospectInput: ProspectInput!) {
  addProspect(prospectInput: $prospectInput) {
    prospectLastAdded {
      ...prospectFields
    }
  }
}
    ${ProspectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddProspectGQL extends Apollo.Mutation<AddProspectMutation, AddProspectMutationVariables> {
    override document = AddProspectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveProspectDocument = gql`
    mutation removeProspect($prospectIdInput: String!) {
  removeProspect(prospectIdInput: $prospectIdInput) {
    prospects {
      ...prospectFields
    }
  }
}
    ${ProspectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveProspectGQL extends Apollo.Mutation<RemoveProspectMutation, RemoveProspectMutationVariables> {
    override document = RemoveProspectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProspectDocument = gql`
    mutation updateProspect($prospectIdInput: String!, $updateProspectInput: ProspectInput!) {
  updateProspect(
    prospectIdInput: $prospectIdInput
    updateProspectInput: $updateProspectInput
  ) {
    prospectLastUpdated {
      ...prospectFields
    }
  }
}
    ${ProspectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProspectGQL extends Apollo.Mutation<UpdateProspectMutation, UpdateProspectMutationVariables> {
    override document = UpdateProspectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateWorkServiceDocument = gql`
    mutation createWorkService($workServiceInput: WorkServiceInput!) {
  createWorkService(workServiceInput: $workServiceInput) {
    workServiceLastAdded {
      category
      costGuides
      created
      description
      id
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      name
      notes {
        id
        userId
        note
        created
      }
      salePrice
      timeToComplete
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateWorkServiceGQL extends Apollo.Mutation<CreateWorkServiceMutation, CreateWorkServiceMutationVariables> {
    override document = CreateWorkServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateWorkServiceDocument = gql`
    mutation updateWorkService($workServiceIdInput: String!, $updateWorkServiceInput: WorkServiceInput!) {
  updateWorkService(
    workServiceIdInput: $workServiceIdInput
    updateWorkServiceInput: $updateWorkServiceInput
  ) {
    workServiceLastUpdated {
      category
      costGuides
      created
      description
      id
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      name
      notes {
        id
        userId
        note
        created
      }
      salePrice
      timeToComplete
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateWorkServiceGQL extends Apollo.Mutation<UpdateWorkServiceMutation, UpdateWorkServiceMutationVariables> {
    override document = UpdateWorkServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveWorkServiceDocument = gql`
    mutation removeWorkService($workServiceIdInput: String!) {
  removeWorkService(workServiceIdInput: $workServiceIdInput) {
    workServices {
      category
      costGuides
      created
      description
      id
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      name
      notes {
        id
        userId
        note
        created
      }
      salePrice
      timeToComplete
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveWorkServiceGQL extends Apollo.Mutation<RemoveWorkServiceMutation, RemoveWorkServiceMutationVariables> {
    override document = RemoveWorkServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateItemDocument = gql`
    mutation createItem($itemInput: ItemInput!) {
  createItem(itemInput: $itemInput) {
    itemLastAdded {
      brand
      category
      description
      id
      imageURL
      installLinks
      make
      modelNumber
      name
      orderLinks
      purchasePrice
      salePrice
      sku
      websiteReferences
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateItemGQL extends Apollo.Mutation<CreateItemMutation, CreateItemMutationVariables> {
    override document = CreateItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllAccountsDocument = gql`
    query allAccounts {
  allAccounts {
    id
    accountOwnerId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllAccountsGQL extends Apollo.Query<AllAccountsQuery, AllAccountsQueryVariables> {
    override document = AllAccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AccountIdDocument = gql`
    query accountId {
  accountId {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AccountIdGQL extends Apollo.Query<AccountIdQuery, AccountIdQueryVariables> {
    override document = AccountIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BeneficiariesByCustomerIdDocument = gql`
    query beneficiariesByCustomerId($customerId: String!) {
  account {
    beneficiariesByCustomerId(customerId: $customerId) {
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BeneficiariesByCustomerIdGQL extends Apollo.Query<BeneficiariesByCustomerIdQuery, BeneficiariesByCustomerIdQueryVariables> {
    override document = BeneficiariesByCustomerIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BeneficiariesDocument = gql`
    query beneficiaries {
  account {
    beneficiaries {
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BeneficiariesGQL extends Apollo.Query<BeneficiariesQuery, BeneficiariesQueryVariables> {
    override document = BeneficiariesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CompanyProfileDocument = gql`
    query companyProfile {
  account {
    companyProfile {
      bio
      companyName
      created
      logoURL
      email
      phone
      website
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CompanyProfileGQL extends Apollo.Query<CompanyProfileQuery, CompanyProfileQueryVariables> {
    override document = CompanyProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CustomersDocument = gql`
    query customers {
  account {
    customers {
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      prospectId
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CustomersGQL extends Apollo.Query<CustomersQuery, CustomersQueryVariables> {
    override document = CustomersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CustomerByIdDocument = gql`
    query customerById($customerId: String!) {
  account {
    customerById(customerId: $customerId) {
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      prospectId
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CustomerByIdGQL extends Apollo.Query<CustomerByIdQuery, CustomerByIdQueryVariables> {
    override document = CustomerByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EstimatesDocument = gql`
    query estimates {
  account {
    estimates {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      expires
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      prospectId
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EstimatesGQL extends Apollo.Query<EstimatesQuery, EstimatesQueryVariables> {
    override document = EstimatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EstimateByIdDocument = gql`
    query estimateById($estimateId: String!) {
  account {
    estimateById(estimateId: $estimateId) {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      expires
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      prospectId
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EstimateByIdGQL extends Apollo.Query<EstimateByIdQuery, EstimateByIdQueryVariables> {
    override document = EstimateByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExpensesDocument = gql`
    query expenses {
  account {
    expenses {
      amount
      category
      created
      createdById
      id
      imageURL
      location
      subCategory
      userId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExpensesGQL extends Apollo.Query<ExpensesQuery, ExpensesQueryVariables> {
    override document = ExpensesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExpenseByIdDocument = gql`
    query expenseById($expenseId: String!) {
  account {
    expenseById(expenseId: $expenseId) {
      amount
      category
      created
      createdById
      id
      imageURL
      location
      subCategory
      userId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExpenseByIdGQL extends Apollo.Query<ExpenseByIdQuery, ExpenseByIdQueryVariables> {
    override document = ExpenseByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InvoicesDocument = gql`
    query invoices {
  account {
    invoices {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InvoicesGQL extends Apollo.Query<InvoicesQuery, InvoicesQueryVariables> {
    override document = InvoicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InvoicesByIdDocument = gql`
    query invoicesById($invoiceId: String!) {
  account {
    invoiceById(invoiceId: $invoiceId) {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      fileURLs
      id
      imageURLs
      jobLeadId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
      notes {
        id
        userId
        note
        created
      }
      number
      referenceId
      status
      viewedDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InvoicesByIdGQL extends Apollo.Query<InvoicesByIdQuery, InvoicesByIdQueryVariables> {
    override document = InvoicesByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ItemsDocument = gql`
    query items {
  account {
    items {
      brand
      category
      description
      id
      imageURL
      installLinks
      make
      modelNumber
      name
      orderLinks
      purchasePrice
      salePrice
      sku
      websiteReferences
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ItemsGQL extends Apollo.Query<ItemsQuery, ItemsQueryVariables> {
    override document = ItemsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ItemByIdDocument = gql`
    query itemById($itemId: String!) {
  account {
    itemById(itemId: $itemId) {
      brand
      category
      description
      id
      imageURL
      installLinks
      make
      modelNumber
      name
      orderLinks
      purchasePrice
      salePrice
      sku
      websiteReferences
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ItemByIdGQL extends Apollo.Query<ItemByIdQuery, ItemByIdQueryVariables> {
    override document = ItemByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JobLeadByIdDocument = gql`
    query jobLeadById($jobLeadId: String!) {
  account {
    jobLeadById(jobLeadId: $jobLeadId) {
      id
      prospectId
      leadSource
      status
      createdById
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      referenceId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JobLeadByIdGQL extends Apollo.Query<JobLeadByIdQuery, JobLeadByIdQueryVariables> {
    override document = JobLeadByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JobLeadsDocument = gql`
    query jobLeads {
  account {
    jobLeads {
      id
      prospectId
      leadSource
      status
      createdById
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      referenceId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JobLeadsGQL extends Apollo.Query<JobLeadsQuery, JobLeadsQueryVariables> {
    override document = JobLeadsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JobsDocument = gql`
    query jobs {
  account {
    jobs {
      customerId
      id
      status
      createdById
      definedWorkScope
      jobLeadId
      imageURLs
      fileURLs
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      assignedToId
      startDate
      completedDate
      estimateId
      proposalId
      poNumber
      jobManagerId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JobsGQL extends Apollo.Query<JobsQuery, JobsQueryVariables> {
    override document = JobsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JobByIdDocument = gql`
    query jobById($jobId: String!) {
  account {
    jobById(jobId: $jobId) {
      customerId
      id
      status
      createdById
      definedWorkScope
      jobLeadId
      imageURLs
      fileURLs
      category
      addressId
      address {
        streetAddress
        city
        state
        zipcode
      }
      requestedWorkScope
      created
      assignedToId
      startDate
      completedDate
      estimateId
      proposalId
      poNumber
      jobManagerId
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JobByIdGQL extends Apollo.Query<JobByIdQuery, JobByIdQueryVariables> {
    override document = JobByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PaymentsDocument = gql`
    query payments {
  account {
    payments {
      id
      created
      to
      referenceId
      referenceType
      createdById
      note
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaymentsGQL extends Apollo.Query<PaymentsQuery, PaymentsQueryVariables> {
    override document = PaymentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PaymentByIdDocument = gql`
    query paymentById($paymentId: String!) {
  account {
    paymentById(paymentId: $paymentId) {
      id
      created
      to
      referenceId
      referenceType
      createdById
      note
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaymentByIdGQL extends Apollo.Query<PaymentByIdQuery, PaymentByIdQueryVariables> {
    override document = PaymentByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProposalsDocument = gql`
    query proposals {
  account {
    proposals {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProposalsGQL extends Apollo.Query<ProposalsQuery, ProposalsQueryVariables> {
    override document = ProposalsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProposalByIdDocument = gql`
    query proposalById($proposalId: String!) {
  account {
    proposalById(proposalId: $proposalId) {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProposalByIdGQL extends Apollo.Query<ProposalByIdQuery, ProposalByIdQueryVariables> {
    override document = ProposalByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AccountProspectsDocument = gql`
    query accountProspects {
  account {
    prospects {
      address {
        streetAddress
        city
        state
        zipcode
      }
      id
      displayName
      firstname
      lastname
      email
      phone
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AccountProspectsGQL extends Apollo.Query<AccountProspectsQuery, AccountProspectsQueryVariables> {
    override document = AccountProspectsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AccountProspectByIdDocument = gql`
    query accountProspectById($prospectId: String!) {
  account {
    prospectById(prospectId: $prospectId) {
      ...prospectFields
    }
  }
}
    ${ProspectFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AccountProspectByIdGQL extends Apollo.Query<AccountProspectByIdQuery, AccountProspectByIdQueryVariables> {
    override document = AccountProspectByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserByProfileIdDocument = gql`
    query userByProfileId($userProfileId: String!) {
  userProfileById(userProfileId: $userProfileId) {
    id
    email
    idToken
    activeAccountId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserByProfileIdGQL extends Apollo.Query<UserByProfileIdQuery, UserByProfileIdQueryVariables> {
    override document = UserByProfileIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WorkServicesDocument = gql`
    query workServices {
  account {
    workServices {
      category
      costGuides
      created
      description
      id
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      name
      notes {
        id
        userId
        note
        created
      }
      salePrice
      timeToComplete
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WorkServicesGQL extends Apollo.Query<WorkServicesQuery, WorkServicesQueryVariables> {
    override document = WorkServicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WorkServiceByIdDocument = gql`
    query workServiceById($workServiceId: String!) {
  account {
    workServiceById(workServiceId: $workServiceId) {
      category
      costGuides
      created
      description
      id
      lineItems {
        quantity
        item {
          category
          description
          imageURL
          websiteReferences
          name
          salePrice
          purchasePrice
          sku
          modelNumber
          brand
          make
          installLinks
          created
        }
      }
      name
      notes {
        id
        userId
        note
        created
      }
      salePrice
      timeToComplete
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WorkServiceByIdGQL extends Apollo.Query<WorkServiceByIdQuery, WorkServiceByIdQueryVariables> {
    override document = WorkServiceByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }