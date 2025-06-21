import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { UpcomingMoviesService } from './service/upcoming-movies.service';
import { MoviesDirective } from '../shared/directives/movies.directive';

@Component({
  selector: 'app-upcoming-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [UpcomingMoviesService]
})
export class UpcomingMoviesComponent extends MoviesDirective {
  public title: string = 'UPCOMING MOVIES';
  public readonly service: UpcomingMoviesService = inject(UpcomingMoviesService);
}
