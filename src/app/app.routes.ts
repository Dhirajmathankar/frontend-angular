// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login-page/login-page.component';

export const routes: Routes = [
   { path: '', component: LoginComponent },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./web/web.module').then((m) => m.WebModule),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
];