import React, { useState } from "react";
import styles from "./allTime.module.css";
import InputDivComponent from "../inputDivComponent";

export default function AllTimeInput() {
  const [dateFilter, setDateFilter] = useState(false);

  return (
    <button className={styles.home_main_transactions_filterBtn}>
      <div
        className={styles.home_main_transactions_filterBtn_main}
        onClick={() => setDateFilter(!dateFilter)}
      >
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.82022 0C4.42647 0 4.10022 0.32625 4.10022 0.72V1.44H1.94021C1.75178 1.44 1.56053 1.50891 1.42553 1.64531C1.28912 1.78031 1.22021 1.97156 1.22021 2.16V16.56C1.22021 16.7484 1.28912 16.9397 1.42553 17.0761C1.56053 17.2111 1.75178 17.28 1.94021 17.28H17.0602C17.2487 17.28 17.4399 17.2111 17.5763 17.0761C17.7113 16.9397 17.7802 16.7484 17.7802 16.56V2.16C17.7802 1.97156 17.7113 1.78031 17.5763 1.64531C17.4399 1.50891 17.2487 1.44 17.0602 1.44H14.9002V0.72C14.9002 0.32625 14.574 0 14.1802 0H13.4602C13.0665 0 12.7402 0.32625 12.7402 0.72V1.44H6.26022V0.72C6.26022 0.32625 5.93397 0 5.54022 0H4.82022ZM4.82022 0.72H5.54022V2.88H4.82022V0.72ZM13.4602 0.72H14.1802V2.88H13.4602V0.72ZM1.94021 2.16H4.10022V2.88C4.10022 3.27375 4.42647 3.6 4.82022 3.6H5.54022C5.93397 3.6 6.26022 3.27375 6.26022 2.88V2.16H12.7402V2.88C12.7402 3.27375 13.0665 3.6 13.4602 3.6H14.1802C14.574 3.6 14.9002 3.27375 14.9002 2.88V2.16H17.0602V4.68H1.94021V2.16ZM1.94021 5.4H17.0602V16.56H1.94021V5.4ZM4.10022 6.84V15.12H14.9002V6.84H4.10022ZM4.82022 7.56H6.62022V9.36H4.82022V7.56ZM7.34022 7.56H9.14022V9.36H7.34022V7.56ZM9.86022 7.56H11.6602V9.36H9.86022V7.56ZM12.3802 7.56H14.1802V9.36H12.3802V7.56ZM4.82022 10.08H6.62022V11.88H4.82022V10.08ZM7.34022 10.08H9.14022V11.88H7.34022V10.08ZM12.3802 10.08H14.1802V11.88H12.3802V10.08ZM4.82022 12.6H6.62022V14.4H4.82022V12.6ZM7.34022 12.6H9.14022V14.4H7.34022V12.6ZM9.86022 12.6H11.6602V14.4H9.86022V12.6ZM12.3802 12.6H14.1802V14.4H12.3802V12.6Z"
            fill="#342C2C"
          />
        </svg>
        <p>За все время</p>
        <div
          className={`${styles.home_main_transactions_filterBtn_icon} ${
            dateFilter && styles.home_main_transactions_filterBtn_icon_active
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
              d="M1.54004 9.08008L7.00004 3.36008L12.46 9.08008H1.54004Z"
              fill="#777373"
            />
          </svg>
        </div>
      </div>
      {dateFilter && (
        <div
          className={styles.home_main_transactions_filterBtn_icon_date_modal}
        >
          <div>
            <button
              className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn}`}
            >
              Неделя
            </button>
            <button
              className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn}`}
            >
              Месяц
            </button>
            <button
              className={
                styles.home_main_transactions_filterBtn_icon_date_modal_btn
              }
            >
              За период
            </button>
          </div>
          <div
            className={
              styles.home_main_transactions_filterBtn_icon_date_modal_date
            }
          >
            <p>С</p>
            <InputDivComponent />
          </div>
          <div
            className={
              styles.home_main_transactions_filterBtn_icon_date_modal_date
            }
          >
            <p>По</p>
            <InputDivComponent>
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.31997 0C3.92622 0 3.59997 0.32625 3.59997 0.72V1.44H1.43997C1.25153 1.44 1.06028 1.50891 0.925283 1.64531C0.788877 1.78031 0.719971 1.97156 0.719971 2.16V16.56C0.719971 16.7484 0.788877 16.9397 0.925283 17.0761C1.06028 17.2111 1.25153 17.28 1.43997 17.28H16.56C16.7484 17.28 16.9397 17.2111 17.0761 17.0761C17.2111 16.9397 17.28 16.7484 17.28 16.56V2.16C17.28 1.97156 17.2111 1.78031 17.0761 1.64531C16.9397 1.50891 16.7484 1.44 16.56 1.44H14.4V0.72C14.4 0.32625 14.0737 0 13.68 0H12.96C12.5662 0 12.24 0.32625 12.24 0.72V1.44H5.75997V0.72C5.75997 0.32625 5.43372 0 5.03997 0H4.31997ZM4.31997 0.72H5.03997V2.88H4.31997V0.72ZM12.96 0.72H13.68V2.88H12.96V0.72ZM1.43997 2.16H3.59997V2.88C3.59997 3.27375 3.92622 3.6 4.31997 3.6H5.03997C5.43372 3.6 5.75997 3.27375 5.75997 2.88V2.16H12.24V2.88C12.24 3.27375 12.5662 3.6 12.96 3.6H13.68C14.0737 3.6 14.4 3.27375 14.4 2.88V2.16H16.56V4.68H1.43997V2.16ZM1.43997 5.4H16.56V16.56H1.43997V5.4ZM3.59997 6.84V15.12H14.4V6.84H3.59997ZM4.31997 7.56H6.11997V9.36H4.31997V7.56ZM6.83997 7.56H8.63997V9.36H6.83997V7.56ZM9.35997 7.56H11.16V9.36H9.35997V7.56ZM11.88 7.56H13.68V9.36H11.88V7.56ZM4.31997 10.08H6.11997V11.88H4.31997V10.08ZM6.83997 10.08H8.63997V11.88H6.83997V10.08ZM11.88 10.08H13.68V11.88H11.88V10.08ZM4.31997 12.6H6.11997V14.4H4.31997V12.6ZM6.83997 12.6H8.63997V14.4H6.83997V12.6ZM9.35997 12.6H11.16V14.4H9.35997V12.6ZM11.88 12.6H13.68V14.4H11.88V12.6Z"
                    fill="#342C2C"
                  />
                  <p>дд.мм.гггг</p>
                </svg>
              </div>
            </InputDivComponent>
          </div>
          <div
            className={
              styles.home_main_transactions_filterBtn_icon_date_modal_btns
            }
          >
            <button className={`${styles.violetBtn}`}>Сбросить</button>
            <button>Применить</button>
          </div>
        </div>
      )}
    </button>
  );
}
