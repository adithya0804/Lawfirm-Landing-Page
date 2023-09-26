import React from 'react'
import styles from "./AboutUs.module.css"
import Card from './Card/Card'
const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.aboutSection}>
      <div className={styles.leftSection}>
        <div className={styles.leftText}>
        Let's Introduce <br/> Ourself
        </div>
      </div>
      <div className={styles.rightSection}>
        <span className={styles.rightHeader}>Criminal Lawyer</span>
        <p className={styles.rightText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
      </div>
      </div>
      <div className={styles.whySection}>
        <div className={styles.whytxt}>Why Choose us?</div>
        <div className={styles.cardSection}>
            <Card title={"100% Success Rate"}/>
            <Card title={"98% Success Rate"}/>
            <Card title={"100% Success Rate"}/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
