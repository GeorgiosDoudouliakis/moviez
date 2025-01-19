import { Component, input } from '@angular/core';
import { TopRatedItemModel } from "../../../interfaces/top-rated-item-model.interface";

@Component({
  selector: 'app-top-rated-item',
  templateUrl: './top-rated-item.component.html',
  styleUrl: './top-rated-item.component.scss'
})
export class TopRatedItemComponent {
  public item = input.required<TopRatedItemModel>();
}
