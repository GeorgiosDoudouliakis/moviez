import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Movie } from '@shared/interfaces/movies-response.interface';

@Injectable()
export class NowPlayingMoviesService implements MoviesTvSeriesActorsListService<Movie> {
  constructor(private _httpClient: HttpClient) {}

  public items$(page: number): Observable<BaseResponse<Movie>> {
    return this._httpClient.get<BaseResponse<Movie>>(`https://api.themoviedb.org/3/movie/now_playing?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US&page=${page}`)
  }
}
