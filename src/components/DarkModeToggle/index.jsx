import styles from './index.module.scss'
import classNames from 'classnames'
import { Moon, Sun } from './Svgs'

const DarkModeToggle = ({ className, onClick }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <input type='checkbox' id='darkModeToggle' />
      <label for='darkModeToggle' onClick={onClick}>
        <Moon className={styles.moon} />
        <Sun className={styles.sun} />
      </label>
    </div>
  )
}

export default DarkModeToggle
