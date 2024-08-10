import { ReactNode } from "react"
import { IMoviesByPopularity } from "../../interfaces"
import { AuthPage } from "../../pages/Auth/AuthPage"
import { Header } from "../Header/Header"
import { HomeBanner } from "../HomeBanner/HomeBanner"
import { Sidebar } from "../Sidebar/Sidebar"

import styles from './MainLayout.module.scss'

interface Props {
  moviesByPopularity: IMoviesByPopularity;
  children: ReactNode;
}

export const MainLayout = ({ moviesByPopularity, children }: Props) => {
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
        { children }
      </section>

      <AuthPage authformActive={false} />
    </>
  )
}
