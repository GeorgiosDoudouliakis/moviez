import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';

@Injectable()
export class NowPlayingMoviesService implements MoviesTvSeriesActorsListService<Movie> {
  constructor(private _httpClient: HttpClient) {}

  public items$(page: number): Observable<BaseResponse<Movie>> {
    return this._httpClient.get<BaseResponse<Movie>>(`https://api.themoviedb.org/3/movie/now_playing?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US&page=${page}`).pipe(
      map((res: BaseResponse<Movie>) => ({
        page: res.page,
        results: res.results.map((movie: Movie) => ({
          ...movie,
          release_date: mapDate(movie.release_date),
          vote_average: mapVoteAverage(movie.vote_average)
        })),
        total_pages: res.total_pages,
        total_results: res.total_results
      }))
    )
  }
}
