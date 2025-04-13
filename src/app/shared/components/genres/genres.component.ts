import { Component, DestroyRef, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { Genre } from '@shared/components/genres/interface/genres-response.interface';
import { GenresService } from '@shared/components/genres/service/genres.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-genres',
  imports: [SkeletonComponent],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
  providers: [GenresService]
})
export class GenresComponent implements OnInit {
  public genres: WritableSignal<Genre[]> = signal<Genre[]>([]);
  public genresLoading: WritableSignal<boolean> = signal<boolean>(true);
  public genresType: InputSignal<"movie" | "tv"> = input.required<"movie" | "tv">();

  constructor(
    private _genresService: GenresService,
    private _destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this._genresService.genres$(this.genresType()).pipe(
      tap((genres: Genre[]) => this.genres.set(genres)),
      tap(() => this.genresLoading.set(false)),
      catchError(error => {
        this.genresLoading.set(false);
        return throwError(() => error);
      }),
      takeUntilDestroyed(this._destroyRef)
    ).subscribe();
  }
}
