import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-upcoming-movies',
  imports: [GenresComponent],
  templateUrl: './upcoming-movies.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class UpcomingMoviesComponent {}
