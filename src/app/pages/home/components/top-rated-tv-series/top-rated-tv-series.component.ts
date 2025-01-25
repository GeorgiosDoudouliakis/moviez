import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TopRatedDirective } from "../../shared/directives/top-rated.directive";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { TopRatedTvSeriesService } from "../../services/top-rated-tv-series.service";
import { TopRatedType } from "../../shared/enums/top-rated-type.enum";

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [RouterLink, LoaderComponent],
  templateUrl: '../../shared/directives/top-rated.directive.html',
  styleUrl: '../../shared/directives/top-rated.directive.scss',
  providers: [TopRatedTvSeriesService]
})
export class TopRatedTvSeriesComponent extends TopRatedDirective {
  public type: TopRatedType = TopRatedType.TV_SERIES;
  public showAllPath: string = "";
  protected service: TopRatedTvSeriesService = inject(TopRatedTvSeriesService);
}
