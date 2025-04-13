import { Injectable } from '@angular/core';
import { TopRatedService } from "../shared/interfaces/top-rated-service.interface";
import { map, Observable } from "rxjs";
import { TopRatedItemModel } from "../shared/interfaces/top-rated-item-model.interface";
import { HttpClient } from "@angular/common/http";
import { Movie, MoviesResponse } from "@shared/interfaces/movies-response.interface";
import { mapVoteAverage } from "@core/helpers/map-vote-average.helper";
import { mapDate } from "@core/helpers/map-date.helper";
import { EncodingUtilities } from "@core/utilities/encoding.utilities";

@Injectable()
export class TopRatedMoviesService implements TopRatedService {
    constructor(private _httpClient: HttpClient) {}

    public topRatedItems$(): Observable<TopRatedItemModel[]> {
        return this._httpClient.get<MoviesResponse>("https://api.themoviedb.org/3/movie/top_rated?api_key=803a77b2748b6f5d6363b4fa92bfd870&page=1").pipe(
            map((res: MoviesResponse) => res.results),
            map((movies: Movie[]) => {
                return movies.map((movie: Movie) => ({
                    id: movie.id,
                    title: movie.title,
                    description: movie.overview,
                    rate: mapVoteAverage(movie.vote_average),
                    image: movie.poster_path,
                    releaseDate: mapDate(movie.release_date),
                    path: `/movies/${EncodingUtilities.encodeIdNameParam(movie.id, movie.title)}`
                }));
            })
        )
    }
}
