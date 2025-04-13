import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-popular-movies',
  imports: [GenresComponent],
  templateUrl: './popular-movies.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class PopularMoviesComponent {}
