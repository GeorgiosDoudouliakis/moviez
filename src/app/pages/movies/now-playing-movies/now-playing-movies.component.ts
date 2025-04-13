import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { MoviesTvSeriesActorsListDirective } from '@shared/directives/movies-tv-series-actors-list/movies-tv-series-actors-list.directive';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { NowPlayingMoviesService } from './service/now-playing-movies.service';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';

@Component({
  selector: 'app-now-playing-movies',
  imports: [GenresComponent, CardComponent, SkeletonComponent],
  templateUrl: './now-playing-movies.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss',
  providers: [NowPlayingMoviesService]
})
export class NowPlayingMoviesComponent extends MoviesTvSeriesActorsListDirective<Movie> {
  public readonly service: NowPlayingMoviesService = inject(NowPlayingMoviesService);
  protected readonly mapDate = mapDate;
  protected readonly mapVoteAverage = mapVoteAverage;
}
