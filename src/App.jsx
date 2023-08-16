import './App.css'
import { useMemo } from 'react'
import Button from './components/Button'
import Opacity from './components/Opacity'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/opacity', element: <Opacity /> },
  { path: '/button', element: <Button /> },
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
