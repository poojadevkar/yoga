import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyYogaComponent } from './why-yoga.component';

describe('WhyYogaComponent', () => {
  let component: WhyYogaComponent;
  let fixture: ComponentFixture<WhyYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
