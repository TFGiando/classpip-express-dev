import { TestBed } from '@angular/core/testing';

import { CanExitCuestionarioGuardService } from './can-exit-cuestionario-guard.service';

describe('CanExitCuestionarioGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanExitCuestionarioGuardService = TestBed.inject(CanExitCuestionarioGuardService);
    expect(service).toBeTruthy();
  });
});
