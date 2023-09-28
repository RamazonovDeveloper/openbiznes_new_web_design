import React from "react";
import styles from "./myBtn.module.css";

export default function ButtonComponent({ children, type, width }) {

    if(type == 'standart'){
        console.log("Standart buttton !!!!");
    }
    
  switch (type) {
    case "standart":
      return (
        <button className={`${styles.my_btn} ${styles.my_standart_btn}`}>
          {children}
        </button>
      );
    case "mini":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn} ${styles.my_mini_btn}`}
        >
          {children}
        </button>
      );
    case "adaptive":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn}`}
          style={{ width: width }}
        >
          {children}
        </button>
      );
    case "standart_gray":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn} ${styles.my_gray}`}
        >
          {children}
        </button>
      );
    case "mini_gray":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn} ${styles.my_mini_btn} ${styles.my_gray}`}
        >
          {children}
        </button>
      );
    case "adaptive_gray":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn}`}
          style={{ width: width }}
        >
          {children}
        </button>
      );

    default:
      return (
        <button className={`${styles.my_btn} ${styles.my_standart_btn}`}>
          {children}Invalid Button type
        </button>
      );
  }
}
