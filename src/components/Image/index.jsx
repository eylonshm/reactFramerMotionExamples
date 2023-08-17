import { motion } from 'framer-motion'
import styles from './index.module.scss'
import {
  Photo,
  BeforeHoverTitle,
  AfterHoverTitle,
  FooterBackground,
  Role,
} from './Components'

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
