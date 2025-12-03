import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  mobileOpen = false;
  activeDropdown: string | null = null;

  // New Features
  isShrunk = false;
  isHidden = false;
  lastScroll = 0;
  activeSection: string = '';

  constructor(private router: Router) {}

  // -------------------------
  // DROPDOWN CONTROL
  // -------------------------
  openDropdown(menu: string) {
    this.activeDropdown = menu;
  }

  closeDropdown() {
    this.activeDropdown = null;
  }

  // -------------------------
  // LOGIN NAVIGATION
  // -------------------------
  userLoginSingUp() {
    this.router.navigate(['/login']);
  }

  // -------------------------
  // SCROLL LISTENER (Shrink + Hide + Highlight)
  // -------------------------
  @HostListener('window:scroll')
  onScroll() {
    const current = window.scrollY;

    // 1️⃣ Navbar shrink after small scroll
    this.isShrunk = current > 20;

    // 2️⃣ Auto hide navbar when scrolling down
    if (current > this.lastScroll && current > 150) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    this.lastScroll = current;

    // 3️⃣ Detect active section (optional)
    this.detectActiveSection();
  }

  // -------------------------
  // ACTIVE SECTION HIGHLIGHT
  // -------------------------
  detectActiveSection() {
    const sections = ['home', 'venues', 'photographers', 'blog', 'contact'];

    for (let sec of sections) {
      const element = document.getElementById(sec);
      if (!element) continue;

      const rect = element.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        this.activeSection = sec;
      }
    }
  }
}
