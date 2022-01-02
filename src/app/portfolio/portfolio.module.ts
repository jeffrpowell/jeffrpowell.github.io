import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { VideoComponent } from './video/video.component';
import { RepoComponent } from './repo/repo.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    VideoComponent,
    RepoComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
