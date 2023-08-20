import styles from './index.module.scss'
import classNames from 'classnames'

const Path = ({ ...props }) => {
  return <path strokeWidth={3} strokeLinecap='round' {...props} />
}

const Toggle = ({ toggle, isToggled, className }) => {
  return (
    <svg
      className={classNames(styles.wrapper, className)}
      onClick={toggle}
      width={23}
      height={23}
      viewBox='0 0 23 23'
    >
      <Path
        d='M 2 2.5 L 20 2.5'
        className={isToggled ? styles.topLineToggled : {}}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        className={isToggled ? styles.centerLineToggled : {}}
      />
      <Path
        d='M 2 16.346 L 20 16.346'
        className={isToggled ? styles.bottomLineToggled : {}}
      />
    </svg>
  )
}

export default Toggle
