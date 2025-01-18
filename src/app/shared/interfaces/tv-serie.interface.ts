import { BaseItem } from "./base-item.interface";

export interface TvSerie extends BaseItem {
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}
