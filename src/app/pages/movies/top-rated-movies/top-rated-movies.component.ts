import { Component, inject } from '@angular/core';
import { TopRatedMoviesService } from './service/top-rated-movies.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-top-rated-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [TopRatedMoviesService]
})
export class TopRatedMoviesComponent extends MoviesTvSeriesActorsDirective {
  public title: string = 'TOP RATED MOVIES';
  public readonly service: TopRatedMoviesService = inject(TopRatedMoviesService);
}
