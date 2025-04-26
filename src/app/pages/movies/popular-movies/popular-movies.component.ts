import { Component, inject } from '@angular/core';
import { PopularMoviesService } from './service/popular-movies.service';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { MoviesComponent } from '../shared/component/movies.component';

@Component({
  selector: 'app-popular-movies',
  imports: [MoviesComponent],
  templateUrl: './popular-movies.component.html',
  providers: [PopularMoviesService]
})
export class PopularMoviesComponent extends MoviesTvSeriesActorsDirective<Movie> {
  public readonly service: PopularMoviesService = inject(PopularMoviesService);
}
