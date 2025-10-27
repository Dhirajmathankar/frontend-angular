// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login-page/login-page.component';

export const routes: Routes = [
   { path: 'noraml-user',
     loadChildren: () => import('./normal-user/normal-user.module').then(m => m.NormalUserModule) 
   },
   { path: 'login', component: LoginComponent },
   {
        path: 'dashboard',
        loadChildren: () =>
          import('./web/web.module').then((m) => m.WebModule),
      },
      { path: '', redirectTo: 'noraml-user', pathMatch: 'full' }
];