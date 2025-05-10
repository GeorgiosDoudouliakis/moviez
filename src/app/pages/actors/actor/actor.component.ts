import { Component, DestroyRef, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, forkJoin, tap, throwError } from 'rxjs';
import { ActorService } from './services/actor.service';
import { PersonDetails } from './interfaces/people-response.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { CardComponent } from '@shared/components/card/card.component';
import { Card } from '@shared/components/card/interface/card.interface';
import { ActorMapperService } from './services/actor-mapper.service';

@Component({
  selector: 'app-actor',
  imports: [
    LoaderComponent,
    RouterLink,
    CardComponent
  ],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.scss',
  providers: [ActorMapperService, ActorService]
})
export class ActorComponent implements OnInit {
  public knownFor: WritableSignal<Card[]> = signal([]);
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
      knownFor: this._service.actor$(paramsArr.slice(1).join(" ")),
      actorDetails: this._service.actorDetails$(+paramsArr[0])
    }).pipe(
      tap(({ knownFor, actorDetails }: { knownFor: Card[]; actorDetails: PersonDetails }) => {
        this.knownFor.set(knownFor);
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
