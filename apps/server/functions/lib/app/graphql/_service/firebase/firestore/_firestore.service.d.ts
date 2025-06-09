import { FirebaseAdminService } from '../admin/firebase-admin.service';
import { DocumentReference } from '../admin/type';
declare type TypeDataWithId<T> = {
    id: string;
} & T;
export declare class FirestoreService {
    private adminSvc;
    constructor(adminSvc: FirebaseAdminService);
    documentRefId(collectionPath: string): string;
    createDocument<T>(collectionName: string, data: T): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>;
    deleteDocument(collectionName: string, docId: string): Promise<FirebaseFirestore.WriteResult>;
    getDocuments<T>(path: string): Promise<TypeDataWithId<T>[]>;
    getDocumentIds(path: string): Promise<string[]>;
    getDocument<T>(path: string): Promise<TypeDataWithId<T>>;
    mapDocRefToDoc<T>(ref: DocumentReference): Promise<TypeDataWithId<T>>;
    mergeDocument<T>(documentPath: string, data: T): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>;
    setDocument<T>(documentPath: string, data: T): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>;
    updateDocument<T>(documentPath: string, data: T): Promise<FirebaseFirestore.WriteResult>;
}
export {};
