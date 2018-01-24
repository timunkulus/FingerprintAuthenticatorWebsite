import { TestBed, inject } from '@angular/core/testing';

import { FingerprintService } from './fingerprint.service';

describe('FingerprintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FingerprintService]
    });
  });

  it('should be created', inject([FingerprintService], (service: FingerprintService) => {
    expect(service).toBeTruthy();
  }));
});
