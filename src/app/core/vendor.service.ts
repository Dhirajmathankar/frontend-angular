// D:\Project New\APP_LOGIN_PAGE\src\app\core\vendor.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define a basic interface for better type safety
export interface Vendor {
  _id: string;
  businessName: string;
  tagline: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'pending';
  profileImage: { url: string };
  address: { city: string, state: string };
  services: { title: string }[];
  rating: { avg: number, count: number };
  earnings: { total: number };
  availability: { from: Date, to: Date }[];
}

export interface ApiResponse<T> {
    data?: T; 
    message?: string; 
    status?: number; 
    errors?: any; 
}

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  // Use a base URL (replace with your actual server address)
  private baseUrl = 'http://localhost:5000/api/vendors';

  constructor(private http: HttpClient) {}

  /**
   * Fetches all vendor data for the admin list.
   */
  getAllVendors(): Observable<Vendor[]> {
    return this.http.get<any>(this.baseUrl);
  }

  /**
   * Fetches a specific vendor by ID.
   */
  getVendorById(id: string): Observable<Vendor> {
    return this.http.get<Vendor>(`${this.baseUrl}/${id}`);
  }

  /**
   * Updates vendor information or status.
   */
  updateVendor(id: string, data: Partial<Vendor>): Observable<Vendor> {
    // Partial<Vendor> allows sending only the fields that need updating
    return this.http.put<Vendor>(`${this.baseUrl}/${id}`, data);
  }

  /**
   * Deletes a vendor from the system.
   */
  deleteVendor(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}