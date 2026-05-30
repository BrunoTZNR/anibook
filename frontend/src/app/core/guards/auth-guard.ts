import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

import { StorageService }from '../services/storage/storage';

export const authGuard:
CanActivateFn = () => {

  const router = inject(Router);

  const storage = inject(StorageService);

  const token = storage.getItem('token');

  if (token) {
    return true;
  }

  router.navigate(['/login']);

  return false;
};