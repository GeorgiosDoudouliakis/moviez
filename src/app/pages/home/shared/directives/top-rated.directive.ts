import { Directive, signal, WritableSignal } from '@angular/core';
import { TopRatedItemModel } from "../../interfaces/top-rated-item-model.interface";

@Directive()
export abstract class TopRatedDirective {
    public items: WritableSignal<TopRatedItemModel[]> = signal([]);
    public loading: WritableSignal<boolean> = signal(true);
    public abstract title: string;
    public abstract showAllPath: string;
}
