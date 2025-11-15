import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  activeForm: 'login' | 'signup' = 'login';
  errorMessage: string | null = null;
  isLoading = false;

  private submitListener = (e: Event) => this.onFormSubmit(e);
  private container: HTMLElement;

  constructor(
    private el: ElementRef,
    private auth: AuthService,
    private router: Router
  ) {
    this.container = this.el.nativeElement as HTMLElement;
  }

  switchForm(form: 'login' | 'signup') {
    this.activeForm = form;
    this.errorMessage = null;
  }

  ngAfterViewInit(): void {
    // attach submit event at container level to catch both forms without modifying HTML
    this.container.addEventListener('submit', this.submitListener, { passive: false });
  }

  ngOnDestroy(): void {
    this.container.removeEventListener('submit', this.submitListener);
  }

  private async onFormSubmit(e: Event) {
    e.preventDefault();
    this.errorMessage = null;

    // determine which .form-card was submitted by checking activeForm
    // and reading input elements inside the submitted form element
    const targetForm = (e.target as HTMLFormElement);
    if (!targetForm) return;

    // get inputs: email and password (for signup there's confirm password)
    const emailInput = targetForm.querySelector('input[type="email"]') as HTMLInputElement | null;
    const passwordInputs = targetForm.querySelectorAll('input[type="password"]') as NodeListOf<HTMLInputElement>;

    const email = emailInput?.value?.trim() ?? '';
    const password = passwordInputs?.[0]?.value ?? '';
    const confirmPassword = passwordInputs?.[1]?.value ?? '';

    if (this.activeForm === 'login') {
      await this.handleLogin(email, password);
    } else {
      await this.handleSignup(email, password, confirmPassword);
    }
  }

  private async handleLogin(email: string, password: string) {
    if (!email || !password) {
      this.errorMessage = 'Please enter email and password.';
      return;
    }

    this.isLoading = true;
    try {
      // AuthService.login returns an Observable of a Promise. We'll subscribe and await the inner Promise.
      console.log('Calling AuthService.login from LoginComponent');
      this.auth.login(email, password).subscribe(async (maybePromise: any) => {
        try {
          // handle both Promise-wrapped map and direct response
          const res = (maybePromise instanceof Promise) ? await maybePromise : maybePromise;
          // registration/login successful, redirect
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        } catch (innerErr) {
          console.error('Login inner error', innerErr);
          this.isLoading = false;
          this.errorMessage = 'Login failed. Try again.';
        }
      }, (err) => {
        console.error('Login HTTP error', err);
        this.isLoading = false;
        if (err?.error?.message) this.errorMessage = err.error.message;
        else this.errorMessage = 'Login failed. Check credentials.';
      });
    } catch (error: any) {
      console.error('Login exception', error);
      this.isLoading = false;
      this.errorMessage = 'An error occurred during login.';
    }
  }

  private async handleSignup(email: string, password: string, confirmPassword: string) {
    if (!email || !password || !confirmPassword) {
      this.errorMessage = 'Please fill all fields.';
      return;
    }
    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }
    this.isLoading = true;
    try {
      // call register endpoint
      // we don't have register in AuthService yet — use HttpClient directly or add register method.
      // For brevity, call the backend using fetch (no need to change project structure).
      const userType = 'normal'; // or get from a form field if needed
      const resp = await fetch(`${environment.apiBaseUrl}/auth/register` , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: email.split('@')[0], email, password , userType})
      });
      const data = await resp.json();
      if (!resp.ok) {
        this.errorMessage = data?.message || 'Registration failed.';
        this.isLoading = false;
        return;
      }

      // after successful register, store tokens via AuthService logic
      // re-use AuthService.login to store tokens (login will call login endpoint)
      this.auth.login(email, password).subscribe(async (maybePromise: any) => {
        try {
          await (maybePromise instanceof Promise ? maybePromise : maybePromise);
        } catch (e) {}
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }, (err) => {
        console.error('Post-register login error', err);
        this.isLoading = false;
        this.errorMessage = 'Registration succeeded but login failed. Please login manually.';
      });

    } catch (err) {
      console.error('Signup error', err);
      this.errorMessage = 'Registration failed.';
      this.isLoading = false;
    }
  }

  // You have a placeholder async onSubmit in file — kept for compatibility
  async onSubmit() {
    // not used because we handle form submit via DOM
  }
}
