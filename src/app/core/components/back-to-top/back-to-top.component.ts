import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, viewChild } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
  providers: [{ provide: Window, useValue: window }]
})
export class BackToTopComponent implements AfterViewInit, OnDestroy {
  public backToTopBtnRef = viewChild<ElementRef>("backToTopBtn");

  constructor(private _window: Window, private _renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    this._window.addEventListener("scroll", () => this._onWindowScroll());
  }

  public ngOnDestroy(): void {
    this._window.removeEventListener("scroll", this._onWindowScroll);
  }

  public goToTop(): void {
    this._window.scrollTo(0, 0);
  }

  private _onWindowScroll(): void {
    if(this._window.scrollY > 500) {
      this._renderer.setStyle(this.backToTopBtnRef()?.nativeElement, "top", "100px");
    } else {
      this._renderer.setStyle(this.backToTopBtnRef()?.nativeElement, "top", "-100px");
    }
  }
}
