import { TestBed } from '@angular/core/testing';

import { GestionPersonnesService } from './gestion-personnes.service';

describe('GestionPersonnesService', () => {
  let service: GestionPersonnesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPersonnesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
