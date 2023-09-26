import React from 'react'
import styles from "./TeamCard.module.css"

const TeamCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.img} alt={data.name} className={styles.dataImg} />
      <div className={styles.dataInfo}>
        <p className={styles.dataName}>{data.name}</p>
        <p className={styles.dataStats}>{data.cases} cases</p>
      </div>
    </div>
  )
}

export default TeamCard
