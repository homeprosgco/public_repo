import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TabForm } from '../../../model/tab-form';
import { buildFormControl, getFormArray, getFormArrayAsFormControls } from '../../form-util';
import { WorkServiceFormService } from '../work-service-form.service';

@Component({
  selector: 'app-workService-form',
  templateUrl: './work-service-form.component.html',
})
export class WorkServiceFormComponent extends TabForm implements OnInit, AfterViewInit {

  workServiceForm!: FormGroup
  costGuideControls: FormControl[] = [];
  lineItemControls: FormControl[] = [];

  constructor(private workServiceFormSvc: WorkServiceFormService) { 
    super();
  }

  ngOnInit() {
    this.workServiceForm = this.workServiceFormSvc.workServiceForm;
    this.costGuideControls = getFormArrayAsFormControls(this.workServiceForm, 'costGuides');
    this.lineItemControls = getFormArrayAsFormControls(this.workServiceForm, 'lineItems');
    this.addCostGuideLinkControl();
    this.addLineItemControl();
  }

  addCostGuideLinkControl() {
    getFormArray(this.workServiceForm, 'costGuides');
  }

  addLineItemControl() {
    getFormArray(this.workServiceForm, 'lineItems');
  }

  ngAfterViewInit(): void {
    this.activateTabs();
  }

  onSubmit() {
    console.log(this.workServiceForm.value);
  }

}
