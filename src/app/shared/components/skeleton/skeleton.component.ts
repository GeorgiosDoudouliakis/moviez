import { Component, HostBinding, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  public height: InputSignal<string> = input.required<string>();
  @HostBinding('style.height') get loaderHeight(): string {
    return this.height();
  }
}
