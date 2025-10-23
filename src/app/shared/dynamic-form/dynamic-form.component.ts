// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

// // Defines the structure for a single form field
// export interface FormField {
//   name: string;
//   label: string;
//   type: 'text' | 'email' | 'tel' | 'select' | 'number' | 'date' | 'radio' | 'checkbox' | 'file' | 'textarea';
//   defaultValue?: any;
//   required?: boolean;
//   hidden?: boolean;
//   options?: { label: string, value: any }[]; // For select, radio, checkbox
//   icon?: string; // SVG path for the icon
// }

// @Component({
//   selector: 'app-dynamic-form',
//   templateUrl: './dynamic-form.component.html',
//   styleUrls: ['./dynamic-form.component.scss']
// })
// export class DynamicFormComponent implements OnInit {
//   dynamicForm: FormGroup;

//   // Configuration array - ab ismein layout ki information nahi hai.
//   formFields: FormField[] = [
//     {
//       name: 'firstName',
//       label: 'Pehla Naam',
//       type: 'text',
//       defaultValue: '',
//       required: true,
//       icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />`
//     },
//     {
//       name: 'lastName',
//       label: 'Aakhri Naam',
//       type: 'text',
//       defaultValue: '',
//       required: true,
//     },
//     {
//       name: 'email',
//       label: 'Email Address',
//       type: 'email',
//       defaultValue: '',
//       required: true,
//       icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />`
//     },
//      {
//       name: 'contactMethod',
//       label: 'Aapse kaise contact karein?',
//       type: 'radio',
//       defaultValue: 'email',
//       required: true,
//       options: [
//         { label: 'Email se', value: 'email' },
//         { label: 'Phone se', value: 'phone' },
//       ]
//     },
//     {
//       name: 'phone',
//       label: 'Phone Number',
//       type: 'tel',
//       defaultValue: '',
//       required: false,
//       hidden: true, // Initially hidden
//       icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />`
//     },
//     {
//       name: 'eventDate',
//       label: 'Event ki Tareekh',
//       type: 'date',
//       defaultValue: '',
//       required: true,
//     },
//     {
//       name: 'tickets',
//       label: 'Kitne Tickets?',
//       type: 'number',
//       defaultValue: 1,
//       required: true,
//     },
//     {
//       name: 'topic',
//       label: 'Aapka Topic',
//       type: 'select',
//       defaultValue: '',
//       required: true,
//       options: [
//         { label: 'General Inquiry', value: 'general' },
//         { label: 'Technical Support', value: 'tech' },
//         { label: 'Billing Question', value: 'billing' }
//       ]
//     },
//     {
//       name: 'interests',
//       label: 'Aapki ruchi kis mein hai?',
//       type: 'checkbox',
//       required: true,
//       options: [
//         { label: 'Music', value: 'music' },
//         { label: 'Sports', value: 'sports' },
//         { label: 'Technology', value: 'tech' },
//         { label: 'Art', value: 'art' }
//       ]
//     },
//   ];

//   constructor(private fb: FormBuilder) {
//     this.dynamicForm = this.fb.group({});
//   }

//   ngOnInit(): void {
//     this.formFields.forEach(field => {
//       let control;
//       const validators = field.required ? [Validators.required] : [];
//       if (field.type === 'checkbox') {
//         control = this.fb.array(
//           field.options?.map(() => this.fb.control(false)) || [],
//           field.required ? [Validators.requiredTrue] : []
//         );
//       } else {
//         control = this.fb.control(field.defaultValue, validators);
//       }
//       this.dynamicForm.addControl(field.name, control);
//     });

//     this.dynamicForm.get('contactMethod')?.valueChanges.subscribe(value => {
//         const phoneField = this.formFields.find(f => f.name === 'phone');
//         if (phoneField) {
//             phoneField.hidden = (value !== 'phone');
//             if(phoneField.hidden) {
//                 this.dynamicForm.get('phone')?.clearValidators();
//             } else {
//                 this.dynamicForm.get('phone')?.setValidators([Validators.required, Validators.pattern("^[0-9]{10}$")]);
//             }
//             this.dynamicForm.get('phone')?.updateValueAndValidity();
//         }
//     });
//   }

//   onCheckboxChange(event: any, fieldName: string, optionIndex: number) {
//     const formArray: FormArray = this.dynamicForm.get(fieldName) as FormArray;
//     formArray.at(optionIndex).setValue(event.target.checked);
//   }

//   onSubmit(): void {
//     if (this.dynamicForm.valid) {
//       const formValue = { ...this.dynamicForm.value };
//       const interestsField = this.formFields.find(f => f.name === 'interests');
//       if (interestsField && interestsField.options) {
//         formValue.interests = formValue.interests
//           .map((checked: boolean, i: number) => checked ? interestsField.options![i].value : null)
//           .filter((value: any) => value !== null);
//       }
//       console.log('Form Submitted!', formValue);
//       alert('Registration safal hui! Form data console mein dekhein.');
//     } else {
//       console.error('Form valid nahi hai.');
//       this.dynamicForm.markAllAsTouched();
//     }
//   }
// }


// import { Component, Input, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

// // Same FormField interface
// export interface FormField {
//   name: string;
//   label: string;
//   type: 'text' | 'email' | 'tel' | 'select' | 'number' | 'date' | 'radio' | 'checkbox' | 'file' | 'textarea';
//   defaultValue?: any;
//   required?: boolean;
//   hidden?: boolean;
//   options?: { label: string, value: any }[];
//   icon?: string;
// }

