import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TopRatedDirective } from "../../directives/top-rated.directive";
import { LoaderComponent } from "@shared/components/loader/loader.component";

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [RouterLink, LoaderComponent],
  templateUrl: '../../directives/top-rated.directive.html',
  styleUrl: '../../directives/top-rated.directive.scss'
})
export class TopRatedTvSeriesComponent extends TopRatedDirective {
  public title: string = "Top rated tv series";
  public showAllPath: string = "";
}
