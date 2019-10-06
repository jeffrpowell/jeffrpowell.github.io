import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  pageName: string;
  constructor(private _currentRouteStateService: CurrentRouteStateService) { 
    this.pageName = "About Me";
    _currentRouteStateService.name.next(this.pageName);
  }

  ngOnInit() {
  }

}
