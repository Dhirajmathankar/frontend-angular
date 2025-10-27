
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vendor, QuickAccess, Blog } from './models/home-screen.model'; // Assuming data.model.ts is in src/app/models

@Injectable({
  providedIn: 'root' // Makes the service available everywhere
})
export class NormalUserService {

  // --- MOCK DATA ---
  private mockVendors: Vendor[] = [
    { id: 1, name: 'Lavish Photography', category: 'Photographer', rating: 4.5, reviews: 999, location: 'Delhi-NCR', price: '$$$', image: 'vendor-1.jpg' },
   
    // ... add more mock data
  ];

  private mockCategories: QuickAccess[] = [
    { id: 1, title: 'Wedding', description: 'Explore', image: 'wedding.jpg' },
    // ... add more mock data
  ];
  // -----------------

  constructor() { }

  /**
   * Fetches the list of featured vendors.
   * In a real app, this would use HttpClient: this.http.get<Vendor[]>('/api/vendors')
   */
  getFeaturedVendors(): Observable<Vendor[]> {
    return of(this.mockVendors); // Returns mock data wrapped in an Observable
  }

  /**
   * Fetches the quick access categories.
   */
  getQuickAccessCategories(): Observable<QuickAccess[]> {
    return of(this.mockCategories);
  }

  // You would create a similar method for Blog posts
}