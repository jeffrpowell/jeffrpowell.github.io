import { TestBed } from '@angular/core/testing';

import { TangramDataService } from './tangram-data.service';

describe('TangramDataService', () => {
  let service: TangramDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TangramDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
