import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('Sample4Service', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
