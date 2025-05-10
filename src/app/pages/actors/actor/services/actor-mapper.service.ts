import { Injectable } from '@angular/core';
import { PersonKnownFor } from '@shared/interfaces/persons-response.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { EncodingUtilities } from '@core/utilities/encoding.utilities';
import { Card } from '@shared/components/card/interface/card.interface';
import { PersonDetails } from '../interfaces/people-response.interface';

@Injectable()
export class ActorMapperService {
  public mapKnownFor(known: PersonKnownFor): Card {
    return {
      id: known.id,
      title: known.title || known.name,
      imageSrc: this._knownForImgSrc(known),
      topRightContent: null,
      details: [known.media_type],
      path: this._path(known)
    }
  }

  public mapActorDetails(actorDetails: PersonDetails): PersonDetails {
    return {
      ...actorDetails,
      profile_path: actorDetails.profile_path ? mapImagePath(185, actorDetails.profile_path) : ""
    };
  }

  private _knownForImgSrc(knownFor: PersonKnownFor): string {
    if(knownFor.poster_path) {
      return mapImagePath(185, knownFor.poster_path);
    } else if(knownFor.backdrop_path) {
      return mapImagePath(185, knownFor.backdrop_path);
    } else {
      return "";
    }
  }

  private _path(knownFor: PersonKnownFor): string {
    if(knownFor.media_type === "movie") {
      return `/movies/${EncodingUtilities.encodeIdNameParam(knownFor.id, knownFor.title)}`
    } else if(knownFor.media_type === "tv") {
      return `/tv-series/${EncodingUtilities.encodeIdNameParam(knownFor.id, knownFor.name)}`
    } else {
      return "";
    }
  }
}
