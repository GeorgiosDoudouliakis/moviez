import { Injectable } from '@angular/core';
import { TopRatedService } from "../../../shared/interfaces/top-rated-service.interface";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Movie, MoviesResponse } from "@shared/interfaces/movies-response.interface";
import { mapVoteAverage } from "@core/helpers/map-vote-average.helper";
import { mapDate } from "@core/helpers/map-date.helper";
import { EncodingUtilities } from "@core/utilities/encoding.utilities";
import { Card } from '@shared/components/card/interface/card.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';

@Injectable()
export class TopRatedMoviesService implements TopRatedService {
    constructor(private readonly _httpClient: HttpClient) {}

    public topRatedItems$(): Observable<Card[]> {
        return this._httpClient.get<MoviesResponse>("https://api.themoviedb.org/3/movie/top_rated?api_key=803a77b2748b6f5d6363b4fa92bfd870&page=1").pipe(
            map((res: MoviesResponse) => res.results),
            map((movies: Movie[]) => {
                return movies.map((movie: Movie) => ({
                    id: movie.id,
                    title: movie.title,
                    imageSrc: movie.poster_path ? mapImagePath(185, movie.poster_path) : null,
                    topRightContent: `${mapVoteAverage(movie.vote_average)}`,
                    details: [`${mapDate(movie.release_date)}`],
                    path: `/movies/${EncodingUtilities.encodeIdNameParam(movie.id, movie.title)}`
                }));
            })
        )
    }
}
