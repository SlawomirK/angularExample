import { TestBed } from '@angular/core/testing';

import { PreparatyService } from './preparaty.service';

describe('PreparatyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreparatyService = TestBed.get(PreparatyService);
    expect(service).toBeTruthy();
  });
});
