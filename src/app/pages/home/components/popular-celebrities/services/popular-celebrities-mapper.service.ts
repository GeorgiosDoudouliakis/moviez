import { Injectable } from '@angular/core';
import { Person, PersonWithPath } from '@shared/interfaces/persons-response.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { EncodingUtilities } from '@core/utilities/encoding.utilities';

@Injectable()
export class PopularCelebritiesMapperService {
  public mapPersons(persons: Person[]): PersonWithPath[] {
    return persons.map((result: Person) => ({
      ...result,
      profile_path: mapImagePath(185, result.profile_path),
      path: `/actors/${EncodingUtilities.encodeIdNameParam(result.id, result.name)}`
    }))
  }
}
