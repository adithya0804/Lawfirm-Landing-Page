import React from 'react'
import {ReactComponent as Logo} from "../../Assets/logo.svg"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <Logo className={styles.logo}/>
      <div className={styles.navSection}>
        <a href='#home' className={styles.navItem}><span>Home</span></a>
        <a href='#attorneys' className={styles.navItem}><span>Attorneys</span></a>
        <a href="#practice"className={styles.navItem}><span>Practice Areas</span></a>
        <a href="#about" className={styles.navItem}><span>About Us</span></a>
      </div>
      <button className={styles.contactBtn}>Contact Now</button>
    </nav>
  )
}

export default Navbar
