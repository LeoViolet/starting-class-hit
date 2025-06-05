import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'angular', pathMatch: 'full'},
    {path: 'angular', loadComponent:() => import('./pages/angular/angular-component/angular.component').then(c => c.AngularComponent)},
    {path: 'angular/git', loadComponent:() => import('./pages/angular/git/git.component').then(c => c.GitComponent)},
    {path: 'hit', loadChildren:() => import('./pages/hit/hit.route').then(c => c.hitRoutes)},

    {path: 'levels/levelone', loadComponent:() => import('./pages/books/level/level01/level01.component').then(c => c.Level01Component)},

    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}

    // {path: '**', redirectTo: () => {return 'not-found'}},
    
];
