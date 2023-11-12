import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
	const user = inject(AuthService).LoggedUser;
  return !!user && user.role === 'admin';
};
