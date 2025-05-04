import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActorsService } from './services/actors.service';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { NgClass, NgStyle } from '@angular/common';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { ActorsMapperService } from './services/actors-mapper.service';

@Component({
  selector: 'app-actors',
  imports: [GenresComponent, NgClass, CardComponent, SkeletonComponent, LoaderComponent, NgStyle],
  templateUrl: '../../../shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive.html',
  styleUrl: '../../../shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive.scss',
  providers: [ActorsService, ActorsMapperService]
})
export class ActorsComponent extends MoviesTvSeriesActorsDirective {
  public title: string = 'ACTORS';
  public override hasFilters: WritableSignal<boolean> = signal(false);
  public override hasSwitchViewMode: WritableSignal<boolean> = signal(false);
  public readonly service: ActorsService = inject(ActorsService);
}
