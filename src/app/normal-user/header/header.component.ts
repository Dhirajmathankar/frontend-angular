// header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  
   constructor(
      private router: Router
    ) {
    }
  @Output() openMobileMenu = new EventEmitter();
  @Output() openLogin = new EventEmitter();
  @Output() openSignup = new EventEmitter();

  toggleMobileMenu() {
    this.openMobileMenu.emit();
  }

  openLoginModal() {
    this.openLogin.emit();
  }

  openSignupModal() {
    this.openSignup.emit();
  }
  userLoginSingUp(){
    console.log("clicked");
    this.router.navigate(['/login'])
  }
}