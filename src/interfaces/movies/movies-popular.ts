import { IShortMovie } from "./movie-by-id";

export interface IMoviesByPopularity {
  page:          number;
  results:       IShortMovie[];
  total_pages:   number;
  total_results: number;
}

