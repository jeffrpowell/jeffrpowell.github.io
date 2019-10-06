import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private _currentRouteStateService: CurrentRouteStateService) { 
    _currentRouteStateService.name.next("About Me");
  }

  ngOnInit() {
  }

}
