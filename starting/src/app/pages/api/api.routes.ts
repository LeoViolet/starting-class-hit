import { Routes } from "@angular/router";


export const apiRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'weather', loadComponent:() => import('./weather/weather.component').then(cChild => cChild.WeatherComponent)},
    {path: 'reqres', loadComponent:() => import('./reqres/reqres.component').then(cChild => cChild.ReqresComponent)},
    {path: 'http-success-200', loadComponent:() => import('./http-success-200/http-success-200.component').then(cChild => cChild.HttpSuccess200Component)},
    {path: 'http-error-500', loadComponent:() => import('./http-error-500/http-error-500.component').then(cChild => cChild.HttpError500Component)},
    {path: 'http-error-400', loadComponent:() => import('./http-error-400/http-error-400.component').then(cChild => cChild.HttpError400Component)},
]