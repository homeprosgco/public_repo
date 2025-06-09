import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProspectType } from 'src/generated/graphql';
import { TabForm } from '../../../model/tab-form';
import { ProspectFormService } from '../prospect-form.service';

@Component({
  selector: 'app-prospect-form',
  templateUrl: './prospect-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProspectFormComponent extends TabForm implements OnInit, AfterViewInit, OnDestroy {

  prospectTypes: { label: string, inputId: string, checked: boolean, value: ProspectType }[] = [
    {
      label: "Individual",
      inputId: "prospect-indiviual",
      checked: true,
      value: ProspectType.Individual
    },
    {
      label: "Company",
      inputId: "prospect-company",
      checked: false,
      value: ProspectType.Company
    }
  ];
  isEditing: boolean = false;
  isTesting: boolean = true;

  prospectForm!: FormGroup
  addressForm!: FormGroup;
  postFormDataSub!: Subscription;

  constructor(private prospectFormSvc: ProspectFormService, private activatedRoute: ActivatedRoute) {
    super();
    const prospectId = this.activatedRoute.snapshot.params["prospectId"];
    console.log(prospectId);
    if (prospectId) {
      this.prospectFormSvc.editProspect(prospectId);
    }

  }

  onProspectType($event: any) {
    this.prospectFormSvc.onProspectType($event);
  }

  ngOnInit() {
    this.isEditing = this.prospectFormSvc.isEditing;
    this.prospectForm = this.prospectFormSvc.formGroup();
    this.addressForm = this.prospectFormSvc.addressFormGroup();
  }

  ngAfterViewInit(): void {
    this.activateTabs();
  }

  onSubmit() {
    console.log(this.prospectFormSvc.formValue);
    this.postFormDataSub = this.prospectFormSvc.postProspect();

  }

  ngOnDestroy(): void {
    if (this.postFormDataSub) {
      this.postFormDataSub.unsubscribe();
      console.log('unsubscribed from prospect post form data');
    }
  }

  addTestProspect() {
    this.prospectFormSvc.addTestPropsect();
  }

}
