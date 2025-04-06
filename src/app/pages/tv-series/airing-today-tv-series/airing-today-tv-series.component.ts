import { Component } from '@angular/core';
import { GenresComponent } from "@shared/components/genres/genres.component";
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-airing-today-tv-series',
  imports: [GenresComponent, UpperCasePipe],
  templateUrl: '../../../shared/directives/movies-tv-series.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series.directive.scss'
})
export class AiringTodayTvSeriesComponent extends MoviesTvSeriesDirective {
  public title: string = "airing today tv series";
  public genresType: "movie" | "tv" = "tv";
}
