import { Component } from '@angular/core';
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-problem-solution',
  imports: [CallToActionComponent, TranslateModule],
  templateUrl: './problem-solution.component.html',
  styleUrl: './problem-solution.component.scss'
})
export class ProblemSolutionComponent {

}
