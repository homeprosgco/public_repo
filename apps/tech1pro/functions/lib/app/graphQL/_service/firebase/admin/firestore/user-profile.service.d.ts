import { CreateUserProfileInput, User } from "@graphql-schema/*";
import { TypeDataWithId } from "../../_types/types";
import { FirestoreService } from "../firestore.service";
import { Datasource } from "./datasource.model";
export declare class UserProfileService extends Datasource {
    #private;
    private readonly firestoreSvc;
    constructor(firestoreSvc: FirestoreService);
    allUserProfiles(): Promise<TypeDataWithId<User>[]>;
    getUserProfileById(userId: string): Promise<TypeDataWithId<User>>;
    addUserProfile(userProfileInput: CreateUserProfileInput): Promise<TypeDataWithId<CreateUserProfileInput>>;
}
