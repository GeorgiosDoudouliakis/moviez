import { Component, DestroyRef, OnInit, signal, WritableSignal } from '@angular/core';
import { PopularCelebritiesService } from "../../services/popular-celebrities.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { catchError, tap, throwError } from "rxjs";
import { PopularCelebrity } from "../../interfaces/popular-celebrities-response.interface";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { RouterLink } from "@angular/router";
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";

@Component({
  selector: 'app-popular-celebrities',
  imports: [LoaderComponent, RouterLink, SectionHeaderComponent],
  templateUrl: './popular-celebrities.component.html',
  styleUrl: './popular-celebrities.component.scss',
  providers: [PopularCelebritiesService]
})
export class PopularCelebritiesComponent implements OnInit {
  public popularCelebrities: WritableSignal<PopularCelebrity[]> = signal<PopularCelebrity[]>([]);
  public loading: WritableSignal<boolean> = signal<boolean>(true);

  constructor(
      private _popularCelebritiesService: PopularCelebritiesService,
      private _destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this._popularCelebritiesService.popularCelebrities$().pipe(
        tap((popularCelebrities: PopularCelebrity[]) => this.popularCelebrities.set(popularCelebrities)),
        tap(() => this.loading.set(false)),
        catchError(error => {
          this.loading.set(false);
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
    ).subscribe();
  }
}
