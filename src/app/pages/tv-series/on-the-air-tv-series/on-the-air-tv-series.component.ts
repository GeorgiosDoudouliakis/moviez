import { Component, inject } from '@angular/core';
import { OnTheAirTvSeriesService } from './service/on-the-air-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';
import { TvSeriesComponent } from '../shared/component/tv-series.component';

@Component({
  selector: 'app-on-the-air-tv-series',
  imports: [TvSeriesComponent],
  templateUrl: './on-the-air-tv-series.component.html',
  providers: [OnTheAirTvSeriesService]
})
export class OnTheAirTvSeriesComponent extends MoviesTvSeriesActorsDirective<TvSerie> {
  public readonly service: OnTheAirTvSeriesService = inject(OnTheAirTvSeriesService);
}
