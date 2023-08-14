import { motion } from 'framer-motion'

const Opacity = () => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.5,
      height: '200px',
      width: '300px',
      backgroundColor: '#000',
      boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
    }}
    animate={{
      x: 0,
      position: 'fixed',
      opacity: 1,
      height: '400px',
      width: '700px',
    }}
    transition={{ duration: 2, repeat: Infinity }}
  />
)

export default Opacity
