import { motion, useScroll, useSpring } from 'framer-motion'
import styles from './index.module.scss'
import LoremIpsum from '../LoremIpsum'

const Scroll = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className={styles.wrapper} style={{ scaleX }}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <h1>Scroll Spring animation</h1>
      <LoremIpsum />
    </div>
  )
}

export default Scroll
