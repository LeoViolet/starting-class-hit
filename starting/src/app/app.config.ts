import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcEs3m1P8E0V7WQHeEblIRuLCNOZ_xNY4",
  authDomain: "starting-class-hit.firebaseapp.com",
  projectId: "starting-class-hit",
  storageBucket: "starting-class-hit.firebasestorage.app",
  messagingSenderId: "422178734526",
  appId: "1:422178734526:web:3a5342efae8765424539ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
