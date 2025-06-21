import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { TvSeriesDirective } from '../shared/directives/tv-series.directive';
import { PopularTvSeriesService } from './service/popular-tv-series.service';

@Component({
  selector: 'app-popular-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [PopularTvSeriesService]
})
export class PopularTvSeriesComponent extends TvSeriesDirective {
  public title: string = 'POPULAR TV SERIES';
  public readonly service: PopularTvSeriesService = inject(PopularTvSeriesService);
}
