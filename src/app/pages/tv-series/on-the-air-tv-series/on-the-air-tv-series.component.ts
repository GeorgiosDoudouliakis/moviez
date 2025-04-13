import { Component } from '@angular/core';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series/movies-tv-series.directive';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-on-the-air-tv-series',
  imports: [GenresComponent],
  templateUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class OnTheAirTvSeriesComponent extends MoviesTvSeriesDirective {
  public title: string = "on the air tv series";
  public genresType: "movie" | "tv" = "tv";
}
