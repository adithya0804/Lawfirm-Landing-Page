import React from 'react'
import member1 from '../../Assets/Member1.png'
import member2 from '../../Assets/Member2.png'
import member3 from '../../Assets/Member3.png'
import member4 from '../../Assets/Member4.png'
import member5 from '../../Assets/Member5.png'
import member6 from '../../Assets/Member6.png'
import styles from "./Team.module.css"
import TeamCard from './Card/TeamCard'
const team = [
    { img: member1, name: 'Daniel Def', cases: 301 },
    { img: member2, name: 'Sanfole', cases: 850 },
    { img: member3, name: 'Cesforilla', cases: 470 },
    { img: member4, name: 'Colleen', cases: 180 },
    { img: member5, name: 'Haldone', cases: 212 },
    { img: member6, name: 'Nik Jeo', cases: 350 },
  ]
const Team = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Our Team</div>
      <div className={styles.grid}>
     {team.map((item,index)=>{
        return <TeamCard data={item} key={index}/>
     })}
      </div>
    </div>
  )
}

export default Team
