import { Component } from '@angular/core';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series.directive';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-top-rated-movies',
  imports: [GenresComponent],
  templateUrl: '../../../shared/directives/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series.directive.scss'
})
export class TopRatedMoviesComponent extends MoviesTvSeriesDirective {
  public title: string = "top rated movies";
  public genresType: "movie" | "tv" = "movie";
}
