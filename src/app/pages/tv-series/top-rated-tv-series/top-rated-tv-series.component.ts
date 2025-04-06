import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series.directive';

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [GenresComponent],
  templateUrl: '../../../shared/directives/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series.directive.scss'
})
export class TopRatedTvSeriesComponent extends MoviesTvSeriesDirective {
  public title: string = "top rated tv series";
  public genresType: "movie" | "tv" = "tv";
}
