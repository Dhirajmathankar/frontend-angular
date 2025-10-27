import { Component, OnInit } from '@angular/core';
import { VendorService, Vendor, ApiResponse } from '../../core/vendor.service'; // Ensure ApiResponse is imported
import { take, map } from 'rxjs/operators'; // <-- map operator is crucial for the fix

@Component({
  selector: 'app-admin-vendors-list',
  templateUrl: './admin-vendors-list.component.html',
  styleUrls: ['./admin-vendors-list.component.scss']
})
export class AdminVendorsListComponent implements OnInit {
  vendors: Vendor[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.loadVendors();
  }

  /**
   * Fetches all vendor data from the API, extracts the data array, and updates the view.
   */
  loadVendors(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    // 1. Pipe the Observable.
    this.vendorService.getAllVendors().subscribe(
      (response: any ) => {
        // 2. Directly assign the response to vendors.
        this.vendors = response?.data || [];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching vendors:', error);
        this.errorMessage = 'Failed to load vendors. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  /**
   * Handles the vendorDeleted event emitted from the child card component.
   */
  onVendorDeleted(deletedVendorId: string): void {
    console.log(`Vendor ID ${deletedVendorId} deleted. Refreshing list...`);
    this.vendors = this.vendors.filter(v => v._id !== deletedVendorId);
  }
}
