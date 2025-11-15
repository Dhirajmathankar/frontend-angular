import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  vendorForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vendorForm = this.fb.group({
      // 1. Basic Info (Full Width)
      shopName: ['', Validators.required],
      tagline: ['', Validators.maxLength(100)],
      description: ['', Validators.required],
      
      // 2. Contact & Classification (3-Column Layout: 4 fields)
      shopCategory: ['', Validators.required], 
      websiteUrl: ['', Validators.pattern('^(http|https)://[^\\s$.?#].[^\\s]*$')],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      // 3. Address (3-Column Layout: 3 fields)
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
        country: ['', Validators.required], 
      }),
      
      // 4. Media (Custom Area - Logo/Profile Image)
      profileImageUrl: ['assets/default-profile.png'], // Placeholder for the profile/logo image

      // 5. Dynamic Gallery (2-Column Layout)
      galleryImages: this.fb.array([
        this.fb.control('', Validators.required) // Start with one image field
      ])
    });
  }

  get galleryImages() {
    return this.vendorForm.get('galleryImages') as FormArray;
  }

  addImageField() {
    this.galleryImages.push(this.fb.control('', Validators.required));
  }

  removeImageField(index: number) {
    this.galleryImages.removeAt(index);
  }

  onSubmit() {
    if (this.vendorForm.valid) {
      console.log('Vendor Profile Data:', this.vendorForm.value);
    } else {
      this.vendorForm.markAllAsTouched();
    }
  }
}