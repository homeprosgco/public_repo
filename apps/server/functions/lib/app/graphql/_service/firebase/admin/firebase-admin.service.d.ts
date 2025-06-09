import admin from 'firebase-admin';
export declare class FirebaseAdminService {
    auth(): import("firebase-admin/lib/auth/auth").Auth;
    firestore(): admin.firestore.Firestore;
}
