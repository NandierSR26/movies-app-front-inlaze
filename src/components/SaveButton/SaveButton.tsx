import saveIcon from '/assets/book-check.svg'
import styles from './SaveButton.module.scss'

export const SaveButton = () => {
  return (
    <div className={styles.stat}>
      <span>save</span>

      <div>
        <img src={saveIcon} alt="save-icon" />
      </div>
    </div>
  )
}
