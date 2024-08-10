import { Carousel, Header, Sidebar } from "../../components"
import styles from './Home.module.scss'
import { AuthPage } from "../Auth/AuthPage"
import { useEffect } from "react"
import { useMoviesContext } from "../../context/MoviesProvider"

const authformActive = false

export const HomePage = () => {

  const { getMoviesByPopularity, moviesByPopularity } = useMoviesContext()

  useEffect(() => {
    getMoviesByPopularity()
  }, [])

  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <section className={styles["main-section"]}>
        {/* sidebar */}
        <Sidebar />

        {/* main */}
        <main>
          <Carousel titleSection="Popular" carouselItems={moviesByPopularity} />
        </main>
      </section>

      <AuthPage authformActive={authformActive} />
    </>
  )
}
