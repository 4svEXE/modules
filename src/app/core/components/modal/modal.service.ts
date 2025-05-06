import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalStatus = new BehaviorSubject<boolean>(false);
  modalStatus$ = this.modalStatus.asObservable();

  open(): void {
    this.modalStatus.next(true);
  }

  close(): void {
    this.modalStatus.next(false);
  }

  toggle(): void {
    this.modalStatus.next(!this.modalStatus.value);
  }

  get isOpen(): boolean {
    return this.modalStatus.value;
  }
}
