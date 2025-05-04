import { Injectable } from '@angular/core';
import { TopRatedService } from "../../../shared/interfaces/top-rated-service.interface";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TvSerie, TvSeriesResponse } from "@shared/interfaces/tv-series-response.interface";
import { Card } from '@shared/components/card/interface/card.interface';
import { TopRatedTvSeriesMapperService } from './top-rated-tv-series-mapper.service';

@Injectable()
export class TopRatedTvSeriesService implements TopRatedService {
    constructor(
      private readonly _httpClient: HttpClient,
      private readonly _mapperService: TopRatedTvSeriesMapperService
    ) {}

    public topRatedItems$(): Observable<Card[]> {
        return this._httpClient.get<TvSeriesResponse>("https://api.themoviedb.org/3/tv/top_rated?api_key=803a77b2748b6f5d6363b4fa92bfd870&page=1").pipe(
            map((res: TvSeriesResponse) => res.results),
            map((tvSeries: TvSerie[]) => this._mapperService.mapTopRatedTvSeries(tvSeries))
        );
    }
}
