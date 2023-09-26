import React from 'react'
import styles from "./Card.module.css"
const Card = ({data}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
        <img src={data.img} alt="gift" className={styles.img}/>
        </div>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.subtitle}>Ceo of Hunt</div>
        <div className={styles.content}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. </div>
    </div>
  )
}

export default Card