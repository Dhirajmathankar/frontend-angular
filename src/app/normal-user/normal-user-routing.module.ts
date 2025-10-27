import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// Define the routes for the normal user feature
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalUserRoutingModule { }