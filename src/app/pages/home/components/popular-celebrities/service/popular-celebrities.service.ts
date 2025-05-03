import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Person, PersonsResponse, PersonWithPath } from "@shared/interfaces/persons-response.interface";
import { mapImagePath } from "@core/helpers/map-image-path.helper";
import { EncodingUtilities } from "@core/utilities/encoding.utilities";

@Injectable()
export class PopularCelebritiesService {
    constructor(private readonly _httpClient: HttpClient) {}

    public popularCelebrities$(): Observable<PersonWithPath[]> {
        return this._httpClient.get<PersonsResponse>("https://api.themoviedb.org/3/person/popular?api_key=803a77b2748b6f5d6363b4fa92bfd870").pipe(
            map((popularCelebritiesResponse: PersonsResponse) => popularCelebritiesResponse.results),
            map((results: Person[])=> results.slice(0,6)),
            map((results: Person[]) => {
                return results.map((result: Person) => ({
                    ...result,
                    profile_path: mapImagePath(185, result.profile_path),
                    path: `/actors/${EncodingUtilities.encodeIdNameParam(result.id, result.name)}`
                }))
            })
        )
    }
}
