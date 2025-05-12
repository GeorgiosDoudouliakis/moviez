import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details.interface';
import { MovieMapperService } from './movie-mapper.service';

@Injectable()
export class MovieService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _mapperService: MovieMapperService
  ) {}

  public movieDetails$(moviedId: number): Observable<MovieDetails> {
    return this._httpClient.get<MovieDetails>(`https://api.themoviedb.org/3/movie/${moviedId}?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-U`).pipe(
      map((movieDetails: MovieDetails) => this._mapperService.mapMovieDetails(movieDetails)),
    )
  }
}
