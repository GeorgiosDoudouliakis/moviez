import { Component, Inject, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule, DOCUMENT } from "@angular/common";
import { SearchComponent } from '@core/components/search/search.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    CommonModule,
    RouterLinkActive,
    SearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isMobileMenuActive: WritableSignal<boolean> = signal<boolean>(false);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public handleMobileMenuVisibility(): void {
    this.isMobileMenuActive.set(!this.isMobileMenuActive());
    this.document.body.style.overflow = this.isMobileMenuActive() ? "hidden" : "auto";
  }
}
