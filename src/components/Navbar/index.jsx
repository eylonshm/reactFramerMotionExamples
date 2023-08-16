import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

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
  let location = useLocation()

  const renderLink = (path) => (
    <motion.button
      initial='init'
      className={classNames(styles.navElement, {
        [styles.active]: location.pathname === path,
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

  const renderLinks = (paths) => paths.map((path) => renderLink(path))

  return <div className={styles.wrapper}>{renderLinks(paths)}</div>
}

export default Navbar
