import { FormGroup, FormArray, FormControl, AbstractControl } from "@angular/forms";
import { Item, WorkService } from "src/generated/graphql";

type ControlName = "activities" | "address" | "addressGroup" | "amount" | "assignedTo" | "bio" | "brand" | "category" | "city" | "comments" |
  "companyName" | "confirmPassword" | "costGuides" | "definedWorkScope" | "description" | "direction" | "displayName" | "email" | "fax" | "fileURLs"
  | "firstname" | "for" | "fullnameGroup" | "imageURL" | "imageURLs" | "installLinks" | "jobManager" | "lastname" | "leadSource" | "lineItems" | "lineWorkServices" | "location" | "logoURL"
  | "make" | "name" | "note" | "notes" | "modelNumber" | "number" | "password" | "phone" | "poNumber" | "profileURL" | "purchasePrice" | "quantity" | "referenceNumber"
  | "referenceId" | "referenceType" | "requestedWorkScope" | "requiredEmail" | "salePrice" | "serviceCategory" | "socials" | "startDate" | "state" | "status" |
  "streetAddress" | "sku" | "subCategory" | "to" | "total" | "type" | "website" | "websiteReferences" | "zipcode";

export const buildFormControl = (controlValue: string = '') => {
  return new FormControl(controlValue);
}

export const buildFormGroup = (keys: ControlName[]) => {
  const formGroup = new FormGroup({});
  keys.forEach(key => {
    formGroup.addControl(key, buildFormControl(''))
  });
  return formGroup;
};

export const authFormGroup = () => {
  const formGroup = buildFormGroup(["password", "email", "confirmPassword"]);
  return formGroup;
}

export const companyProfileFormGroup = () => {
  const formGroup = buildFormGroup(["companyName", "email", "phone", "serviceCategory", "logoURL", "fax", "socials", "website", "bio"]);
  return formGroup;
}

export const prospectFormGroup = () => {
  const formGroup = buildFormGroup(["firstname", "lastname", "displayName", "email", "phone", "type"]);
  return formGroup;
}

export const beneficiaryFormGroup = () => {
  const formGroup = buildFormGroup(["firstname", "lastname", "displayName", "email", "phone", "type"]);
  return formGroup;
}

export const customerFormGroup = () => {
  const formGroup = buildFormGroup(["firstname", "lastname", "displayName", "email", "phone", "type"]);
  return formGroup;
}

export const jobLeadFormGroup = () => {
  const formGroup = buildFormGroup(["leadSource", "status", "category", "requestedWorkScope", "referenceId"]);
  buildArrayControls(formGroup, ["imageURLs", "fileURLs"]);
  return formGroup;
}

export const jobFormGroup = () => {
  const formGroup = buildFormGroup(["status", "category", "requestedWorkScope", "definedWorkScope", "startDate", "poNumber"]);
  buildArrayControls(formGroup, ["imageURLs", "fileURLs"]);
  return formGroup;
}

export const itemFormGroup = () => {
  const formGroup = buildFormGroup(["category", "description", "name", "purchasePrice", "salePrice", "sku", "modelNumber", "make", "brand"]);
  buildArrayControls(formGroup, ["installLinks", "websiteReferences"]);
  return formGroup
}

export const workServiceFormGroup = (workService?: WorkService) => {
  const formGroup = buildFormGroup(["category", "description", "name", "salePrice", "sku", "notes"]);
  buildArrayControls(formGroup, ["costGuides", "lineItems"]);
  return formGroup;
}

export const lineWorkServiceFormGroup = (workService?: WorkService) => {
  const _workServiceFormGroup = workServiceFormGroup();
  if (workService) {
    _workServiceFormGroup.patchValue(workService);
  }
  const formGroup = buildFormGroup(["quantity"]);
  formGroup.setValue({ "quantity": 1 });
  addControls(formGroup, { "workService": _workServiceFormGroup });
  return formGroup;
}

export const lineItemFormGroup = (item?: Item) => {
  const _itemFormGroup = itemFormGroup();
  if (item) {
    _itemFormGroup.patchValue(item);
  }
  const formGroup = buildFormGroup(["quantity"]);
  formGroup.setValue({ "quantity": 1 });
  formGroup.addControl("item", _itemFormGroup);
  return formGroup;
}

export const buildArrayControls = (formGroup: FormGroup, keys: ControlName[]) => {
  keys.forEach(key => {
    addControls(formGroup, { [key]: new FormArray([]) })
  });
}

export const getFormArray = (formGroup: FormGroup, controlName: ControlName) => {
  return (formGroup.controls[controlName] as FormArray).push(buildFormControl(''));
}

export const getFormArrayAsFormControls = (formGroup: FormGroup, controlName: ControlName) => {
  return (formGroup.controls[controlName] as FormArray).controls as FormControl[];
}

export const addControls = (formGroup: FormGroup, controls: { [key: string]: AbstractControl }) => {
  Object.entries(controls).forEach(([key, value]) => {
    formGroup.addControl(key, value);
  })
}

export const buildLineItemFormGroup = () => {
  return buildFormGroup(["quantity", "name", "salePrice", "description", "total"]);
}