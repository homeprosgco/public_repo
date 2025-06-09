import { Beneficiary, BeneficiaryInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
import { AddressService } from "./address.service";
export declare class BeneficiaryService {
    #private;
    private readonly firestoreSvc;
    private readonly addressSvc;
    readonly collectionName = "beneficiaries";
    constructor(firestoreSvc: FirestoreService, addressSvc: AddressService);
    addBeneficiary(accountId: string, beneficiaryInput: BeneficiaryInput): Promise<Beneficiary>;
    getLastAddedBeneficiary(accountId: string): Promise<Beneficiary>;
    getLastUpdatedBeneficiary(accountId: string): Promise<Beneficiary>;
    getBeneficiaries(accountId: string): Promise<Beneficiary[]>;
    getBeneficiariesByCustomerId(accountId: string, customerId: string): Promise<Beneficiary[]>;
    getBeneficiaryById(accountId: string, beneficiaryId: string): Promise<Beneficiary>;
    updateBeneficiary(accountId: string, beneficiaryId: string, beneficiaryInput: BeneficiaryInput): Promise<Beneficiary>;
    deleteBeneficiary(accountId: string, beneficiaryId: string): Promise<FirebaseFirestore.WriteResult>;
}
