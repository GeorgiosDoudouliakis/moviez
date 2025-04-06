import { Component, inject } from '@angular/core';
import { TopRatedDirective } from "../../shared/directives/top-rated.directive";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { TopRatedTvSeriesService } from "../../services/top-rated-tv-series.service";
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";
import { CardComponent } from "@shared/components/card/card.component";

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [SectionHeaderComponent, CardComponent, LoaderComponent],
  templateUrl: '../../shared/directives/top-rated.directive.html',
  styleUrl: '../../shared/directives/top-rated.directive.scss',
  providers: [TopRatedTvSeriesService]
})
export class TopRatedTvSeriesComponent extends TopRatedDirective {
  public title: string = "top rated tv series";
  public showAllPath: string = "tv-series";
  public showAllLinkText: string = "View all tv series";
  protected service: TopRatedTvSeriesService = inject(TopRatedTvSeriesService);
}
