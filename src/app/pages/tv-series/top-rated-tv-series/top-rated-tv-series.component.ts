import { Component, inject } from '@angular/core';
import { TopRatedTvSeriesService } from './service/top-rated-tv-series.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { NgClass, NgStyle } from '@angular/common';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'app-top-rated-tv-series',
  imports: [GenresComponent, NgClass, CardComponent, SkeletonComponent, LoaderComponent, NgStyle],
  templateUrl: '../../../shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive.scss',
  providers: [TopRatedTvSeriesService]
})
export class TopRatedTvSeriesComponent extends MoviesTvSeriesActorsDirective {
  public title: string = 'TOP RATED TV SERIES';
  public readonly service: TopRatedTvSeriesService = inject(TopRatedTvSeriesService);
}
