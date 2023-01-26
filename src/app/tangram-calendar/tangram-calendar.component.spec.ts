import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TangramCalendarComponent } from './tangram-calendar.component';

describe('TangramCalendarComponent', () => {
  let component: TangramCalendarComponent;
  let fixture: ComponentFixture<TangramCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TangramCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TangramCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
