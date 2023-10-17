import React from "react";
import styles from "./inputDivComp.module.css";

export default function InputDivComponent({ children, error }) {
  return (
    <div>
      <div className={`${styles.myInput} ${error && styles.myInput_invalid}`}>
        {children}
      </div>
      {error && (
        <div className={styles.error}>* Этот номер уже используется</div>
      )}
    </div>
  );
}
