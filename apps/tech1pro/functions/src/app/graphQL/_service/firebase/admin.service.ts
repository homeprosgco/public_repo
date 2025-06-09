import { Injectable } from "@nestjs/common";
import admin from 'firebase-admin';
admin.initializeApp();
export { FirebaseError} from 'firebase-admin/app'

@Injectable()
export class FirebaseAdminService {

  auth() { return admin.auth(); }

  firestore() { return admin.firestore(); }

  arrayUnion(...elements: any[]) {
    return admin.firestore.FieldValue.arrayUnion(...elements)
  }

}