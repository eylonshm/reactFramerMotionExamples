import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './index.module.scss'

const buttonVariants = {
  hovered: {
    scale: 1.2,
  },
  tapped: {
    scale: 0.8,
  },
}

const lineVariants = {
  init: {
    x: 40,
  },
  hovered: {
    x: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

const Tab = ({ path, isActive }) => {
  return (
    <motion.button
      initial='init'
      className={classNames(styles.navElement, {
        [styles.active]: isActive,
      })}
      key={path}
      variants={buttonVariants}
      whileHover='hovered'
      whileTap='tapped'
    >
      <Link to={path} key={path}>
        <motion.div className={styles.linkWrapper}>
          {path.slice(1)}
          <motion.div className={styles.line} variants={lineVariants} />
        </motion.div>
      </Link>
    </motion.button>
  )
}

export default Tab
