import { BaseResponse } from "@shared/interfaces/base-response.interface";

export interface PersonKnownFor {
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
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Person {
    adult: boolean;
    gender: number;
    id: number;
    known_for: PersonKnownFor[];
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
}

export interface PersonWithPath extends Person {
    path: string;
}

export type PersonsResponse = BaseResponse<PersonWithPath>;
