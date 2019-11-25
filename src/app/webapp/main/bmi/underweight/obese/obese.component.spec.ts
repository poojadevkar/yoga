import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObeseComponent } from './obese.component';

describe('ObeseComponent', () => {
  let component: ObeseComponent;
  let fixture: ComponentFixture<ObeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
