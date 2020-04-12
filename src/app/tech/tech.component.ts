import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';
import { KNOWN_TECH, KnownTech } from './tech';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  public data: KnownTech;

  constructor(private _currentRouteStateService: CurrentRouteStateService) {
    _currentRouteStateService.name.next('Known Technologies');
  }

  ngOnInit() {
    this.data = KNOWN_TECH;
  }
}
