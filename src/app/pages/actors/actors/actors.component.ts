import { Component, inject } from '@angular/core';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { ActorsService } from './services/actors.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { ActorsMapperService } from './services/actors-mapper.service';

@Component({
  selector: 'app-actors',
  imports: [ListViewComponent],
  templateUrl: './actors.component.html',
  providers: [ActorsService, ActorsMapperService]
})
export class ActorsComponent extends MoviesTvSeriesActorsDirective {
  public title: string = 'ACTORS';
  public readonly service: ActorsService = inject(ActorsService);
}
