import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series/movies-tv-series.directive';

@Component({
  selector: 'app-popular-tv-series',
  imports: [GenresComponent],
  templateUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class PopularTvSeriesComponent extends MoviesTvSeriesDirective {
  public title: string = "popular tv series";
  public genresType: "movie" | "tv" = "tv";
}
