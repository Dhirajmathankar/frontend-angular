import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-dash-board',
  templateUrl: './sidebar-dash-board.component.html',
  styleUrls: ['./sidebar-dash-board.component.css']
})
export class SidebarDashBoardComponent {
 // You can manage the active link state here
  activeLink = 'Dashboard';
  @Output() menuSelected = new EventEmitter<string>();

  // Navigation items can be stored in an array for easy management
  navLinks = [
    { name: 'Dashboard', tabName:"Dashboard", icon: 'layout-dashboard' }, 
    { name: 'Product', tabName:"Product", icon: 'shopping-bag' },
     { name: 'Product Old', tabName:"Product Old", icon: 'shopping-basket' },
    { name: 'Vendor',  tabName:"Vendor", icon: 'layout' },
    { name: 'User', tabName:"User", icon: 'layout' },
    { name: 'Vendor-info', tabName:"Vendor-info", icon: 'layout' },
    { name: 'UI Element', tabName:"UI Element", icon: 'box' },
    { name: 'Basic', tabName:"Basic", icon: 'layers' },
    { name: 'Forms & Table', tabName:"Forms & Table",  icon: 'edit-3' },
    { name: 'Bootstrap table', tabName:"Bootstrap table", icon: 'table' },
    { name: 'Chart & Maps', tabName:"Dashboard", icon: 'bar-chart-2' },
    { name: 'Chart', tabName:"Dashboard", icon: 'pie-chart' },
    { name: 'Maps',tabName:"Dashboard", icon: 'map' },
    { name: 'Pages', tabName:"Dashboard", icon: 'file-text' },
    { name: 'Authentication', tabName:"Dashboard", icon: 'user-check' },
    { name: 'Sample Page', tabName:"Dashboard", icon: 'file' },
  ];

  constructor() { }


  

  SelectMenuOptionProfile(name: string) {
    this.menuSelected.emit(name); // Emit to parent
  }

  SelectMenuOption(name: string) {
    this.activeLink = name;
    this.menuSelected.emit(name); // Emit to parent
  }

}

