import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [GenresComponent, UpperCasePipe],
  templateUrl: '../../../shared/directives/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series.directive.scss'
})
export class TopRatedTvSeriesComponent extends MoviesTvSeriesDirective {
  public title: string = "top rated tv series";
  public genresType: "movie" | "tv" = "tv";
}
