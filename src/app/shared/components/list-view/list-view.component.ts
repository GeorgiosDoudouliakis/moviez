import { Component, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { NgClass, NgStyle } from '@angular/common';
import { Card } from '@shared/components/card/interface/card.interface';
import { LoadingState } from '../../enums/loading-state.enum';

@Component({
  selector: 'app-list-view',
  imports: [
    CardComponent,
    LoaderComponent,
    SkeletonComponent,
    NgClass,
    NgStyle
  ],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  public viewType: WritableSignal<"grid" | "list"> = signal("grid");
  public areFiltersVisible: WritableSignal<boolean> = signal(false);
  public readonly LoadingState: typeof LoadingState = LoadingState;
  public title: InputSignal<string> = input.required();
  public hasFilters: InputSignal<boolean> = input(true);
  public hasSwitchViewMode: InputSignal<boolean> = input(true);
  public items: InputSignal<Card[]> = input.required();
  public loadingState: InputSignal<LoadingState> = input.required();
  public showLoadMore: InputSignal<boolean> = input.required();
  public loadMore: OutputEmitterRef<void> = output();

  public onFiltersVisibilityChange(): void {
    this.areFiltersVisible.set(!this.areFiltersVisible());
  }

  public onViewTypeChange(type: "grid" | "list"): void {
    this.viewType.set(type);
  }

  public onLoadMore(): void {
    this.loadMore.emit();
  }
}
