import { inject } from '@angular/core';
import { AuthGmailService } from './../_services/auth-gmail.service';
import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = inject(AuthGmailService).isAuthenticated();
  if (!isAuthenticated) {
    return false;
  }
  return true;
};
