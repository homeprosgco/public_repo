import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Select2OptionService } from './select2-option.service';
import { Select2Option } from './_type/select2-option.type';

@Component({
  selector: 'app-select2',
  template: `<app-select2-form-group [label]="label" [options]="options" (selection)="onSelected($event)"></app-select2-form-group>`,
})
export class Select2Component implements OnChanges {

  options: Select2Option[] = [];
  @Output() selected: EventEmitter<string> = new EventEmitter();
  @Input() category: string = '';
  @Input() label: string = 'Add a Label';

  constructor(private selectOptionSvc: Select2OptionService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.options = this.selectOptionSvc.getStatusOptions(changes["category"].currentValue);
  }

  onSelected(status: Select2Option) {
    console.log(status);
    this.selected.emit(status.text);
  }

}
