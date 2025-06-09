import { HttpException } from "@nestjs/common";
import admin from 'firebase-admin';
export declare class FirestoreServerException extends HttpException {
    constructor(error: admin.FirebaseError);
}
