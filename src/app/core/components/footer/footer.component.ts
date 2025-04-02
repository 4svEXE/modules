import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarqueeComponent } from "../../../shared/components/marquee/marquee.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, MarqueeComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
