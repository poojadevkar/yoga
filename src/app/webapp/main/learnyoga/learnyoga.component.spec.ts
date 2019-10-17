import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnyogaComponent } from './learnyoga.component';

describe('LearnyogaComponent', () => {
  let component: LearnyogaComponent;
  let fixture: ComponentFixture<LearnyogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnyogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnyogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
