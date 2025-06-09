import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-password-control-input',
  template: `
  <div class="pb-4">
    <div class="form-group" [formGroup]="form">
      <div class="form-label-group">
        <label class="form-label" for="password">{{ label }}</label>
        <a *ngIf="showForgotCode" class="link link-primary link-sm" href="/demo1/pages/auths/auth-reset-v2.html">Forgot Code?</a>
      </div>
      <div class="form-control-wrap">
        <a href="#" class="form-icon form-icon-right passcode-switch lg"
          data-target="password">
          <em class="passcode-icon icon-show icon ni ni-eye"></em>
          <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
        </a>
        <input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your passcode" formControlName="password">
        <span *ngIf="errors && errors?.['required']" id="password-error" class="invalid">This field is required.</span>
      </div>
    </div>
  </div>
  `,
})
export class PasswordControlComponent {

  @Input() form!: FormGroup;
  @Input() showForgotCode: boolean = false;
  @Input() errors: ValidationErrors | null = null;
  @Input() label: string = 'Password';

}
