import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { Person } from '@shared/interfaces/persons-response.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Card } from '@shared/components/card/interface/card.interface';
import { ActorsMapperService } from './actors-mapper.service';

@Injectable()
export class ActorsService implements MoviesTvSeriesActorsListService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _mapperService: ActorsMapperService
  ) {}

  public items$(page: number): Observable<BaseResponse<Card>> {
    return this._httpClient.get<BaseResponse<Person>>(`https://api.themoviedb.org/3/person/popular?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US&page=${page}`).pipe(
      map((res: BaseResponse<Person>) => this._mapperService.mapActors(res))
    )
  }
}
