import { Component, inject } from '@angular/core';
import { ActorsService } from './service/actors.service';
import { MoviesTvSeriesActorsListDirective } from '@shared/directives/movies-tv-series-actors-list/movies-tv-series-actors-list.directive';
import { Person } from '@shared/interfaces/persons-response.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';

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
export class ActorsComponent extends MoviesTvSeriesActorsListDirective<Person> {
  public readonly service: ActorsService = inject(ActorsService);
}
