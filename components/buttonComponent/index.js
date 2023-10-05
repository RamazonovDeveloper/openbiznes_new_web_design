import React from "react";
import styles from "./myBtn.module.css";

export default function ButtonComponent({
  children,
  type,
  width,
  padding,
  fontSize,
  height,
  handleClick,
}) {
  // if(type == 'standart'){
  //     console.log("Standart buttton !!!!");
  // }

  switch (type) {
    case "standart":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn}`}
          onClick={handleClick}
        >
          {children}
        </button>
      );
    case "mini":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn} ${styles.my_mini_btn}`}
          onClick={handleClick}
        >
          {children}
        </button>
      );
    case "adaptive":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_adaptive_btn}`}
          style={{ padding: ` 0 ${padding}`, height:height, fontSize:fontSize}}
          onClick={handleClick}
        >
          {children}
        </button>
      );
    case "standart_gray":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn} ${styles.my_gray}`}
          onClick={handleClick}
        >
          {children}
        </button>
      );
    case "mini_gray":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_standart_btn} ${styles.my_mini_btn} ${styles.my_gray}`}
          onClick={handleClick}
        >
          {children}
        </button>
      );
    case "adaptive_gray":
      return (
        <button
          className={`${styles.my_btn} ${styles.my_gray}`}
          style={{
            paddingLeft: padding,
            paddingRight: padding,
            fontSize: `${fontSize || "15px"}`,
            height: height,
            alignItems: "center",
          }}
          onClick={handleClick}
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
