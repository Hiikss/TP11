import { TestBed } from '@angular/core/testing';

import { GestionInformationsService } from './gestion-informations.service';

describe('GestionInformationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionInformationsService = TestBed.get(GestionInformationsService);
    expect(service).toBeTruthy();
  });
});
