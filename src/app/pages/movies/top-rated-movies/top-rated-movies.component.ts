import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { TopRatedMoviesService } from './service/top-rated-movies.service';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';

@Component({
  selector: 'app-top-rated-movies',
  imports: [GenresComponent, CardComponent, SkeletonComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss',
  providers: [TopRatedMoviesService]
})
export class TopRatedMoviesComponent extends MoviesTvSeriesActorsDirective<Movie> {
  public title: string = 'TOP RATED MOVIES';
  public readonly service: TopRatedMoviesService = inject(TopRatedMoviesService);
  protected readonly mapDate = mapDate;
  protected readonly mapVoteAverage = mapVoteAverage;
}
