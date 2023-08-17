import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './index.module.scss'
import LoremIpsum from '../LoremIpsum'
import { Button } from '../index'
import useScrollIndicator from '../../hooks/useScrollIndicator'

const headerVariants = {
  headerNotInView: {
    opacity: 0.5,
  },

  headerInView: {
    opacity: 1,
    scale: 1.5,
  },
}

const Scroll = () => {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef)
  const scaleX = useScrollIndicator({})

  const scrollToTop = () =>
    headerRef.current.scrollIntoView({
      behavior: 'smooth',
    })

  return (
    <div className={styles.wrapper} style={{ scaleX }}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <motion.h1
        initial='headerNotInView'
        whileInView='headerInView'
        ref={headerRef}
        variants={headerVariants}
        className={styles.header}
      >
        Scroll Spring animation
      </motion.h1>

      <LoremIpsum />

      {!isHeaderInView && (
        <Button
          className={styles.jumpButton}
          text='UP'
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
        />
      )}
    </div>
  )
}

export default Scroll
