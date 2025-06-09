import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProspectCrudService } from 'src/app/feature/_graphql/_service/prospect.crud-service';
import { Select2Option } from 'src/app/feature/_graphql/_type/select2-option.type';
import { Prospect } from 'src/generated/graphql';

@Component({
  selector: 'app-prospect-select',
  template: `<app-select2-form-group [label]="'Select Prospect'" [options]="prospectOptions" (selection)="onProspectSelected($event)"></app-select2-form-group>`,
})
export class ProspectSelectComponent implements OnInit, OnDestroy {

  prospectOptionsSub!: Subscription;
  prospectOptions: Select2Option<Prospect>[] = [];
  @Output() prospect: EventEmitter<Select2Option<Prospect>> = new EventEmitter();

  constructor(private prospectCrudSvc: ProspectCrudService) { }

  ngOnInit() {
    this.prospectOptionsSub = this.prospectCrudSvc.prospectSelect2Options$().subscribe( prospectOptions => this.prospectOptions = prospectOptions);
  }

  ngOnDestroy(): void {
    this.prospectOptionsSub.unsubscribe();
  }

  onProspectSelected(prospect: Select2Option<Prospect>) {
    this.prospect.emit(prospect);
  }

}
