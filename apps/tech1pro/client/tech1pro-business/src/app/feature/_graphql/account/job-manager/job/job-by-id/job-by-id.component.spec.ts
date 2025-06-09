/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobByIdComponent } from './job-by-id.component';

describe('JobByIdComponent', () => {
  let component: JobByIdComponent;
  let fixture: ComponentFixture<JobByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
