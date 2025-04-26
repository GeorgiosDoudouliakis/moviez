import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { LoadingState } from '@shared/enums/loading-state.enum';

@Component({
  selector: 'app-movies',
  imports: [GenresComponent, CardComponent, SkeletonComponent],
  templateUrl: 'movies.component.html',
  styleUrl: '../../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class MoviesComponent {
  public title: InputSignal<string> = input.required<string>();
  public items: InputSignal<Movie[]> = input.required<Movie[]>();
  public showLoadMore: InputSignal<boolean> = input.required<boolean>();
  public loadingState: InputSignal<LoadingState | null> = input.required<LoadingState | null>();
  public loadMore: OutputEmitterRef<void> = output();
  public readonly LoadingState: typeof LoadingState = LoadingState;

  public onLoadMore(): void {
    this.loadMore.emit();
  }
}
