import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-top-rated-movies',
  imports: [GenresComponent],
  templateUrl: './top-rated-movies.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class TopRatedMoviesComponent {}
