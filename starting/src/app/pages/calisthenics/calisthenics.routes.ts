import { Routes } from '@angular/router';

export const calisthenicsRoutes: Routes = [
    {path: '', loadComponent:() => import('./calisthenics.component').then(cChild => cChild.CalisthenicsComponent)},
    {path: 'rule1', loadComponent:() => import('./rule1-one-indentation/rule1-one-indentation.component').then(cChild => cChild.Rule1OneIndentationComponent)},
    {path: 'rule2', loadComponent:() => import('./rule2-dont-use-else/rule2-dont-use-else.component').then(cChild => cChild.Rule2DontUseElseComponent)},
    {path: 'rule3', loadComponent:() => import('./rule3-wrap-primitives-strings/rule3-wrap-primitives-strings.component').then(cChild => cChild.Rule3WrapPrimitivesStringsComponent)},
    {path: 'rule4', loadComponent:() => import('./rule4-first-class-collections/rule4-first-class-collections.component').then(cChild => cChild.Rule4FirstClassCollectionsComponent)},
    {path: 'rule5', loadComponent:() => import('./rule5-one-dot-line/rule5-one-dot-line.component').then(cChild => cChild.Rule5OneDotLineComponent)},
    {path: 'rule6', loadComponent:() => import('./rule6-dont-abbreviate/rule6-dont-abbreviate.component').then(cChild => cChild.Rule6DontAbbreviateComponent)},
    {path: 'rule7', loadComponent:() => import('./rule7-keep-entities-small/rule7-keep-entities-small.component').then(cChild => cChild.Rule7KeepEntitiesSmallComponent)},
    {path: 'rule8', loadComponent:() => import('./rule8-no-more-than-two/rule8-no-more-than-two.component').then(cChild => cChild.Rule8NoMoreThanTwoComponent)},
    {path: 'rule9', loadComponent:() => import('./rule9-dont-use-getters-setters/rule9-dont-use-getters-setters.component').then(cChild => cChild.Rule9DontUseGettersSettersComponent)},

    // {path: '**', redirectTo: () => {return 'not-found'}},
    
];
