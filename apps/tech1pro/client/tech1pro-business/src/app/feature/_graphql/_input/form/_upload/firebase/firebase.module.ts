import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FIREBASE_APP, FIREBASE_APP_CONFIG } from './initialize-app';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: FIREBASE_APP_CONFIG,
      useValue: FIREBASE_APP
    }
  ]
})
export class FirebaseModule {}
