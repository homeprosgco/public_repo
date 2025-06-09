import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  template: `
  <button class="btn btn-lg btn-primary btn-block" type="submit" (click)="click($event)">
    <ng-content></ng-content>
  </button>
  `,
})
export class PrimaryButtonComponent {

  @Input() label: string = 'set button Label';
  @Input() btnType: string = 'button';
  @Output() onClick: EventEmitter<undefined> = new EventEmitter();

  click(e: Event) {
    this.onClick.emit();
  }


}
