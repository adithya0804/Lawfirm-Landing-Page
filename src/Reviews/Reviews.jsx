import React from 'react'
import {ReactComponent as Left} from "../Assets/leftArrow.svg"
import {ReactComponent as Right} from "../Assets/rightArrow.svg"
import client1Img from '../Assets/client1.png'
import client2Img from '../Assets/client2.png'
import client3Img from '../Assets/client3.png'
import styles from "./Reviews.module.css"
import Card from './Card/ReviewCard'
const clients = [
    { img: client1Img, name: 'Devon Lane' },
    { img: client2Img, name: 'Jane Cooper' },
    { img: client3Img, name: 'Robert Fox' },
  ]
const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingSection}>
        <div className={styles.title}>What says our<br/> happy Clients</div>
        <div className={styles.btnGrp}>
            <button className={styles.btn}><Left/></button>
            <button className={styles.btn}><Right/></button>
        </div>
      </div>
      <div className={styles.cardSection}>
        {clients.map((item,index)=>{
            return <Card key={index} data={item}/>
        })}
      </div>
    </div>
  )
}

export default Reviews
