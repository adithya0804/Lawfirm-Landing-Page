import React from 'react'
import styles from "./HeroSection.module.css"
import SearchBar from '../SearchBar/SearchBar'

const HeroSection = () => {
  return (
    <div id="#home" className={styles.wrapper}>
        <div className={styles.leftSection}>
            <h1 className={styles.headerText}>You don’t have to </h1>
            <h1 className={styles.headerText}>  Fight them Alone.</h1>
 <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat dolorum, labore numquam quasi recusandae sequi distinctio, quis vero saepe eaque cumque tenetur provident neque totam atque similique obcaecati fugit?</p>
      <SearchBar/>  </div>
<div className={styles.imgContainer}></div>
      </div>
  )
}

export default HeroSection
