import { Component, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { MovieService } from './services/movie.service';
import { MovieDetails } from './interfaces/movie-details.interface';
import { catchError, take, tap, throwError } from 'rxjs';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { MovieMapperService } from './services/movie-mapper.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [
    LoaderComponent,
    RouterLink
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  providers: [MovieMapperService, MovieService]
})
export class MovieComponent implements OnInit {
  public movieDetails: WritableSignal<MovieDetails | null> = signal(null);
  public loading: WritableSignal<boolean> = signal(true);
  public movieIdName: InputSignal<string> = input.required<string>();

  constructor(private readonly _service: MovieService) {}

  public ngOnInit(): void {
    this._service.movieDetails$(parseInt(this.movieIdName().split("-")[0], 10)).pipe(
      tap((movieDetails: MovieDetails) => this.movieDetails.set(movieDetails)),
      tap(() => this.loading.set(false)),
      catchError(error => {
        this.loading.set(false);
        return throwError(() => error);
      }),
      take(1)
    ).subscribe();
  }
}
