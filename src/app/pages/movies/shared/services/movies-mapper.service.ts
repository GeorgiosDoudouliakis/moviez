import { Injectable } from '@angular/core';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';
import { Card } from '@shared/components/card/interface/card.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { EncodingUtilities } from '@core/utilities/encoding.utilities';

@Injectable()
export class MoviesMapperService {
  public mapMovies(movies: BaseResponse<Movie>): BaseResponse<Card> {
    return {
      page: movies.page,
      results: movies.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        imageSrc: movie.poster_path ? mapImagePath(185, movie.poster_path) : null,
        topRightContent: `${mapVoteAverage(movie.vote_average)}`,
        details: [
          `${mapDate(movie.release_date)}`,
          movie.vote_count ? `Votes: ${movie.vote_count}` : 'No votes yet',
        ],
        path: `/movies/${EncodingUtilities.encodeIdNameParam(movie.id, movie.title)}`
      })),
      total_pages: movies.total_pages,
      total_results: movies.total_results
    };
  }
}
