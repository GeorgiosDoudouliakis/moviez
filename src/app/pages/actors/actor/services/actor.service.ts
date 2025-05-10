import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Person, PersonKnownFor } from '@shared/interfaces/persons-response.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { PersonDetails } from '../interfaces/people-response.interface';
import { Card } from '@shared/components/card/interface/card.interface';
import { ActorMapperService } from './actor-mapper.service';

@Injectable()
export class ActorService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _mapperService: ActorMapperService
  ) {}

  public actor$(actor: string): Observable<Card[]> {
    return this._httpClient.get<BaseResponse<Person>>(`https://api.themoviedb.org/3/search/person?api_key=803a77b2748b6f5d6363b4fa92bfd870&query=${actor}&language=en-US&page=1`).pipe(
      map((res: BaseResponse<Person>) => res.results[0]),
      map((person: Person) => person.known_for),
      map((knownFor: PersonKnownFor[]) => knownFor.map((known: PersonKnownFor) => this._mapperService.mapKnownFor(known)))
    );
  }

  public actorDetails$(actorId: number): Observable<PersonDetails> {
    return this._httpClient.get<PersonDetails>(`https://api.themoviedb.org/3/person/${actorId}?api_key=803a77b2748b6f5d6363b4fa92bfd870&language=en-US`).pipe(
      map((personDetails: PersonDetails) => this._mapperService.mapActorDetails(personDetails))
    );
  }
}
