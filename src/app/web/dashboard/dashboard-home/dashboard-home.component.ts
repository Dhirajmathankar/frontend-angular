import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowcaseData } from '../product-showcase/data.model';




@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {
 selectedMenu: string | null = 'Dashboard';
showcasePageData: ShowcaseData = {
  products: [
    { id: 'products1', name: 'Products', icon: 'package', isFavorite: true  ,  subFeatures: [
        { name: 'Add Product', icon: 'plus' },
        { name: 'Manage', icon: 'settings' }
      ] },
    { id: 'products2', name: 'Oude', icon: 'shopping-cart', hasAction: true },
    { id: 'products3', name: 'Marling', icon: 'tag', isFavorite: true },
    { id: 'products4', name: 'Casts', icon: 'box', isFavorite: true }
  ],
  plugins: [
    { id: 'plugins1', name: 'Sugins', icon: 'puzzle', isFavorite: true },
    { id: 'plugins2', name: 'Plugins', icon: 'layers', hasAction: true ,  subFeatures: [
        { name: 'Add Product', icon: 'plus' },
        { name: 'Manage', icon: 'settings' }
      ]},
    { id: 'plugins3', name: 'Cochir', icon: 'settings', isFavorite: true, hasAction: true ,  subFeatures: [
        { name: 'Add Product', icon: 'plus' },
        { name: 'Manage', icon: 'settings' }
      ] },
    { id: 'plugins4', name: 'Harua', icon: 'cpu', isFavorite: true }
  ],
  nonProductionReady: [
    { id: 'nonProductionReady1', name: 'Wonmo', icon: 'alert-circle', hasAction: true },
    { id: 'nonProductionReady2', name: 'Crenention', icon: 'circle' },
    { id: 'nonProductionReady3', name: 'Marte', icon: 'star', isFavorite: true },
    { id: 'nonProductionReady4', name: 'Sleodater', icon: 'clock' }
  ]
};


  onMenuChange(menu: string) {
    this.selectedMenu = menu;
  }
}
