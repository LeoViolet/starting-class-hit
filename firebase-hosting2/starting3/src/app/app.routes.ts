import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent)}, //LoadLazy
    {path: 'project', loadComponent:() => import('./pages/class-project/class-project.component').then(c => c.ClassProjectComponent)},
    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
    // {path: '**', redirectTo: () => {return 'not-found'}},
    
];
