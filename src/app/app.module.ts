import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-page/login-page.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
// import { DashboardModule } from './dashboard/dashboard.module';
import { WebModule } from './web/web.module';

import { LucideAngularModule, Home, Settings, ChevronRight } from 'lucide-angular';


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    // BrowserModule,
    BrowserModule,
    ReactiveFormsModule,
     RouterModule.forRoot(routes), // 👈 use here
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    LucideAngularModule.pick({ Home, Settings, ChevronRight }) // Register icons here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
