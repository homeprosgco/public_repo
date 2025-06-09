import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  #signOut$: Subject<void> = new Subject();

  constructor() { }

  signOut() {
    this.#signOut$.next();
  }

  signOut$() {
    return this.#signOut$.asObservable();
  }

}
