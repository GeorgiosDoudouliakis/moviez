import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { Person } from '@shared/interfaces/persons-response.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';

@Injectable()
export class ActorsService implements MoviesTvSeriesActorsListService<Person> {
  constructor(private readonly _httpClient: HttpClient) {}

  public items$(page: number): Observable<BaseResponse<Person>> {
    return this._httpClient.get<BaseResponse<Person>>(`https://api.themoviedb.org/3/person/popular?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US&page=${page}`)
  }
}
