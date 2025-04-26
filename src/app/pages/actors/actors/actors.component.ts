import { Component, inject } from '@angular/core';
import { ActorsService } from './service/actors.service';
import { Person } from '@shared/interfaces/persons-response.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';

@Component({
  selector: 'app-actors',
  imports: [
    CardComponent,
    SkeletonComponent
  ],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss',
  providers: [ActorsService]
})
export class ActorsComponent extends MoviesTvSeriesActorsDirective<Person> {
  public readonly service: ActorsService = inject(ActorsService);
}
