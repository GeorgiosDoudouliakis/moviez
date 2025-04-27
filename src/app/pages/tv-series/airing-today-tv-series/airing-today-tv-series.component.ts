import { Component, inject } from '@angular/core';
import { AiringTodayTvSeriesService } from './service/airing-today-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';

@Component({
  selector: 'app-airing-today-tv-series',
  imports: [],
  templateUrl: './airing-today-tv-series.component.html',
  providers: [AiringTodayTvSeriesService]
})
export class AiringTodayTvSeriesComponent extends MoviesTvSeriesActorsDirective<TvSerie> {
  public readonly service: AiringTodayTvSeriesService = inject(AiringTodayTvSeriesService);
}
