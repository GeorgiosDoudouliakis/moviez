import { Component } from '@angular/core';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series.directive';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-on-the-air-tv-series',
  imports: [GenresComponent, UpperCasePipe],
  templateUrl: '../../../shared/directives/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series.directive.scss'
})
export class OnTheAirTvSeriesComponent extends MoviesTvSeriesDirective {
  public title: string = "on the air tv series";
  public genresType: "movie" | "tv" = "tv";
}
