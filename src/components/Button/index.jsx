import { motion } from 'framer-motion'
import styles from './index.module.scss'

const Button = () => {
  return (
    <motion.button
      className={styles.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      Click Me
    </motion.button>
  )
}

export default Button
