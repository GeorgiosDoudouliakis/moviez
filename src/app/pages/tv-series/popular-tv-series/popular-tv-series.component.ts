import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-popular-tv-series',
  imports: [GenresComponent],
  templateUrl: './popular-tv-series.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class PopularTvSeriesComponent {}
