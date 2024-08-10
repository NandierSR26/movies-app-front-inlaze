import styles from './ui.module.scss'
import likeIcon from '/assets/like-icon.svg'

interface Props {
  label?: string;
  style?: React.CSSProperties;
}

export const LikeButton = ({ label, style }: Props) => {
  return (
    <div className={styles.stat}>
      {label && <span>{ label }</span>}

      <div style={style}>
        <img src={likeIcon} alt="like-icon" />
      </div>
    </div>
  )
}
