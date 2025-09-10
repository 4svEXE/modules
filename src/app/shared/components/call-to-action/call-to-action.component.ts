import { Component, Input } from '@angular/core';
import { EmailModalComponent } from "../email-modal/email-modal.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-call-to-action',
  imports: [EmailModalComponent, CommonModule, TranslateModule],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss',
  standalone: true
})
export class CallToActionComponent {
  @Input() link = '#contact-form'
  @Input() title = ''
  @Input() text = ''
  @Input() isGetPDF = false;

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    console.log(this.isModalOpen)
  }
}
