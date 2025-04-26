import { DestroyRef, Directive, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { catchError, Observable, Subject, switchMap, tap, throwError } from 'rxjs';
import { MoviesTvSeriesActorsListService } from '@shared/interfaces/movies-tv-series-actors-list-service.interface';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

enum LoadingState {
  FETCHING = 'FETCHING',
  LOAD_MORE = 'LOAD_MORE'
}

@Directive()
export abstract class MoviesTvSeriesActorsDirective<ItemType> implements OnInit {
  public items: WritableSignal<ItemType[]> = signal<ItemType[]>([]);
  public loadingState: WritableSignal<LoadingState | null> = signal<LoadingState | null>(LoadingState.FETCHING);
  public showLoadMore: WritableSignal<boolean> = signal(false);
  private _currentPage: WritableSignal<number> = signal<number>(1);
  public readonly LoadingState: typeof LoadingState = LoadingState;
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  public abstract title: string;
  public abstract readonly service: MoviesTvSeriesActorsListService<ItemType>;

  private _itemsEvent: Subject<number> = new Subject<number>();
  private _items$: Observable<BaseResponse<ItemType>> = this._itemsEvent.asObservable().pipe(
    tap(() => this.loadingState() === LoadingState.FETCHING ? this.items.set([]) : this.items.set([...this.items()])),
    switchMap((page: number) => this.service.items$(page)),
    tap((response: BaseResponse<ItemType>) => {
      this.items.set([...this.items(), ...response.results]);
      this.showLoadMore.set(this._currentPage() + 1 <= 500);
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
    this._itemsEvent.next(this._currentPage());
  }

  public onLoadMore(): void {
    if(!this.showLoadMore()) return;
    this._currentPage.set(this._currentPage() + 1);
    this.loadingState.set(LoadingState.LOAD_MORE);
    this._itemsEvent.next(this._currentPage());
  }
}
