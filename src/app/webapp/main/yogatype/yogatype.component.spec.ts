import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogatypeComponent } from './yogatype.component';

describe('YogatypeComponent', () => {
  let component: YogatypeComponent;
  let fixture: ComponentFixture<YogatypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogatypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
