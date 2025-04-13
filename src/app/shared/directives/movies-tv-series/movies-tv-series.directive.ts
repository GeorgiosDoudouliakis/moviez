import { Directive } from '@angular/core';

@Directive()
export abstract class MoviesTvSeriesDirective {
  public abstract title: string;
  public abstract genresType: "movie" | "tv";
}
