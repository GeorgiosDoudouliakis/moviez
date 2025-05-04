import { Component, inject } from '@angular/core';
import { PopularMoviesService } from './service/popular-movies.service';
import { ListViewDirective } from '@shared/components/list-view/directive/list-view.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-popular-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [PopularMoviesService]
})
export class PopularMoviesComponent extends ListViewDirective {
  public title: string = "POPULAR MOVIES";
  public readonly service: PopularMoviesService = inject(PopularMoviesService);
}
