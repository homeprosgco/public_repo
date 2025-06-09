import { Activity, ActivityInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface ActivityCreated extends Omit<Activity, "created"> {
  created: string;
}

@Injectable()
export class ActivityService {

  readonly collectionName = 'activities';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(path: string) {
    return `${path}/${this.collectionName}`
  }

  async addActivity(collectionPath: string, activityInput: ActivityInput) {
    try {
      return await this.firestoreSvc.addDocument<Activity>(this.#collectionPath(collectionPath), {
        ...activityInput,
        created: createdISOStringDate()
      }) as Activity;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedActivity(collectionPath: string) {
    try {
      const sortActivitysByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<ActivityCreated>(this.#collectionPath(collectionPath));
      return sortActivitysByCreatedDate[0] as Activity;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getActivities(collectionPath: string) {
    try {
      return await this.firestoreSvc.getDocuments<Activity>(this.#collectionPath(collectionPath)) as Activity[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteActivity(collectionPath: string, activityId: string) {
    try {
      return this.firestoreSvc.deleteDocument(this.#collectionPath(collectionPath), activityId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}