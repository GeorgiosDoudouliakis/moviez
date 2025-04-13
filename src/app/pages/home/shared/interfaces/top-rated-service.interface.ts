import { TopRatedItemModel } from "./top-rated-item-model.interface";
import { Observable } from "rxjs";

export interface TopRatedService {
    topRatedItems$: () => Observable<TopRatedItemModel[]>;
}
