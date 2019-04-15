import { TestBed } from '@angular/core/testing';

import { Sample1LibService } from './sample1-lib.service';

describe('Sample1LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sample1LibService = TestBed.get(Sample1LibService);
    expect(service).toBeTruthy();
  });
});
