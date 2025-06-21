import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { TvSeriesDirective } from '../shared/directives/tv-series.directive';
import { TopRatedTvSeriesService } from './service/top-rated-tv-series.service';

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [TopRatedTvSeriesService]
})
export class TopRatedTvSeriesComponent extends TvSeriesDirective {
  public title: string = 'TOP RATED TV SERIES';
  public readonly service: TopRatedTvSeriesService = inject(TopRatedTvSeriesService);
}
