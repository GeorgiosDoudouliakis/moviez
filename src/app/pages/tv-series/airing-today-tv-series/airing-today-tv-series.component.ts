import { Component, inject } from '@angular/core';
import { AiringTodayTvSeriesService } from './service/airing-today-tv-series.service';
import { ListViewDirective } from '@shared/components/list-view/directive/list-view.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-airing-today-tv-series',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/tv-series.directive.html',
  providers: [AiringTodayTvSeriesService]
})
export class AiringTodayTvSeriesComponent extends ListViewDirective {
  public title: string = 'AIRING TODAY TV SERIES';
  public readonly service: AiringTodayTvSeriesService = inject(AiringTodayTvSeriesService);
}
