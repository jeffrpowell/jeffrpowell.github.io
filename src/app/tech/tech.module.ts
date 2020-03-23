import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from './tech.component';
import { TechBubbleChartComponent } from '../tech-bubble-chart/tech-bubble-chart.component';


@NgModule({
  declarations: [TechComponent, TechBubbleChartComponent],
  imports: [
    CommonModule,
    TechRoutingModule
  ]
})
export class TechModule { }
