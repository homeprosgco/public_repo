import { Note, NoteInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class NoteService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "notes";
    constructor(firestoreSvc: FirestoreService);
    addNote(collectionPath: string, noteInput: NoteInput): Promise<Note>;
    getLastAddedNote(collectionPath: string): Promise<Note>;
    getNotes(collectionPath: string): Promise<Note[]>;
    deleteNote(collectionPath: string, noteId: string): Promise<FirebaseFirestore.WriteResult>;
}
