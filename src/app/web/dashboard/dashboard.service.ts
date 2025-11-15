
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Vendor {
  _id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  shopName: string;
  tagline?: string;
  description?: string;
  shopCategory: string;
  websiteUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
  galleryImages: string[];
  profileImageUrl?: string;
  status?: string; // e.g., Pending / Approved / Rejected
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:5000/api/vendor';

  constructor(private http: HttpClient) {}

  /** -------------------------
   * CREATE new vendor (Shop Registration)
   -------------------------- */
  createVendor(vendorData: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(`${this.baseUrl}/register`, vendorData)
      .pipe(
        map((res: any) => res.data || res),
        catchError(this.handleError)
      );
  }

  /** -------------------------
   * UPDATE Vendor Info
   -------------------------- */
  updateVendor(id: string, vendorData: Vendor): Observable<Vendor> {
    return this.http.put<Vendor>(`${this.baseUrl}/update/${id}`, vendorData)
      .pipe(
        map((res: any) => res.data || res),
        catchError(this.handleError)
      );
  }

  /** -------------------------
   * GET Vendor by ID
   -------------------------- */
  getVendorById(id: string): Observable<Vendor> {
    return this.http.get<Vendor>(`${this.baseUrl}/${id}`)
      .pipe(
        map((res: any) => res.data || res),
        catchError(this.handleError)
      );
  }

  /** -------------------------
   * GET All Vendors (for Admin or Listing)
   -------------------------- */
  getAllVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(`${this.baseUrl}/all`)
      .pipe(
        map((res: any) => res.data || res),
        catchError(this.handleError)
      );
  }

  /** -------------------------
   * DELETE Vendor (if needed)
   -------------------------- */
  deleteVendor(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
      .pipe(catchError(this.handleError));
  }

  /** -------------------------
   * UPLOAD Image (profile/gallery)
   * Integrate with Cloudinary or AWS S3
   -------------------------- */
  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/upload-image`, formData)
      .pipe(
        map((res: any) => res.url), // Assuming backend returns { url: '...' }
        catchError(this.handleError)
      );
  }

  /** -------------------------
   * Handle HTTP Errors
   -------------------------- */
  private handleError(error: HttpErrorResponse) {
    let errorMsg = 'Something went wrong!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMsg = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMsg);
    return throwError(() => errorMsg);
  }

  
// alias (optional)
registerVendor(vendorData: Vendor): Observable<Vendor> {
  return this.createVendor(vendorData);
}


}
