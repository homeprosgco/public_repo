import { HttpException, HttpStatus } from "@nestjs/common";
import admin from 'firebase-admin';

export class FirebaseAuthIDTokenExpiredException extends HttpException {
  constructor(error: admin.FirebaseError) {
    super({statasCode: 401, message: error.code}, HttpStatus.UNAUTHORIZED);
  }
}