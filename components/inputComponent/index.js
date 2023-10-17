import React from "react";
import styles from "./myInput.module.css";

export default function InputComponent({ children, error, placeholder }) {
  return (
    <div>
      <input
        type="text"
        className={`${styles.myInput} ${error && styles.myInput_invalid}`}
        placeholder={placeholder}
      >
        {children}
      </input>
      {error && (
        <div className={styles.error}>* Этот номер уже используется</div>
      )}
    </div>
  );
}
