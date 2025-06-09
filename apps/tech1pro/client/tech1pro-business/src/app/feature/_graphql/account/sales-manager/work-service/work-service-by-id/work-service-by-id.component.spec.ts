/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorkServiceByIdComponent } from './work-service-by-id.component';

describe('WorkServiceByIdComponent', () => {
  let component: WorkServiceByIdComponent;
  let fixture: ComponentFixture<WorkServiceByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkServiceByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkServiceByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
