import { Carousel, Header, HomeBanner, Sidebar } from "../../components"
import { AuthPage } from "../Auth/AuthPage"
import { useMoviesContext } from "../../context/MoviesProvider"

import styles from './Home.module.scss'


export const HomePage = () => {

  const { moviesByPopularity, moviesByNowPlaying, moviesByRating, moviesByUpcoming, isMoviesfetching } = useMoviesContext()

  if (isMoviesfetching) return <h1>Cargando ...</h1>

  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <HomeBanner moviesByPopularity={moviesByPopularity!} />

      <section className={styles["main-section"]}>
        {/* sidebar */}
        <Sidebar />

        {/* main */}
        <main>
          <Carousel titleSection="Popular" carouselItems={moviesByPopularity!.results} />
          <Carousel titleSection="Now Playing" carouselItems={moviesByNowPlaying!.results} />
          <Carousel titleSection="Upcoming" carouselItems={moviesByUpcoming!.results} />
          <Carousel titleSection="Top Rated" carouselItems={moviesByRating!.results} />
        </main>
      </section>

      <AuthPage authformActive={false} />
    </>
  )
}
