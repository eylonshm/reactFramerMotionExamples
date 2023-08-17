import { motion } from 'framer-motion'
import styles from './index.module.scss'
import classNames from 'classnames'

const Button = (props) => {
  const { onClick = () => {}, text, className } = props
  return (
    <motion.button
      {...props}
      onClick={onClick}
      className={classNames(styles.button, className)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      {text || 'Click Me'}
    </motion.button>
  )
}

export default Button
