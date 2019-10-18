import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfteryogaComponent } from './afteryoga.component';

describe('AfteryogaComponent', () => {
  let component: AfteryogaComponent;
  let fixture: ComponentFixture<AfteryogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfteryogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfteryogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
