import { Routes } from "@angular/router";


export const solidRoutes: Routes = [
    {path: '', redirectTo: 'srp', pathMatch: 'full'},
    {path: 'srp', loadComponent:() => import('./single-responsibility-principle/single-responsibility-principle.component').then(cChild => cChild.SingleResponsibilityPrincipleComponent)},
    {path: 'ocp', loadComponent:() => import('./open-closed-principle/open-closed-principle.component').then(cChild => cChild.OpenClosedPrincipleComponent)},
    {path: 'lsp', loadComponent:() => import('./liskov-substituition-principle/liskov-substituition-principle.component').then(cChild => cChild.LiskovSubstituitionPrincipleComponent)},
    {path: 'isp', loadComponent:() => import('./interface-segregation-principle/interface-segregation-principle.component').then(cChild => cChild.InterfaceSegregationPrincipleComponent)},
    {path: 'dip', loadComponent:() => import('./dependency-inversion-principle/dependency-inversion-principle.component').then(cChild => cChild.DependencyInversionPrincipleComponent)},
]