import { Component, inject } from '@angular/core';
import { PopularTvSeriesService } from './service/popular-tv-series.service';
import { ListViewDirective } from '@shared/components/list-view/directive/list-view.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-popular-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [PopularTvSeriesService]
})
export class PopularTvSeriesComponent extends ListViewDirective {
  public title: string = 'POPULAR TV SERIES';
  public readonly service: PopularTvSeriesService = inject(PopularTvSeriesService);
}
