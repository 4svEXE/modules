import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private botToken = '8179353299:AAGpUvVYpPMRhwQydkqBK2qbukcwSlvBcwQ';
  private chatId = '-1002267943990';
  private apiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
  // https://api.telegram.org/bot8179353299:AAGpUvVYpPMRhwQydkqBK2qbukcwSlvBcwQ/getUpdates

  constructor(private http: HttpClient) { }

  sendOrderNotification(orderDetails: string): Observable<any> {
    const message = `📦 Нове повідомлення!\n${orderDetails}`;

    console.log('message :>> ', message);
    const payload = {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'Markdown',
    };
    return this.http.post(this.apiUrl, payload);
  }

  sendPDFNotification(msg: string): Observable<any> {
    const message = `📦 Нове повідомлення!\n${msg}`;

    console.log('message :>> ', message);
    const payload = {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'Markdown',
    };

    return this.http.post(this.apiUrl, payload);
  }
}
