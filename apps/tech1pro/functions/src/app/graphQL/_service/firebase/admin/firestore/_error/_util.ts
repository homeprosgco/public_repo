import { FirebaseError } from "firebase-admin";
import { FirestoreServerException } from "../../../exception";

export const throwFirestoreServerException = (error: FirebaseError) => { throw new FirestoreServerException((error as FirebaseError)) };