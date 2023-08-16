import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { motion } from 'framer-motion'

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

const Navbar = ({ paths }) => {
  const renderLinks = (paths) =>
    paths.map((path) => (
      <motion.button
        initial='init'
        className={styles.navElement}
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
    ))

  return <div className={styles.wrapper}>{renderLinks(paths)}</div>
}

export default Navbar
