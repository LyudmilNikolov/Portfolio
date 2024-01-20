import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(a => a.HomeComponent) },
    { path: 'about-me', loadComponent: () => import('./pages/aboutme/about.component').then(a => a.AboutComponent) },
    { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio.component').then(a => a.PortfolioComponent) },
    { path: 'contact-me', loadComponent: () => import('./pages/contact/contact.component').then(a => a.ContactComponent) },
    { path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(a => a.BlogComponent) },
];