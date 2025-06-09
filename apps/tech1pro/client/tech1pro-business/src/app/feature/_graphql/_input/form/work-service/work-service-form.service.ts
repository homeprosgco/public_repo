import { Injectable } from '@angular/core';
import { addControls, buildArrayControls, buildFormGroup, workServiceFormGroup } from '../form-util';

@Injectable({
  providedIn: 'root'
})
export class WorkServiceFormService {

  constructor() { }

  get workServiceForm() {
    return workServiceFormGroup();
  }

  get formValue() {
    return this.workServiceForm.value;
  }

}
