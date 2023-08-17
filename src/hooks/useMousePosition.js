import { useEffect, useState } from 'react'

const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({})

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePos
}

export default useMousePosition
