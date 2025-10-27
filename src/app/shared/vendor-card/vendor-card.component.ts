// D:\Project New\APP_LOGIN_PAGE\src\app\shared\vendor-card\vendor-card.component.ts

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Vendor } from 'src/app/core/vendor.service'; // Import the interface
import { Router } from '@angular/router'; // For View Details
import { VendorService } from '../../core/vendor.service'; // For Delete

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.scss']
})
export class VendorCardComponent {
  // Use the defined interface for better type checking
  @Input() vendor:  any= {} ; 
  
  // Event to notify the parent list when a vendor is deleted
  @Output() vendorDeleted = new EventEmitter<string>();

  constructor(
    private router: Router,
    private vendorService: VendorService
  ) {}

  // --- Action Methods ---



  onViewDetails(vendorId: string): void {
    // Navigate to the specific admin detail page
    this.router.navigate(['/admin/vendors', vendorId]);
    console.log(`Navigating to details for Vendor ID: ${vendorId}`);
  }

 


  onEdit(vendorId: string): void {
    // Navigate to the edit form or open a modal
    this.router.navigate(['/admin/vendors/edit', vendorId]);
    console.log(`Navigating to edit form for Vendor ID: ${vendorId}`);
  }

  onDelete(vendorId: string): void {
    if (confirm(`Are you sure you want to permanently delete ${this.vendor.businessName}?`)) {
      this.vendorService.deleteVendor(vendorId).subscribe({
        next: () => {
          alert('Vendor deleted successfully!');
          // Emit event to parent component to refresh the list
          this.vendorDeleted.emit(vendorId); 
        },
        error: (err) => {
          console.error('Error deleting vendor:', err);
          alert('Failed to delete vendor. Check console for details.');
        }
      });
    }
  }

  get formattedAvailability(): string {
    if (!this.vendor.availability || this.vendor.availability.length === 0) {
      return 'N/A';
    }
    const first = this.vendor.availability[0];
    const fromDate = new Date(first.from).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
    const toDate = new Date(first.to).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${fromDate} - ${toDate}`;
  }
}