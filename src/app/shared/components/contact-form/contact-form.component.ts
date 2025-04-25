import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TelegramService } from '../../services/telegram.service';
import { TranslateModule } from '@ngx-translate/core';
import { CallToActionComponent } from "../call-to-action/call-to-action.component";


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, TranslateModule, CallToActionComponent]
})
export class ContactFormComponent {
  contactForm: FormGroup;
  message = '';
  loading = false;
  isSent = false

  constructor(private fb: FormBuilder, private telegramService: TelegramService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required]],
      message: ['']
    });
  }

  onSubmit() {
    this.sendMessage()
  }

  stopLoading(){
    setTimeout(()=>{
      this.loading = false;
      this.isSent = true
    }, 6000)
  }

  sendMessage() {
    if (this.contactForm.invalid) return;

    this.loading = true;
    this.message = '';

    const { name, phone, message } = this.contactForm.value;

    const msg = `👤: ${name}\n📞: ${phone}\n✉️: ${message || '—'}`;

    this.telegramService.sendOrderNotification(msg).subscribe({
      next: () => {
        this.message = '✅ OK!';
        this.contactForm.reset();
      },
      error: () => {
        this.message = '❌ Error.';
      },
      complete: () => {
        this.stopLoading()
      }
    });
  }
}
