import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { BaseWebStructureComponent } from './base-web-structure/base-web-structure.component';
import { WebDissionTierComponent } from './web-dission-tier/web-dission-tier.component';
import { WebLoadComponent } from './web-load/web-load.component';
import { SidebarDashBoardComponent } from './dashboard/sidebar-dash-board/sidebar-dash-board.component';
import { SharedModule } from '../shared/shared.module';
import { AdHostDirective } from './web-add/ad-host.directive';

@NgModule({
  declarations: [
    BaseWebStructureComponent,
    WebDissionTierComponent,
    WebLoadComponent,
    AdHostDirective,
    // SidebarDashBoardComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
  ],
  exports: [AdHostDirective]  
})
export class WebModule { }
