import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'camp', loadComponent: () => import('./pages/camp/camp.component').then(m => m.CampComponent) },
  { path: 'offer', loadComponent: () => import('./pages/offer/offer.component').then(m => m.OfferComponent) },
  { path: 'comfort', loadComponent: () => import('./pages/comfort/comfort.component').then(m => m.ComfortComponent) },
  { path: 'module-house-launch', loadComponent: () => import('./pages/module-house-launch/module-house-launch.component').then(m => m.ModuleHouseLaunchComponent) },
  { path: 'legal-requirements', loadComponent: () => import('./pages/legal-requirements/legal-requirements.component').then(m => m.LegalRequirementsComponent) },
  { path: 'terms-of-privacy', loadComponent: () => import('./pages/terms-of-privacy/terms-of-privacy.component').then(m => m.TermsOfPrivacyComponent) },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];
