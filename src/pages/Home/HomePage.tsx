import { Carousel, Header, Sidebar } from "../../components"
import { AuthPage } from "../Auth/AuthPage"
import { useMoviesContext } from "../../context/MoviesProvider"

import styles from './Home.module.scss'

const authformActive = false

export const HomePage = () => {

  const { moviesByPopularity, moviesByNowPlaying, moviesByRating, moviesByUpcoming, isMoviesfetching  } = useMoviesContext()

  if(isMoviesfetching) return <h1>Cargando ...</h1>

  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <section className={styles.banner}>

      </section>


      <section className={styles["main-section"]}>
        {/* sidebar */}
        <Sidebar />

        {/* main */}
        <main>
          <Carousel titleSection="Popular" carouselItems={moviesByPopularity} />
          <Carousel titleSection="Now Playing" carouselItems={moviesByNowPlaying} />
          <Carousel titleSection="Upcoming" carouselItems={moviesByUpcoming} />
          <Carousel titleSection="Top Rated" carouselItems={moviesByRating} />
        </main>
      </section>

      <AuthPage authformActive={authformActive} />
    </>
  )
}
