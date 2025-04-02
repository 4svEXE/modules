import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  navigateOrScroll(targetRoute: string) {
    if (this.currentUrl === targetRoute) {
      window.scrollBy({
        top: window.innerHeight, // Прокрутка на один екран вниз
        behavior: 'smooth'
      });
    } else {
      this.router.navigate([targetRoute]);
    }
  }
}
