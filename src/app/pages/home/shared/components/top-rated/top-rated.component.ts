import { Component, input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { TopRatedItemComponent } from "../top-rated-item/top-rated-item.component";
import { TopRatedItemModel } from "../../../interfaces/top-rated-item-model.interface";

@Component({
  selector: 'app-top-rated',
  imports: [
    LoaderComponent,
    TopRatedItemComponent,
    RouterLink
  ],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.scss'
})
export class TopRatedComponent {
  public type = input.required<"Movies" | "Tv Series">();
  public items = input.required<TopRatedItemModel[]>();
  public loading = input.required<boolean>();
  public showAllPath = input.required<string>();

  constructor(private _router: Router) {}

  public goToItem(item: TopRatedItemModel): void {
    // TODO
  }
}
