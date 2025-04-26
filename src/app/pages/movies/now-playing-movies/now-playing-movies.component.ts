import { Component, inject } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { NowPlayingMoviesService } from './service/now-playing-movies.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { MoviesComponent } from '../shared/component/movies.component';

@Component({
  selector: 'app-now-playing-movies',
  imports: [MoviesComponent],
  templateUrl: './now-playing-movies.component.html',
  providers: [NowPlayingMoviesService]
})
export class NowPlayingMoviesComponent extends MoviesTvSeriesActorsDirective<Movie> {
  public readonly service: NowPlayingMoviesService = inject(NowPlayingMoviesService);
}
