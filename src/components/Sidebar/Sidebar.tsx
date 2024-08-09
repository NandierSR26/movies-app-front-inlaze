import { orderMoviesOptions } from "../../constants/order-movies-options"
import styles from "./Sidebar.module.scss"
import searchIcon from "/assets/search-icon.svg"
import arrowDownIcon from "/assets/arrow-down-icon.svg"

export const Sidebar = () => {
  return (
    <aside className={styles["sidebar"]}>

      <form>
        {/* FUTURE: input component */}
        <div className={styles["input-main-container"]}>
          <label className={styles["input-label"]} htmlFor="">Search</label>

          <div className={styles["input-container"]}>
            <input type="text" placeholder="Keyword" />
            <figure className={styles["input-icon"]}>
              <img src={searchIcon} alt="icon" />
            </figure>
          </div>

          <span className={styles["input-error"]}></span>
        </div>

        {/* FUTURE: select component */}
        <div className={styles["input-main-container"]}>
          <label className={styles["input-label"]} htmlFor="">Sort By</label>

          <div className={styles["input-container"]}>
            <select>
              <option value="">Select</option>
              {
                orderMoviesOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))
              }
            </select>
            <figure className={styles["input-icon"]}>
              <img src={arrowDownIcon} alt="icon" />
            </figure>
          </div>
          <span className={styles["input-error"]}></span>
        </div>

        <div className={styles["input-main-container"]}>
          <label className={styles["input-label"]} htmlFor="">Genres</label>

          <div className={styles["input-container"]}>
            <select>
              <option value="">Select</option>
              {
                orderMoviesOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))
              }
            </select>
            <figure className={styles["input-icon"]}>
              <img src={arrowDownIcon} alt="icon" />
            </figure>
          </div>
          <span className={styles["input-error"]}></span>
        </div>


      </form>
    </aside>
  )
}
