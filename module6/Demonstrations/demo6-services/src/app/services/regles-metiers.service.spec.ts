import { TestBed } from '@angular/core/testing';

import { ReglesMetiersService } from './regles-metiers.service';

describe('ReglesMetiersService', () => {
  let service: ReglesMetiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglesMetiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
