import styles from './AuthPage.module.scss'

export const RegisterForm = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button type='submit' className={styles["btn-submit"]}>
          Sign Up
        </button>
      </form>
    </>
  )
}
