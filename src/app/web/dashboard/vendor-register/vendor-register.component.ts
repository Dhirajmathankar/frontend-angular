import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css']
})
export class VendorRegisterComponent implements OnInit {
  vendorForm!: FormGroup;
  defaultProfile = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';

  constructor(private fb: FormBuilder, private vendorService: DashboardService) {}

  ngOnInit() {
    this.vendorForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', Validators.required],
      businessIdNumber: [''],
      profileImageUrl: [''],
      idProofUrl: [''],
      city: ['', Validators.required],
      country: ['India'],
      shopName: ['', Validators.required],
      tagline: [''],
      description: [''],
      shopCategory: ['', Validators.required],
      websiteUrl: [''],
      basePrice: ['', Validators.required],
      serviceRange: [''],
      galleryImages: this.fb.array([this.fb.control('')]),
      isVisible: [true]
    });
  }

  get galleryImages() {
    return this.vendorForm.get('galleryImages') as FormArray;
  }

  addImageField() {
    this.galleryImages.push(this.fb.control(''));
  }

  removeImageField(i: number) {
    this.galleryImages.removeAt(i);
  }

  onFileSelected(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      // TODO: integrate Cloudinary or S3 upload
      this.vendorForm.patchValue({ [controlName]: file.name });
    }
  }

  onSubmit() {
    if (this.vendorForm.valid) {
      this.vendorService.registerVendor(this.vendorForm.value).subscribe({
        next: (res) => alert('Shop published successfully!'),
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }
}
