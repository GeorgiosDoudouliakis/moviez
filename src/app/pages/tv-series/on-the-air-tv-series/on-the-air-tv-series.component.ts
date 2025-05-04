import { Component, inject } from '@angular/core';
import { OnTheAirTvSeriesService } from './service/on-the-air-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-on-the-air-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [OnTheAirTvSeriesService]
})
export class OnTheAirTvSeriesComponent extends MoviesTvSeriesActorsDirective {
  public title: string = 'ON THE AIR TV SERIES';
  public readonly service: OnTheAirTvSeriesService = inject(OnTheAirTvSeriesService);
}
