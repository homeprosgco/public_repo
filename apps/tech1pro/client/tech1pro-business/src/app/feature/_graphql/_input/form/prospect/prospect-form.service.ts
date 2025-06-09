import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Observer, Subscription } from 'rxjs';
import { prospectForm } from 'src/app/feature/_graphql/_input/form/form';
import { Address, Prospect} from 'src/generated/graphql';
import { ProspectCrudService } from '../../../_service/prospect.crud-service';
import { buildFormGroup } from '../form-util';
import { createAddress } from '../../../../../_lib/util/util';
import { prospect } from '../../../../../test/query-graphql';


const createProspect = (prospect: Prospect) => {
  return {
    address: createAddress((prospect.address as Address)),
    displayName: prospect.displayName,
    email: prospect.email,
    firstname: prospect.firstname,
    lastname: prospect.lastname,
    phone: prospect.phone,
    type: prospect.type
  } as Partial<Prospect>;
}

@Injectable({
  providedIn: 'root'
})
export class ProspectFormService {

  private _isSubmitted = false;
  isEditing = false;
  #formGroup!: FormGroup;
  #editingProspectId: string | null = null;

  constructor(
    private prospectCrudSvc: ProspectCrudService
  ) { }

  formGroup() {
    this.#formGroup = this.prospectForm;
    return this.#formGroup;
  }

  editProspect(prospectId: string) {
    this.#editingProspectId = prospectId;
    this.isEditing = true;
    console.log(prospectId);
    this.prospectCrudSvc.prospectById(prospectId).subscribe((prospect) => {
      console.log(createProspect((prospect as Prospect)));
      this.#formGroup.setValue(createProspect((prospect as Prospect)));
    })
  }

  addressFormGroup() {
    return this.#formGroup.controls["address"] as FormGroup;
  }

  get #prospectForm() {
    return prospectForm();
  }

  get prospectForm() {
    const formGroup = buildFormGroup(["firstname", "lastname", "displayName", "email", "phone", "type"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    formGroup.addControl("address", addressFormGroup);
    return formGroup;
  }

  get addressForm() {
    return this.#prospectForm["address"] as FormGroup;
  }

  get firstname(): AbstractControl {
    return this.#prospectForm["firstname"];
  }

  get lastname(): AbstractControl {
    return this.#prospectForm["lastname"];
  }

  get displayName(): AbstractControl {
    return this.#prospectForm["displayName"];
  }

  get prospectType(): AbstractControl {
    return this.#prospectForm["type"];
  }

  get isSubmitted() {
    return this._isSubmitted;
  }

  #cancelSubmission() {
    this._isSubmitted = false;
    this.prospectForm.reset(this.#prospectForm.reset);
  }

  onProspectType(type: any) {
    this.prospectType.setValue(type);
  }

  #onSubmit() {
    this._isSubmitted = true;
    console.log(this.firstname.valid);
    console.log(this.lastname.valid);
    console.log(this.displayName.valid);
    return this.prospectForm.valid;
  }

  postProspect(): Subscription {
    let sub = new Subscription();
    if (this.#onSubmit()) {
      console.log(this.formValue);
      if (!this.isEditing) {
        sub = this.prospectCrudSvc.addProspect(this.formValue).subscribe(this.#submitFormObserver());
      } else {
        if (this.#editingProspectId)
          sub = this.prospectCrudSvc.updateProspsect(this.#editingProspectId, this.formValue).subscribe(this.#submitFormObserver);
      }
    }
    return sub;
  }

  get formValue() {
    return this.#formGroup.value as Prospect;
  }

  #submitFormObserver(): Observer<any> {
    return {
      next: (_: any) => {
        console.log(this.formValue)
        this.#formGroup.reset({ ...this.prospectForm.value });
      },
      error: (error) => console.log(error),
      complete: () => { }
    };
  }

  addTestPropsect() {
    this.#formGroup.setValue(createProspect((prospect() as Prospect)));
  }

}
