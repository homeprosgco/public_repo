import { UserProfile, UserProfileInput } from "@graphql-schema/";
import { TypeDataWithId } from "../../_types/types";
import { FirestoreService } from "../firestore.service";
export declare class UserService {
    private firestoreSvc;
    constructor(firestoreSvc: FirestoreService);
    addUser(userProfile: UserProfileInput): Promise<UserProfile>;
    setUser(authUserId: string, userProfile: UserProfileInput): Promise<UserProfile>;
    getAllUsers(): Promise<TypeDataWithId<UserProfile>[]>;
    getUserById(userId: string): Promise<UserProfile>;
    updateUserProfile(userId: string, updateUserProfileInput: Partial<UserProfileInput>): Promise<UserProfile>;
}
