import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-now-playing-movies',
  imports: [GenresComponent, UpperCasePipe],
  templateUrl: '../../../shared/directives/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series.directive.scss'
})
export class NowPlayingMoviesComponent extends MoviesTvSeriesDirective {
  public title: string = "now playing movies";
  public genresType: "movie" | "tv" = "movie";
}
