import { Component, inject } from '@angular/core';
import { TopRatedMoviesService } from './service/top-rated-movies.service';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { MoviesComponent } from '../shared/component/movies.component';

@Component({
  selector: 'app-top-rated-movies',
  imports: [MoviesComponent],
  templateUrl: './top-rated-movies.component.html',
  providers: [TopRatedMoviesService]
})
export class TopRatedMoviesComponent extends MoviesTvSeriesActorsDirective<Movie> {
  public readonly service: TopRatedMoviesService = inject(TopRatedMoviesService);
}
