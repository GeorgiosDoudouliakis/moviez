import { Component, inject } from '@angular/core';
import { PopularTvSeriesService } from './service/popular-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';

@Component({
  selector: 'app-popular-tv-series',
  imports: [],
  templateUrl: './popular-tv-series.component.html',
  providers: [PopularTvSeriesService]
})
export class PopularTvSeriesComponent extends MoviesTvSeriesActorsDirective<TvSerie> {
  public readonly service: PopularTvSeriesService = inject(PopularTvSeriesService);
}
