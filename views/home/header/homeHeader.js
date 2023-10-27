import React from "react";
import styles from "./header.module.css";

export default function HomeHeader() {
  return (
    <div className={styles.home_main_header}>
      <div className={styles.home_main_header_texts}>
        <h4>Добрый день, Анна</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>Посмотрите  все  финансовые действия по вашей компании</p>
      </div>
      <button className={styles.mainBtn}>
        Создать платеж
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5198 4.32001V11.52H4.31982V12.48H11.5198V19.68H12.4798V12.48H19.6798V11.52H12.4798V4.32001H11.5198Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
