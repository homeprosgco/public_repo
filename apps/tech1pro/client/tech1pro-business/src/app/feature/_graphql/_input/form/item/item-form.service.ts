import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { item } from 'src/app/test/query-graphql';
import { Item } from 'src/generated/graphql';
import { ItemCrudService } from '../../../_service/item.crud.service';
import { buildArrayControls, buildFormGroup, getFormArray, getFormArrayAsFormControls } from '../form-util';

const createItem = (item: Item) => {
  return {
    category: item.category || '',
    description: item.description || '',
    websiteReferences: item.websiteReferences || '',
    name: item.name || '',
    purchasePrice: item.purchasePrice || '',
    salePrice: item.salePrice || '',
    sku: item.sku || '',
    modelNumber: item.modelNumber || '',
    brand: item.brand || '',
    make: item.make || '',
    installLinks: item.installLinks || '',
    // orderLinks: item.orderLinks || '',
  } as Partial<Item>;
}

@Injectable({
  providedIn: 'root'
})
export class ItemFormService {

  private _isSubmitted = false;
  isEditing: boolean = false;
  #formGroup!: FormGroup;

  constructor(private itemCrudSvc: ItemCrudService) { }

  formGroup() {
    this.#formGroup = this.itemForm;
    return this.#formGroup;
  }

  get itemForm() {
    const formGroup = buildFormGroup(["category", "description", "name", "purchasePrice", "salePrice", "sku", "modelNumber", "make", "brand"]);
    buildArrayControls(formGroup, ["installLinks", "websiteReferences"]);
    return formGroup;
  }

  installLinksControl() {
    return this.#formGroup.controls["installLinks"] as FormArray;
  }

  addInstallLinkControl() {
    getFormArray(this.#formGroup, 'installLinks');
  }

  removeInstallLinkControl(index: number) {
    this.installLinksControl().removeAt(index);
  }

  websiteReferencesControl() {
    return this.#formGroup.controls["websiteReferences"] as FormArray;
  }

  addWebsiteReferencesControl() {
    getFormArray(this.#formGroup, 'websiteReferences');
  }

  removeWebsiteReferenceControl(index: number) {
    this.websiteReferencesControl().removeAt(index);
  }

  addTestItem() {
    const _item = createItem(item() as Item);
    console.log(_item);
    console.log(_item.installLinks?.length);
    _item.installLinks?.forEach( link => this.addInstallLinkControl());
    _item.websiteReferences?.forEach( referenct => this.addWebsiteReferencesControl());
    
    console.log(_item.websiteReferences?.length);
    this.#formGroup.setValue(_item as Item)
  }

  formValue(formGroup: FormGroup) {
    console.log(formGroup.valid);
    return this.itemForm.value;
  }

}
