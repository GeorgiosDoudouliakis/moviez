import { Injectable } from '@angular/core';
import { MovieDetails } from '../interfaces/movie-details.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { mapDate } from '@core/helpers/map-date.helper';

@Injectable()
export class MovieMapperService {
  public mapMovieDetails(movieDetails: MovieDetails): MovieDetails {
    return {
      ...movieDetails,
      poster_path: movieDetails.poster_path ? mapImagePath(185, movieDetails.poster_path) : "",
      release_date: mapDate(movieDetails.release_date),
    }
  }
}
