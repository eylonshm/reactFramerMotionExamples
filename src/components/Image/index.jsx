import { motion } from 'framer-motion'
import styles from './index.module.scss'
import classNames from 'classnames'

const duration = 0.25

const imgVariants = {
  hovered: {
    scale: 1.2,
  },
}

const titleVariants = {
  initial: {
    transform: 'rotate(90deg)',
  },
  hovered: {
    opacity: 0,
    transform: 'translateX(-50px) rotate(90deg)',
  },
}

const titleWrapperVariants = {
  initial: {
    transform: 'rotate(90deg)',
    opacity: 0,
  },
  hovered: {
    opacity: 1,
    transform: 'translateX(-60px) rotate(90deg)',
    delay: 0.4,
    transition: {
      ease: 'easeInOut',
      duration,
      transform: {
        delay: duration,
        duration,
      },
    },
  },
}

const Image = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial='initial'
      whileHover='hovered'
    >
      <motion.img
        src={
          'https://media.istockphoto.com/id/656673020/photo/handsome-in-spectacles.jpg?s=612x612&w=0&k=20&c=klIlcueGJlAnOehrIZNpvFrVT_olKKqhaVT77H5Fj-s='
        }
        variants={imgVariants}
        transition={{
          ease: 'linear',
          duration: 0.18,
        }}
      />
      <motion.h3
        className={classNames(styles.title, styles.outerTitle)}
        variants={titleVariants}
      >
        Maximilian Shwartz
      </motion.h3>
      <motion.div
        className={styles.titleWrapper}
        variants={titleWrapperVariants}
      >
        <h3 className={styles.title} variants={titleVariants}>
          Maximilian Shwartz
        </h3>
      </motion.div>
    </motion.div>
  )
}

export default Image
