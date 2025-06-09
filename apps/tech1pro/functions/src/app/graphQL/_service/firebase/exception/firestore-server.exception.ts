import { HttpException, HttpStatus } from "@nestjs/common";
import admin from 'firebase-admin';

export class FirestoreServerException extends HttpException {
  constructor(error: admin.FirebaseError) {
    super('An Error Occurred On The Server', HttpStatus.INTERNAL_SERVER_ERROR);
    console.log(error);
  }
}