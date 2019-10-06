import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private _currentRouteStateService: CurrentRouteStateService) { 
    _currentRouteStateService.name.next("Blog");
  }

  ngOnInit() {
  }

}
