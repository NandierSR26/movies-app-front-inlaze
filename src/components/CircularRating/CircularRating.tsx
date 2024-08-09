import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import styles from './CircularRating.module.scss'

export const CircularRating = () => {
  return (
    <div className={`${styles.stat} ${styles.progress}`}>
      <span>Rating</span>

      <div>
        <CircularProgressbar
          value={0.6}
          maxValue={1}
          text={`${(0.6 * 100)}%`}
          styles={buildStyles({
            textSize: '39px',
          })}
        />
      </div>
    </div>
  )
}
