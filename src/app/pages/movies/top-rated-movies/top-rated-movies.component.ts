import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { TopRatedMoviesService } from './service/top-rated-movies.service';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { UpperCasePipe } from '@angular/common';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';

@Component({
  selector: 'app-top-rated-movies',
  imports: [GenresComponent, CardComponent, SkeletonComponent, UpperCasePipe],
  templateUrl: '../shared/directives/movies.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss',
  providers: [TopRatedMoviesService]
})
export class TopRatedMoviesComponent extends MoviesTvSeriesActorsDirective<Movie> {
  public title: string = 'top rated movies';
  public readonly service: TopRatedMoviesService = inject(TopRatedMoviesService);
}
