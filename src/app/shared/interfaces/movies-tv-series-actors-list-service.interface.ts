import { Observable } from 'rxjs';
import { BaseResponse } from '@shared/interfaces/base-response.interface';

export interface MoviesTvSeriesActorsListService<ItemType> {
  items$: (page: number) => Observable<BaseResponse<ItemType>>;
}
