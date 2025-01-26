import { Injectable } from '@angular/core';
import { TopRatedService } from "../shared/interfaces/top-rated-service.interface";
import { map, Observable } from "rxjs";
import { TopRatedItemModel } from "../interfaces/top-rated-item-model.interface";
import { HttpClient } from "@angular/common/http";
import { mapVoteAverage } from "@core/helpers/map-vote-average.helper";
import { mapDate } from "@core/helpers/map-date.helper";
import { TopRatedTvSeriesResponse } from "../interfaces/top-rated-tv-series.interface";
import { TvSerie } from "@shared/interfaces/tv-serie.interface";

@Injectable()
export class TopRatedTvSeriesService implements TopRatedService {
    constructor(private _httpClient: HttpClient) {}

    public topRatedItems$(): Observable<TopRatedItemModel[]> {
        return this._httpClient.get<TopRatedTvSeriesResponse>("https://api.themoviedb.org/3/tv/top_rated?api_key=803a77b2748b6f5d6363b4fa92bfd870&page=1").pipe(
            map((res: TopRatedTvSeriesResponse) => res.results),
            map((movies: TvSerie[]) => {
                return movies.map((tvSerie: TvSerie) => ({
                    id: tvSerie.id,
                    title: tvSerie.name,
                    description: tvSerie.overview,
                    rate: mapVoteAverage(tvSerie.vote_average),
                    image: tvSerie.poster_path,
                    releaseDate: mapDate(tvSerie.first_air_date),
                    path: ""
                }));
            })
        );
    }
}
