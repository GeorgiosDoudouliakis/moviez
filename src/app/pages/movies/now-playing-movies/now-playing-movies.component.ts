import { Component, inject } from '@angular/core';
import { NowPlayingMoviesService } from './service/now-playing-movies.service';
import { ListViewDirective } from '@shared/components/list-view/directive/list-view.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-now-playing-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [NowPlayingMoviesService]
})
export class NowPlayingMoviesComponent extends ListViewDirective {
  public title: string = "NOW PLAYING MOVIES";
  public readonly service: NowPlayingMoviesService = inject(NowPlayingMoviesService);
}
