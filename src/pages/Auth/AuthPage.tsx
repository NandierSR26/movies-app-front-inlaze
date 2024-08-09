import { useState } from 'react'
import { Banner1 } from '../../components'
import styles from './AuthPage.module.scss'
import { LoginForm } from './LoginForm'
import backIcon from '/assets/left-arrow-circle-icon.svg'
import { RegisterForm } from './RegisterForm'

interface Props {
  authformActive: boolean;
}

export const AuthPage = ({ authformActive }: Props) => {

  const [isSelected, setIsSelected] = useState<"login" | "signup">('signup')

  return (
    <main className={styles["backdrop-page"]} style={{ display: authformActive ? 'flex' : 'none' }}>
      <section className={styles["page-container"]}>

        <div className={styles["btn-close-auth"]}>
          <img src={backIcon} alt="arrow-icon" />
          <span>Back</span>
        </div>

        <div className={styles["form-container"]}>
          <div className={styles["form-switch"]}>
            <button 
              className={`${ (isSelected === 'signup') ? styles.active : '' }`}
              onClick={() => setIsSelected('signup')}
            >
              Sign Up
            </button>
            <button 
              className={`${ (isSelected === 'login') ? styles.active : '' }`}
              onClick={() => setIsSelected('login')}
            >
              Log In
            </button>
          </div>

          { isSelected === 'login' && <LoginForm /> }
          { isSelected === 'signup' && <RegisterForm /> }
        </div>

        <Banner1 />

      </section>
    </main>
  )
}
