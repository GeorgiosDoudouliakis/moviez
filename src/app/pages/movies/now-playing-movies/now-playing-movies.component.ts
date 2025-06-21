import { Component, inject } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { MoviesDirective } from '../shared/directives/movies.directive';
import { NowPlayingMoviesService } from './service/now-playing-movies.service';

@Component({
  selector: 'app-now-playing-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [NowPlayingMoviesService]
})
export class NowPlayingMoviesComponent extends MoviesDirective {
  public title: string = "NOW PLAYING MOVIES";
  public readonly service: NowPlayingMoviesService = inject(NowPlayingMoviesService);
}
