import { Directive, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { LoadingState } from '@shared/enums/loading-state.enum';

@Directive()
export abstract class MoviesTvSeriesDirective<ItemType> {
  public areFiltersVisible: WritableSignal<boolean> = signal(false);
  public viewType: WritableSignal<"grid" | "list"> = signal("grid");
  public title: InputSignal<string> = input.required();
  public items: InputSignal<ItemType[]> = input.required();
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
