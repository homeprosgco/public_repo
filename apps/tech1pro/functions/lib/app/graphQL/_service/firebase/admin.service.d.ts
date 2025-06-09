import admin from 'firebase-admin';
export { FirebaseError } from 'firebase-admin/app';
export declare class FirebaseAdminService {
    auth(): import("firebase-admin/lib/auth/auth").Auth;
    firestore(): admin.firestore.Firestore;
    arrayUnion(...elements: any[]): admin.firestore.FieldValue;
}
