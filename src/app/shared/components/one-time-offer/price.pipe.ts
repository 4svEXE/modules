
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'number') return '';

    const lastDigit = value % 10;
    let rounded = value;

    if (lastDigit === 8 || lastDigit === 9) {
      rounded = Math.round(value / 100) * 100;
    }

    const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return `${formatted} Kč`;
  }
}

