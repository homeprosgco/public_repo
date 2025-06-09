import { Estimate, EstimateInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class EstimateService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "estimates";
    constructor(firestoreSvc: FirestoreService);
    addEstimate(accountId: string, estimateInput: EstimateInput): Promise<Estimate>;
    getLastAddedEstimate(accountId: string): Promise<Estimate>;
    getLastUpdatedEstimate(accountId: string): Promise<Estimate>;
    getEstimates(accountId: string): Promise<Estimate[]>;
    getEstimateById(accountId: string, estimateId: string): Promise<Estimate>;
    getEstimatesCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined): Promise<Estimate[]>;
    getEstimatesWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<Estimate[]>;
    updateEstimate(accountId: string, estimateId: string, estimateInput: EstimateInput): Promise<Estimate>;
    deleteEstimate(accountId: string, estimateId: string): Promise<FirebaseFirestore.WriteResult>;
}
