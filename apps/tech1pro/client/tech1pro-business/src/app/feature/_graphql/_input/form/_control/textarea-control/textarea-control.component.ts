import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-textarea-control',
  template: `
    <div class="form-group" [formGroup]="form">
      <label class="form-label" [attr.for]="id">{{ label }} <span *ngIf="isRequired" class="text-danger">*</span></label>
      <div class="form-control-wrap">
        <textarea [style.min-height.px]="minHeight" [formControlName]="controlName" class="form-control no-resize" [id]="id">{{ placeholder }}</textarea>
        <span *ngIf="errors && errors?.['required']" id="text-error" class="invalid">This field is required.</span>
      </div>
    </div>
  `,
})
export class TextareaControlComponent implements OnInit {

  @Input() isRequired: boolean = false;
  @Input() label: string = 'Add Textarea Label';
  @Input() placeholder: string = 'Large text area content';
  @Input() form!: FormGroup;
  @Input() id: string = 'id';
  @Input() controlName: string = 'form control name';
  @Input() minHeight: number = 200;
  @Input() errors: ValidationErrors | null = null;

  constructor() { }

  ngOnInit() {
  }

}
