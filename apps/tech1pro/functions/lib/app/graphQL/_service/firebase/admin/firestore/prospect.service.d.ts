import { Prospect, ProspectInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
import { AddressService } from "./address.service";
export declare class ProspectService {
    #private;
    private readonly firestoreSvc;
    private readonly addressSvc;
    readonly collectionName = "prospects";
    constructor(firestoreSvc: FirestoreService, addressSvc: AddressService);
    addProspect(accountId: string, prospectInput: ProspectInput): Promise<Prospect>;
    getLastAddedProspect(accountId: string): Promise<Prospect>;
    getLastUpdatedProspect(accountId: string): Promise<Prospect>;
    getProspects(accountId: string): Promise<Prospect[]>;
    getProspectById(accountId: string, prospectId: string): Promise<Prospect>;
    updateProspect(accountId: string, prospectId: string, prospectInput: ProspectInput): Promise<Prospect>;
    deleteProspect(accountId: string, prospectId: string): Promise<FirebaseFirestore.WriteResult>;
}
