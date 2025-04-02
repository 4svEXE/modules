import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoriteService } from '../../../features/favorite/favorite.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  // imports: [CommonModule, RouterLink],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  count = 0;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.sub = this.favoriteService.favoritesCount$.subscribe((count) => {
      this.count = count;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
