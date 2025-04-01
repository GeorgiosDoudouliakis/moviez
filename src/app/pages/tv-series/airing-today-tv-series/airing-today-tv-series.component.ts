import { Component } from '@angular/core';
import { GenresComponent } from "@shared/components/genres/genres.component";

@Component({
  selector: 'app-airing-today-tv-series',
    imports: [
        GenresComponent
    ],
  templateUrl: './airing-today-tv-series.component.html',
  styleUrl: '../../../shared/directives/movies-tv-series-view.directive.scss'
})
export class AiringTodayTvSeriesComponent {

}
