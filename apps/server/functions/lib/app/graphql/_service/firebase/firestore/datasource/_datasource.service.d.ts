import { FirestoreService } from "../_firestore.service";
export declare class DatasourceService {
    #private;
    private firestoreSvc;
    constructor(firestoreSvc: FirestoreService);
    collectionPath(accountId: string, collectionName: string): string;
    createIndividual<T>(collectionPath: string, cb: () => T, min?: number, max?: number): Promise<Promise<{
        id: string;
    }>[]>;
    mergeIndividual<T>(documentPath: string, cb: () => T, min?: number, max?: number): Promise<Promise<{
        id: string;
    }>[]>;
    setIndividual<T>(documentPath: string, cb: () => T, min?: number, max?: number): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>[]>;
    getAll<T>(collectionPath: string): Promise<({
        id: string;
    } & T)[]>;
    getDocument<T>(documentPath: string): Promise<{
        id: string;
    } & T>;
    deleteIndividual(collectionPath: string): Promise<FirebaseFirestore.WriteResult[]>;
}
