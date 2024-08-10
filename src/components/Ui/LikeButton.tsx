import styles from './ui.module.scss'
import likeIcon from '/assets/like-icon.svg'

export const LikeButton = () => {
  return (
    <div className={styles.stat}>
      <span>favorite</span>

      <div>
        <img src={likeIcon} alt="like-icon" />
      </div>
    </div>
  )
}
