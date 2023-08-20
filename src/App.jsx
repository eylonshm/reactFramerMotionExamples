import './App.css'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Scroll, Button, Home, Image, DragLayers } from './components'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/button', element: <Button /> },
  { path: '/scroll', element: <Scroll /> },
  { path: '/image', element: <Image /> },
  { path: '/reveal', element: <DragLayers /> },
]

const renderRoutes = (routes) => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route path={path} element={element} key={path} />
    ))}
  </Routes>
)

function App() {
  const [theme, setTheme] = useState('light')
  const paths = useMemo(() => {
    const removeHomeRoute = routes.slice(1)
    return removeHomeRoute.map(({ path }) => path)
  }, [])

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <motion className={`App ${theme}Theme`}>
      <Navbar paths={paths} changeTheme={changeTheme} />
      {renderRoutes(routes)}
    </motion>
  )
}

export default App
