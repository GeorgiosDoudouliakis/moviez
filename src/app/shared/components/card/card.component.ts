import { Component, input } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
import { mapImagePath } from '@core/helpers/map-image-path.helper';

@Component({
  selector: 'app-card',
  imports: [NgClass, RouterLink],
  templateUrl: './card.component.html'
})
export class CardComponent {
  public title = input.required<string>();
  public titleAriaLevel = input<2 | 3 | 4 | 5 | 6>(3);
  public cardLink = input<string>();
  public imageSrc = input<string>('');
  public imageAlt = input<string>();
  public direction = input<"vertical" | "horizontal">("vertical");
  public topRightContent = input<string>();
  protected readonly mapImagePath = mapImagePath;
}
