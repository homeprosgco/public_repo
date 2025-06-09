import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { ModalComponent } from './modal/modal.component';
import { ModalToggleBtnComponent } from './modal/modal-toggle-btn/modal-toggle-btn.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    ModalComponent,
    ModalToggleBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryButtonComponent,
    ModalComponent,
    ModalToggleBtnComponent
  ]
})
export class ElementsModule { }
