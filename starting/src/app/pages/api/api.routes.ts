import { Routes } from "@angular/router";


export const apiRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'weather', loadComponent:() => import('./weather/weather.component').then(cChild => cChild.WeatherComponent)},
    {path: 'reqres', loadComponent:() => import('./reqres/reqres.component').then(cChild => cChild.ReqresComponent)},
    {path: 'http-error-500', loadComponent:() => import('./http-error-500/http-error-500.component').then(cChild => cChild.HttpError500Component)},
]