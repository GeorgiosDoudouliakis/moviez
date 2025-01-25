import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { PopularCelebrities, PopularCelebrity } from "../interfaces/popular-celebrities-response.interface";
import { mapImagePath } from "@core/helpers/map-image-path.helper";

@Injectable()
export class PopularCelebritiesService {
    constructor(private _httpClient: HttpClient) {}

    public popularCelebrities$(): Observable<PopularCelebrity[]> {
        return this._httpClient.get<PopularCelebrities>("https://api.themoviedb.org/3/person/popular?api_key=803a77b2748b6f5d6363b4fa92bfd870").pipe(
            map((popularCelebritiesResponse: PopularCelebrities) => popularCelebritiesResponse.results),
            map((results: PopularCelebrity[])=> results.slice(0,6)),
            map((results: PopularCelebrity[]) => {
                return results.map((result: PopularCelebrity) => ({
                    ...result,
                    profile_path: mapImagePath(185, result.profile_path)
                }))
            })
        )
    }
}
