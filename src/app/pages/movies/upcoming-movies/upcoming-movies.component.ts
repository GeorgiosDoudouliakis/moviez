import { Component } from '@angular/core';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series/movies-tv-series.directive';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-upcoming-movies',
  imports: [GenresComponent],
  templateUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class UpcomingMoviesComponent extends MoviesTvSeriesDirective {
  public title: string = "upcoming movies";
  public genresType: "movie" | "tv" = "movie";
}
