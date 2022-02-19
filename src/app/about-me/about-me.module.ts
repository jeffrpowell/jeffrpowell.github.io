import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { ListRandomPipe } from './listRandom.pipe';
import { SentenceCasePipe } from './sentence-case.pipe';


@NgModule({
  declarations: [AboutMeComponent, ListRandomPipe, SentenceCasePipe],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
