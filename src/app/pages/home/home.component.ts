import { Component } from '@angular/core';
import { TopRatedMoviesComponent } from "./components/top-rated-movies/top-rated-movies.component";
import { TopRatedTvSeriesComponent } from "./components/top-rated-tv-series/top-rated-tv-series.component";

@Component({
  selector: 'app-home',
  imports: [
    TopRatedMoviesComponent,
    TopRatedTvSeriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
