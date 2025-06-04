import { CommonModule } from '@angular/common';

import { Component, Input } from '@angular/core';
import { ModalService } from './modal.service';
import { discountLabel } from '../../../shared/misc/prices';
// import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
// import { SocialLinksComponent } from '../../components/social-links/social-links.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title = '';

  isModalOpen: boolean = false;

  discountLabel = discountLabel;
  constructor(public modalService: ModalService) { }


  ngOnInit() {
    this.modalService.modalStatus$.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
    });
  }

  closeModal() {
    this.modalService.close();
  }

  openModal() {
    this.modalService.open();
  }

  onBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Закрити модальне вікно, якщо клік зроблено саме на фон (modal-wrapper)
    if (target.classList.contains('modal-wrapper')) {
      this.closeModal();
    }
  }

}
