import { Directive, OnInit, signal, WritableSignal } from '@angular/core';
import { TopRatedService } from "../interfaces/top-rated-service.interface";
import { catchError, take, tap, throwError } from "rxjs";
import { Card } from '@shared/components/card/interface/card.interface';

@Directive()
export abstract class TopRatedDirective implements OnInit {
    public items: WritableSignal<Card[]> = signal([]);
    public loading: WritableSignal<boolean> = signal(true);
    public abstract title: string;
    public abstract showAllPath: string;
    public abstract showAllLinkText: string;
    protected abstract service: TopRatedService;

    public ngOnInit(): void {
        this.service.topRatedItems$().pipe(
            tap((items: Card[]) => this.items.set(items)),
            tap(() => this.loading.set(false)),
            catchError(error => {
                this.loading.set(false);
                return throwError(() => error);
            }),
            take(1)
        ).subscribe();
    }
}
