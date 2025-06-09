import admin from 'firebase-admin';

export type DocumentReference = admin.firestore.DocumentReference;
export type UserRecord = admin.auth.UserRecord;
export type TypeDataWithId<T> = { id: string } & T;