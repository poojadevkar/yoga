import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderweightComponent } from './underweight.component';

describe('UnderweightComponent', () => {
  let component: UnderweightComponent;
  let fixture: ComponentFixture<UnderweightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderweightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
