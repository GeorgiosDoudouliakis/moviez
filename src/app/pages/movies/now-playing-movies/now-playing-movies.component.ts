import { Component, inject } from '@angular/core';
import { NowPlayingMoviesService } from './service/now-playing-movies.service';
import { MoviesTvSeriesActorsDirective } from '@shared/directives/movies-tv-series-actors/movies-tv-series-actors.directive';
import { ListViewComponent } from '@shared/components/list-view/list-view.component';
import { GenresComponent } from '@shared/components/genres/genres.component';

@Component({
  selector: 'app-now-playing-movies',
  imports: [ListViewComponent, GenresComponent],
  templateUrl: '../shared/directives/movies.directive.html',
  providers: [NowPlayingMoviesService]
})
export class NowPlayingMoviesComponent extends MoviesTvSeriesActorsDirective {
  public title: string = "NOW PLAYING MOVIES";
  public readonly service: NowPlayingMoviesService = inject(NowPlayingMoviesService);
}
