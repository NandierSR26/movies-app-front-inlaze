import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import styles from './ui.module.scss'
import { useCallback } from "react";
import { formatRating } from "../../utils/utils";

interface Props {
  rating: number;
}

export const CircularRating = ({ rating }: Props) => {

  return (
    <div className={`${styles.stat} ${styles.progress}`}>
      <span>Rating</span>

      <div>
        <CircularProgressbar
          value={+formatRating(rating)/100}
          maxValue={1}
          text={`${formatRating(rating)}%`}
          styles={buildStyles({
            textSize: '35px',
            textColor: (rating >= 8) ? "#4DA14F" : (rating < 8 && rating >= 5) ? '#FF8800' : '#E54545',
            trailColor: (rating >= 8) ? "#d1e9d2" : (rating < 8 && rating >= 5) ? '#ffe7cc' : '#fef8f8',
            pathColor: (rating >= 8) ? "#4DA14F" : (rating < 8 && rating >= 5) ? '#FF8800' : '#E54545',
          })}
        />
      </div>
    </div>
  )
}
