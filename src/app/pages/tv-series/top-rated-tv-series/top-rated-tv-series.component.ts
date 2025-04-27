import { Component, inject } from '@angular/core';
import { TopRatedTvSeriesService } from './service/top-rated-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [],
  templateUrl: './top-rated-tv-series.component.html',
  providers: [TopRatedTvSeriesService]
})
export class TopRatedTvSeriesComponent extends MoviesTvSeriesActorsDirective<TvSerie> {
  public readonly service: TopRatedTvSeriesService = inject(TopRatedTvSeriesService);
}
