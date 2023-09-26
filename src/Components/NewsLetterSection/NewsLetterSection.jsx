import React, { useState } from "react";
import styles from "./NewsLetter.module.css";
const NewsLetterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timerId, setTimerId] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
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
    <div className={styles.wrapper}>
      <div className={styles.title}>Subscribe Our Newsletter</div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.nameField}
            value={name}
            type="text"
            placeholder="Name:"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.emailField}
            value={email}
            type="email"
            placeholder="Enter your email:"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.submitBtn}>
            SEND
          </button>
        </form>
        {showStatus && (
          <div className={styles.statusMsg}>
            You have subscribed to the Newsletter.
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsLetterSection;
