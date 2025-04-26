import { Component, inject } from '@angular/core';
import { UpcomingMoviesService } from './service/upcoming-movies.service';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { MoviesComponent } from '../shared/component/movies.component';

@Component({
  selector: 'app-upcoming-movies',
  imports: [MoviesComponent],
  templateUrl: './upcoming-movies.component.html',
  providers: [UpcomingMoviesService]
})
export class UpcomingMoviesComponent extends MoviesTvSeriesActorsDirective<Movie> {
  public readonly service: UpcomingMoviesService = inject(UpcomingMoviesService);
}
