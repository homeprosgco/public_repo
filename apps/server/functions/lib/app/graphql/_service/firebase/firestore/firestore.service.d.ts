import admin from 'firebase-admin';
export declare class FirestoreService {
    #private;
    createNew<T>(path: string, createInput: T): Promise<{
        data: T;
    }>;
    createNewWithId<T>(path: string, id: string, createInput: T): Promise<unknown>;
    getDocuments<T>(path: string): Promise<{
        data: T[];
    }>;
    getDocumentById<T>(path: string, id: string): Promise<unknown>;
    updateDocument<T>(path: string, updateInput: T): Promise<T>;
    mergeDocument<T>(path: string, id: string, mergeInput: T): Promise<admin.firestore.WriteResult>;
    removeDocument(path: string): Promise<{
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
    }>;
}
