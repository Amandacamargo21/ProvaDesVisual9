/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarImcComponent } from './listar-imc.component';

describe('ListarImcComponent', () => {
  let component: ListarImcComponent;
  let fixture: ComponentFixture<ListarImcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarImcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
