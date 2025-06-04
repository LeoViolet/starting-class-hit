import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'hit', pathMatch: 'full'},
    {path: 'hit', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent)}, //LoadLazy
    {path: 'hit/project', loadComponent:() => import('./pages/class-project/class-project.component').then(c => c.ClassProjectComponent)},
    {path: 'hit/levelone', loadComponent:() => import('./pages/books/level/level01/level01.component').then(c => c.Level01Component)},
    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
    // {path: '**', redirectTo: () => {return 'not-found'}},
    
];
