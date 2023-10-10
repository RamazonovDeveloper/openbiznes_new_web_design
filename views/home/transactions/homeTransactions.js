import React, { useState } from "react";
import styles from "./transactions.module.css";

export default function HomeTransactions() {
  const [dateFilter, setDateFilter] = useState(false);
  const [typeTransaction, setTypeTransaction] = useState(false);

  return (
    <div className={styles.home_main_transactions}>
      <div className={styles.home_main_transactions_filters}>
        <h2 className={styles.home_main_account_title}>Транзакции</h2>
        <div className={styles.home_main_transactions_filters_btns}>
          <button
            className={styles.home_main_transactions_filterBtn}
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
                dateFilter &&
                styles.home_main_transactions_filterBtn_icon_active
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
            {dateFilter && (
              <div
                className={
                  styles.home_main_transactions_filterBtn_icon_date_modal
                }
              >
                <button
                  className={`${
                    styles.home_main_transactions_filterBtn_icon_date_modal_btn
                  } ${
                    dateFilter &&
                    styles.home_main_transactions_filterBtn_icon_date_modal_btn_active
                  }`}
                >
                  Неделя
                  <div
                    className={`${
                      styles.home_main_transactions_filterBtn_icon_date_modal_btn_icon
                    } ${
                      dateFilter &&
                      styles.home_main_transactions_filterBtn_icon_date_modal_btn_icon_active
                    }`}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4869 3.99345C18.3137 3.99861 18.1493 4.071 18.0285 4.19528L7.83323 14.3906L3.63791 10.1953C3.57648 10.1313 3.5029 10.0802 3.42149 10.045C3.34007 10.0098 3.25244 9.99124 3.16375 9.99034C3.07506 9.98944 2.98707 10.0062 2.90496 10.0398C2.82284 10.0733 2.74824 10.1229 2.68552 10.1856C2.6228 10.2483 2.57322 10.3229 2.5397 10.405C2.50617 10.4871 2.48937 10.5751 2.49027 10.6638C2.49117 10.7525 2.50976 10.8401 2.54495 10.9216C2.58014 11.003 2.63122 11.0766 2.69521 11.138L7.36187 15.8047C7.4869 15.9296 7.65645 15.9998 7.83323 15.9998C8.01001 15.9998 8.17955 15.9296 8.30458 15.8047L18.9712 5.13799C19.0676 5.04434 19.1334 4.92378 19.16 4.7921C19.1867 4.66042 19.1729 4.52377 19.1205 4.40004C19.0682 4.27632 18.9797 4.1713 18.8666 4.09875C18.7535 4.02619 18.6212 3.98949 18.4869 3.99345Z"
                        fill="#4E0F8A"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn}`}
                >
                  Месяц
                  <div
                    className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn_icon}`}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4869 3.99345C18.3137 3.99861 18.1493 4.071 18.0285 4.19528L7.83323 14.3906L3.63791 10.1953C3.57648 10.1313 3.5029 10.0802 3.42149 10.045C3.34007 10.0098 3.25244 9.99124 3.16375 9.99034C3.07506 9.98944 2.98707 10.0062 2.90496 10.0398C2.82284 10.0733 2.74824 10.1229 2.68552 10.1856C2.6228 10.2483 2.57322 10.3229 2.5397 10.405C2.50617 10.4871 2.48937 10.5751 2.49027 10.6638C2.49117 10.7525 2.50976 10.8401 2.54495 10.9216C2.58014 11.003 2.63122 11.0766 2.69521 11.138L7.36187 15.8047C7.4869 15.9296 7.65645 15.9998 7.83323 15.9998C8.01001 15.9998 8.17955 15.9296 8.30458 15.8047L18.9712 5.13799C19.0676 5.04434 19.1334 4.92378 19.16 4.7921C19.1867 4.66042 19.1729 4.52377 19.1205 4.40004C19.0682 4.27632 18.9797 4.1713 18.8666 4.09875C18.7535 4.02619 18.6212 3.98949 18.4869 3.99345Z"
                        fill="#4E0F8A"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={
                    styles.home_main_transactions_filterBtn_icon_date_modal_line
                  }
                ></div>
                <button
                  className={
                    styles.home_main_transactions_filterBtn_icon_date_modal_btn
                  }
                >
                  За период
                </button>
                <div
                  className={
                    styles.home_main_transactions_filterBtn_icon_date_modal_date
                  }
                >
                  <p>С</p>
                  <div>Input</div>
                </div>
                <div
                  className={
                    styles.home_main_transactions_filterBtn_icon_date_modal_date
                  }
                >
                  <p>По</p>
                  <div>Input</div>
                </div>
                <div
                  className={
                    styles.home_main_transactions_filterBtn_icon_date_modal_btns
                  }
                >
                  <button>Сбросить</button>
                  <button>Применить</button>
                </div>
              </div>
            )}
          </button>
          <button
            className={styles.home_main_transactions_filterBtn}
            onClick={() => setTypeTransaction(!typeTransaction)}
          >
            <span>Все типы транзакций</span>
            <div
              className={`${styles.home_main_transactions_filterBtn_icon} ${
                typeTransaction &&
                styles.home_main_transactions_filterBtn_icon_active
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
            {typeTransaction && (
              <div
                className={
                  styles.home_main_transactions_filterBtn_icon_date_modal
                }
              >
                <button
                  className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn}`}
                >
                  Все типы транзакций
                  <div
                    className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn_icon}`}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4869 3.99345C18.3137 3.99861 18.1493 4.071 18.0285 4.19528L7.83323 14.3906L3.63791 10.1953C3.57648 10.1313 3.5029 10.0802 3.42149 10.045C3.34007 10.0098 3.25244 9.99124 3.16375 9.99034C3.07506 9.98944 2.98707 10.0062 2.90496 10.0398C2.82284 10.0733 2.74824 10.1229 2.68552 10.1856C2.6228 10.2483 2.57322 10.3229 2.5397 10.405C2.50617 10.4871 2.48937 10.5751 2.49027 10.6638C2.49117 10.7525 2.50976 10.8401 2.54495 10.9216C2.58014 11.003 2.63122 11.0766 2.69521 11.138L7.36187 15.8047C7.4869 15.9296 7.65645 15.9998 7.83323 15.9998C8.01001 15.9998 8.17955 15.9296 8.30458 15.8047L18.9712 5.13799C19.0676 5.04434 19.1334 4.92378 19.16 4.7921C19.1867 4.66042 19.1729 4.52377 19.1205 4.40004C19.0682 4.27632 18.9797 4.1713 18.8666 4.09875C18.7535 4.02619 18.6212 3.98949 18.4869 3.99345Z"
                        fill="#4E0F8A"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn} ${styles.home_main_transactions_filterBtn_icon_date_modal_btn_active}`}
                >
                  Поступления
                  <div
                    className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn_icon}  ${styles.home_main_transactions_filterBtn_icon_date_modal_btn_icon_active}`}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4869 3.99345C18.3137 3.99861 18.1493 4.071 18.0285 4.19528L7.83323 14.3906L3.63791 10.1953C3.57648 10.1313 3.5029 10.0802 3.42149 10.045C3.34007 10.0098 3.25244 9.99124 3.16375 9.99034C3.07506 9.98944 2.98707 10.0062 2.90496 10.0398C2.82284 10.0733 2.74824 10.1229 2.68552 10.1856C2.6228 10.2483 2.57322 10.3229 2.5397 10.405C2.50617 10.4871 2.48937 10.5751 2.49027 10.6638C2.49117 10.7525 2.50976 10.8401 2.54495 10.9216C2.58014 11.003 2.63122 11.0766 2.69521 11.138L7.36187 15.8047C7.4869 15.9296 7.65645 15.9998 7.83323 15.9998C8.01001 15.9998 8.17955 15.9296 8.30458 15.8047L18.9712 5.13799C19.0676 5.04434 19.1334 4.92378 19.16 4.7921C19.1867 4.66042 19.1729 4.52377 19.1205 4.40004C19.0682 4.27632 18.9797 4.1713 18.8666 4.09875C18.7535 4.02619 18.6212 3.98949 18.4869 3.99345Z"
                        fill="#4E0F8A"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn}`}
                >
                  Списания
                  <div
                    className={`${styles.home_main_transactions_filterBtn_icon_date_modal_btn_icon}`}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4869 3.99345C18.3137 3.99861 18.1493 4.071 18.0285 4.19528L7.83323 14.3906L3.63791 10.1953C3.57648 10.1313 3.5029 10.0802 3.42149 10.045C3.34007 10.0098 3.25244 9.99124 3.16375 9.99034C3.07506 9.98944 2.98707 10.0062 2.90496 10.0398C2.82284 10.0733 2.74824 10.1229 2.68552 10.1856C2.6228 10.2483 2.57322 10.3229 2.5397 10.405C2.50617 10.4871 2.48937 10.5751 2.49027 10.6638C2.49117 10.7525 2.50976 10.8401 2.54495 10.9216C2.58014 11.003 2.63122 11.0766 2.69521 11.138L7.36187 15.8047C7.4869 15.9296 7.65645 15.9998 7.83323 15.9998C8.01001 15.9998 8.17955 15.9296 8.30458 15.8047L18.9712 5.13799C19.0676 5.04434 19.1334 4.92378 19.16 4.7921C19.1867 4.66042 19.1729 4.52377 19.1205 4.40004C19.0682 4.27632 18.9797 4.1713 18.8666 4.09875C18.7535 4.02619 18.6212 3.98949 18.4869 3.99345Z"
                        fill="#4E0F8A"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={
                    styles.home_main_transactions_filterBtn_icon_date_modal_btns
                  }
                >
                  <button>Сбросить</button>
                  <button>Применить</button>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
      <div className={styles.home_main_transactions_table}>
        <div className={styles.home_main_transactions_table_date}>
          <p>Июнь 2023</p>
        </div>
        <div className={styles.home_main_transactions_table_item}>
          <div className={styles.home_main_transactions_table_item_left}>
            <div>
              <h4>04.06</h4>
              <p>2023</p>
            </div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1414_11810)">
                <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                <path
                  d="M9.75 9.75H15.25M9.75 9.75V15.25M9.75 9.75L20.25 20.25"
                  stroke="#D23232"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1414_11810">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.home_main_transactions_table_item_right}>
            <div>
              <div>
                <h5>ООО “Наименнование организации”</h5>
                <p>На счет: 0000 0000 0000 0000</p>
              </div>
              <div>
                <h4
                  className={
                    styles.home_main_transactions_table_item_right_status
                  }
                >
                  Проведен
                </h4>
                <h4>
                  -10 000 000 000,00 <span>UZS</span>
                </h4>
              </div>
            </div>
            <h3>
              Назначение платежа Назначение платежа Назначение платежа
              Назначение платежа Назначение платеж...
            </h3>
          </div>
        </div>
        <div className={styles.home_main_transactions_table_item}>
          <div className={styles.home_main_transactions_table_item_left}>
            <div>
              <h4>04.06</h4>
              <p>2023</p>
            </div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="#EEEEEE" />
              <path
                d="M20.25 20.25H14.75M20.25 20.25V14.75M20.25 20.25L9.75 9.75"
                stroke="#2DC28D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.home_main_transactions_table_item_right}>
            <div>
              <div>
                <h5>ООО “Наименнование организации”</h5>
                <p>На счет: 0000 0000 0000 0000</p>
              </div>
              <div>
                <h4
                  className={
                    styles.home_main_transactions_table_item_right_amount
                  }
                >
                  +10 000 000 000,00 <span>UZS</span>
                </h4>
              </div>
            </div>
            <h3>
              Назначение платежа Назначение платежа Назначение платежа
              Назначение платежа Назначение платеж...
            </h3>
          </div>
        </div>
        <div className={styles.home_main_transactions_table_item}>
          <div className={styles.home_main_transactions_table_item_left}>
            <div>
              <h4>04.06</h4>
              <p>2023</p>
            </div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="#EEEEEE" />
              <path
                d="M20.25 20.25H14.75M20.25 20.25V14.75M20.25 20.25L9.75 9.75"
                stroke="#2DC28D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.home_main_transactions_table_item_right}>
            <div>
              <div>
                <h5>ООО “Наименнование организации”</h5>
                <p>На счет: 0000 0000 0000 0000</p>
              </div>
              <div>
                <h4
                  className={
                    styles.home_main_transactions_table_item_right_amount
                  }
                >
                  +10 000 000 000,00 <span>UZS</span>
                </h4>
              </div>
            </div>
            <h3>
              Назначение платежа Назначение платежа Назначение платежа
              Назначение платежа Назначение платеж...
            </h3>
          </div>
        </div>
        <div className={styles.home_main_transactions_table_item}>
          <div className={styles.home_main_transactions_table_item_left}>
            <div>
              <h4>04.06</h4>
              <p>2023</p>
            </div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="#EEEEEE" />
              <path
                d="M20.25 20.25H14.75M20.25 20.25V14.75M20.25 20.25L9.75 9.75"
                stroke="#2DC28D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.home_main_transactions_table_item_right}>
            <div>
              <div>
                <h5>ООО “Наименнование организации”</h5>
                <p>На счет: 0000 0000 0000 0000</p>
              </div>
              <div>
                <h4
                  className={
                    styles.home_main_transactions_table_item_right_amount
                  }
                >
                  +10 000 000 000,00 <span>UZS</span>
                </h4>
              </div>
            </div>
            <h3>
              Назначение платежа Назначение платежа Назначение платежа
              Назначение платежа Назначение платеж...
            </h3>
          </div>
        </div>
        <div className={styles.home_main_transactions_table_item}>
          <div className={styles.home_main_transactions_table_item_left}>
            <div>
              <h4>04.06</h4>
              <p>2023</p>
            </div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="#EEEEEE" />
              <path
                d="M20.25 20.25H14.75M20.25 20.25V14.75M20.25 20.25L9.75 9.75"
                stroke="#2DC28D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.home_main_transactions_table_item_right}>
            <div>
              <div>
                <h5>ООО “Наименнование организации”</h5>
                <p>На счет: 0000 0000 0000 0000</p>
              </div>
              <div>
                <h4
                  className={
                    styles.home_main_transactions_table_item_right_amount
                  }
                >
                  +10 000 000 000,00 <span>UZS</span>
                </h4>
              </div>
            </div>
            <h3>
              Назначение платежа Назначение платежа Назначение платежа
              Назначение платежа Назначение платеж...
            </h3>
          </div>
        </div>
        <div className={styles.home_main_transactions_table_item}>
          <div className={styles.home_main_transactions_table_item_left}>
            <div>
              <h4>04.06</h4>
              <p>2023</p>
            </div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="#EEEEEE" />
              <path
                d="M20.25 20.25H14.75M20.25 20.25V14.75M20.25 20.25L9.75 9.75"
                stroke="#2DC28D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.home_main_transactions_table_item_right}>
            <div>
              <div>
                <h5>ООО “Наименнование организации”</h5>
                <p>На счет: 0000 0000 0000 0000</p>
              </div>
              <div>
                <h4
                  className={
                    styles.home_main_transactions_table_item_right_amount
                  }
                >
                  +10 000 000 000,00 <span>UZS</span>
                </h4>
              </div>
            </div>
            <h3>
              Назначение платежа Назначение платежа Назначение платежа
              Назначение платежа Назначение платеж...
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
