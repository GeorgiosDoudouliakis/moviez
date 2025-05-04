import { Component, inject } from '@angular/core';
import { UpcomingMoviesService } from './service/upcoming-movies.service';
import { ListViewDirective } from '@shared/components/list-view/directive/list-view.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-upcoming-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [UpcomingMoviesService]
})
export class UpcomingMoviesComponent extends ListViewDirective {
  public title: string = 'UPCOMING MOVIES';
  public readonly service: UpcomingMoviesService = inject(UpcomingMoviesService);
}
