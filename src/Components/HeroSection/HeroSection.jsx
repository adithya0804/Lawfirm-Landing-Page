import React, { useState } from "react";
import messageBox from "../../Assets/MessageBox.jpg";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [timerId, setTimerId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setShowStatus(true);
    if (timerId) {
      clearTimeout(timerId);
    }
    let newTimerId = setTimeout(() => {
      setShowStatus(false);
    }, 2000);
    setTimerId(newTimerId);
  };
  return (
    <div id="#home" className={styles.wrapper}>
      <div className={styles.leftSection}>
        <h1 className={styles.headerText}>You don’t have to </h1>
        <h1 className={styles.headerText}> Fight them Alone.</h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          repellat dolorum, labore numquam quasi recusandae sequi distinctio,
          quis vero saepe eaque cumque tenetur provident neque totam atque
          similique obcaecati fugit?
        </p>
        <div className={styles.searchContainer}>
          <form className={styles.searchWrapper} onSubmit={handleSubmit}>
            <img src={messageBox} alt="mssg" className={styles.email} />
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.inputBox}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.talkButton}>
              Lets's Talk
            </button>
          </form>
          {showStatus && (
            <div className={styles.statusMsg}>
              Our team will contact you shortly
            </div>
          )}
        </div>{" "}
      </div>
      <div className={styles.imgContainer}></div>
    </div>
  );
};

export default HeroSection;
