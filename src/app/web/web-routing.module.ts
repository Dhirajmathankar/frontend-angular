import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseWebStructureComponent } from './base-web-structure/base-web-structure.component';
import { WebLoadComponent } from './web-load/web-load.component'
;
const routes: Routes = [
  {
    path: 'web',
    component: WebLoadComponent
  },
  {
    path: '',
    component: BaseWebStructureComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
