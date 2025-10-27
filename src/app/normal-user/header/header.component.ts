// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems = [
    { label: 'Wedding', icon: '💍', link: '/wedding', active: true },
    { label: 'Birthday', icon: '🎂', link: '/birthday', active: false },
    { label: 'Parties', icon: '🎉', link: '/parties', active: false },
    { label: 'Foods', icon: '🍽️', link: '/foods', active: false },
    { label: 'Anniversaries', icon: '💖', link: '/anniversary', active: false },
    { label: 'Accounts', icon: '🔑', link: '/accounts', active: false },
  ];
}