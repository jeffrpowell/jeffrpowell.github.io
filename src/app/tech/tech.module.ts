import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from './tech.component';


@NgModule({
  declarations: [TechComponent],
  imports: [
    CommonModule,
    TechRoutingModule
  ]
})
export class TechModule { }
