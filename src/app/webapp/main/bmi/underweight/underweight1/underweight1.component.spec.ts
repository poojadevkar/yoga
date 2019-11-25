import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Underweight1Component } from './underweight1.component';

describe('Underweight1Component', () => {
  let component: Underweight1Component;
  let fixture: ComponentFixture<Underweight1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Underweight1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Underweight1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
