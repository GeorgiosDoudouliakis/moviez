import { Injectable } from '@angular/core';
import { TopRatedService } from "../../../shared/interfaces/top-rated-service.interface";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Movie, MoviesResponse } from "@shared/interfaces/movies-response.interface";
import { Card } from '@shared/components/card/interface/card.interface';
import { TopRatedMoviesMapperService } from './top-rated-movies-mapper.service';

@Injectable()
export class TopRatedMoviesService implements TopRatedService {
    constructor(
      private readonly _httpClient: HttpClient,
      private readonly _mapperService: TopRatedMoviesMapperService
    ) {}

    public topRatedItems$(): Observable<Card[]> {
        return this._httpClient.get<MoviesResponse>("https://api.themoviedb.org/3/movie/top_rated?api_key=803a77b2748b6f5d6363b4fa92bfd870&page=1").pipe(
            map((res: MoviesResponse) => res.results),
            map((movies: Movie[]) => this._mapperService.mapTopRatedMovies(movies))
        )
    }
}
