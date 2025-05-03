import { Injectable } from '@angular/core';
import { TopRatedService } from "../../../shared/interfaces/top-rated-service.interface";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { mapVoteAverage } from "@core/helpers/map-vote-average.helper";
import { mapDate } from "@core/helpers/map-date.helper";
import { EncodingUtilities } from "@core/utilities/encoding.utilities";
import { TvSerie, TvSeriesResponse } from "@shared/interfaces/tv-series-response.interface";
import { Card } from '@shared/components/card/interface/card.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';

@Injectable()
export class TopRatedTvSeriesService implements TopRatedService {
    constructor(private readonly _httpClient: HttpClient) {}

    public topRatedItems$(): Observable<Card[]> {
        return this._httpClient.get<TvSeriesResponse>("https://api.themoviedb.org/3/tv/top_rated?api_key=803a77b2748b6f5d6363b4fa92bfd870&page=1").pipe(
            map((res: TvSeriesResponse) => res.results),
            map((movies: TvSerie[]) => {
                return movies.map((tvSerie: TvSerie) => ({
                  id: tvSerie.id,
                  title: tvSerie.name,
                  imageSrc: tvSerie.poster_path ? mapImagePath(185, tvSerie.poster_path) : null,
                  topRightContent: `${mapVoteAverage(tvSerie.vote_average)}`,
                  details: [`${mapDate(tvSerie.first_air_date)}`],
                  path: `/tv-series/${EncodingUtilities.encodeIdNameParam(tvSerie.id, tvSerie.name)}`
                }));
            })
        );
    }
}
