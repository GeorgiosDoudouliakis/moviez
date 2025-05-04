import { Component, inject } from '@angular/core';
import { TopRatedTvSeriesService } from './service/top-rated-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [TopRatedTvSeriesService]
})
export class TopRatedTvSeriesComponent extends MoviesTvSeriesActorsDirective {
  public title: string = 'TOP RATED TV SERIES';
  public readonly service: TopRatedTvSeriesService = inject(TopRatedTvSeriesService);
}
