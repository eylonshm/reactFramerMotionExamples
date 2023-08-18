import React from 'react'
import LoremIpsum from '../LoremIpsum'
import classNames from 'classnames'
import styles from './index.module.scss'
import useMousePosition from '../../hooks/useMousePosition'

const DragLayers = () => {
  const mousePosition = useMousePosition()
  return (
    <div className={styles.wrapper}>
      <LoremIpsum className={styles.content} />
      <LoremIpsum
        className={classNames(styles.content, styles.secondLayer)}
        animate={{
          opacity: 1,
          WebkitMaskPosition: `${mousePosition.x - 100}px ${
            mousePosition.y - 100
          }px`,
        }}
        initial={{ opacity: 0 }}
        transition={{
          ease: 'linear',
          duration: 1,
          opacity: {
            delay: 1.2,
            duration: 1.5,
          },
        }}
      />
    </div>
  )
}

export default DragLayers
