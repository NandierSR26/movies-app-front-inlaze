import { ReactNode } from "react"
import { AuthPage } from "../../pages/Auth/AuthPage"
import { Header } from "../Header/Header"
import { HomeBanner } from "../HomeBanner/HomeBanner"
import { Sidebar } from "../Sidebar/Sidebar"

import styles from './MainLayout.module.scss'

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <HomeBanner />

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
