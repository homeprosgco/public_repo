import { Note, NoteInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface NoteCreated extends Omit<Note, "created"> {
  created: string;
}

@Injectable()
export class NoteService {

  readonly collectionName = 'notes';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(path: string) {
    return `${path}/${this.collectionName}`
  }

  async addNote(collectionPath: string, noteInput: NoteInput) {
    try {
      return await this.firestoreSvc.addDocument<Note>(this.#collectionPath(collectionPath), {
        ...noteInput,
        created: createdISOStringDate()
      }) as Note;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedNote(collectionPath: string) {
    try {
      const sortNotesByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<NoteCreated>(this.#collectionPath(collectionPath));
      return sortNotesByCreatedDate[0] as Note;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getNotes(collectionPath: string) {
    try {
      return await this.firestoreSvc.getDocuments<Note>(this.#collectionPath(collectionPath)) as Note[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteNote(collectionPath: string, noteId: string) {
    try {
      return this.firestoreSvc.deleteDocument(this.#collectionPath(collectionPath), noteId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}