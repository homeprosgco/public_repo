import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-array-form-group',
  template: `
  <div [formGroup]="form">
    <label class="form-label" [attr.for]="inputId">{{ label }} <span *ngIf="isRequired" class="text-danger">*</span></label>
    <ng-container [formArrayName]="arrayFormName">
      <ng-container *ngFor="let arrayForm of arrayFormControls; let i = index">
        <div class="row g-3 align-center mb-2">
          <div class="col-10">
            <div class="form-group" >
              <div class="form-control-wrap">
                <input [type]="inputType" class="form-control" [id]="inputId + '' + i" [placeholder]="placeholder" [formControl]="arrayForm">
              </div>
            </div>
            <span *ngIf="arrayForm.errors && arrayForm.errors?.['required']" id="text-error" class="invalid">This field is required.</span>
          </div>
          <div class="col-2">
            <div class="d-flex justify-end">
              <a href="#" (click)="$event.preventDefault(); removeArrayControl(i)">
                <em class="icon ni ni-cross"></em>
              </a>
            </div>
          </div>
        </div>
        
      </ng-container>
    </ng-container>
  </div>
  `,
})
export class ArrayFormGroupComponent implements OnInit {

  @Input() arrayFormName = 'set array form name';
  @Input() arrayFormControls: FormControl[] = [];
  @Input() label: string = 'set input Label';
  @Input() inputId: string = "input id";
  @Input() placeholder: string = '';
  @Input() inputType: string = 'text';
  @Input() controlName: string = 'controlName';
  @Input() form!: FormGroup;
  @Input() errors: ValidationErrors | null = null;
  @Output() onClick: EventEmitter<undefined> = new EventEmitter();
  @Output() removeControl: EventEmitter<number> = new EventEmitter();
  @Input() isRequired: boolean = false

  constructor() { }

  ngOnInit() {
  }

  removeArrayControl(index: number) {
    this.removeControl.emit(index);
  }

}
