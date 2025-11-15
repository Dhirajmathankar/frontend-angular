import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipes/safe-html.pipe'; // <-- Apna pipe yahan import karo

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SidebarDashBoardComponent } from '../web/dashboard/sidebar-dash-board/sidebar-dash-board.component';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import * as allIcons from 'lucide';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AdHostDirective } from '../web/web-add/ad-host.directive';
import { VendorCardComponent } from './vendor-card/vendor-card.component';
import { AdminVendorsListComponent } from './admin-vendors-list/admin-vendors-list.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { UserProfileComponent } from '../web/user-profile/user-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Crucial for mat-icon
import { MatTabsModule } from '@angular/material/tabs'; // Crucial for mat-tab-group

const icons = Object.entries(allIcons).reduce((acc, [key, value]) => {
  if (typeof value === 'object') {
    acc[key] = value as LucideIconData;
  }
  return acc;
}, {} as Record<string, LucideIconData>);


@NgModule({
  declarations: [
    
    SidebarDashBoardComponent,
    SafeHtmlPipe ,
    DynamicFormComponent,
    VendorCardComponent,
    AdminVendorsListComponent,
    SearchFilterComponent,
    UserProfileComponent
    // AdHostDirective
  
  ],
  imports: [
    CommonModule,
    NgApexchartsModule ,
    LucideAngularModule.pick(icons),            // ✅ ngClass, ngSwitch, etc.
    FormsModule,                // ✅ Template forms
    ReactiveFormsModule, 

    // materials node module 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
   exports: [
    SidebarDashBoardComponent, 
    DynamicFormComponent,
    SafeHtmlPipe,
    VendorCardComponent,
    AdminVendorsListComponent,
    SearchFilterComponent,
    UserProfileComponent,


    // materials node module
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class SharedModule { }
