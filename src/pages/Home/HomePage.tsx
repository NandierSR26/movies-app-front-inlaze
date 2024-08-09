import { Header, Sidebar } from "../../components"
import styles from './Home.module.scss'

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
        <main></main>
      </section>

      {/* main */}

      {/* Footer */}
    </>
  )
}
