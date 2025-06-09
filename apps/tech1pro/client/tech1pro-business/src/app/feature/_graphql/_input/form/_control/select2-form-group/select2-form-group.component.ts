import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Select2Option } from './_type/select2-option.type';

@Component({
  selector: 'app-select2-form-group',
  template: `
    <div class="form-group">
        <label class="form-label">{{ label }}</label>
        <div [id]="id" class="form-control-wrap">
            <select class="form-select js-select2" [appSelect2]="options" (data)="onSelection($event)"></select>
        </div>
    </div>
  `,
})
export class Select2FormGroupComponent implements OnChanges {

  @Input() label: string = 'Give me a Name(Label)';
  @Input() id: string = 'inputId';
  @Input() options: Select2Option[] = [];
  @Output() selection: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (!changes["options"].isFirstChange()) {
      console.log(changes["options"].currentValue);
      this.options = [ ...changes["options"].currentValue]
    }
  }

  onSelection(selection: any) {
    console.log(selection);
    this.selection.emit(selection);
  }

}
