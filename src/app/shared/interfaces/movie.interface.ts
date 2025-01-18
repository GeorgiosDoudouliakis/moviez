import { BaseItem } from "./base-item.interface";

export interface Movie extends BaseItem {
    original_title: string;
    release_date: string;
    title: string;
    video: boolean;
}
