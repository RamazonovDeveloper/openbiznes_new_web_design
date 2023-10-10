import React, { useState } from "react";
import styles from "./save.module.css";

export default function SaveToggleButton() {
  const [isActive, setActive] = useState(false);

  return (
    <button className={styles.save} onClick={() => setActive(!isActive)}>
      <div className={styles.save_wrapper}>
        Сохранить
        <div
          className={`${styles.save_wrapper_icon} ${
            isActive && styles.save_wrapper_icon_active
          }`}
        >
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.04004 4.92001L6.50004 10.64L11.96 4.92001H1.04004Z"
              fill="#777373"
            />
          </svg>
        </div>
      </div>
      {isActive && (
        <div className={styles.save_modal}>
          <div>PDF</div>
          <div>DOCX</div>
        </div>
      )}
    </button>
  );
}
