import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/home/home.component").then(c => c.HomeComponent)
    },
    {
        path: "movies",
        loadComponent: () => import("./pages/movies/movies.component").then(c => c.MoviesComponent),
        children: [
          {
            path: "now-playing",
            loadComponent: () => import("./pages/movies/now-playing-movies/now-playing-movies.component").then(c => c.NowPlayingMoviesComponent)
          },
          {
            path: "popular",
            loadComponent: () => import("./pages/movies/popular-movies/popular-movies.component").then(c => c.PopularMoviesComponent)
          },
          {
            path: "top-rated",
            loadComponent: () => import("./pages/movies/top-rated-movies/top-rated-movies.component").then(c => c.TopRatedMoviesComponent)
          },
          {
            path: "upcoming",
            loadComponent: () => import("./pages/movies/upcoming-movies/upcoming-movies.component").then(c => c.UpcomingMoviesComponent)
          },
          {
            path: "",
            redirectTo: "now-playing",
            pathMatch: "full"
          }
        ]
    },
    {
        path: "tv-series",
        loadComponent: () => import("./pages/tv-series/tv-series.component").then(c => c.TvSeriesComponent),
        children: [
          {
            path: "airing-today",
            loadComponent: () => import("./pages/tv-series/airing-today-tv-series/airing-today-tv-series.component").then(c => c.AiringTodayTvSeriesComponent)
          },
          {
            path: "on-the-air",
            loadComponent: () => import("./pages/tv-series/on-the-air-tv-series/on-the-air-tv-series.component").then(c => c.OnTheAirTvSeriesComponent)
          },
          {
            path: "popular",
            loadComponent: () => import("./pages/tv-series/popular-tv-series/popular-tv-series.component").then(c => c.PopularTvSeriesComponent)
          },
          {
            path: "top-rated",
            loadComponent: () => import("./pages/tv-series/top-rated-tv-series/top-rated-tv-series.component").then(c => c.TopRatedTvSeriesComponent)
          },
          {
            path: "",
            redirectTo: "airing-today",
            pathMatch: "full"
          }
        ]
    },
    {
        path: "actors",
        loadComponent: () => import("./pages/actors/actors/actors.component").then(c => c.ActorsComponent)
    }
];
