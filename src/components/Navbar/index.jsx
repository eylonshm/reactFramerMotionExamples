import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { motion } from 'framer-motion'

const Navbar = ({ paths }) => {
  const renderLinks = (paths) =>
    paths.map((path) => (
      <motion.button
        className={styles.navElement}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        key={path}
      >
        <Link to={path} key={path}>
          {path.slice(1)}
        </Link>
      </motion.button>
    ))

  return <div className={styles.wrapper}>{renderLinks(paths)}</div>
}

export default Navbar
