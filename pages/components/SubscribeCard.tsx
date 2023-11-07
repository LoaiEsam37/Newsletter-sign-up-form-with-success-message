import styles from "@/styles/SubscribeCard.module.css";
import { useState } from "react";
import Image from "next/image";

export default function SubscribeCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardForm}>
          <div className={styles.cardFormWrapper}>
            <h2>Stay updated!</h2>
            <span>
              Join 60,000+ product managers receiving monthly updates on:
            </span>
            <div className={styles.features}>
              <span>Product discovery and building what matters</span>
              <span>Measuring to ensure updates are a success</span>
              <span>And much more!</span>
            </div>
            <form className={styles.form}>
              <label>Email address</label>
              <input type="text" placeholder="email@company.com" />
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
        <div className={styles.cardImage}>
          <div className={styles.ImageWrapper}></div>
        </div>
      </div>
    </div>
  );
}
