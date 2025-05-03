import { Component, inject } from '@angular/core';
import { OnTheAirTvSeriesService } from './service/on-the-air-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { NgClass, NgStyle } from '@angular/common';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'app-on-the-air-tv-series',
  imports: [GenresComponent, NgClass, CardComponent, SkeletonComponent, LoaderComponent, NgStyle],
  templateUrl: '../../../shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive.scss',
  providers: [OnTheAirTvSeriesService]
})
export class OnTheAirTvSeriesComponent extends MoviesTvSeriesActorsDirective {
  public title: string = 'ON THE AIR TV SERIES';
  public readonly service: OnTheAirTvSeriesService = inject(OnTheAirTvSeriesService);
}
