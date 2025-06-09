import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-basic-table-row',
  template: `
  <ng-container>
    <tr class="tb-tnx-item border-bottom border-light py-3">
      <td class="tb-tnx-id">
        <a href="#"><span>{{id}}</span></a>
      </td>
      <td class="tb-tnx-info">
        <div class="tb-tnx-desc">
          <span class="title">{{ title }}</span>
        </div>
        <div class="tb-tnx-date">
          <span class="date">{{ startDate }}</span>
          <span class="date">{{ endDate }}</span>
        </div>
      </td>
      <td class="tb-tnx-amount is-alt">
        <div class="tb-tnx-total">
          <span class="amount">{{ '$' + amount}}</span>
        </div>
        <div class="tb-tnx-status">
          <span class="badge badge-dot bg-danger">{{status}}</span>
        </div>
      </td>
      <td class="tb-tnx-action">
        <div class="dropdown">
          <a class="text-soft dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em
              class="icon ni ni-more-h"></em></a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-xs">
            <ul class="link-list-plain">
              <li><a href="#" (click)="_onViewClick($event)" >View</a></li>
              <li><a href="#" (click)="_onEditClick($event)">Edit</a></li>
              <li><a href="#" (click)="_onRemoveClick($event)">Remove</a></li>
            </ul>
          </div>
        </div>
      </td>
    </tr><!-- tb-tnx-item -->
  </ng-container>
  `,
})
export class TransactionBasicTableRowComponent {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() status: string = '';
  @Input() amount: string = '';
  @Input() startDate: string = '';
  @Input() endDate: string = '';

  @Output() onViewClick: EventEmitter<string> = new EventEmitter();
  @Output() onEditClick: EventEmitter<string> = new EventEmitter();
  @Output() onRemoveClick: EventEmitter<string> = new EventEmitter();

  _onViewClick (e: Event) {
    e.preventDefault();
    this.onViewClick.emit(this.id);
  }

  _onEditClick (e: Event) {
    e.preventDefault();
    this.onViewClick.emit(this.id);
  }

  _onRemoveClick (e: Event) {
    e.preventDefault();
    this.onViewClick.emit(this.id);
  }

}
