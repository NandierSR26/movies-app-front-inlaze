import { createContext, useContext, useEffect, useState } from "react";
import { IMovie, IMoviesByPopularity, IMoviesNow, IMoviesRated, IMoviesUpcoming, IShortMovie } from "../interfaces";
import MoviesService from "../services/movies.service";

interface IMoviescontextProps {
  // properties
  isMoviesfetching: boolean;
  moviesByPopularity: IMoviesByPopularity | null;
  moviesByRating: IMoviesRated | null;
  moviesByNowPlaying: IMoviesNow | null;
  moviesByUpcoming: IMoviesUpcoming | null;
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

  const [isMoviesfetching, setIsMoviesfetching] = useState<boolean>(true)

  const [moviesByPopularity, setMoviesByPopularity] = useState<IMoviesByPopularity | null>(null)
  const [moviesByRating, setMoviesByRating] = useState<IMoviesRated | null>(null)
  const [moviesByNowPlaying, setMoviesByNowPlaying] = useState<IMoviesNow | null>(null)
  const [moviesByUpcoming, setMoviesByUpcoming] = useState<IMoviesUpcoming | null>(null)
  const [moviesByID, setMoviesByID] = useState<IMovie | null>(null)

  const getMoviesByPopularity = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByPopularity()
    setMoviesByPopularity(movies)
  }

  const getMoviesByRating = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByRating()
    setMoviesByRating(movies)
  }

  const getMoviesByNowPlaying = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByNowPlaying()
    setMoviesByNowPlaying(movies)
  }

  const getMoviesByUpcoming = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByUpcoming()
    setMoviesByUpcoming(movies)
  }

  const getMovieByID = async (id: string): Promise<void> => {
    const movie = await MoviesService.getMovieByID(id)
    setMoviesByID(movie)
  }

  useEffect(() => {
    const requests = [
      getMoviesByPopularity(),
      getMoviesByRating(),
      getMoviesByNowPlaying(),
      getMoviesByUpcoming()
    ]

    Promise.all(requests).then(() => setIsMoviesfetching(false))
  }, [])

  return (
    <MoviesContext.Provider value={{
      // properties
      isMoviesfetching,
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