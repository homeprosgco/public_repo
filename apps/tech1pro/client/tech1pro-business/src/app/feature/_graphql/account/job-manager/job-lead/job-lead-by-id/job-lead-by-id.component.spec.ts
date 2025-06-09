/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobLeadByIdComponent } from './job-lead-by-id.component';

describe('JobLeadByIdComponent', () => {
  let component: JobLeadByIdComponent;
  let fixture: ComponentFixture<JobLeadByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobLeadByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobLeadByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
