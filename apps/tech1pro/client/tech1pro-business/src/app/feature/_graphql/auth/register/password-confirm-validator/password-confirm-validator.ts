import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordConfirmValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    return (formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value) ? null : { "password-mismatch": { value: formGroup.get('confirmPassword')?.value } }
  }
}