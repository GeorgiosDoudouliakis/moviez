import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { TopRatedMoviesService } from './service/top-rated-movies.service';
import { MoviesDirective } from '../shared/directives/movies.directive';

@Component({
  selector: 'app-top-rated-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [TopRatedMoviesService]
})
export class TopRatedMoviesComponent extends MoviesDirective {
  public title: string = 'TOP RATED MOVIES';
  public readonly service: TopRatedMoviesService = inject(TopRatedMoviesService);
}
