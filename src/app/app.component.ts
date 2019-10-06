import { Component } from '@angular/core';
import { CurrentRouteStateService } from './services/current-route-state/current-route-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRouteName: string;

  constructor(private _currentRouteStateService: CurrentRouteStateService) {
    this._currentRouteStateService.name.subscribe(n => this.currentRouteName = n)
  }
}
