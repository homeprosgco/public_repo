import { initializeApp, FirebaseApp } from 'firebase/app';
import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const FIREBASE_APP: FirebaseApp = initializeApp(environment.firebaseConfig);
export const FIREBASE_APP_CONFIG = new InjectionToken<FirebaseApp>('firebase-app');