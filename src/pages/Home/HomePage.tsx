import { Carousel, MainLayout } from "../../components"
import { useMoviesContext } from "../../context/MoviesProvider"

export const HomePage = () => {

  const { moviesByPopularity, moviesByNowPlaying, moviesByRating, moviesByUpcoming, isMoviesfetching } = useMoviesContext()

  if (isMoviesfetching) return <h1>Cargando ...</h1>

  return (
    <>
     <MainLayout moviesByPopularity={moviesByPopularity!}>
      {/* main */}
      <main>
          <Carousel titleSection="Popular" carouselItems={moviesByPopularity!.results} />
          <Carousel titleSection="Now Playing" carouselItems={moviesByNowPlaying!.results} />
          <Carousel titleSection="Upcoming" carouselItems={moviesByUpcoming!.results} />
          <Carousel titleSection="Top Rated" carouselItems={moviesByRating!.results} />
        </main>
     </MainLayout>
    </>
  )
}
