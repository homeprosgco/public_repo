import { WorkService, WorkServiceInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class WorkServiceService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "work-services";
    constructor(firestoreSvc: FirestoreService);
    addWorkService(accountId: string, workServiceInput: WorkServiceInput): Promise<WorkService>;
    getLastAddedWorkService(accountId: string): Promise<WorkService>;
    getLastUpdatedWorkService(accountId: string): Promise<WorkService>;
    getWorkServices(accountId: string): Promise<WorkService[]>;
    getWorkServiceById(accountId: string, workServiceId: string): Promise<WorkService>;
    getWorkServicesWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<WorkService[]>;
    updateWorkService(accountId: string, workServiceId: string, workServiceInput: WorkServiceInput): Promise<import("../../_types/types").TypeDataWithId<WorkService>>;
    deleteWorkService(accountId: string, workServiceId: string): Promise<FirebaseFirestore.WriteResult>;
}
