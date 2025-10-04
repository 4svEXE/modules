import { Component } from '@angular/core';
import { ModularHousesComponent } from "./modular-houses/modular-houses.component";
import { PricingStrategyComponent } from "./pricing-strategy/pricing-strategy.component";

@Component({
  selector: 'app-camp',
  imports: [ModularHousesComponent, PricingStrategyComponent],
  templateUrl: './camp.component.html',
  styleUrl: './camp.component.scss'
})
export class CampComponent {

}
