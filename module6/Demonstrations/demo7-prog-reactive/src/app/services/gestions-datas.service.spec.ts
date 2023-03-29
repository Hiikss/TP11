import { TestBed } from '@angular/core/testing';

import { GestionsDatasService } from './gestions-datas.service';

describe('GestionsDatasService', () => {
  let service: GestionsDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionsDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
