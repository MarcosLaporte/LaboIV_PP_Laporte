import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const validUserGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const user = inject(AuthService).LoggedUser;
  return !!user && user.isValid;
};
