import styles from './AuthPage.module.scss'

export const LoginForm = () => {
  return (
    <>
      <p className={styles["form-legend"]}>We love having you back</p>
      <form>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Password" />

        <button type='submit' className={styles["btn-submit"]}>
          Log In
        </button>
      </form>
    </>
  )
}
