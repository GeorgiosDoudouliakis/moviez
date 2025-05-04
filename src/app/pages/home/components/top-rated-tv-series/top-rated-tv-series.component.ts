import { Component, inject } from '@angular/core';
import { TopRatedDirective } from "../../shared/directives/top-rated.directive";
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { TopRatedTvSeriesService } from "./services/top-rated-tv-series.service";
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";
import { CardComponent } from "@shared/components/card/card.component";
import { TopRatedTvSeriesMapperService } from './services/top-rated-tv-series-mapper.service';

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [SectionHeaderComponent, CardComponent, SkeletonComponent],
  templateUrl: '../../shared/directives/top-rated.directive.html',
  styleUrl: '../../shared/directives/top-rated.directive.scss',
  providers: [TopRatedTvSeriesService, TopRatedTvSeriesMapperService]
})
export class TopRatedTvSeriesComponent extends TopRatedDirective {
  public title: string = "top rated tv series";
  public showAllPath: string = "tv-series";
  public showAllLinkText: string = "View all tv series";
  protected readonly service: TopRatedTvSeriesService = inject(TopRatedTvSeriesService);
}
