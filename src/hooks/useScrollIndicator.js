import { useScroll, useSpring } from 'framer-motion'

const springOptions = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
}

const useScrollIndicator = ({ springOptions: propsSpringOptions }) => {
  const { scrollYProgress } = useScroll()
  return useSpring(scrollYProgress, springOptions || propsSpringOptions)
}

export default useScrollIndicator
