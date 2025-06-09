import { Comment, CommentInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class CommentService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "comments";
    constructor(firestoreSvc: FirestoreService);
    addComment(collectionPath: string, commentInput: CommentInput): Promise<Comment>;
    getLastAddedComment(collectionPath: string): Promise<Comment>;
    getComments(collectionPath: string): Promise<Comment[]>;
    deleteComment(collectionPath: string, commentId: string): Promise<FirebaseFirestore.WriteResult>;
}
