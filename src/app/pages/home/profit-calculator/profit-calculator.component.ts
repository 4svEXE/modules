import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profit-calculator',
  imports: [FormsModule],
  templateUrl: './profit-calculator.component.html',
  styleUrl: './profit-calculator.component.scss'
})
export class ProfitCalculatorComponent {
  rentPrice: number = 100;
  occupancy: number = 70;
  result: string = '0';

  calculateProfit(): void {
    if (!this.rentPrice || !this.occupancy) {
      this.result = 'Будь ласка, введіть коректні значення!';
      return;
    }

    const monthlyProfit = this.rentPrice * (this.occupancy / 100) * 30;
    this.result = `${monthlyProfit.toFixed(2)} `;
  }
}
