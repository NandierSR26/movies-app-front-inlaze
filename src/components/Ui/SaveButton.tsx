import saveIcon from '/assets/book-check.svg'
import styles from './ui.module.scss'

interface Props {
  label?: string;
  style?: React.CSSProperties;
}

export const SaveButton = ({ label, style }: Props) => {
  return (
    <div className={styles.stat}>
      { label && <span>{ label }</span> }

      <div style={style}>
        <img src={saveIcon} alt="save-icon" />
      </div>
    </div>
  )
}
