import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { MoviesDirective } from '../shared/directives/movies.directive';
import { PopularMoviesService } from './service/popular-movies.service';

@Component({
  selector: 'app-popular-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [PopularMoviesService]
})
export class PopularMoviesComponent extends MoviesDirective {
  public title: string = "POPULAR MOVIES";
  public readonly service: PopularMoviesService = inject(PopularMoviesService);
}
