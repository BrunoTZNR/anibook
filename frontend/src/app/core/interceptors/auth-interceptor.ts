import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

import { StorageService } from '../services/storage/storage';

export const authInterceptor:
HttpInterceptorFn = (req, next) => {

  const storage = inject(StorageService);

  const token = storage.getItem('token');

  if (token) {

    req = req.clone({

      setHeaders: {

        Authorization:
          `Bearer ${token}`
      }
    });
  }

  return next(req);
};