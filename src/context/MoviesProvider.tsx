import { createContext, useContext, useState } from "react";
import { IMoviesByPopularity, IMoviesRated, IMoviesNow, IMoviesUpcoming, IMovie, IShortMovie } from "../interfaces";
import MoviesService from "../services/movies.service";

interface IMoviescontextProps {
  // properties
  moviesByPopularity: IShortMovie[];
  moviesByRating: IShortMovie[];
  moviesByNowPlaying: IShortMovie[];
  moviesByUpcoming: IShortMovie[];
  moviesByID: IMovie | null;

  // methods
  getMoviesByPopularity: () => Promise<void>,
  getMoviesByRating: () => Promise<void>,
  getMoviesByNowPlaying: () => Promise<void>,
  getMoviesByUpcoming: () => Promise<void>,
  getMovieByID: (id: string) => Promise<void>
}

export const MoviesContext = createContext({} as IMoviescontextProps)

export const MoviesProvider = (props: { children: JSX.Element }): JSX.Element => {

  const [moviesByPopularity, setMoviesByPopularity] = useState<IShortMovie[]>([])
  const [moviesByRating, setMoviesByRating] = useState<IShortMovie[]>([])
  const [moviesByNowPlaying, setMoviesByNowPlaying] = useState<IShortMovie[]>([])
  const [moviesByUpcoming, setMoviesByUpcoming] = useState<IShortMovie[]>([])
  const [moviesByID, setMoviesByID] = useState<IMovie | null>(null)

  const getMoviesByPopularity = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByPopularity()
    setMoviesByPopularity(movies.results)
  }

  const getMoviesByRating = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByRating()
    setMoviesByRating(movies.results)
  }

  const getMoviesByNowPlaying = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByNowPlaying()
    setMoviesByNowPlaying(movies.results)
  }

  const getMoviesByUpcoming = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByUpcoming()
    setMoviesByUpcoming(movies.results)
  }

  const getMovieByID = async (id: string): Promise<void> => {
    const movie = await MoviesService.getMovieByID(id)
    setMoviesByID(movie)
  }

  return (
    <MoviesContext.Provider value={{
      // properties
      moviesByPopularity,
      moviesByRating,
      moviesByNowPlaying,
      moviesByUpcoming,
      moviesByID,

      // methods
      getMoviesByPopularity,
      getMoviesByRating,
      getMoviesByNowPlaying,
      getMoviesByUpcoming,
      getMovieByID,
    }}>
      {props.children}
    </MoviesContext.Provider>

  )
}

export const useMoviesContext = () => {
  return useContext(MoviesContext)
}