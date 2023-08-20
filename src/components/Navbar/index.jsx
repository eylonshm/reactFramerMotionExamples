import React, { useState } from 'react'
import styles from './index.module.scss'
import { useLocation } from 'react-router-dom'
import Tab from './Tab'
import DarkModeToggle from '../DarkModeToggle'
import Toggle from './Toggle'
import { AnimatePresence } from 'framer-motion'

const Navbar = ({ paths, changeTheme }) => {
  const [open, setOpen] = useState(true)
  let location = useLocation()

  const renderLinks = (paths) =>
    paths.map((path) => (
      <Tab key={path} path={path} isActive={location.pathname === path} />
    ))

  const toggleNavBar = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  return (
    <div className={styles.wrapper}>
      <Toggle
        toggle={toggleNavBar}
        isToggled={open}
        className={styles.toggle}
      />
      <AnimatePresence>{open && renderLinks(paths)}</AnimatePresence>

      <DarkModeToggle className={styles.darkModeToggle} onClick={changeTheme} />
    </div>
  )
}

export default Navbar
