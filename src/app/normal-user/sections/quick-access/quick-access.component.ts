import { Component } from '@angular/core';
import { QuickAccess } from '../../models/home-screen.model';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss'],
})
export class QuickAccessComponent {
  categories: QuickAccess[] = [
    { id: 1, title: 'Wedding', description: 'Explore', image: 'wedding.jpg' },
    { id: 2, title: 'Decorators', description: 'Explore', image: 'decor.jpg' },
    { id: 3, title: 'Pre-Wedding', description: 'Explore', image: 'pre-wedding.jpg' },
    { id: 4, title: 'Baby Shower', description: 'Explore', image: 'baby-shower.jpg' },
    { id: 5, title: 'Birthday', description: 'Explore', image: 'birthday.jpg' },
    // Add more to enable horizontal scrolling/carousel effect
  ];
}
