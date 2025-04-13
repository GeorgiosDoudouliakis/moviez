import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { PopularMoviesService } from './service/popular-movies.service';
import { MoviesTvSeriesActorsListDirective } from '@shared/directives/movies-tv-series-actors-list/movies-tv-series-actors-list.directive';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';

@Component({
  selector: 'app-popular-movies',
  imports: [GenresComponent, CardComponent, SkeletonComponent],
  templateUrl: './popular-movies.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss',
  providers: [PopularMoviesService]
})
export class PopularMoviesComponent extends MoviesTvSeriesActorsListDirective<Movie> {
  public readonly service: PopularMoviesService = inject(PopularMoviesService);
  protected readonly mapDate = mapDate;
  protected readonly mapVoteAverage = mapVoteAverage;
}
