import { FirebaseAdminService } from '../admin.service';
import { DocumentReference, TypeDataWithId } from '../_types/types';
export declare class FirestoreService {
    #private;
    private readonly firestoreSvc;
    constructor(firestoreSvc: FirebaseAdminService);
    accountsPath(accountId: string): string;
    usersPath(): string;
    documentRefId(collectionPath: string): string;
    addDocument<T>(collectionName: string, data: T): Promise<TypeDataWithId<T>>;
    createDocument<T>(collectionName: string, data: T): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>;
    mergeDocument<T>(documentPath: string, data: T): Promise<{
        id: string;
    }>;
    setDocument<T>(documentPath: string, data: T): Promise<{
        id: string;
    }>;
    updateDocument<T>(documentPath: string, data: T): Promise<TypeDataWithId<T>>;
    addArrayElement<T>(...elements: any[]): FirebaseFirestore.FieldValue;
    deleteDocument(collectionName: string, docId: string): Promise<FirebaseFirestore.WriteResult>;
    getDocuments<T>(path: string): Promise<TypeDataWithId<T>[]>;
    getDocumentsWhereEqual<T>(collectionPath: string, property: string, value: any): Promise<TypeDataWithId<T>[]>;
    getLastDocumentAdded<T extends {
        created: string;
    }>(collectionPath: string): Promise<T[]>;
    getDocumentsCreatedBetween<T extends {
        created: string;
    }>(collectionPath: string, afterISODateString: string, beforeISODateString?: string): Promise<T[]>;
    getLastDocumentUpdated<T extends {
        updated: string;
    }>(collectionPath: string): Promise<T[]>;
    getDocumentIds(path: string): Promise<string[]>;
    getDocument<T>(path: string): Promise<TypeDataWithId<T>>;
    getDocumentWhereArrayIncludes<T>(collectionPath: string, property: string, value: any): Promise<TypeDataWithId<T>[]>;
    mapDocRefToDoc<T>(ref: DocumentReference): Promise<TypeDataWithId<T>>;
}
