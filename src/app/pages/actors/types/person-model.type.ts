import { PersonDetails } from "../interfaces/people-response.interface";
import { Person } from "@shared/interfaces/person.interface";

export type PersonModel = Pick<Person, "name" | "known_for" | "profile_path"> & Pick<PersonDetails, "biography" | "birthday" | "deathday" | "place_of_birth" | "known_for_department" | "also_known_as">;
