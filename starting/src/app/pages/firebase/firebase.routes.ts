import { Routes } from '@angular/router';

export const firebaseRoutes: Routes = [
    {path: '', loadComponent:() => import('./firebase.component').then(cChild => cChild.FirebaseComponent)},
    {path: 'firebase-auth', loadComponent:() => import('./firebase-auth/firebase-auth.component').then(cChild => cChild.FirebaseAuthComponent)},
    {path: 'firebase-hosting', loadComponent:() => import('./firebase-init/firebase-init.component').then(cChild => cChild.FirebaseInitComponent)},

];
