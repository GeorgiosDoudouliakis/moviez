import { Injectable } from '@angular/core';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Person } from '@shared/interfaces/persons-response.interface';
import { Card } from '@shared/components/card/interface/card.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { EncodingUtilities } from '@core/utilities/encoding.utilities';

@Injectable()
export class ActorsMapperService {
  public mapActors(actors: BaseResponse<Person>): BaseResponse<Card> {
    return {
      page: actors.page,
      results: actors.results.map((person: Person) => ({
        id: person.id,
        title: person.name,
        imageSrc: person.profile_path ? mapImagePath(185, person.profile_path) : null,
        topRightContent: null,
        details: [],
        path: `/actors/${EncodingUtilities.encodeIdNameParam(person.id, person.name)}`
      })),
      total_pages: actors.total_pages,
      total_results: actors.total_results
    };
  }
}
