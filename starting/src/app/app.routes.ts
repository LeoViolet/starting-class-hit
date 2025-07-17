import { Routes } from '@angular/router';
import { authenticationGuard } from './_guards/authentication.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent)},
    {path: 'welcome', loadComponent:() => import('./pages/welcome/welcome.component').then(c => c.WelcomeComponent)},
    {path: 'angular/get-starting', loadComponent:() => import('./pages/angular/angular.component').then(c => c.AngularComponent)},
    {path: 'angular', loadComponent:() => import('./pages/angular/angular-component/angular.component').then(c => c.AngularComponent)},
    {path: 'angular/git', loadComponent:() => import('./pages/angular/git/git.component').then(c => c.GitComponent)},
    {path: 'angular/dry', loadComponent:() => import('./pages/dry/dry.component').then(c => c.DryComponent), canActivate:[authenticationGuard]},
    {path: 'angular/firebase', loadChildren:() => import('./pages/firebase/firebase.routes').then(c=> c.firebaseRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/object-calisthenics', loadChildren:() => import('./pages/calisthenics/calisthenics.routes').then(c => c.calisthenicsRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/hit', loadChildren:() => import('./pages/hit/hit.route').then(c => c.hitRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/levels', loadChildren:() => import('./pages/books/level.routes').then(c => c.levelRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/solid', loadChildren:() => import('./pages/solid/solid-routes').then (c => c.solidRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/api', loadChildren:() => import('./pages/api/api.routes').then(c => c.apiRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/forms', loadChildren:() => import('./pages/forms/forms.routes').then(c=> c.formsRoutes), canActivate:[authenticationGuard]},

    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}

    // {path: '**', redirectTo: () => {return 'not-found'}},
    
];
