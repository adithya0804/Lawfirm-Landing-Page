import React from 'react'
import gift from "../../../Assets/gift.png"
import styles from "./Card.module.css"
const Card = ({title}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
        <img src={gift} alt="gift" className={styles.img}/>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. </div>
        <button className={styles.readBtn}>Read More</button>
    </div>
  )
}

export default Card
