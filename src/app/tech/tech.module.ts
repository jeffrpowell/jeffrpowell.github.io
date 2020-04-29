import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from './tech.component';
import { TechBubbleChartComponent } from '../tech-bubble-chart/tech-bubble-chart.component';


@NgModule({
  declarations: [TechComponent, TechBubbleChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    TechRoutingModule
  ]
})
export class TechModule { }
