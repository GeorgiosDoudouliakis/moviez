import { Component, input, InputSignal } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
import { mapImagePath } from '@core/helpers/map-image-path.helper';

@Component({
  selector: 'app-card',
  imports: [NgClass, RouterLink],
  templateUrl: './card.component.html'
})
export class CardComponent {
  public title: InputSignal<string> = input.required<string>();
  public titleAriaLevel: InputSignal<2 | 3 | 4 | 5 | 6> = input<2 | 3 | 4 | 5 | 6>(3);
  public cardLink: InputSignal<string | undefined> = input<string>();
  public imageSrc: InputSignal<string> = input<string>('');
  public imageAlt: InputSignal<string | undefined> = input<string>();
  public direction: InputSignal<"vertical" | "horizontal"> = input<"vertical" | "horizontal">("vertical");
  public topRightContent: InputSignal<string | undefined> = input<string>();
  protected readonly mapImagePath: (width: number, posterPath: string) => string = mapImagePath;
}
