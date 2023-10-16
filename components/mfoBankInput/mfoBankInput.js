import React, { useState } from "react";
import styles from "./mfoBankInput.module.css";

export default function MFOBankInput() {
  const [modal, setModal] = useState(false);

  const [amount, setAmount] = useState("");

  return (
    <div className={styles.accounts_input}>
      <div
        className={styles.accounts_input_main}
        onClick={() => setModal(!modal)}
      >
        <div className={styles.accounts_input_main_texts}>МФО банка</div>

        <div
          className={`${styles.accounts_input_main_icon} ${
            modal && styles.accounts_input_main_icon_active
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
              d="M1.04004 4.92004L6.50004 10.64L11.96 4.92004H1.04004Z"
              fill="#777373"
            />
          </svg>
        </div>
      </div>
      {modal && (
        <div className={styles.accounts_input_modal}>
          <div className={styles.accounts_input_modal_search}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.4001 1.19995C4.64854 1.19995 1.6001 4.24839 1.6001 7.99995C1.6001 11.7515 4.64854 14.8 8.4001 14.8C9.88447 14.8 11.2563 14.3218 12.3751 13.5125L17.6376 18.7625L18.7626 17.6375L13.5626 12.425C14.5845 11.2343 15.2001 9.68901 15.2001 7.99995C15.2001 4.24839 12.1517 1.19995 8.4001 1.19995ZM8.4001 1.99995C11.7188 1.99995 14.4001 4.6812 14.4001 7.99995C14.4001 11.3187 11.7188 14 8.4001 14C5.08135 14 2.4001 11.3187 2.4001 7.99995C2.4001 4.6812 5.08135 1.99995 8.4001 1.99995Z"
                fill="#342C2C"
              />
            </svg>
            <input type="text" placeholder="Поиск" />
          </div>
          <div>
            <div className={styles.accounts_input_modal_item_modal_item}>
              <h2>00060</h2>
              <p>ТОШКЕНТ Ш., МАРКАЗИЙ БАНКНИНГ БАНКНИНГ БАНКНИ БАНКНИН</p>
            </div>
            <div className={styles.accounts_input_modal_item_modal_item}>
              <h2>00060</h2>
              <p>ТОШКЕНТ Ш., МАРКАЗИЙ БАНКНИНГ БАНКНИНГ БАНКНИ БАНКНИН</p>
            </div>
            <div className={styles.accounts_input_modal_item_modal_item}>
              <h2>00060</h2>
              <p>ТОШКЕНТ Ш., МАРКАЗИЙ БАНКНИНГ БАНКНИНГ БАНКНИ БАНКНИН</p>
            </div>
          </div>
          <div className={styles.accounts_input_modal_btns}>
            <button className={styles.accounts_input_modal_btns_btn}>
              Сбросить
            </button>
            <button
              className={`${styles.accounts_input_modal_btns_btn} ${styles.accounts_input_modal_btns_btn_gray}`}
            >
              Применить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
