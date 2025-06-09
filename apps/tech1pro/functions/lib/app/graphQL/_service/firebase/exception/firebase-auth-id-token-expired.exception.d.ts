import { HttpException } from "@nestjs/common";
import admin from 'firebase-admin';
export declare class FirebaseAuthIDTokenExpiredException extends HttpException {
    constructor(error: admin.FirebaseError);
}
