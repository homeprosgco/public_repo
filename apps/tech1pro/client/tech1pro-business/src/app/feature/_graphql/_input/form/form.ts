import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthUserResultOperationType } from "src/generated/graphql";
import { passwordConfirmValidator } from "../../auth/register/password-confirm-validator/password-confirm-validator";

export type FormGroupWithControlsFunc = () => FormGroupWithControls;
export type FormGroupWithControls = {
  form: FormGroup,
  reset: { [key: string]: AbstractControl },
  [key: string]: any
};
type ControlName = "password" | "confirmPassword" | "firstname" | "lastname" | "email" | "requiredEmail" | "displayName" |
  "fullnameGroup" | "phone" | "addressGroup" | "streetAddress" | "city" | "state" | "zipcode" | "description" | "type" |
  "address" | "companyName" | "serviceCategory" | "logoURL" | "fax" | "socials" | "website" | "bio";

const controls: Record<ControlName, AbstractControl> = {
  password: new FormControl('', Validators.required),
  confirmPassword: new FormControl(''),
  email: new FormControl(''),
  requiredEmail: new FormControl('', Validators.required),
  firstname: new FormControl(''),
  lastname: new FormControl(''),
  displayName: new FormControl(''),
  companyName: new FormControl(''),
  serviceCategory: new FormControl(''),
  logoURL: new FormControl(''),
  fax: new FormControl(''),
  socials: new FormArray([]),
  website: new FormControl(''),
  bio: new FormControl(''),
  fullnameGroup: new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  }),
  phone: new FormControl(''),
  address: new FormGroup({
    streetAddress: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl('')
  }),
  addressGroup: new FormGroup({
    streetAddress: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl('')
  }),
  description: new FormControl(''),
  streetAddress: new FormControl(''),
  city: new FormControl(''),
  state: new FormControl(''),
  zipcode: new FormControl(''),
  type: new FormControl('')
};

const addressFormGroup = () => {
  return new FormGroup({
    streetAddress: controls["streetAddress"],
    city: controls["city"],
    state: controls["state"],
    zipcode: controls["zipcode"],
  });
}

export const authForm: (operationType?: AuthUserResultOperationType) => FormGroup = (operationType = AuthUserResultOperationType.SigninAuthUser) => {
  const form = new FormGroup({
    password: controls['password'],
    email: controls['requiredEmail'],
    confirmPassword: controls['confirmPassword']
  });
  if (operationType === AuthUserResultOperationType.RegisterAuthUser) {
    form.addValidators(passwordConfirmValidator)
  }
  return form;
}

export const companyProfileForm = () => {
  const companyProfileControls = {
    companyName: controls["companyName"],
    email: controls["email"],
    phone: controls["phone"],
    seviceCategory: controls["serviceCategory"],
    logoURL: controls["logoURL"],
    fax: controls["fax"],
    socials: controls["socials"],
    website: controls["website"],
    bio: controls["bio"],
    address: addressFormGroup(),
  };
}

export const prospectForm: FormGroupWithControlsFunc = () => {
  const prospectControls = {
    firstname: controls["firstname"],
    lastname: controls["lastname"],
    displayName: controls["displayName"],
    email: controls["email"],
    phone: controls["phone"],
    address: addressFormGroup(),
    type: controls["type"]
  }
  const form = new FormGroup(prospectControls);

  const formControls = getAbstractControls(form, ["firstname", "lastname", "email", "phone", "displayName", "type"]);
  const addressControls = getAbstractControls((form.controls["address"] as FormGroup), ["streetAddress", "city", "state", "zipcode"]);

  return {
    form,
    ...formControls,
    ...addressControls,
    "address": prospectControls.address,
    reset: prospectControls
  };

}

export const beneficiaryForm = () => {
  const beneficiaryControls = {
    firstname: controls["firstname"],
    lastname: controls["lastname"],
    displayName: controls["displayName"],
    email: controls["email"],
    phone: controls["phone"],
    address: addressFormGroup(),
    type: controls["type"]
  }
  const form = new FormGroup(beneficiaryControls);

  const formControls = getAbstractControls(form, ["firstname", "lastname", "email", "phone", "displayName", "type"]);
  const addressControls = getAbstractControls((form.controls["address"] as FormGroup), ["streetAddress", "city", "state", "zipcode"]);

  addRequiredValidator([formControls["displayName"]]);

  return {
    form,
    ...formControls,
    ...addressControls,
    "address": beneficiaryControls.address,
    reset: beneficiaryControls
  };

}

export const jobLeadForm = () => {
  const form = new FormGroup({
    customer: controls['fullnameGroup'],
    email: controls['email'],
    phone: controls['phone'],
    address: controls['addressGroup'],
    requestedScope: controls['description']
  });

  const firstnameControl = nestedFormControl(form, 'customer', 'firstname');
  const lastnameControl = nestedFormControl(form, 'customer', 'lastname');
  const emailControl = form.controls["email"] as AbstractControl;
  const phoneControl = form.controls["phone"] as AbstractControl;

  const streetAddressControl = nestedFormControl(form, 'address', 'streetAddress');
  const cityControl = nestedFormControl(form, 'address', 'city');
  const stateControl = nestedFormControl(form, 'address', 'state');
  const zipcodeControl = nestedFormControl(form, 'address', 'zipcode');

  const requestedScopeControl = form.controls["requestedScope"] as AbstractControl;

  const requiredControls = [
    firstnameControl,
    lastnameControl,
    stateControl,
    streetAddressControl,
    cityControl,
    zipcodeControl,
    phoneControl,
    requestedScopeControl
  ];

  addRequiredValidator(requiredControls);

  requestedScopeControl.setValue('Describe the details of your project.')

  return {
    form,
    "firstname": firstnameControl,
    "lastname": lastnameControl,
    "email": emailControl,
    "phone": phoneControl,
    "streetAddress": streetAddressControl,
    "city": cityControl,
    "state": stateControl,
    "zipcode": zipcodeControl,
    "requestedScope": requestedScopeControl
  };
};

function getAbstractControls(form: FormGroup, controlKeys: ControlName[]) {
  const abstractControls: { [key: string]: AbstractControl } = {}
  controlKeys.forEach(key => {
    abstractControls[key] = form.controls[key] as AbstractControl
  });
  return abstractControls as Record<ControlName, AbstractControl>;
}

export function nestedFormControl(form: FormGroup, formGroupName: string, FormControlName: ControlName) {
  return form.controls[formGroupName].get(FormControlName) as AbstractControl;
}

export function allControlsValid(controls: AbstractControl[]) {
  return controls.every(control => control.valid);
}

function addRequiredValidator(controls: AbstractControl[]) {
  for (const control of controls) {
    control?.addValidators(Validators.required);
  }
}
