import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { RouterModule } from '@angular/router';
import { ItemListViewComponent } from './item-list-view/item-list-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemComponent,
        children: [
          {
            path: 'items',
            component: ItemListViewComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    ItemComponent,
    ItemListViewComponent
  ]
})
export class ItemModule { }
