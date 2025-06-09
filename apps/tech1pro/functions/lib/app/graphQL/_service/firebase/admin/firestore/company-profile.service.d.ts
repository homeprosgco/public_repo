import { CompanyProfile, CompanyProfileInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class CompanyProfileService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "company-profile";
    constructor(firestoreSvc: FirestoreService);
    addCompanyProfile(accountId: string, companyProfileInput: CompanyProfileInput): Promise<CompanyProfile>;
    getCompanyProfile(accountId: string): Promise<CompanyProfile>;
    getCompanyProfileById(accountId: string, companyProfileId: string): Promise<CompanyProfile>;
    updateCompanyProfile(accountId: string, companyProfileId: string, companyProfileInput: CompanyProfileInput): Promise<import("../../_types/types").TypeDataWithId<CompanyProfile>>;
    deleteCompanyProfile(accountId: string, companyProfileId: string): Promise<FirebaseFirestore.WriteResult>;
}
