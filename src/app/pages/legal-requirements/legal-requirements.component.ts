import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogSuggestionsComponent } from "../../shared/components/blog-suggestions/blog-suggestions.component";

@Component({
  selector: 'app-legal-requirements',
  imports: [RouterLink, BlogSuggestionsComponent],
  templateUrl: './legal-requirements.component.html',
  styleUrl: './legal-requirements.component.scss'
})
export class LegalRequirementsComponent {

}
