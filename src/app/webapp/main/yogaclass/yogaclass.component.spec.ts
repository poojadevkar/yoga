import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaclassComponent } from './yogaclass.component';

describe('YogaclassComponent', () => {
  let component: YogaclassComponent;
  let fixture: ComponentFixture<YogaclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
