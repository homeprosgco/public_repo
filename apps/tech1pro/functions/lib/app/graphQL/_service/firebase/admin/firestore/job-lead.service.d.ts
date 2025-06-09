import { JobLead, JobLeadInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
import { AddressService } from "./address.service";
export declare class JobLeadService {
    #private;
    private readonly firestoreSvc;
    private readonly addressSvc;
    readonly collectionName = "job-leads";
    constructor(firestoreSvc: FirestoreService, addressSvc: AddressService);
    addJobLead(accountId: string, jobLeadInput: JobLeadInput): Promise<JobLead>;
    getLastAddedJobLead(accountId: string): Promise<JobLead>;
    getLastUpdatedJobLead(accountId: string): Promise<JobLead>;
    getJobLeads(accountId: string): Promise<JobLead[]>;
    getJobLeadsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined): Promise<JobLead[]>;
    getJobLeadById(accountId: string, jobLeadId: string): Promise<JobLead>;
    getJobLeadsWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<JobLead[]>;
    updateJobLead(accountId: string, jobLeadId: string, jobLeadInput: JobLeadInput): Promise<JobLead>;
    deleteJobLead(accountId: string, jobLeadId: string): Promise<FirebaseFirestore.WriteResult>;
}
