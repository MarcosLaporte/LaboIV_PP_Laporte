import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { validUserGuard } from './valid-user.guard';

describe('validUserGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
