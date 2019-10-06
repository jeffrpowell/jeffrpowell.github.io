import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  constructor(private _currentRouteStateService: CurrentRouteStateService) { 
    _currentRouteStateService.name.next("Known Technologies");
  }

  ngOnInit() {
  }

}
