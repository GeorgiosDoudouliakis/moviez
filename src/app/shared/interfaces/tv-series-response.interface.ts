import { BaseItem } from "./base-item.interface";
import { BaseResponse } from "@shared/interfaces/base-response.interface";

export interface TvSerie extends BaseItem {
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}

export type TvSeriesResponse = BaseResponse<TvSerie>;
