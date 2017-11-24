import { TestBed, inject } from '@angular/core/testing';

import { AnnonceCovoiturageService } from './annonce-covoiturage.service';

describe('AnnonceCovoiturageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnonceCovoiturageService]
    });
  });

  it('should be created', inject([AnnonceCovoiturageService], (service: AnnonceCovoiturageService) => {
    expect(service).toBeTruthy();
  }));
});
