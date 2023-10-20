import React, { useState } from "react";
import styles from "./select.module.css";
import ButtonComponent from "../buttonComponent";

export default function SelectComponent({ children, width, title, data }) {
  const [isModalActive, setModalActive] = useState(false);

  const [active, setActive] = useState(title || '');

  const handleClick = (e) => {
    console.log(e);
    setActive(e.target.innerHTML);
  };

  const handleSelectText = () => {
    setModalActive(!isModalActive);
    console.log(isModalActive);
  };

  return (
    <div className={styles.select} style={{ width: { width } }}>
      <div className={styles.select_texts} onClick={handleSelectText}>
        <div>{active}</div>
        <div
          className={`${styles.select_texts_icon} ${
            isModalActive && styles.select_texts_icon_active
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.54004 4.91992L7.00004 10.6399L12.46 4.91992H1.54004Z"
              fill="#777373"
            />
          </svg>
        </div>
      </div>
      {isModalActive && (
        <div className={styles.select_modal}>
          <div>
            {
              children
            }
          </div>
          <div className={styles.select_modal_btns}>
            <button
              className={`${styles.select_btn} ${styles.select_btn_pink}`}
            >
              Сбросить
            </button>
            <button className={styles.select_btn}>Применить</button>
          </div>
        </div>
      )}
    </div>
  );
}
