import { Component, input, InputSignal } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Card } from '@shared/components/card/interface/card.interface';

@Component({
  selector: 'app-card',
  imports: [NgClass, RouterLink],
  templateUrl: './card.component.html'
})
export class CardComponent {
  public card: InputSignal<Card> = input.required<Card>();
  public titleAriaLevel: InputSignal<2 | 3 | 4 | 5 | 6> = input<2 | 3 | 4 | 5 | 6>(3);
  public direction: InputSignal<"vertical" | "horizontal"> = input<"vertical" | "horizontal">("vertical");
}
