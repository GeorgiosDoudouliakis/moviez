import { Component, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { GenresComponent } from '@shared/components/genres/genres.component';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { CardComponent } from '@shared/components/card/card.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { LoadingState } from '@shared/enums/loading-state.enum';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [GenresComponent, CardComponent, SkeletonComponent, NgClass, NgStyle],
  templateUrl: 'movies.component.html',
  styleUrl: '../../../../shared/directives/movies-tv-series/movies-tv-series.directive.scss'
})
export class MoviesComponent {
  public areFiltersVisible: WritableSignal<boolean> = signal(false);
  public viewType: WritableSignal<"grid" | "list"> = signal("grid");
  public title: InputSignal<string> = input.required();
  public items: InputSignal<Movie[]> = input.required();
  public showLoadMore: InputSignal<boolean> = input.required();
  public loadingState: InputSignal<LoadingState | null> = input.required();
  public loadMore: OutputEmitterRef<void> = output();
  public readonly LoadingState: typeof LoadingState = LoadingState;

  public onFiltersVisibilityChange(): void {
    this.areFiltersVisible.set(!this.areFiltersVisible());
  }

  public onLoadMore(): void {
    this.loadMore.emit();
  }

  public onViewTypeChange(type: "grid" | "list"): void {
    this.viewType.set(type);
  }
}
