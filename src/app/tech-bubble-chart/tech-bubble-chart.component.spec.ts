import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBubbleChartComponent } from './tech-bubble-chart.component';

describe('TechBubbleChartComponent', () => {
  let component: TechBubbleChartComponent;
  let fixture: ComponentFixture<TechBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
