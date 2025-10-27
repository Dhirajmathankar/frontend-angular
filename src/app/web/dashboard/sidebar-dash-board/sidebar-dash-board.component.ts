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
    { name: 'Dashboard', icon: 'layout-dashboard' }, 
     { name: 'Product', icon: 'shopping-basket' },
    { name: 'Vendor-info', icon: 'layout' },
    { name: 'UI Element', icon: 'box' },
    { name: 'Basic', icon: 'layers' },
    { name: 'Forms & Table', icon: 'edit-3' },
    { name: 'Bootstrap table', icon: 'table' },
    { name: 'Chart & Maps', icon: 'bar-chart-2' },
    { name: 'Chart', icon: 'pie-chart' },
    { name: 'Maps', icon: 'map' },
    { name: 'Pages', icon: 'file-text' },
    { name: 'Authentication', icon: 'user-check' },
    { name: 'Sample Page', icon: 'file' },
  ];

  constructor() { }

  SelectMenuOption(name: string) {
    this.activeLink = name;
    this.menuSelected.emit(name); // Emit to parent
  }

}

