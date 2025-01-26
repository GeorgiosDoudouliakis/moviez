import { BaseItem } from "./base-item.interface";
import { BaseResponse } from "@shared/interfaces/base-response.interface";

export interface Movie extends BaseItem {
    original_title: string;
    release_date: string;
    title: string;
    video: boolean;
}

export type MoviesResponse = BaseResponse<Movie>;
