import { TestBed } from '@angular/core/testing';

import { GestionInformationsService } from './gestion-informations.service';

describe('GestionInformationsService', () => {
  let service: GestionInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
