import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// Field ki definition (koi change nahi)
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'number' | 'date' | 'radio' | 'checkbox' | 'file';
  defaultValue?: any;
  required?: boolean;
  options?: { label: string, value: any }[];
  icon?: string;
}

// Step/Task ki configuration ka naya structure
export interface WizardStep {
  stepId: number;
  stepName: string;
  status: 'pending' | 'inprogress' | 'complete';
  component: string; // Ab yeh string hai, component class nahi
  data: { // Component ko pass karne ke liye data
    formName?: string;
    formFields?: FormField[];
    permissions?: string[];
    message?:any;
  };
}

@Injectable({
  providedIn: 'root'
})
export class WebServicesService {

  // Yeh hamara main wizard flow hai
  private wizardFlow: WizardStep[] = [
    {
      stepId: 1,
      stepName: 'Event Registration',
      status: 'pending', // Shuru mein sab pending
      component: 'DynamicFormComponent', // Component ka naam as a string
      data: {
        formName: 'Event Registration',
        formFields: [
          { name: 'firstName', label: 'Pehla Naam', type: 'text', required: true },
          { name: 'lastName', label: 'Aakhri Naam', type: 'text', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
        ]
      }
    },
    {
      stepId: 2,
      stepName: 'User Profile',
      status: 'pending',
      component: 'DynamicFormComponent', // Component ka naam as a string
      data: {
        formName: 'User Profile',
        formFields: [
            { name: 'username', label: 'Username', type: 'text', required: true },
            { name: 'bio', label: 'Aapke baare mein', type: 'text' },
        ]
      }
    },
    {
      stepId: 3,
      stepName: 'Final Confirmation',
      status: 'pending',
      component: 'SuccessComponent', // Component ka naam as a string
      data: {
        message: 'Aapka Wizard Flow Safaltapurvak Pura Hua!'
      }
    }
  ];

  constructor() { }

  // Poora wizard flow return karta hai
  getWizardFlow() {
    return of(this.wizardFlow);
  }

  // WebServicesService
completeStep(stepId: number, submittedData?: any) {
  const step = this.wizardFlow.find(s => s.stepId === stepId);
  if (step) {
    step.status = 'complete';
    console.log(`Step ${step.stepName} complete ✅`, submittedData);
  }
}

}
