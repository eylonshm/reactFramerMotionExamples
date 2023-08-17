const duration = 0.25

const imgVariants = {
  hovered: {
    scale: 1.2,
  },
}

const titleVariants = {
  initial: {
    transform: 'rotate(90deg)',
  },
  hovered: {
    opacity: 0,
    transform: 'translateX(-50px) rotate(90deg)',
  },
}

const titleWrapperVariants = {
  initial: {
    transform: 'rotate(90deg)',
    opacity: 0,
  },
  hovered: {
    opacity: 1,
    transform: 'translateX(-60px) rotate(90deg)',
    delay: 0.4,
    transition: {
      ease: 'easeInOut',
      duration,
      transform: {
        delay: duration,
        duration,
      },
    },
  },
}

const footerBackgroundVariants = {
  initial: {
    opacity: 0,
  },
  hovered: {
    opacity: 1,
  },
}

const roleVariants = {
  initial: {
    y: 100,
  },
  hovered: {
    y: 0,
    transition: {
      y: {
        delay: 0.4,
      },
    },
  },
}

export {
  imgVariants,
  titleVariants,
  titleWrapperVariants,
  footerBackgroundVariants,
  roleVariants,
}
