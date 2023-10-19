import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  pageName: string;
  hobbies: string[];
  constructor(private _currentRouteStateService: CurrentRouteStateService) { 
    this.pageName = "About Me";
    _currentRouteStateService.name.next(this.pageName);
  }
  
  ngOnInit() {
    this.hobbies = [
      "board games", "singing", "piano", "puzzles", "cooking", "baking", "panoramic photography", "road biking", "skiing", "musicals", "woodworking", "hiking", "video post-production", "reading", "podcasts", "video games"];
  }

}
