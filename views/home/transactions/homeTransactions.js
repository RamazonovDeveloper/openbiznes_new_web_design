import React, { useState } from "react";
import styles from "./transactions.module.css";
import AllTransactionsInput from "../../../components/allTransactionsInput/allTransactions";
import AllTimeInput from "../../../components/allTimeInput/allTime";

export default function HomeTransactions() {
  const [dateFilter, setDateFilter] = useState(false);
  const [typeTransaction, setTypeTransaction] = useState(false);

  return (
    <div className={styles.home_main_transactions}>
      <div className={styles.home_main_transactions_filters}>
        <h2 className={styles.home_main_account_title}>Транзакции</h2>
        <div className={styles.home_main_transactions_filters_btns}>
          <AllTransactionsInput />
          <AllTimeInput />
        </div>
      </div>
      <div className={styles.home_main_transactions_table}>
        <div className={styles.home_main_transactions_table_date}>
          <p>Июнь 2023</p>
        </div>
        <div className={styles.home_main_transactions_table_wrapper}>
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
              <div className={styles.home_main_transactions_table_item_right_main}>
                <div className={styles.home_main_transactions_table_item_right_main_left}>
                  <h5>ООО “Наименнование организации”</h5>
                  <p>На счет: 0000 0000 0000 0000</p>
                </div>
                <div className={styles.home_main_transactions_table_item_right_main_right}>
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
              <div className={styles.home_main_transactions_table_item_right_main}>
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
              <div className={styles.home_main_transactions_table_item_right_main}>
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
    </div>
  );
}
