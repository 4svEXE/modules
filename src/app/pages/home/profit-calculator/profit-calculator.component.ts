import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profit-calculator',
  imports: [FormsModule, TranslateModule],
  templateUrl: './profit-calculator.component.html',
  styleUrl: './profit-calculator.component.scss'
})
export class ProfitCalculatorComponent {
  rentPrice: number = 3750;
  occupancy: number = 70;
  result: string = '79000';

  calculateProfit(): void {
    if (!this.rentPrice || !this.occupancy) {
      this.result = 'error!';
      return;
    }

    const monthlyProfit = this.rentPrice * (this.occupancy / 100) * 30;
    this.result = `${monthlyProfit.toFixed(2)} `;
  }
}
