import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffCanvasMenuComponent } from './account/off-canvas-menu/off-canvas-menu.component';
import { PageHeaderComponent } from './account/page-header/page-header.component';
import {RouterModule} from '@angular/router';
import { ElementsModule } from './elements/elements.module';


@NgModule({
  declarations: [
    OffCanvasMenuComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ElementsModule
  ],
  exports: [
    OffCanvasMenuComponent,
    PageHeaderComponent,
    ElementsModule
  ]
})
export class ComponentModule { }
