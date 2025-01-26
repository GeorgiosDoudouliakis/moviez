import { BaseResponse } from "@shared/interfaces/base-response.interface";

export interface PopularCelebrity {
    adult: boolean;
    gender: number;
    id: number;
    known_for: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        media_type: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }[];
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
}

export interface PopularCelebrityWithPath extends PopularCelebrity {
    path: string;
}

export type PopularCelebrities = BaseResponse<PopularCelebrity>;
