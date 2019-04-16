import { TestBed } from '@angular/core/testing';

import { LayoutLibService } from './layout-lib.service';

describe('LayoutLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutLibService = TestBed.get(LayoutLibService);
    expect(service).toBeTruthy();
  });
});
