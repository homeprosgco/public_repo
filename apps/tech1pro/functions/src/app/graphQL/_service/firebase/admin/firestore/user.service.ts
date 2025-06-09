import { UserProfile, UserProfileInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { Tech1ProUsersPath } from "../../util/util";
import { TypeDataWithId } from "../../_types/types";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

@Injectable()
export class UserService {

  constructor(private firestoreSvc: FirestoreService) { }

  async addUser(userProfile: UserProfileInput): Promise<UserProfile> {
    return await this.firestoreSvc.addDocument(`${Tech1ProUsersPath}`, {
      ...userProfile,
      created: new Date(Date.now()).toISOString()
    });
  }

  async setUser(authUserId: string, userProfile: UserProfileInput): Promise<UserProfile> {
    return await this.firestoreSvc.setDocument(`${Tech1ProUsersPath}/${authUserId}`, userProfile) as UserProfile;
  }

  async getAllUsers(): Promise<TypeDataWithId<UserProfile>[]> {
    return await this.firestoreSvc.getDocuments<UserProfile>(Tech1ProUsersPath)
  }

  async getUserById(userId: string): Promise<UserProfile> {
    try {
      return await this.firestoreSvc.getDocument<UserProfile>(`${Tech1ProUsersPath}/${userId}`) as UserProfile;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateUserProfile(userId: string, updateUserProfileInput: Partial<UserProfileInput>) {
    try {
      return await this.firestoreSvc.updateDocument<Partial<UserProfileInput>>(`${Tech1ProUsersPath}/${userId}`, updateUserProfileInput) as UserProfile;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}