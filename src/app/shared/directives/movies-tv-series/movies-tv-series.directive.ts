import { Directive } from '@angular/core';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';

@Directive()
export abstract class MoviesTvSeriesDirective<ItemType> extends MoviesTvSeriesActorsDirective<ItemType> {
  protected readonly mapDate: (date: string) => string = mapDate;
  protected readonly mapVoteAverage: (avg: number) => number = mapVoteAverage;
}
