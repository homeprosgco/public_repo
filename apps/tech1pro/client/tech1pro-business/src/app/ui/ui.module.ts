import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { UIComponent } from './ui.component';



@NgModule({
  declarations: [UIComponent],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    UIComponent
  ]
})
export class UIModule { }
