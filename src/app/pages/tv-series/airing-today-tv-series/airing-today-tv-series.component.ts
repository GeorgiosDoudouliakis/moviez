import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { TvSeriesDirective } from '../shared/directives/tv-series.directive';
import { AiringTodayTvSeriesService } from './service/airing-today-tv-series.service';

@Component({
  selector: 'app-airing-today-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [AiringTodayTvSeriesService]
})
export class AiringTodayTvSeriesComponent extends TvSeriesDirective {
  public title: string = 'AIRING TODAY TV SERIES';
  public readonly service: AiringTodayTvSeriesService = inject(AiringTodayTvSeriesService);
}
