import { Component } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { NgClass, NgStyle } from '@angular/common';
import { MoviesTvSeriesDirective } from '@shared/directives/movies-tv-series/movies-tv-series.directive';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';

@Component({
  selector: 'app-tv-series',
  imports: [GenresComponent, CardComponent, SkeletonComponent, LoaderComponent, NgClass, NgStyle],
  templateUrl: './tv-series.component.html',
  styleUrl: '../../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class TvSeriesComponent extends MoviesTvSeriesDirective<TvSerie> {}
