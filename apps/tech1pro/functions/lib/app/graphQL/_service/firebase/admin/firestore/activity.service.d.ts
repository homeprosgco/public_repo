import { Activity, ActivityInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class ActivityService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "activities";
    constructor(firestoreSvc: FirestoreService);
    addActivity(collectionPath: string, activityInput: ActivityInput): Promise<Activity>;
    getLastAddedActivity(collectionPath: string): Promise<Activity>;
    getActivities(collectionPath: string): Promise<Activity[]>;
    deleteActivity(collectionPath: string, activityId: string): Promise<FirebaseFirestore.WriteResult>;
}
