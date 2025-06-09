import admin from 'firebase-admin';
export declare type DocumentReference = admin.firestore.DocumentReference;
export declare type UserRecord = admin.auth.UserRecord;
export declare type TypeDataWithId<T> = {
    id: string;
} & T;
