import { TestBed } from '@angular/core/testing';

import { DancingBarsService } from './dancing-bars.service';

describe('DancingBarsService', () => {
  let service: DancingBarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DancingBarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
