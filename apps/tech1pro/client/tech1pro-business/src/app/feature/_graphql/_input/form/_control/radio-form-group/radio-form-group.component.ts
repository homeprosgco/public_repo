import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-radio-form-group',
  template: `
  <div class="pb-4">
    <div class="form-group" [formGroup]="form">
      <label class="form-label">{{ label }}</label>
      <ul class="custom-control-group g-3 align-center">
        <li *ngFor="let radioInput of radioInputs">
            <div class="custom-control custom-radio">
                <input [appRadioFormGroup]="radioInput.value"
                type="radio" 
                [id]="radioInput.inputId" 
                class="custom-control-input" 
                [formControlName]="controlName" 
                [attr.name]="controlName" 
                [value]="radioInput.value"
                (radioValue)="onRadioValue($event)"
                />
                <label class="custom-control-label" [attr.for]="radioInput.inputId">{{ radioInput.label}}</label>
            </div>
        </li>
      </ul>
    </div>
  </div>
  `,
})
export class RadioFormGroupComponent {

  @Input() label: string = 'set input Label';
  @Input() groupName: string = 'set radio group name';
  @Input() controlName: string = 'controlName';
  @Input() form!: FormGroup;
  @Input() isRequired: boolean = false
  @Input() radioInputs: { label: string, inputId: string, checked: boolean, value: any }[] = [];
  @Output() radioValue: EventEmitter<string> = new EventEmitter();


  onRadioValue($event: any) {
    this.radioValue.emit($event);
  }
}