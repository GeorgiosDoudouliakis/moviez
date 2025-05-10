import { Component, DestroyRef, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, forkJoin, tap, throwError } from 'rxjs';
import { ActorService } from './service/actor.service';
import { Person } from '@shared/interfaces/persons-response.interface';
import { PersonDetails } from './interfaces/people-response.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'app-actor',
  imports: [
    LoaderComponent,
    RouterLink
  ],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.scss',
  providers: [ActorService]
})
export class ActorComponent implements OnInit {
  public actor: WritableSignal<Person | null> = signal(null);
  public actorDetails: WritableSignal<PersonDetails | null> = signal(null);
  public loading: WritableSignal<boolean> = signal(true);
  public actorIdName: InputSignal<string> = input.required<string>();

  constructor(
    private readonly _service: ActorService,
    private readonly _destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    const paramsArr: string[] = this.actorIdName().split("-");

    forkJoin({
      actor: this._service.actor$(paramsArr.slice(1).join(" ")),
      actorDetails: this._service.actorDetails$(+paramsArr[0])
    }).pipe(
      tap(({ actor, actorDetails }) => {
        this.actor.set(actor);
        this.actorDetails.set(actorDetails);
      }),
      tap(() => this.loading.set(false)),
      catchError(error => {
        this.loading.set(false);
        return throwError(() => error);
      }),
      takeUntilDestroyed(this._destroyRef)
    ).subscribe();
  }
}
