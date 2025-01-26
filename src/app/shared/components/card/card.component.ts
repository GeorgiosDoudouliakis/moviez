import { Component, input } from '@angular/core';
import { NgClass, NgStyle } from "@angular/common";
import { mapImagePath } from "@core/helpers/map-image-path.helper";
import { CardImage } from "./interface/card-image.interface";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
    imports: [
        NgClass,
        NgStyle,
        RouterLink
    ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public title = input.required<string>();
  public titleAriaLevel = input<2 | 3 | 4 | 5 | 6>(3);
  public cardLink = input<string>();
  public image = input({
        src: "",
        alt: "",
        width: 50
      },
      {
        transform: this.mapPath
      }
  );
  public direction = input<"vertical" | "horizontal">("vertical");
  public imageContent = input<string>();

  public mapPath(image: CardImage): CardImage {
    return {
      ...image,
      src: mapImagePath(185, image.src)
    };
  }
}
