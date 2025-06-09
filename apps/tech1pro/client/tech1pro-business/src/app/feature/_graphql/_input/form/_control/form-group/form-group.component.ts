import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  template: `
  <div>
    <div class="form-group" [formGroup]="form">
      <div class="form-label-group">
        <label class="form-label" [attr.for]="inputId">{{ label }} <span *ngIf="isRequired" class="text-danger">*</span></label>
      </div>
      <div class="form-control-wrap">
        <input [type]="inputType" class="form-control" [id]="inputId" [placeholder]="placeholder" [formControlName]="controlName">
        <span *ngIf="errors && errors?.['required']" id="text-error" class="invalid">This field is required.</span>
      </div>
    </div>
  </div>
  `,
})
export class FormGroupComponent {

  @Input() label: string = 'set input Label';
  @Input() inputId: string = "input id";
  @Input() placeholder: string = '';
  @Input() inputType: string = 'text';
  @Input() controlName: string = 'controlName';
  @Input() form!: FormGroup;
  @Input() errors: ValidationErrors | null = null;
  @Output() onClick: EventEmitter<undefined> = new EventEmitter();
  @Input() isRequired: boolean = false

  ngOnChanges(changes: SimpleChanges) {
    for(const change in changes) {
      if(change === 'form') {
        this.form.addControl(this.controlName, new FormControl());
      }
    }
  }

  click(e: Event) {
    e.preventDefault();
    this.onClick.emit();
  }


}
