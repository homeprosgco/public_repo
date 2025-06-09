import { Comment, CommentInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface CommentCreated extends Omit<Comment, "created"> {
  created: string;
}

@Injectable()
export class CommentService {

  readonly collectionName = 'comments';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(path: string) {
    return `${path}/${this.collectionName}`
  }

  async addComment(collectionPath: string, commentInput: CommentInput) {
    try {
      return await this.firestoreSvc.addDocument<Comment>(this.#collectionPath(collectionPath), {
        ...commentInput,
        created: createdISOStringDate()
      }) as Comment;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedComment(collectionPath: string) {
    try {
      const sortCommentsByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<CommentCreated>(this.#collectionPath(collectionPath));
      return sortCommentsByCreatedDate[0] as Comment;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getComments(collectionPath: string) {
    try {
      return await this.firestoreSvc.getDocuments<Comment>(this.#collectionPath(collectionPath)) as Comment[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteComment(collectionPath: string, commentId: string) {
    try {
      return this.firestoreSvc.deleteDocument(this.#collectionPath(collectionPath), commentId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}