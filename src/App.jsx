import './App.css'
import { useState } from 'react'
import { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Scroll, Home, Image, DragLayers, Logo } from './components'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/scroll', element: <Scroll /> },
  { path: '/image', element: <Image /> },
  { path: '/reveal', element: <DragLayers /> },
  { path: '/svg', element: <Logo /> },
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
    <div className={`App ${theme}Theme`}>
      <Navbar paths={paths} changeTheme={changeTheme} />
      {renderRoutes(routes)}
    </div>
  )
}

export default App
