import { IShortMovie } from "./movie-by-id";

export interface ImoviesByPopularity {
  page:          number;
  results:       IShortMovie[];
  total_pages:   number;
  total_results: number;
}

