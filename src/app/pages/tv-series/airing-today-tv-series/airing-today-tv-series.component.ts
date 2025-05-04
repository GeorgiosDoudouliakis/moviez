import { Component, inject } from '@angular/core';
import { AiringTodayTvSeriesService } from './service/airing-today-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-airing-today-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [AiringTodayTvSeriesService]
})
export class AiringTodayTvSeriesComponent extends MoviesTvSeriesActorsDirective {
  public title: string = 'AIRING TODAY TV SERIES';
  public readonly service: AiringTodayTvSeriesService = inject(AiringTodayTvSeriesService);
}
