import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeclassesComponent } from './freeclasses.component';

describe('FreeclassesComponent', () => {
  let component: FreeclassesComponent;
  let fixture: ComponentFixture<FreeclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
