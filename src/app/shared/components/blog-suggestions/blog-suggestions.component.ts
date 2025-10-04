import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CallToActionComponent } from "../call-to-action/call-to-action.component";

@Component({
  selector: 'app-blog-suggestions',
  imports: [RouterLink, CallToActionComponent],
  templateUrl: './blog-suggestions.component.html',
  styleUrl: './blog-suggestions.component.scss'
})
export class BlogSuggestionsComponent {

}
