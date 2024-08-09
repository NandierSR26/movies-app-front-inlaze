import { Dates, IShortMovie } from "./movie-by-id";

export interface IMoviesUpcoming {
  dates:         Dates;
  page:          number;
  results:       IShortMovie[];
  total_pages:   number;
  total_results: number;
}

