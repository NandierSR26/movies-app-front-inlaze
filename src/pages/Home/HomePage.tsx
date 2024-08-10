import { useCallback, useEffect } from "react"
import { Carousel, MainLayout } from "../../components"
import { useMoviesContext } from "../../context/MoviesProvider"

export const HomePage = () => {

  const {
    moviesByPopularity,
    moviesByNowPlaying,
    moviesByRating,
    moviesByUpcoming,
    isMoviesfetching,


    getMoviesByPopularity,
    getMoviesByRating,
    getMoviesByUpcoming,
    getMoviesByNowPlaying,
    setIsMoviesfetching
  } = useMoviesContext()

  const fetchMovies = () => {
    setIsMoviesfetching(true)
    const requests = [
      getMoviesByPopularity(),
      getMoviesByRating(),
      getMoviesByNowPlaying(),
      getMoviesByUpcoming()
    ]

    Promise.all(requests).then(() => {
      setIsMoviesfetching(false)
    })
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if (isMoviesfetching) return <h1>Cargando ...</h1>

  return (
    <>
      <MainLayout>
        {/* main */}
        <main>
          <Carousel titleSection="Popular" carouselItems={moviesByPopularity} />
          <Carousel titleSection="Now Playing" carouselItems={moviesByNowPlaying} />
          <Carousel titleSection="Upcoming" carouselItems={moviesByUpcoming} />
          <Carousel titleSection="Top Rated" carouselItems={moviesByRating} />
        </main>
      </MainLayout>
    </>
  )
}
