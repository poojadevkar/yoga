import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeyogaComponent } from './beforeyoga.component';

describe('BeforeyogaComponent', () => {
  let component: BeforeyogaComponent;
  let fixture: ComponentFixture<BeforeyogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeyogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeyogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
