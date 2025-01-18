import { Component, input } from '@angular/core';
import { NgClass, NgStyle } from "@angular/common";
import { mapImagePath } from "@core/helpers/map-image-path.helper";
import { CardImage } from "./interface/card-image.interface";

@Component({
  selector: 'app-card',
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public image = input({
        src: "",
        alt: "",
        width: 50
      },
      {
        transform: this.mapPath
      }
  );
  public name = input.required<string>();
  public direction = input<"vertical" | "horizontal">("vertical");

  public mapPath(image: CardImage): CardImage {
    return {
      ...image,
      src: mapImagePath(185, image.src)
    };
  }
}
