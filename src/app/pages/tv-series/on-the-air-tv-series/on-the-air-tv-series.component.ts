import { Component, inject } from '@angular/core';
import { OnTheAirTvSeriesService } from './service/on-the-air-tv-series.service';
import { ListViewDirective } from '@shared/components/list-view/directive/list-view.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-on-the-air-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [OnTheAirTvSeriesService]
})
export class OnTheAirTvSeriesComponent extends ListViewDirective {
  public title: string = 'ON THE AIR TV SERIES';
  public readonly service: OnTheAirTvSeriesService = inject(OnTheAirTvSeriesService);
}
