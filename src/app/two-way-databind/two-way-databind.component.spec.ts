/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwoWayDatabindComponent } from './two-way-databind.component';

describe('TwoWayDatabindComponent', () => {
  let component: TwoWayDatabindComponent;
  let fixture: ComponentFixture<TwoWayDatabindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDatabindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDatabindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
