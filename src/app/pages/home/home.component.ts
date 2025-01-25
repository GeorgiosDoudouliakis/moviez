import { Component } from '@angular/core';
import { PopularCelebritiesComponent } from "./components/popular-celebrities/popular-celebrities.component";
import { TopRatedMoviesComponent } from "./components/top-rated-movies/top-rated-movies.component";
import { TopRatedTvSeriesComponent } from "./components/top-rated-tv-series/top-rated-tv-series.component";

@Component({
  selector: 'app-home',
  imports: [
    PopularCelebritiesComponent,
    TopRatedMoviesComponent,
    TopRatedTvSeriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
