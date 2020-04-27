import { Component } from '@angular/core';
import { CurrentRouteStateService } from './services/current-route-state/current-route-state.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRouteName: string;
  currentYear: number;

  constructor(private _currentRouteStateService: CurrentRouteStateService) {
    this._currentRouteStateService.name.subscribe(n => this.currentRouteName = n)
    this.currentYear = moment().year();
  }
}
