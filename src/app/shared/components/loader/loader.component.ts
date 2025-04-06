import { Component, HostBinding, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  public height: InputSignal<string> = input.required<string>();
  @HostBinding('style.height') get loaderHeight(): string {
    return this.height();
  }
}
