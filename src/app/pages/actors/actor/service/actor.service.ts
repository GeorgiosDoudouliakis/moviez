import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Person } from '@shared/interfaces/persons-response.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { PersonDetails } from '../interfaces/people-response.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';

@Injectable()
export class ActorService {
  constructor(private readonly _httpClient: HttpClient) {}

  public actor$(actor: string): Observable<Person> {
    return this._httpClient.get<BaseResponse<Person>>(`https://api.themoviedb.org/3/search/person?api_key=803a77b2748b6f5d6363b4fa92bfd870&query=${actor}&language=en-US&page=1`).pipe(
      map((res: BaseResponse<Person>) => res.results[0]),
      map((person: Person) => ({
        ...person,
        profile_path: mapImagePath(185, person.profile_path)
      }))
    );
  }

  public actorDetails$(actorId: number): Observable<PersonDetails> {
    return this._httpClient.get<PersonDetails>(`https://api.themoviedb.org/3/person/${actorId}?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US`);
  }
}
