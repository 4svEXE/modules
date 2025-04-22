import { Component } from '@angular/core';
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-trust-section',
  imports: [CallToActionComponent, TranslateModule],
  templateUrl: './trust-section.component.html',
  styleUrl: './trust-section.component.scss'
})
export class TrustSectionComponent {

}
