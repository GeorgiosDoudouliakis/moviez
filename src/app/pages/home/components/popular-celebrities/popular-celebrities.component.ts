import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { PopularCelebritiesService } from "./services/popular-celebrities.service";
import { catchError, take, tap, throwError } from "rxjs";
import { PersonWithPath } from "@shared/interfaces/persons-response.interface";
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";
import { RouterLink } from '@angular/router';
import { PopularCelebritiesMapperService } from './services/popular-celebrities-mapper.service';

@Component({
  selector: 'app-popular-celebrities',
  imports: [RouterLink, SkeletonComponent, SectionHeaderComponent],
  templateUrl: './popular-celebrities.component.html',
  styleUrl: './popular-celebrities.component.scss',
  providers: [PopularCelebritiesService, PopularCelebritiesMapperService]
})
export class PopularCelebritiesComponent implements OnInit {
  public popularCelebrities: WritableSignal<PersonWithPath[]> = signal<PersonWithPath[]>([]);
  public loading: WritableSignal<boolean> = signal<boolean>(true);

  constructor(private readonly _popularCelebritiesService: PopularCelebritiesService) {}

  public ngOnInit(): void {
    this._popularCelebritiesService.popularCelebrities$().pipe(
        tap((popularCelebrities: PersonWithPath[]) => this.popularCelebrities.set(popularCelebrities)),
        tap(() => this.loading.set(false)),
        catchError(error => {
          this.loading.set(false);
          return throwError(() => error);
        }),
        take(1)
    ).subscribe();
  }
}
