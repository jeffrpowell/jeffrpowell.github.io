import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TangramCalendarRoutingModule } from './tangram-calendar-routing.module';
import { TangramCalendarComponent } from './tangram-calendar.component';
import { ColorTangramPipe } from './color-tangram.pipe';

@NgModule({
  declarations: [
    TangramCalendarComponent,
    ColorTangramPipe
  ],
  imports: [
    CommonModule,
    TangramCalendarRoutingModule
  ]
})
export class TangramCalendarModule { }
