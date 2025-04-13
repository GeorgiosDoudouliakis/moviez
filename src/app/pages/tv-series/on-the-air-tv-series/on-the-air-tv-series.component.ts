import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-on-the-air-tv-series',
  imports: [GenresComponent],
  templateUrl: './on-the-air-tv-series.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class OnTheAirTvSeriesComponent {}
