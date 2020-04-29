import { Component, OnInit } from '@angular/core';
import { CurrentRouteStateService } from '../services/current-route-state/current-route-state.service';
import { KNOWN_TECH, KnownTech, TechValue } from './tech';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  public data: KnownTech;
  public searchTerm: TechValue;
  public zoomToTerm: TechValue;

  constructor(private _currentRouteStateService: CurrentRouteStateService) {
    _currentRouteStateService.name.next('Known Technologies');
  }

  ngOnInit() {
    this.data = KNOWN_TECH;
    this.searchTerm = {name: "", value: 0};
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.data.children
        .map(category => category.children)
        .reduce((acc, val) => acc.concat(val), [])
        .filter(tech => tech.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  searchResultFormatter = (result: TechValue) => result.name;

  seekTech (event: NgbTypeaheadSelectItemEvent) {
    this.zoomToTerm = event.item;
  }
}
