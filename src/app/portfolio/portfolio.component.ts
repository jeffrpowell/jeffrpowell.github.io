import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';
import { PORTFOLIO_REPOS, PORTFOLIO_VIDEOS, PortfolioRepo, PortfolioVideo } from './portfolio-list';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public repos: PortfolioRepo[];
  public videos: PortfolioVideo[];
  
  constructor(private _currentRouteStateService: CurrentRouteStateService) {
    _currentRouteStateService.name.next('Portfolio');
  }

  ngOnInit(): void {
    this.repos = PORTFOLIO_REPOS;
    this.videos = PORTFOLIO_VIDEOS;
  }

}
