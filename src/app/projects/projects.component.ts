import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private _currentRouteStateService: CurrentRouteStateService) { 
    _currentRouteStateService.name.next("Projects");
  }

  ngOnInit() {
  }

}
