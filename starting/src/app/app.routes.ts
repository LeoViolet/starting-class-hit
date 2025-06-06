import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'angular', pathMatch: 'full'},
    {path: 'angular', loadComponent:() => import('./pages/angular/angular-component/angular.component').then(c => c.AngularComponent)},
    {path: 'angular/git', loadComponent:() => import('./pages/angular/git/git.component').then(c => c.GitComponent)},
    {path: 'hit', loadChildren:() => import('./pages/hit/hit.route').then(c => c.hitRoutes)},
    {path: 'levels', loadChildren:() => import('./pages/books/level/level.routes').then(c => c.levelRoutes)},
    {path: 'solid', loadChildren:() => import('./pages/solid/solid-routes').then (c => c.solidRoutes)},

    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}

    // {path: '**', redirectTo: () => {return 'not-found'}},
    
];
