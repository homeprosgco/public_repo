import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockHeadComponent } from './block-head/block-head.component';
import { RouterModule } from '@angular/router';
import { FormNoteComponent } from './form-note/form-note.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BlockHeadComponent,
    FormNoteComponent
  ],
  exports: [
    BlockHeadComponent,
    FormNoteComponent
  ]
})
export class ComponentModule { }
