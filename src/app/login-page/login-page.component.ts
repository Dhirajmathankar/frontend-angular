// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading = false;


  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

   activeForm: 'login' | 'signup' = 'login';

  switchForm(form: 'login' | 'signup') {
    this.activeForm = form;
  }
  

  // async onSubmit() {
  //   this.errorMessage = null; 
  //   this.isLoading = true; 

  //   if (this.loginForm.invalid) {
  //     this.isLoading = false;
  //     return;
  //   }

  //   const { email, password } = this.loginForm.value;

  //   try {
  //     await signInWithEmailAndPassword(this.auth, email, password);
  //     console.log('Login successful!');
  //     this.isLoading = false;
  //     this.router.navigate(['/dashboard']); 
  //   } catch (error: any) {
  //     this.isLoading = false;
  //     console.error('Login failed:', error);
  //     switch (error.code) {
  //       case 'auth/user-not-found':
  //         this.errorMessage = 'No user found with this email.';
  //         break;
  //       case 'auth/wrong-password':
  //         this.errorMessage = 'Incorrect password.';
  //         break;
  //       case 'auth/invalid-credential':
  //         this.errorMessage = 'Invalid email or password.';
  //         break;
  //       default:
  //         this.errorMessage = 'An error occurred during login. Please try again.';
  //         break;
  //     }
  //   }
  // }

async onSubmit(){
  try {
  // TODO: Replace this with real Firebase logic
  console.log('🧪 Dummy login in progress');

  // Simulate success
  this.router.navigate(['/dashboard']);
} catch (error) {
  // Handle errors if needed
}
}


}