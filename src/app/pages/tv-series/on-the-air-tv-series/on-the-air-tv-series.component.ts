import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { TvSeriesDirective } from '../shared/directives/tv-series.directive';
import { OnTheAirTvSeriesService } from './service/on-the-air-tv-series.service';

@Component({
  selector: 'app-on-the-air-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [OnTheAirTvSeriesService]
})
export class OnTheAirTvSeriesComponent extends TvSeriesDirective {
  public title: string = 'ON THE AIR TV SERIES';
  public readonly service: OnTheAirTvSeriesService = inject(OnTheAirTvSeriesService);
}
