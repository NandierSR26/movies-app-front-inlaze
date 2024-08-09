import styles from "./Header.module.scss"
import inlazeLogo from "/assets/Logo.png"

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <figure>
          <img src={inlazeLogo} alt="logo" />
        </figure>

        <ul className={styles["menu"]}>
          <li className={styles["menu-items"]}>
            <a>Popular</a>
          </li>

          <li className={styles["menu-items"]}>
            <a>Now Playing</a>
          </li>

          <li className={styles["menu-items"]}>
            <a>Upcoming</a>
          </li>

          <li className={styles["menu-items"]}>
            <a>Top Rated</a>
          </li>

          <li className={styles["menu-items"]}>
            <a>Favorites</a>
          </li>

        </ul>

        <div className={styles["header-options"]}>
          <button>Sign In</button>
        </div>
      </div>
    </header>
  )
}
