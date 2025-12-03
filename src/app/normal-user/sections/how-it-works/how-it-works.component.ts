import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent {
  steps = [
    { title: 'Search Vendors', icon: '🔍', description: '1. Search Vendors' },
    { title: 'Compare Packages', icon: '📦', description: '2. Compare Packages' },
    { title: 'Book & Pay Securely', icon: '💳', description: '3. Book & Pay Securely' },
  ];
}
