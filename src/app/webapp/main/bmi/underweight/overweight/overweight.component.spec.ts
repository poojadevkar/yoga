import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverweightComponent } from './overweight.component';

describe('OverweightComponent', () => {
  let component: OverweightComponent;
  let fixture: ComponentFixture<OverweightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverweightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
