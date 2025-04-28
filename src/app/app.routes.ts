import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terms-of-privacy', loadComponent: () => import('./pages/terms-of-privacy/terms-of-privacy.component').then(m => m.TermsOfPrivacyComponent) },

  { path: '**', redirectTo: '', pathMatch: 'full' }
  // { path: 'about-me', loadComponent: () => import('./pages/about-me/about-me.component').then(m => m.AboutMeComponent) },
];
