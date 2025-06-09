import { ErrorHandler, Injectable } from '@angular/core';

const firebaseAuthIdTokenExpiredError = 'auth/id-token-expired';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any) {
    // your custom error handling logic    
    console.log(error);
    switch (error.message) {
      case firebaseAuthIdTokenExpiredError:
        this.#handleAuthIdTokenExpired(error.message);
        break;

      default:
        break;
    }
  }

  #handleAuthIdTokenExpired(error: string) {
    console.log(error);
  }

}