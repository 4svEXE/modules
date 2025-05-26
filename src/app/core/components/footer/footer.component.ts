import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TelegramService } from '../../../shared/services/telegram.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  EMAIL = environment.EMAIL;
  PHONE = environment.PHONE;
  ADRESS = environment.ADRESS;

  loading = false;
  isSent = false;
  message = '';

  constructor(private telegramService: TelegramService) { }

  submitEmailForm(form: NgForm): void {
    if (form.valid) {
      this.loading = true;

      const { email } = form.value;

      const msg = `Нова підписка на розсилку:\n📧: ${email}`;

      // Використовуємо EmailService для відправки email
      this.telegramService.sendOrderNotification(msg).subscribe({
        next: () => {
          this.message = '✅ email ok!';
          form.reset();
        },
        error: () => {
          this.message = '❌ error.';
        },
        complete: () => {
          this.loading = false;
          this.isSent = true;
        }
      });
    }
  }
}
