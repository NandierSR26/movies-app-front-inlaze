import axios from "axios";
import { BackdropImages, IMovie, IMoviesByPopularity, IMoviesNow, IMoviesRated, IMoviesUpcoming } from "../interfaces";

export class MoviesService {
  public async getMoviesByPopularity() {
    const url = `${import.meta.env.VITE_TMDB_API_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const { data } = await axios.get<IMoviesByPopularity>(url);
    return data
  }

  public async getMoviesByRating() {
    const url = `${import.meta.env.VITE_TMDB_API_BASE_URL}/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const { data } = await axios.get<IMoviesRated>(url);
    return data
  }

  public async getMoviesByNowPlaying() {
    const url = `${import.meta.env.VITE_TMDB_API_BASE_URL}/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const { data } = await axios.get<IMoviesNow>(url);
    return data
  }

  public async getMoviesByUpcoming() {
    const url = `${import.meta.env.VITE_TMDB_API_BASE_URL}/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const { data } = await axios.get<IMoviesUpcoming>(url);
    return data
  }

  public async getMovieByID(id: string) {
    const url = `${import.meta.env.VITE_TMDB_API_BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const { data } = await axios.get<IMovie>(url);
    return data
  }

  public async getMovieImages(id: number) {
    const url = `${import.meta.env.VITE_MOVIES_APP_API_BASE_URL}/movies/images/${ id }`
    const data = await axios.get<BackdropImages>(url)
    return data
  }

}

export default new MoviesService()
