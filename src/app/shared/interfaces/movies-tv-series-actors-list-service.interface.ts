import { Observable } from 'rxjs';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { Card } from '@shared/components/card/interface/card.interface';

export interface MoviesTvSeriesActorsListService {
  items$: (page: number) => Observable<BaseResponse<Card>>;
}
