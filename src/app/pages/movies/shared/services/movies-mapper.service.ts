import { Injectable } from '@angular/core';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';

@Injectable()
export class MoviesMapperService {
  public mapMovies(movies: BaseResponse<Movie>): BaseResponse<Movie> {
    return {
      page: movies.page,
      results: movies.results.map((movie: Movie) => ({
        ...movie,
        release_date: mapDate(movie.release_date),
        vote_average: mapVoteAverage(movie.vote_average)
      })),
      total_pages: movies.total_pages,
      total_results: movies.total_results
    };
  }
}
