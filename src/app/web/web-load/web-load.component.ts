// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-web-load',
//   templateUrl: './web-load.component.html',
//   styleUrls: ['./web-load.component.css']
// })
// export class WebLoadComponent {
//  selectedMenu: string | null = 'Dashboard';

//   onMenuChange(menu: string) {
//     this.selectedMenu = menu;
//   }
// }






import { Component, OnInit, OnDestroy, ViewChild, ComponentRef, Type } from '@angular/core';
import { Subscription } from 'rxjs';
import  { WebServicesService, WizardStep } from '../web-services.service'; // Adjust path if needed
import { AdHostDirective } from '../web-add/ad-host.directive'; // Adjust path if needed
import { Router } from '@angular/router';
// Component Mapping: Yahaan aap string ko component class se jodte hain
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form.component'; // Adjust path if needed
// import { SuccessComponent } from '../../success/success.component'; // Adjust path if needed

@Component({
  selector: 'app-web-load',
  templateUrl: './web-load.component.html',
  styleUrls: ['./web-load.component.css'],
})
export class WebLoadComponent implements OnInit, OnDestroy {
@ViewChild(AdHostDirective, { static: false }) addHost!: AdHostDirective;


  private wizardFlow: WizardStep[] = [];
  private currentStep?: WizardStep;
  private componentRef?: ComponentRef<any>;
  private flowSubscription?: Subscription;

   private componentMap: Record<string, Type<any>> = {
    DynamicFormComponent: DynamicFormComponent,
    // SuccessComponent: SuccessComponent,
  };

  // Corrected the service injection to use WebServicesService
  constructor(private webServicesService: WebServicesService, private router: Router) {}

  ngOnInit(): void {
    // ngOnInit is good for logic that doesn't need the view.
    // We will wait for ngAfterViewInit to load the component.
    console.log('WebLoadComponent ngOnInit: View is not ready yet.');
  }

  /**
   * This hook runs after the component's view has been fully initialized.
   * This is the correct place to access @ViewChild properties.
   */
  ngAfterViewInit(): void {

     console.log('Directive instance:', this.addHost);
    if (!this.addHost) {
      console.error('AddHostDirective is not available!');
      return;
    }

    console.log('WebLoadComponent ngAfterViewInit: View is ready, loading wizard flow.');
    this.loadWizardFlow();
  }

  ngOnDestroy(): void {
    this.flowSubscription?.unsubscribe();
    this.componentRef?.destroy();
  }

  /**
   * Service se poora wizard flow laata hai aur localStorage se progress restore karta hai.
   */
  loadWizardFlow(): void {
    // Corrected to call the injected webServicesService
    this.flowSubscription = this.webServicesService.getWizardFlow().subscribe((flow) => {
      this.wizardFlow = flow;
      this.restoreProgress();
      this.loadNextStep();
    });
  }

  /**
   * Agla incomplete step dhoond kar use load karta hai.
   */
  loadNextStep(): void {
    const nextStep = this.wizardFlow.find((step) => step.status !== 'complete');

    if (nextStep) {
      this.currentStep = nextStep;
      this.currentStep.status = 'inprogress';
      this.injectComponent(this.currentStep);
    } else {
      console.log('🎉 Wizard complete!');
      this.addHost.viewContainerRef.clear();
      // Yahaan aap final "All Done" message dikha sakte hain
    }
  }

  /**
   * Step ko complete mark karta hai, progress save karta hai, aur agla step load karta hai.
   */
  completeCurrentStep(submittedData?: any): void {
    if (!this.currentStep) return;

    // Step ko complete mark karein
    this.currentStep.status = 'complete';
    console.log(`Step ${this.currentStep.stepName} complete ✅`, submittedData);

    // Progress ko localStorage mein save karein
    this.saveProgress(this.currentStep.stepId, submittedData);

    // Agla step load karein
    this.loadNextStep();
  }

  /**
   * Component ko dynamically view mein inject karta hai.
   */
  private injectComponent(step: WizardStep): void {
    // Added a log to check if the directive is available
    console.log('Injecting component. Is addHost directive defined?', !!this.addHost);

    if (!this.addHost) {
      console.error('AddHostDirective is not available. Cannot inject component.');
      return;
    }

    const viewContainerRef = this.addHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef?.destroy();

    const componentClass = this.componentMap[step.component];
    if (!componentClass) {
      console.error(`Component not found in map: ${step.component}`);
      return;
    }

    this.componentRef = viewContainerRef.createComponent(componentClass);

    // Data ko @Input ke zariye pass karein
    if (this.componentRef.instance.stepData) {
      this.componentRef.instance.stepData = step.data;
    }

    // @Output event ko subscribe karein
    if (this.componentRef.instance.formSubmit) {
      this.componentRef.instance.formSubmit.subscribe((payload: any) => {
        this.completeCurrentStep(payload);
      });
    }
  }

  /**
   * Progress ko localStorage mein save karta hai.
   */
  private saveProgress(stepId: number, data: any): void {
    const savedProgress = JSON.parse(localStorage.getItem('wizardProgress') || '{}');
    savedProgress[stepId] = { status: 'complete', data: data };
    localStorage.setItem('wizardProgress', JSON.stringify(savedProgress));
  }

  /**
   * Page refresh hone par localStorage se progress ko restore karta hai.
   */
  private restoreProgress(): void {
    const savedProgress = JSON.parse(localStorage.getItem('wizardProgress') || '{}');
    this.wizardFlow.forEach((step) => {
      if (savedProgress[step.stepId] && savedProgress[step.stepId].status === 'complete') {
        step.status = 'complete';
      }
    });
  }

  onMenuChange(event: any) {
    const value: string = event; // event should be the selected menu value

    switch (value) {
      case 'Dashboard':
        console.log("Dashboard selected");
        this.router.navigate(['/dashboard']);
        break;

      case 'Reports':
        console.log("Reports selected");
        this.router.navigate(['/reports']);
        break;

      case 'Settings':
        console.log("Settings selected");
        this.router.navigate(['/settings']);
        break;

      default:
        console.log("Unknown menu:", value);
        break;
    }

    console.log(event, " value of the ...............");
  }


}
