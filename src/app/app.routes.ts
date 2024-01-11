import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(a => a.HomeComponent) },
    { path: 'about-me', loadComponent: () => import('./pages/aboutme/about.component').then(a => a.AboutComponent) },
];