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
    // AdHostDirective
  
  ],
  imports: [
    CommonModule,
    NgApexchartsModule ,
    LucideAngularModule.pick(icons),            // ✅ ngClass, ngSwitch, etc.
    FormsModule,                // ✅ Template forms
    ReactiveFormsModule,   
  ],
   exports: [
    SidebarDashBoardComponent, 
    DynamicFormComponent,
    SafeHtmlPipe,
  
  ]
})
export class SharedModule { }
