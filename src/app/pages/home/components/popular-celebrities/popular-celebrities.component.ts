import { Component, DestroyRef, OnInit, signal, WritableSignal } from '@angular/core';
import { PopularCelebritiesService } from "./service/popular-celebrities.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { catchError, tap, throwError } from "rxjs";
import { PersonWithPath } from "@shared/interfaces/persons-response.interface";
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular-celebrities',
  imports: [RouterLink, SkeletonComponent, SectionHeaderComponent],
  templateUrl: './popular-celebrities.component.html',
  styleUrl: './popular-celebrities.component.scss',
  providers: [PopularCelebritiesService]
})
export class PopularCelebritiesComponent implements OnInit {
  public popularCelebrities: WritableSignal<PersonWithPath[]> = signal<PersonWithPath[]>([]);
  public loading: WritableSignal<boolean> = signal<boolean>(true);

  constructor(
      private readonly _popularCelebritiesService: PopularCelebritiesService,
      private readonly _destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this._popularCelebritiesService.popularCelebrities$().pipe(
        tap((popularCelebrities: PersonWithPath[]) => this.popularCelebrities.set(popularCelebrities)),
        tap(() => this.loading.set(false)),
        catchError(error => {
          this.loading.set(false);
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
    ).subscribe();
  }
}
