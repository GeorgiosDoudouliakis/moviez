import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { NowPlayingMoviesService } from './service/now-playing-movies.service';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series/movies-tv-series.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-now-playing-movies',
  imports: [GenresComponent, CardComponent, SkeletonComponent, UpperCasePipe],
  templateUrl: '../shared/directives/movies.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss',
  providers: [NowPlayingMoviesService]
})
export class NowPlayingMoviesComponent extends MoviesTvSeriesDirective<Movie> {
  public title: string = 'now playing movies';
  public readonly service: NowPlayingMoviesService = inject(NowPlayingMoviesService);
}