// @Component({
//   selector: 'app-dynamic-form',
//   templateUrl: './dynamic-form.component.html',
//   styleUrls: ['./dynamic-form.component.scss']
// })
// export class DynamicFormComponent implements OnInit {
//   @Input() stepData: any;   // 👈 yeh WebLoadComponent se milega
//   dynamicForm!: FormGroup;
//   formFields: FormField[] = [];  // Empty initially

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     // stepData se fields assign kar rahe hain
//     if (this.stepData?.formFields) {
//       this.formFields = this.stepData.formFields;
//     }

//     // Form group banate hain
//     this.dynamicForm = this.fb.group({});
//     this.formFields.forEach(field => {
//       let control;
//       const validators = field.required ? [Validators.required] : [];
//       if (field.type === 'checkbox') {
//         control = this.fb.array(
//           field.options?.map(() => this.fb.control(false)) || [],
//           field.required ? [Validators.requiredTrue] : []
//         );
//       } else {
//         control = this.fb.control(field.defaultValue, validators);
//       }
//       this.dynamicForm.addControl(field.name, control);
//     });

//     // Agar radio ke basis pe koi field hide/show karna hai
//     this.dynamicForm.get('contactMethod')?.valueChanges.subscribe(value => {
//       const phoneField = this.formFields.find(f => f.name === 'phone');
//       if (phoneField) {
//         phoneField.hidden = (value !== 'phone');
//         if(phoneField.hidden) {
//           this.dynamicForm.get('phone')?.clearValidators();
//         } else {
//           this.dynamicForm.get('phone')?.setValidators([Validators.required, Validators.pattern("^[0-9]{10}$")]);
//         }
//         this.dynamicForm.get('phone')?.updateValueAndValidity();
//       }
//     });
//   }

//   onCheckboxChange(event: any, fieldName: string, optionIndex: number) {
//     const formArray: FormArray = this.dynamicForm.get(fieldName) as FormArray;
//     formArray.at(optionIndex).setValue(event.target.checked);
//   }

//   onSubmit(): void {
//     if (this.dynamicForm.valid) {
//       const formValue = { ...this.dynamicForm.value };
//       const interestsField = this.formFields.find(f => f.name === 'interests');
//       if (interestsField && interestsField.options) {
//         formValue.interests = formValue.interests
//           .map((checked: boolean, i: number) => checked ? interestsField.options![i].value : null)
//           .filter((value: any) => value !== null);
//       }
//       console.log('Form Submitted!', formValue);
//       alert('Registration safal hui! Form data console mein dekhein.');
//     } else {
//       console.error('Form valid nahi hai.');
//       this.dynamicForm.markAllAsTouched();
//     }
//   }
// }



// import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

// @Component({
//   selector: 'app-dynamic-form',
//   templateUrl: './dynamic-form.component.html',
//   styleUrls: ['./dynamic-form.component.scss']
// })
// export class DynamicFormComponent implements OnInit {
//   @Input() stepData: any;
//   @Output() formSubmit = new EventEmitter<any>();   // 👈 yaha add karo

//   dynamicForm!: FormGroup;
//   formFields: any[] = [];

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     if (this.stepData?.formFields) {
//       this.formFields = this.stepData.formFields;
//     }

//     this.dynamicForm = this.fb.group({});
//     this.formFields.forEach(field => {
//       const validators = field.required ? [Validators.required] : [];
//       let control;
//       if (field.type === 'checkbox') {
//         control = this.fb.array(
//           field.options?.map(() => this.fb.control(false)) || [],
//           field.required ? [Validators.requiredTrue] : []
//         );
//       } else {
//         control = this.fb.control(field.defaultValue, validators);
//       }
//       this.dynamicForm.addControl(field.name, control);
//     });
//   }

//   onCheckboxChange(event: any, fieldName: string, optionIndex: number) {
//     const formArray: FormArray = this.dynamicForm.get(fieldName) as FormArray;
//     formArray.at(optionIndex).setValue(event.target.checked);
//   }

//   onSubmit(): void {
//     if (this.dynamicForm.valid) {
//       const formValue = { ...this.dynamicForm.value };
//       this.formSubmit.emit(formValue);   // 👈 parent ko data bhej diya
//     } else {
//       this.dynamicForm.markAllAsTouched();
//     }
//   }
// }


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormField } from '../../web/web-services.service'; // Adjust path if needed

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  // WebLoadComponent se step ka poora data object milega
  @Input() stepData: { formName?: string; formFields?: FormField[] } = {};
  
  // Form submit hone par data ke saath event emit karega
  @Output() formSubmit = new EventEmitter<any>();

  dynamicForm!: FormGroup;
  // Template mein use karne ke liye formFields ko ek property mein store karein
  formFields: FormField[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.stepData || !this.stepData.formFields) {
      return;
    }

    this.formFields = this.stepData.formFields;
    this.dynamicForm = this.fb.group({});

    // Configuration ke aadhar par form controls banayein
    this.formFields.forEach((field) => {
      const validators = field.required ? [Validators.required] : [];
      const control = this.fb.control(field.defaultValue || '', validators);
      this.dynamicForm.addControl(field.name, control);
    });
  }

  /**
   * Form submit hone par, validation check karke event emit karta hai.
   */
  onSubmit(): void {
    if (this.dynamicForm.valid) {
      this.formSubmit.emit(this.dynamicForm.value);
    } else {
      // Agar form invalid hai to sabhi fields ko touched mark karein taaki errors dikhe
      this.dynamicForm.markAllAsTouched();
      console.error('Form is invalid.');
    }
  }
}

