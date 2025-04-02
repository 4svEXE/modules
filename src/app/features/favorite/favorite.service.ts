import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IProduct } from '../../entities/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  // Створення BehaviorSubject з типом string[] для масиву ID товарів
  private favoritesSubject = new BehaviorSubject<string[]>(
    this.getFavoritesFromLocalStorage()
  );
  // Створення BehaviorSubject для кількості обраних
  private favoritesCountSubject = new BehaviorSubject<number>(
    this.getFavoritesFromLocalStorage().length
  );

  favorites$ = this.favoritesSubject.asObservable();
  favoritesCount$ = this.favoritesCountSubject.asObservable();

  constructor() {}

  // Метод для додавання елементу в список обраних
  addToFavorites(productId: string): void {
    const favorites = this.getFavoritesFromLocalStorage();

    // Перевірка на дублювання
    if (!favorites.includes(productId)) {
      favorites.push(productId); // Додаємо, якщо не дублюється
      this.saveFavoritesToLocalStorage(favorites);
      this.favoritesSubject.next(favorites); // Оновлення підписників
      this.favoritesCountSubject.next(favorites.length); // Оновлення кількості
    } else {
      console.log('Цей товар вже є в обраних');
    }
  }

  // Метод для видалення елементу зі списку обраних
  removeFromFavorites(productId: string): void {
    let favorites = this.getFavoritesFromLocalStorage();
    favorites = favorites.filter((fav) => fav !== productId);
    this.saveFavoritesToLocalStorage(favorites);
    this.favoritesSubject.next(favorites); // Оновлення підписників
    this.favoritesCountSubject.next(favorites.length); // Оновлення кількості
  }

  // Метод для отримання списку обраних з localStorage
  private getFavoritesFromLocalStorage(): string[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  // Метод для збереження списку обраних в localStorage
  private saveFavoritesToLocalStorage(favorites: string[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // Метод для перевірки, чи є товар в обраному
  isFavorite(productId: string): boolean {
    const favorites = this.getFavoritesFromLocalStorage();
    return favorites.includes(productId);
  }


}
