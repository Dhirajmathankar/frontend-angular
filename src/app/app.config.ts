// // src/app/app.config.ts
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';

// // Apni Firebase config yahan paste karein
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     // Firebase setup
//     provideFirebaseApp(() => initializeApp(firebaseConfig)),
//     provideAuth(() => getAuth())
//   ]
// };