import { HttpException, HttpStatus } from "@nestjs/common";

export class FirestoreDocumentNotFoundException extends HttpException {
  constructor() {
    super('Document Not Found', HttpStatus.NOT_FOUND);
  }
}