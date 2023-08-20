import React from 'react'
import styles from './index.module.scss'
import { useLocation } from 'react-router-dom'
import Tab from './Tab'
import DarkModeToggle from '../DarkModeToggle'

const Navbar = ({ paths, changeTheme }) => {
  let location = useLocation()

  const renderLinks = (paths) =>
    paths.map((path) => (
      <Tab key={path} path={path} isActive={location.pathname === path} />
    ))

  return (
    <div className={styles.wrapper}>
      {renderLinks(paths)}
      <DarkModeToggle className={styles.darkModeToggle} onClick={changeTheme} />
    </div>
  )
}

export default Navbar
