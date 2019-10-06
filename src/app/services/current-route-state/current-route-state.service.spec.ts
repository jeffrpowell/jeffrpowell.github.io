import { TestBed } from '@angular/core/testing';

import { CurrentRouteStateService } from './current-route-state.service';

describe('CurrentRouteStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentRouteStateService = TestBed.get(CurrentRouteStateService);
    expect(service).toBeTruthy();
  });
});
