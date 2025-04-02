import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TelegramService } from '../../services/telegram.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactFormComponent {
  contactForm: FormGroup;
  message = '';
  loading =  false;
  isSent = false

  constructor(private fb: FormBuilder, private telegramService: TelegramService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['']
    });
  }

  onSubmit() {
    this.sendMessage()
  }

  sendMessage() {
    if (this.contactForm.invalid) return;

    this.loading = true;
    this.message = '';

    const { name, phone, message } = this.contactForm.value;

    const msg = `📩:\n👤: ${name}\n📞: ${phone}\n✉️: ${message || '—'}`;

    this.telegramService.sendOrderNotification(msg).subscribe({
      next: () => {
        this.message = '✅ Повідомлення надіслано!';
        this.contactForm.reset();
      },
      error: () => {
        this.message = '❌ Помилка надсилання.';
      },
      complete: () => {
        this.loading = false;
        this.isSent = true
      }
    });
  }
}
