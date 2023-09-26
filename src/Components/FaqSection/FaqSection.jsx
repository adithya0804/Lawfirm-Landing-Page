import React from 'react'
import styles from "./FaqSection.module.css"
import Accordion from '../Accordion/Accordion'
const faq = [
    'Do I need a personal injury report?',
    'How much is my case worth?',
    'What should I do right after a car accident?',
    'How long will the contract last?',
  ]
const FaqSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>FAQ</div>
      <div className={styles.content}>
        <div className={styles.leftSection}>
        Amet minim mollit non deserunt ullamco estsit aliqua dolor do <br/> amet sint. 
        </div>
        <div className={styles.rightSection}>  
        {faq.map((item,index)=>{
            return <Accordion question={item} key={index} index={index}/>
        })}   
                </div>
      </div>
    </div>
  )
}

export default FaqSection
