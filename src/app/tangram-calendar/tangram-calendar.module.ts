import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TangramCalendarComponent } from './tangram-calendar.component';
import { TangramCalendarRoutingModule } from './tangram-calendar-routing.module';



@NgModule({
  declarations: [
    TangramCalendarComponent
  ],
  imports: [
    CommonModule,
    TangramCalendarRoutingModule
  ]
})
export class TangramCalendarModule { }
