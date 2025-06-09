import { Injectable } from "@nestjs/common";
import admin from 'firebase-admin';

admin.firestore().settings({
  ignoreUndefinedProperties: true
});

@Injectable()
export class FirebaseAdminService {

  auth() {
    return admin.auth();
  }

  firestore() {
    return admin.firestore();
  }
  
}