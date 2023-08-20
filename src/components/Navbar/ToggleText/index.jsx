import { motion } from 'framer-motion'
import styles from './index.module.scss'
import { splitStringIntoSpans } from '../../../helpers'

const ToggleText = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{
        transform: 'translateX(-20px) translateY(-20px)',
      }}
      animate={{
        transform: 'rotate(80deg) translateX(-10px) translateY(10px)',
      }}
      exit={{
        transform: 'rotate(175deg) translateX(58px) translateY(10px)',
      }}
      transition={{
        ease: 'linear',
        duration: 0.5,
      }}
    >
      {splitStringIntoSpans('Toggle NavBar Links')}
    </motion.div>
  )
}

export default ToggleText
