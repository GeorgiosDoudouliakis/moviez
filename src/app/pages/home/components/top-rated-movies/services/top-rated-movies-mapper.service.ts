import { Injectable } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { Card } from '@shared/components/card/interface/card.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';
import { mapDate } from '@core/helpers/map-date.helper';
import { EncodingUtilities } from '@core/utilities/encoding.utilities';

@Injectable()
export class TopRatedMoviesMapperService {
  public mapTopRatedMovies(movies: Movie[]): Card[] {
    return movies.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      imageSrc: movie.poster_path ? mapImagePath(185, movie.poster_path) : null,
      topRightContent: `${mapVoteAverage(movie.vote_average)}`,
      details: [`${mapDate(movie.release_date)}`],
      path: `/movies/${EncodingUtilities.encodeIdNameParam(movie.id, movie.title)}`
    }));
  }
}
