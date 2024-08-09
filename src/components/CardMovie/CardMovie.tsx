import styles from "./CardMovie.module.scss"
import { CircularRating } from "../CircularRating/CircularRating"
import { LikeButton } from "../LikeButton/LikeButton"
import { SaveButton } from "../SaveButton/SaveButton"

export const CardMovie = () => {
  return (
    <div className={styles["card"]}>
      <img src="https://placehold.co/250x300" alt="image" />

      <div className={styles["card-body"]}>
        <h4>Title</h4>
        <p>date test</p>

        <section className={styles["movie-stats"]}>
          <CircularRating />
          <LikeButton />
          <SaveButton />
        </section>
      </div>
    </div>
  )
}
