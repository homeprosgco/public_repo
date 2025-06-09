import { User } from "@supabase/supabase-js";
import { DatasourceService } from "../_datasource.service";
export declare class UserService {
    private datasource;
    collectionName: string;
    constructor(datasource: DatasourceService);
    createProfiles(): Promise<Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>[]>[]>;
    createProfile(): {
        firstname: string;
        lastname: string;
        jobTitle: string;
        jobType: string;
        jobDescription: string;
        jobArea: string;
    };
    getAllUsers(): Promise<({
        id: string;
    } & User)[]>;
    deleteIndividual(): Promise<FirebaseFirestore.WriteResult[]>;
}
