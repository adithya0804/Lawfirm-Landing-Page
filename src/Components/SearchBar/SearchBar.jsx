import React from 'react'
import messageBox from "../../Assets/MessageBox.jpg";
import styles from "./SearchBar.module.css"
const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <img src={messageBox} alt='mssg' className={styles.email}/>
      <input type='text' placeholder="Enter your email address" className={styles.inputBox}/>
      <button className={styles.talkButton}>Lets's Talk</button>
    </div>
  )
}

export default SearchBar
