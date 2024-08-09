import { Carousel, Header, Sidebar } from "../../components"
import styles from './Home.module.scss'
import { AuthPage } from "../Auth/AuthPage"

export const HomePage = () => {
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
          <Carousel titleSection="Popular" />
        </main>
      </section>

      <AuthPage />
    </>
  )
}
