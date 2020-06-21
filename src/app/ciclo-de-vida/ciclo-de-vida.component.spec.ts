/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CicloDeVidaComponent } from './ciclo-de-vida.component';

describe('CicloDeVidaComponent', () => {
  let component: CicloDeVidaComponent;
  let fixture: ComponentFixture<CicloDeVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloDeVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
