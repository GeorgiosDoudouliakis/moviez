import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { Person } from '@shared/interfaces/persons-response.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Card } from '@shared/components/card/interface/card.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { EncodingUtilities } from '@core/utilities/encoding.utilities';

@Injectable()
export class ActorsService implements MoviesTvSeriesActorsListService {
  constructor(private readonly _httpClient: HttpClient) {}

  public items$(page: number): Observable<BaseResponse<Card>> {
    return this._httpClient.get<BaseResponse<Person>>(`https://api.themoviedb.org/3/person/popular?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US&page=${page}`).pipe(
      map((res: BaseResponse<Person>) => ({
        page: res.page,
        results: res.results.map((person: Person) => ({
          id: person.id,
          title: person.name,
          imageSrc: mapImagePath(185, person.profile_path),
          topRightContent: null,
          details: [],
          path: `/actors/${EncodingUtilities.encodeIdNameParam(person.id, person.name)}`
        })),
        total_pages: res.total_pages,
        total_results: res.total_results
      }))
    )
  }
}
