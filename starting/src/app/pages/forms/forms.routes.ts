import { Routes } from '@angular/router';

export const formsRoutes: Routes = [
    {path: '', loadComponent:() => import('./forms.component').then(cChild => cChild.FormsComponent)},
    {path: 'signin', loadComponent:() => import('./signin/signin.component').then(cChild => cChild.SigninComponent)},
    {path: 'validators', loadComponent:() => import('./validators/validators.component').then(cChild => cChild.ValidatorsComponent)},

    {path: '**', loadComponent:() => import('./../../pages/not-found/not-found.component').then(cChild => cChild.NotFoundComponent)}

    // {path: '**', redirectTo: () => {return 'not-found'}},
    
];