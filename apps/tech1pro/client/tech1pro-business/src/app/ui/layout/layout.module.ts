import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../component/component.module';
import { AccountLayoutComponent } from './account/account-layout.component';
import { ContentAreaComponent } from './account/content-area/content-area.component';
import {ComponentModule as ElementComponentModule } from './component/component.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { TransactionBasicTableRowComponent } from './component/transaction-basic-table-row/transaction-basic-table-row.component';


@NgModule({
  declarations: [
    AccountLayoutComponent,
    ContentAreaComponent,
    AuthLayoutComponent,
    TransactionBasicTableRowComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ElementComponentModule
  ],
  exports: [
    ComponentModule,
    AccountLayoutComponent,
    ContentAreaComponent,
    ElementComponentModule,
    AuthLayoutComponent,
    TransactionBasicTableRowComponent
  ]
})
export class LayoutModule { }
