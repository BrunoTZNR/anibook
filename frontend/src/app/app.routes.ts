import { Routes } from '@angular/router';

import { usuarioRoutes }
from './features/usuarios/routes/usuario.routes';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  ...usuarioRoutes,

  {
    path: '**',
    redirectTo: 'login'
  }
];