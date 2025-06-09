import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TabForm } from '../../../model/tab-form';
import { buildFormControl, getFormArray, getFormArrayAsFormControls } from '../../form-util';
import { ItemFormService } from '../item-form.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
})
export class ItemFormComponent extends TabForm implements OnInit, AfterViewInit {

  itemForm!: FormGroup;
  isEditing: boolean = false;
  isTesting: boolean = true;
  installLinkControls: FormControl[] = [];
  websiteReferenceControls: FormControl[] = [];

  constructor(private itemFormSvc: ItemFormService) { 
    super();
  }

  ngOnInit() {
    this.itemForm = this.itemFormSvc.formGroup();
    this.installLinkControls = this.itemFormSvc.installLinksControl().controls as FormControl[];
    this.websiteReferenceControls = this.itemFormSvc.websiteReferencesControl().controls as FormControl[];
    // this.addInstallLinkControl();
    // this.addWebsiteReferencesControl();
  }


  addInstallLinkControl() {
    getFormArray(this.itemForm, 'installLinks');
  }

  removeInstallLinkControl(index: number) {
    this.itemFormSvc.removeInstallLinkControl(index);
  }

  addWebsiteReferencesControl() {
    getFormArray(this.itemForm, 'websiteReferences');
  }

  removeWebsiteReferenceControl(index: number) {
    this.itemFormSvc.removeWebsiteReferenceControl(index);
  }

  ngAfterViewInit(): void {
    this.activateTabs();
  }

  onSubmit() {
    console.log(this.itemForm.value);
  }

  //for testing purposes only
  addTestItem() {
    this.itemFormSvc.addTestItem();
  }

}
