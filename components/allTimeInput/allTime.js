import React, { useRef, useState } from "react";
import styles from "./allTime.module.css";
import InputDivComponent from "../inputDivComponent";

export default function AllTimeInput() {
  const [modal, setModal] = useState(false);

  const [amount, setAmount] = useState("");

  const fromInputRef = useRef();
  const toInputRef = useRef();

  const handleClick = (prop) => {
    if (prop == "from") {
      fromInputRef.current.showPicker();
    } else {
      toInputRef.current.showPicker();
    }
  };

  return (
    <div className={styles.accounts_input}>
      <div
        className={styles.accounts_input_main}
        onClick={() => setModal(!modal)}
      >
        <div className={styles.accounts_input_main_texts}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1101_11449)">
              <path
                d="M4.31997 0C3.92622 0 3.59997 0.32625 3.59997 0.72V1.44H1.43997C1.25153 1.44 1.06028 1.50891 0.925283 1.64531C0.788877 1.78031 0.719971 1.97156 0.719971 2.16V16.56C0.719971 16.7484 0.788877 16.9397 0.925283 17.0761C1.06028 17.2111 1.25153 17.28 1.43997 17.28H16.56C16.7484 17.28 16.9397 17.2111 17.0761 17.0761C17.2111 16.9397 17.28 16.7484 17.28 16.56V2.16C17.28 1.97156 17.2111 1.78031 17.0761 1.64531C16.9397 1.50891 16.7484 1.44 16.56 1.44H14.4V0.72C14.4 0.32625 14.0737 0 13.68 0H12.96C12.5662 0 12.24 0.32625 12.24 0.72V1.44H5.75997V0.72C5.75997 0.32625 5.43372 0 5.03997 0H4.31997ZM4.31997 0.72H5.03997V2.88H4.31997V0.72ZM12.96 0.72H13.68V2.88H12.96V0.72ZM1.43997 2.16H3.59997V2.88C3.59997 3.27375 3.92622 3.6 4.31997 3.6H5.03997C5.43372 3.6 5.75997 3.27375 5.75997 2.88V2.16H12.24V2.88C12.24 3.27375 12.5662 3.6 12.96 3.6H13.68C14.0737 3.6 14.4 3.27375 14.4 2.88V2.16H16.56V4.68H1.43997V2.16ZM1.43997 5.4H16.56V16.56H1.43997V5.4ZM3.59997 6.84V15.12H14.4V6.84H3.59997ZM4.31997 7.56H6.11997V9.36H4.31997V7.56ZM6.83997 7.56H8.63997V9.36H6.83997V7.56ZM9.35997 7.56H11.16V9.36H9.35997V7.56ZM11.88 7.56H13.68V9.36H11.88V7.56ZM4.31997 10.08H6.11997V11.88H4.31997V10.08ZM6.83997 10.08H8.63997V11.88H6.83997V10.08ZM11.88 10.08H13.68V11.88H11.88V10.08ZM4.31997 12.6H6.11997V14.4H4.31997V12.6ZM6.83997 12.6H8.63997V14.4H6.83997V12.6ZM9.35997 12.6H11.16V14.4H9.35997V12.6ZM11.88 12.6H13.68V14.4H11.88V12.6Z"
                fill="#342C2C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1101_11449">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          За все время
        </div>

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
              <h2>Неделя</h2>
            </div>
            <div className={styles.accounts_input_modal_item_modal_item}>
              <h2>Месяц</h2>
            </div>
            <div className={styles.accounts_input_modal_item_modal_item_last}>
              <h2>За период</h2>
            </div>
            <div className={styles.dateInput}>
              С
              <div className={styles.dateInput_wrapper}>
                <InputDivComponent>
                  <label htmlFor="ot" className={styles.dateInput_items}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1101_15909)">
                        <path
                          d="M4.31997 0C3.92622 0 3.59997 0.32625 3.59997 0.72V1.44H1.43997C1.25153 1.44 1.06028 1.50891 0.925283 1.64531C0.788877 1.78031 0.719971 1.97156 0.719971 2.16V16.56C0.719971 16.7484 0.788877 16.9397 0.925283 17.0761C1.06028 17.2111 1.25153 17.28 1.43997 17.28H16.56C16.7484 17.28 16.9397 17.2111 17.0761 17.0761C17.2111 16.9397 17.28 16.7484 17.28 16.56V2.16C17.28 1.97156 17.2111 1.78031 17.0761 1.64531C16.9397 1.50891 16.7484 1.44 16.56 1.44H14.4V0.72C14.4 0.32625 14.0737 0 13.68 0H12.96C12.5662 0 12.24 0.32625 12.24 0.72V1.44H5.75997V0.72C5.75997 0.32625 5.43372 0 5.03997 0H4.31997ZM4.31997 0.72H5.03997V2.88H4.31997V0.72ZM12.96 0.72H13.68V2.88H12.96V0.72ZM1.43997 2.16H3.59997V2.88C3.59997 3.27375 3.92622 3.6 4.31997 3.6H5.03997C5.43372 3.6 5.75997 3.27375 5.75997 2.88V2.16H12.24V2.88C12.24 3.27375 12.5662 3.6 12.96 3.6H13.68C14.0737 3.6 14.4 3.27375 14.4 2.88V2.16H16.56V4.68H1.43997V2.16ZM1.43997 5.4H16.56V16.56H1.43997V5.4ZM3.59997 6.84V15.12H14.4V6.84H3.59997ZM4.31997 7.56H6.11997V9.36H4.31997V7.56ZM6.83997 7.56H8.63997V9.36H6.83997V7.56ZM9.35997 7.56H11.16V9.36H9.35997V7.56ZM11.88 7.56H13.68V9.36H11.88V7.56ZM4.31997 10.08H6.11997V11.88H4.31997V10.08ZM6.83997 10.08H8.63997V11.88H6.83997V10.08ZM11.88 10.08H13.68V11.88H11.88V10.08ZM4.31997 12.6H6.11997V14.4H4.31997V12.6ZM6.83997 12.6H8.63997V14.4H6.83997V12.6ZM9.35997 12.6H11.16V14.4H9.35997V12.6ZM11.88 12.6H13.68V14.4H11.88V12.6Z"
                          fill="#342C2C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1101_15909">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <input
                      name="ot"
                      id="ot"
                      type="date"
                      ref={fromInputRef}
                      onClick={() => handleClick("from")}
                    />
                  </label>
                </InputDivComponent>
              </div>
            </div>
            <div className={styles.dateInput}>
              По
              <div className={styles.dateInput_wrapper}>
                <InputDivComponent>
                  <label htmlFor="ot" className={styles.dateInput_items}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1101_15909)">
                        <path
                          d="M4.31997 0C3.92622 0 3.59997 0.32625 3.59997 0.72V1.44H1.43997C1.25153 1.44 1.06028 1.50891 0.925283 1.64531C0.788877 1.78031 0.719971 1.97156 0.719971 2.16V16.56C0.719971 16.7484 0.788877 16.9397 0.925283 17.0761C1.06028 17.2111 1.25153 17.28 1.43997 17.28H16.56C16.7484 17.28 16.9397 17.2111 17.0761 17.0761C17.2111 16.9397 17.28 16.7484 17.28 16.56V2.16C17.28 1.97156 17.2111 1.78031 17.0761 1.64531C16.9397 1.50891 16.7484 1.44 16.56 1.44H14.4V0.72C14.4 0.32625 14.0737 0 13.68 0H12.96C12.5662 0 12.24 0.32625 12.24 0.72V1.44H5.75997V0.72C5.75997 0.32625 5.43372 0 5.03997 0H4.31997ZM4.31997 0.72H5.03997V2.88H4.31997V0.72ZM12.96 0.72H13.68V2.88H12.96V0.72ZM1.43997 2.16H3.59997V2.88C3.59997 3.27375 3.92622 3.6 4.31997 3.6H5.03997C5.43372 3.6 5.75997 3.27375 5.75997 2.88V2.16H12.24V2.88C12.24 3.27375 12.5662 3.6 12.96 3.6H13.68C14.0737 3.6 14.4 3.27375 14.4 2.88V2.16H16.56V4.68H1.43997V2.16ZM1.43997 5.4H16.56V16.56H1.43997V5.4ZM3.59997 6.84V15.12H14.4V6.84H3.59997ZM4.31997 7.56H6.11997V9.36H4.31997V7.56ZM6.83997 7.56H8.63997V9.36H6.83997V7.56ZM9.35997 7.56H11.16V9.36H9.35997V7.56ZM11.88 7.56H13.68V9.36H11.88V7.56ZM4.31997 10.08H6.11997V11.88H4.31997V10.08ZM6.83997 10.08H8.63997V11.88H6.83997V10.08ZM11.88 10.08H13.68V11.88H11.88V10.08ZM4.31997 12.6H6.11997V14.4H4.31997V12.6ZM6.83997 12.6H8.63997V14.4H6.83997V12.6ZM9.35997 12.6H11.16V14.4H9.35997V12.6ZM11.88 12.6H13.68V14.4H11.88V12.6Z"
                          fill="#342C2C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1101_15909">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <input
                      name="ot"
                      id="ot"
                      type="date"
                      ref={toInputRef}
                      onClick={() => handleClick("to")}
                    />
                  </label>
                </InputDivComponent>
              </div>
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
