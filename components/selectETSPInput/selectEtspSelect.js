import React, { useState } from "react";
import styles from "./selectEtspSelect.module.css";

export default function SelectETSPInput() {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.accounts_input}>
      <div
        className={styles.accounts_input_main}
        onClick={() => setModal(!modal)}
      >
        <div className={styles.accounts_input_main_texts}>Выберите</div>

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
          <div>
            <div className={styles.accounts_input_modal_item_modal_item}>
              <p>
                № сертификата: <span>77У1682D</span>
              </p>
              <p>
                ФИО:<span>Фамилия Имя Отчество</span>
              </p>
              <p>
                Организация: <span>FUTURE OPEN TEHNOLOGY GROUP</span>
              </p>
            </div>
            <div className={styles.accounts_input_modal_item_modal_item}>
              <p>
                № сертификата: <span>77У1682D</span>
              </p>
              <p>
                ФИО:<span>Фамилия Имя Отчество</span>
              </p>
              <p>
                Организация: <span>FUTURE OPEN TEHNOLOGY GROUP</span>
              </p>
            </div>
            <div className={styles.accounts_input_modal_item_modal_item}>
              <p>
                № сертификата: <span>77У1682D</span>
              </p>
              <p>
                ФИО:<span>Фамилия Имя Отчество</span>
              </p>
              <p>
                Организация: <span>FUTURE OPEN TEHNOLOGY GROUP</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
