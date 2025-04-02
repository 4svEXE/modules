import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'about-me', loadComponent: () => import('./pages/about-me/about-me.component').then(m => m.AboutMeComponent) },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
