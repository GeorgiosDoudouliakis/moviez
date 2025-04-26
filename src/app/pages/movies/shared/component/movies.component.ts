import { Component, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { LoadingState } from '@shared/enums/loading-state.enum';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [GenresComponent, CardComponent, SkeletonComponent, NgClass],
  templateUrl: 'movies.component.html',
  styleUrl: '../../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class MoviesComponent {
  public viewType: WritableSignal<"grid" | "list"> = signal<"grid" | "list">("grid");
  public title: InputSignal<string> = input.required<string>();
  public items: InputSignal<Movie[]> = input.required<Movie[]>();
  public showLoadMore: InputSignal<boolean> = input.required<boolean>();
  public loadingState: InputSignal<LoadingState | null> = input.required<LoadingState | null>();
  public loadMore: OutputEmitterRef<void> = output();
  public readonly LoadingState: typeof LoadingState = LoadingState;

  public onLoadMore(): void {
    this.loadMore.emit();
  }

  public onViewTypeChange(type: "grid" | "list"): void {
    this.viewType.set(type);
  }
}
