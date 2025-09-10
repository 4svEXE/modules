import { Component, Input } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { PDF_GUIDE, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../misc/email';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-email-modal',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './email-modal.component.html',
  styleUrl: './email-modal.component.scss'
})
export class EmailModalComponent {
  @Output() close = new EventEmitter<void>();

  @Input() successMessage = ''
  @Input() emptyError = ''
  @Input() formatError = ''
  @Input() sendError = ''

  email = '';
  loading = false;
  success = false;
  error = '';

  PDF_URL = PDF_GUIDE;

  constructor(private telegramService: TelegramService) { }

  sendEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.email) {
      this.error = this.emptyError;
      return;
    }

    if (!emailRegex.test(this.email)) {
      this.error = this.formatError;
      return;
    }

    this.loading = true;
    this.error = '';

    const templateParams = {
      to_email: this.email,
      message: this.successMessage,
      pdf_url: this.PDF_URL,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        this.success = true;
        this.sendTelegramNotification(this.email);
      })
      .catch((err: any) => {
        console.error(err);
        this.error = this.sendError;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  sendTelegramNotification(email: string) {
    const msg = `📄 PDF інструкцію відправлено на email: ${email}`;
    this.telegramService.sendPDFNotification(msg);
  }

  onClose() {
    this.resetState();
    this.close.emit();
  }

  resetState() {
    this.email = '';
    this.error = '';
    this.success = false;
    this.loading = false;
  }


}
