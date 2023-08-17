import { motion } from 'framer-motion'
import styles from './index.module.scss'
import classNames from 'classnames'
import {
  imgVariants,
  titleVariants,
  titleWrapperVariants,
  footerBackgroundVariants,
  roleVariants,
} from './animationVariants'

function Photo() {
  return (
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
  )
}

function BeforeHoverTitle() {
  return (
    <motion.h3
      className={classNames(styles.title, styles.outerTitle)}
      variants={titleVariants}
    >
      Maximilian Shwartz
    </motion.h3>
  )
}

function AfterHoverTitle() {
  return (
    <motion.div className={styles.titleWrapper} variants={titleWrapperVariants}>
      <h3 className={styles.title} variants={titleVariants}>
        Maximilian Shwartz
      </h3>
    </motion.div>
  )
}

function FooterBackground() {
  return (
    <motion.div
      className={styles.footerBackground}
      variants={footerBackgroundVariants}
    />
  )
}

function Role() {
  return (
    <motion.h3
      className={classNames(styles.title, styles.role)}
      variants={roleVariants}
    >
      Head of Design
    </motion.h3>
  )
}

const Image = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial='initial'
      whileHover='hovered'
    >
      <Photo />
      <BeforeHoverTitle />
      <AfterHoverTitle />
      <FooterBackground />
      <Role />
    </motion.div>
  )
}

export default Image
