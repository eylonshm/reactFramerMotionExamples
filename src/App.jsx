import './App.css'
import { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Opacity, Navbar, Scroll, Button, Home, Image } from './components'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/opacity', element: <Opacity /> },
  { path: '/button', element: <Button /> },
  { path: '/scroll', element: <Scroll /> },
  { path: '/image', element: <Image /> },
]

const renderRoutes = (routes) => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route path={path} element={element} key={path} />
    ))}
  </Routes>
)

function App() {
  const paths = useMemo(() => {
    const removeHomeRoute = routes.slice(1)
    return removeHomeRoute.map(({ path }) => path)
  }, [])

  return (
    <div className='App'>
      <Navbar paths={paths} />
      {renderRoutes(routes)}
    </div>
  )
}

export default App
