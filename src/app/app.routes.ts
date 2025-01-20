import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/home/home.component").then(c => c.HomeComponent),
    },
    {
        path: "movies",
        loadComponent: () => import("./pages/movies/movies/movies.component").then(c => c.MoviesComponent)
    },
    {
        path: "tv-series",
        loadComponent: () => import("./pages/tv-series/tv-series/tv-series.component").then(c => c.TvSeriesComponent)
    }
];
