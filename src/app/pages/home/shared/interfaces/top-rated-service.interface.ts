import { Observable } from "rxjs";
import { Card } from '@shared/components/card/interface/card.interface';

export interface TopRatedService {
    topRatedItems$: () => Observable<Card[]>;
}
