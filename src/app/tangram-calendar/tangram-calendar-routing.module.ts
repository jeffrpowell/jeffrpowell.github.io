import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TangramCalendarComponent } from './tangram-calendar.component';

const routes: Routes = [{ path: '', component: TangramCalendarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TangramCalendarRoutingModule { }
