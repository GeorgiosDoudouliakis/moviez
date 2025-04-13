import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-now-playing-movies',
  imports: [GenresComponent],
  templateUrl: './now-playing-movies.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class NowPlayingMoviesComponent {}
