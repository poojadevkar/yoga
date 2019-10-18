import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaitComponent } from './dait.component';

describe('DaitComponent', () => {
  let component: DaitComponent;
  let fixture: ComponentFixture<DaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
