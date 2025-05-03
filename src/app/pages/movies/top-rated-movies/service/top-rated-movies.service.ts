import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesMapperService } from '../../shared/services/movies-mapper.service';
import { Card } from '@shared/components/card/interface/card.interface';

@Injectable()
export class TopRatedMoviesService implements MoviesTvSeriesActorsListService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _mapperService: MoviesMapperService
  ) {}

  public items$(page: number): Observable<BaseResponse<Card>> {
    return this._httpClient.get<BaseResponse<Movie>>(`https://api.themoviedb.org/3/movie/top_rated?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US&page=${page}`).pipe(
      map((res: BaseResponse<Movie>) => this._mapperService.mapMovies(res))
    )
  }
}
