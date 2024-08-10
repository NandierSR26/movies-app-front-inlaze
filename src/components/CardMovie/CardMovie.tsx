import styles from "./CardMovie.module.scss"
import { CircularRating } from "../Ui/CircularRating"
import { LikeButton } from "../Ui/LikeButton"
import { SaveButton } from "../Ui/SaveButton"
import { IShortMovie } from "../../interfaces"

interface Props {
  movie: IShortMovie;
}

export const CardMovie = ({ movie }: Props) => {
  return (
    <div className={styles["card"]}>
      <figure>
        <img
          src={`${import.meta.env.VITE_TMDB_URL_IMAGES}/w200${movie.poster_path}`}
          alt="image"
        />
      </figure>

      <div className={styles["card-body"]}>
        <h4>
          {
            (movie.original_title.length > 30)
              ? movie.original_title.substring(0, 25) + '...'
              : movie.original_title
          }
        </h4>
        <p>{movie.release_date}</p>

        <section className={styles["movie-stats"]}>
          <CircularRating rating={movie.vote_average} />
          <LikeButton />
          <SaveButton />
        </section>
      </div>
    </div>
  )
}
