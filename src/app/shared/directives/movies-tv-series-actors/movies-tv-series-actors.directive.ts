import { DestroyRef, Directive, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

enum LoadingState {
  FETCHING = 'FETCHING',
  LOAD_MORE = 'LOAD_MORE'
}

@Directive()
export abstract class MoviesTvSeriesActorsDirective<ItemType> implements OnInit {
  public items: WritableSignal<ItemType[]> = signal<ItemType[]>([]);
  public loadingState: WritableSignal<LoadingState | null> = signal<LoadingState | null>(LoadingState.FETCHING);
  public showLoadMore: WritableSignal<boolean> = signal(false);
  public readonly LoadingState: typeof LoadingState = LoadingState;
  private _currentPage: WritableSignal<number> = signal<number>(1);
  private _totalPages: WritableSignal<number> = signal<number>(1);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  public abstract title: string;
  public abstract readonly service: MoviesTvSeriesActorsListService<ItemType>;

  private _itemsEvent: WritableSignal<number> = signal<number>(this._currentPage());
  private _items$: Observable<BaseResponse<ItemType>> = toObservable(this._itemsEvent).pipe(
    tap(() => this.loadingState() === LoadingState.FETCHING ? this.items.set([]) : this.items.set([...this.items()])),
    switchMap((page: number) => this.service.items$(page)),
    tap((response: BaseResponse<ItemType>) => {
      this.items.set([...this.items(), ...response.results]);
      this._totalPages.set(response.total_pages);
      this.showLoadMore.set(this._currentPage() <= this._totalPages());
      this.loadingState.set(null);
    }),
    catchError(error => {
      this.loadingState.set(null);
      return throwError(() => error);
    }),
    takeUntilDestroyed(this._destroyRef)
  );

  public ngOnInit(): void {
    this._items$.subscribe();
  }

  public onLoadMore(): void {
    if(!this.showLoadMore()) return;
    this._currentPage.set(this._currentPage() + 1);
    this.loadingState.set(LoadingState.LOAD_MORE);
    this._itemsEvent.set(this._currentPage());
  }
}
