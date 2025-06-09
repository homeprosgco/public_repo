import { Job, JobInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class JobService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "jobs";
    constructor(firestoreSvc: FirestoreService);
    addJob(accountId: string, jobInput: JobInput): Promise<Job>;
    getLastAddedJob(accountId: string): Promise<Job>;
    getLastUpdatedJob(accountId: string): Promise<Job>;
    getJobs(accountId: string): Promise<Job[]>;
    getJobById(accountId: string, jobId: string): Promise<Job>;
    getJobsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined): Promise<Job[]>;
    getJobsWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<Job[]>;
    updateJob(accountId: string, jobId: string, jobInput: JobInput): Promise<Job>;
    deleteJob(accountId: string, jobId: string): Promise<FirebaseFirestore.WriteResult>;
}
