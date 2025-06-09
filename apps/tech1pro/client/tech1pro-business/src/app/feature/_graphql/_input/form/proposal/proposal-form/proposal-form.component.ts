import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TabForm } from '../../../model/tab-form';
import { getFormArray, getFormArrayAsFormControls } from '../../form-util';
import { ProposalFormService } from '../proposal-form.service';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
})
export class ProposalFormComponent extends TabForm implements OnInit, AfterViewInit {

  proposalForm!: FormGroup
  addressForm!: FormGroup;
  lineWorkServiceControls: FormControl[] = [];

  constructor(private proposalFormSvc: ProposalFormService) { 
    super();
  }

  ngOnInit() {
    this.proposalForm = this.proposalFormSvc.proposalForm;
    this.addressForm = this.proposalFormSvc.addressFormGroup;
    this.lineWorkServiceControls = getFormArrayAsFormControls(this.proposalForm, 'lineWorkServices');
    this.addLineWorkServiceControl();
  }

  addLineWorkServiceControl() {
    getFormArray(this.proposalForm, 'lineWorkServices');
  }

  ngAfterViewInit(): void {
    this.activateTabs();
  }

  onSubmit() {
    console.log(this.proposalForm.value);
  }

}
