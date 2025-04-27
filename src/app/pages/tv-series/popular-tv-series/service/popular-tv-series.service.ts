import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';
import { TvSeriesMapperService } from '../../shared/services/tv-series-mapper.service';

@Injectable()
export class PopularTvSeriesService implements MoviesTvSeriesActorsListService<TvSerie> {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _mapperService: TvSeriesMapperService
  ) {}

  public items$(page: number): Observable<BaseResponse<TvSerie>> {
    return this._httpClient.get<BaseResponse<TvSerie>>(`https://api.themoviedb.org/3/tv/popular?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US&page=${page}`).pipe(
      map((res: BaseResponse<TvSerie>) => this._mapperService.mapTvSeries(res))
    )
  }
}
