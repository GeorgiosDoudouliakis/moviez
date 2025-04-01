import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Genre, GenresResponse } from '@shared/interfaces/genres-response.interface';

@Injectable()
export class GenresService {
  constructor(private _httpClient: HttpClient) {}

  public genres$(type: "movie" | "tv"): Observable<Genre[]> {
    return this._httpClient.get<GenresResponse>(`https://api.themoviedb.org/3/genre/${type}/list?api_key=803a77b2748b6f5d6363b4fa92bfd870`).pipe(
      map((res: GenresResponse) => res.genres)
    )
  }
}
