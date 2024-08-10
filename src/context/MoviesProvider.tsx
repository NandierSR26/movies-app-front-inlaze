import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { IMovie, IMoviesByPopularity, IMoviesNow, IMoviesRated, IMoviesUpcoming, IShortMovie } from "../interfaces";
import MoviesService from "../services/movies.service";
import moviesService from "../services/movies.service";

interface IMoviescontextProps {
  // properties
  isMoviesfetching: boolean;
  moviesByPopularity: IShortMovie[];
  moviesByRating: IShortMovie[];
  moviesByNowPlaying: IShortMovie[];
  moviesByUpcoming: IShortMovie[];
  moviesByID: IMovie | null;
  page: number;
  // hasMore: boolean;

  // methods
  getMoviesByPopularity: () => Promise<void>;
  getMoviesByRating: () => Promise<void>;
  getMoviesByNowPlaying: () => Promise<void>;
  getMoviesByUpcoming: () => Promise<void>;
  getMovieByID: (id: string) => Promise<void>;
  setIsMoviesfetching: React.Dispatch<React.SetStateAction<boolean>>
  // resetPage: () => void;

}

export const MoviesContext = createContext({} as IMoviescontextProps)

export const MoviesProvider = (props: { children: JSX.Element }): JSX.Element => {

  const [isMoviesfetching, setIsMoviesfetching] = useState<boolean>(false)

  const [moviesByPopularity, setMoviesByPopularity] = useState<IShortMovie[]>([])
  const [moviesByRating, setMoviesByRating] = useState<IShortMovie[]>([])
  const [moviesByNowPlaying, setMoviesByNowPlaying] = useState<IShortMovie[]>([])
  const [moviesByUpcoming, setMoviesByUpcoming] = useState<IShortMovie[]>([])
  const [moviesByID, setMoviesByID] = useState<IMovie | null>(null)

  const [page, setPage] = useState(1)

  const getMoviesByPopularity = useCallback(async (): Promise<void> => {
    console.log('getMoviesByPopularity')
    const movies = await MoviesService.getMoviesByPopularity()

    setMoviesByPopularity(movies.results)
    setPage((prevPage) => prevPage+1)
  }, [moviesService, setMoviesByPopularity])

  const getMoviesByRating = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByRating()
    // setMoviesByRating((prevMovies) => [...prevMovies, ...movies.results])
    setMoviesByRating(movies.results)

  }

  const getMoviesByNowPlaying = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByNowPlaying()
    // setMoviesByNowPlaying((prevMovies) => [...prevMovies, ...movies.results])
    setMoviesByNowPlaying(movies.results)

  }

  const getMoviesByUpcoming = async (): Promise<void> => {
    const movies = await MoviesService.getMoviesByUpcoming()
    // setMoviesByUpcoming((prevMovies) => [...prevMovies, ...movies.results])
    setMoviesByUpcoming(movies.results)

  }

  const getMovieByID = async (id: string): Promise<void> => {
    const movie = await MoviesService.getMovieByID(id)
    setMoviesByID(movie)
  }

  return (
    <MoviesContext.Provider value={{
      // properties
      isMoviesfetching,
      moviesByPopularity,
      moviesByRating,
      moviesByNowPlaying,
      moviesByUpcoming,
      moviesByID,
      page,
      // hasMore,

      // methods
      getMoviesByPopularity,
      getMoviesByRating,
      getMoviesByNowPlaying,
      getMoviesByUpcoming,
      getMovieByID,
      setIsMoviesfetching
      // resetPage
    }}>
      {props.children}
    </MoviesContext.Provider>

  )
}

export const useMoviesContext = () => {
  return useContext(MoviesContext)
}