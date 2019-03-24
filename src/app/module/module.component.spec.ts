import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgScrollCalendarComponent } from './module.component';

describe('NgScrollCalendarComponent', () => {
  let component: NgScrollCalendarComponent;
  let fixture: ComponentFixture<NgScrollCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgScrollCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgScrollCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
