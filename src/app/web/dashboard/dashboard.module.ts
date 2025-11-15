import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ReportAutomationComponent } from './report-automation/report-automation.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SidebarDashBoardComponent } from './sidebar-dash-board/sidebar-dash-board.component';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import * as allIcons from 'lucide';
import { HeaderMainComponent } from './header-main/header-main.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ✅ सिर्फ icons filter करना
const icons = Object.entries(allIcons).reduce((acc, [key, value]) => {
  if (typeof value === 'object') {
    acc[key] = value as LucideIconData;
  }
  return acc;
}, {} as Record<string, LucideIconData>);



@NgModule({
  declarations: [
    DashboardHomeComponent,
    ReportAutomationComponent,
    // SidebarDashBoardComponent,
    HeaderMainComponent,
    StatsCardComponent,
    DashboardGridComponent,
    ProjectsTableComponent,
    LatestUpdatesComponent,
    ProductShowcaseComponent,
    ProductPageComponent,
    VendorRegisterComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule ,
    LucideAngularModule.pick(icons),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
