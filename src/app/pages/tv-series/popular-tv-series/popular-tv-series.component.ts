import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-popular-tv-series',
  imports: [GenresComponent, UpperCasePipe],
  templateUrl: '../../../shared/directives/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series.directive.scss'
})
export class PopularTvSeriesComponent extends MoviesTvSeriesDirective {
  public title: string = "popular tv series";
  public genresType: "movie" | "tv" = "tv";
}
