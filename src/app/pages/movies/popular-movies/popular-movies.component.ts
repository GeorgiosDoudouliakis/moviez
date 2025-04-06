import { Component } from '@angular/core';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series.directive';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-popular-movies',
  imports: [GenresComponent, UpperCasePipe],
  templateUrl: '../../../shared/directives/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series.directive.scss'
})
export class PopularMoviesComponent extends MoviesTvSeriesDirective {
  public title: string = "popular movies";
  public genresType: "movie" | "tv" = "movie";
}
