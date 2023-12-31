import React, { useState } from "react";
import styles from "./transactions.module.css";
import CardComponent from "../../components/cardComponent";
import ButtonComponent from "../../components/buttonComponent";
import SaveToggleButton from "../../components/saveToggleBtnComponent";
import AllTransactionsInput from "../../components/allTransactionsInput/allTransactions";
import AllAccountsInput from "../../components/allAccountsInput/allAccountsInput";
import AllContragentsInput from "../../components/allContragensInput/allContragents";
import IntervalInput from "../../components/intervalInput/intervalInput";
import AllTimeInput from "../../components/allTimeInput/allTime";

export default function TransactionsPage() {
  const [dateFilter, setDateFilter] = useState(false);

  const [accordion, setAccordion] = useState(false);

  return (
    <div className={styles.transaction}>
      <CardComponent>
        <div className={styles.transaction_wrapper}>
          <div className={styles.transaction_header}>
            {/* <IntervalInput /> */}
            <AllTimeInput />
            <AllAccountsInput />
            <AllContragentsInput />
            <AllTransactionsInput />

            <div className={styles.payment_tem_filters_search}>
              <input type="text" placeholder="Поиск   " />
              <div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5799 1.44C6.07805 1.44 2.41992 5.09813 2.41992 9.6C2.41992 14.1019 6.07805 17.76 10.5799 17.76C12.3612 17.76 14.0074 17.1863 15.3499 16.215L21.6649 22.515L23.0149 21.165L16.7749 14.91C18.0012 13.4813 18.7399 11.6269 18.7399 9.6C18.7399 5.09813 15.0818 1.44 10.5799 1.44ZM10.5799 2.4C14.5624 2.4 17.7799 5.6175 17.7799 9.6C17.7799 13.5825 14.5624 16.8 10.5799 16.8C6.59742 16.8 3.37992 13.5825 3.37992 9.6C3.37992 5.6175 6.59742 2.4 10.5799 2.4Z"
                    fill="#342C2C"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.transaction_table}>
            <div className="">
              <div
                className={`${styles.transaction_table_item} ${
                  accordion == "1" && styles.transaction_table_item_active
                }`}
                onClick={() =>
                  accordion == "1" ? setAccordion(false) : setAccordion("1")
                }
              >
                <div className={styles.transaction_table_item_left}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1505_10877)">
                      <rect
                        width="30"
                        height="30"
                        rx="15"
                        fill="#EEEEEE"
                        fillOpacity="0.6"
                      />
                      <path
                        d="M20.25 20.25H14.75M20.25 20.25V14.75M20.25 20.25L9.75 9.75"
                        stroke="#2DC28D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1505_10877">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <p>15.06.</p>
                    <span>2023</span>
                  </div>
                </div>
                <div
                  className={`${styles.transaction_table_item_left} ${styles.transaction_table_item_middle}`}
                >
                  <span>ПП № 123456</span>
                  <p>ООО “Наименнование организации”</p>
                  <span>На счет: 0000 0000 0000 0000</span>
                  <span>
                    Назначение платежа Назначение платежа Назначение платежа
                    Назначение платежа Назначение платеж...
                  </span>
                </div>
                <div className={styles.transaction_table_item_right}>
                  <p>
                    +10 000 000 000,00 <span>UZS</span>
                  </p>
                  <div
                    onClick={() =>
                      accordion == "1" ? setAccordion(false) : setAccordion("1")
                    }
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.70039 5.70001C1.70781 5.70001 0.900391 6.50743 0.900391 7.50001C0.900391 8.49259 1.70781 9.30001 2.70039 9.30001C3.69297 9.30001 4.50039 8.49259 4.50039 7.50001C4.50039 6.50743 3.69297 5.70001 2.70039 5.70001ZM7.50039 5.70001C6.50781 5.70001 5.70039 6.50743 5.70039 7.50001C5.70039 8.49259 6.50781 9.30001 7.50039 9.30001C8.49297 9.30001 9.30039 8.49259 9.30039 7.50001C9.30039 6.50743 8.49297 5.70001 7.50039 5.70001ZM12.3004 5.70001C11.3078 5.70001 10.5004 6.50743 10.5004 7.50001C10.5004 8.49259 11.3078 9.30001 12.3004 9.30001C13.293 9.30001 14.1004 8.49259 14.1004 7.50001C14.1004 6.50743 13.293 5.70001 12.3004 5.70001Z"
                        fill="#A5A1A1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {accordion == "1" && (
                <div className={styles.transaction_table_item_accordion}>
                  <div className={styles.transaction_table_item_accordion_body}>
                    <div>
                      {/* COL NAME */}
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_th
                        }
                      >
                        Отправитель
                      </div>
                      {/* COL DATA */}
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>Наименование организации </h4>
                        <p>ООО “Компания”</p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>ИНН </h4>
                        <p>12345678911234567892</p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>МФО банка </h4>
                        <p>01140</p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4> Банк </h4>
                        <p>АКБ “Агробанк”</p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>Расчетный счет </h4>
                        <p>0000 0000 0000 0000 0000</p>
                      </div>
                    </div>
                    <div
                      className={
                        styles.transaction_table_item_accordion_body_item
                      }
                    >
                      {/* COL NAME */}
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_th
                        }
                      >
                        Получатель
                      </div>
                      {/* COL DATA */}
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>Наименование организации </h4>
                        <p>ООО “Компания”</p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>ИНН </h4>
                        <p>12345678911234567892</p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>МФО банка </h4>
                        <p>01140</p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4> Банк </h4>
                        <p>АКБ “Агробанк”</p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>Расчетный счет </h4>
                        <p>0000 0000 0000 0000 0000</p>
                      </div>
                    </div>
                    <div
                      className={
                        styles.transaction_table_item_accordion_body_item
                      }
                    >
                      {/* COL NAME */}
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_th
                        }
                      >
                        Детали платежа
                      </div>
                      {/* COL DATA */}
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>Код назначения </h4>
                        <p>
                          08102 Оплата налогов и других обязательных платежей по
                          расчёту{" "}
                        </p>
                      </div>
                      <div
                        className={
                          styles.transaction_table_item_accordion_body_col
                        }
                      >
                        <h4>Сумма </h4>
                        <p>100 000 000 000,00 UZS</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={styles.transaction_table_item_accordion_header}
                  >
                    <div
                      className={
                        styles.transaction_table_item_accordion_header_btns
                      }
                    >
                      <ButtonComponent
                        type={"adaptive_gray"}
                        padding={"16px"}
                        height={"32px"}
                        fontSize={"12px"}
                      >
                        <div>
                          Повторить
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.8233 1.11376C11.6883 1.13767 11.58 1.23611 11.542 1.36689C11.5041 1.49907 11.5434 1.6397 11.6433 1.73251L14.9508 5.04001H9.35953C7.07438 5.04001 5.35453 5.61798 4.20703 6.64876C3.05953 7.67954 2.51953 9.14626 2.51953 10.8C2.51953 14.0274 4.01578 16.3913 4.01578 16.3913C4.07906 16.5108 4.20422 16.5853 4.33922 16.5839C4.47422 16.5825 4.59656 16.5052 4.65703 16.3828C4.7175 16.2619 4.70344 16.117 4.62328 16.0088C4.62328 16.0088 3.23953 13.8052 3.23953 10.8C3.23953 9.30095 3.70922 8.07048 4.69078 7.18876C5.67234 6.30704 7.19672 5.76001 9.35953 5.76001H14.9508L11.6433 9.06751C11.5364 9.1547 11.4872 9.29392 11.5181 9.42892C11.5491 9.56251 11.6545 9.66798 11.7881 9.69892C11.9231 9.72985 12.0623 9.68064 12.1495 9.57376L16.0758 5.65876L16.3233 5.40001L16.0758 5.14126L12.1495 1.22626C12.075 1.14611 11.9667 1.10532 11.857 1.11376C11.8458 1.11376 11.8345 1.11376 11.8233 1.11376Z"
                              fill="#1D1515"
                            />
                          </svg>
                        </div>
                      </ButtonComponent>
                      <ButtonComponent
                        type={"adaptive_gray"}
                        padding={"16px"}
                        height={"32px"}
                        fontSize={"12px"}
                      >
                        <div>
                          Редактировать
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.4465 1.04626C15.0669 1.04626 14.6872 1.18689 14.4003 1.47376L14.0965 1.76626C14.0234 1.7283 13.9404 1.71705 13.8603 1.73251C13.7914 1.74798 13.7295 1.78314 13.6803 1.83376L2.37404 13.14C2.33889 13.1752 2.31217 13.2174 2.29529 13.2638L1.10279 16.4363C1.05498 16.567 1.08732 16.7147 1.18717 16.8131C1.28561 16.913 1.43326 16.9453 1.56404 16.8975L4.73654 15.705C4.78295 15.6881 4.82514 15.6614 4.86029 15.6263L16.1665 4.32001C16.2875 4.19486 16.3029 4.0008 16.2003 3.85876L16.4928 3.56626C17.0665 2.99251 17.0665 2.04751 16.4928 1.47376C16.2059 1.18689 15.8262 1.04626 15.4465 1.04626ZM15.4465 1.76626C15.6434 1.76626 15.8417 1.83517 15.9865 1.98001C16.2776 2.27111 16.2776 2.76892 15.9865 3.06001L15.7053 3.35251L14.6253 2.27251L14.9065 1.98001C15.0514 1.83517 15.2497 1.76626 15.4465 1.76626ZM13.9278 2.58751L15.4128 4.07251L14.4228 5.05126L12.949 3.57751L13.9278 2.58751ZM12.4315 4.08376L13.9165 5.56876L4.59029 14.8838L4.32029 14.6025V14.04C4.32029 13.8417 4.15857 13.68 3.96029 13.68H3.39779L3.11654 13.41L12.4315 4.08376ZM2.75654 14.0738L2.98154 14.2988C3.05045 14.3663 3.14467 14.4028 3.24029 14.4H3.60029V14.76C3.59748 14.8556 3.63404 14.9499 3.70154 15.0188L3.92654 15.2438L2.55404 15.7613L2.23904 15.4463L2.75654 14.0738Z"
                              fill="#342C2C"
                            />
                          </svg>
                        </div>
                      </ButtonComponent>
                      <ButtonComponent
                        type={"adaptive_gray"}
                        padding={"16px"}
                        height={"32px"}
                        fontSize={"12px"}
                      >
                        <div>
                          Печатная форма
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1530_6851)">
                              <path
                                d="M3.95973 0.719971V5.39997H1.79973C1.20754 5.39997 0.719727 5.88778 0.719727 6.47997V12.96C0.719727 13.5522 1.20754 14.04 1.79973 14.04H3.95973V17.28H14.0397V14.04H16.1997C16.7919 14.04 17.2797 13.5522 17.2797 12.96V6.47997C17.2797 5.88778 16.7919 5.39997 16.1997 5.39997H14.0397V0.719971H3.95973ZM4.67973 1.43997H13.3197V5.39997H4.67973V1.43997ZM1.79973 6.11997H4.25926C4.29813 6.1264 4.3378 6.1264 4.37668 6.11997H13.6193C13.6581 6.1264 13.6978 6.1264 13.7367 6.11997H16.1997C16.4031 6.11997 16.5597 6.27656 16.5597 6.47997V12.96C16.5597 13.1634 16.4031 13.32 16.1997 13.32H14.0397V10.08H13.6797H3.95973V13.32H1.79973C1.59632 13.32 1.43973 13.1634 1.43973 12.96V6.47997C1.43973 6.27656 1.59632 6.11997 1.79973 6.11997ZM14.7597 7.19997C14.5688 7.19997 14.3856 7.27583 14.2506 7.41085C14.1156 7.54588 14.0397 7.72901 14.0397 7.91997C14.0397 8.11093 14.1156 8.29406 14.2506 8.42909C14.3856 8.56411 14.5688 8.63997 14.7597 8.63997C14.9507 8.63997 15.1338 8.56411 15.2688 8.42909C15.4039 8.29406 15.4797 8.11093 15.4797 7.91997C15.4797 7.72901 15.4039 7.54588 15.2688 7.41085C15.1338 7.27583 14.9507 7.19997 14.7597 7.19997ZM4.67973 10.8H13.3197V13.6195C13.3133 13.6584 13.3133 13.698 13.3197 13.7369V16.56H4.67973V13.7404C4.68615 13.7016 4.68615 13.6619 4.67973 13.623V10.8ZM6.11973 11.88C6.07202 11.8793 6.02466 11.8881 5.98039 11.9059C5.93612 11.9237 5.89583 11.9501 5.86186 11.9836C5.82788 12.0171 5.80091 12.057 5.78249 12.101C5.76408 12.145 5.7546 12.1923 5.7546 12.24C5.7546 12.2877 5.76408 12.3349 5.78249 12.3789C5.80091 12.4229 5.82788 12.4629 5.86186 12.4963C5.89583 12.5298 5.93612 12.5563 5.98039 12.574C6.02466 12.5918 6.07202 12.6006 6.11973 12.6H11.8797C11.9274 12.6006 11.9748 12.5918 12.0191 12.574C12.0633 12.5563 12.1036 12.5298 12.1376 12.4963C12.1716 12.4629 12.1985 12.4229 12.217 12.3789C12.2354 12.3349 12.2449 12.2877 12.2449 12.24C12.2449 12.1923 12.2354 12.145 12.217 12.101C12.1985 12.057 12.1716 12.0171 12.1376 11.9836C12.1036 11.9501 12.0633 11.9237 12.0191 11.9059C11.9748 11.8881 11.9274 11.8793 11.8797 11.88H6.11973ZM6.11973 13.32C6.07202 13.3193 6.02466 13.3281 5.98039 13.3459C5.93612 13.3637 5.89583 13.3901 5.86186 13.4236C5.82788 13.4571 5.80091 13.497 5.78249 13.541C5.76408 13.585 5.7546 13.6323 5.7546 13.68C5.7546 13.7277 5.76408 13.7749 5.78249 13.8189C5.80091 13.8629 5.82788 13.9029 5.86186 13.9363C5.89583 13.9698 5.93612 13.9963 5.98039 14.014C6.02466 14.0318 6.07202 14.0406 6.11973 14.04H10.4397C10.4874 14.0406 10.5348 14.0318 10.5791 14.014C10.6233 13.9963 10.6636 13.9698 10.6976 13.9363C10.7316 13.9029 10.7585 13.8629 10.777 13.8189C10.7954 13.7749 10.8049 13.7277 10.8049 13.68C10.8049 13.6323 10.7954 13.585 10.777 13.541C10.7585 13.497 10.7316 13.4571 10.6976 13.4236C10.6636 13.3901 10.6233 13.3637 10.5791 13.3459C10.5348 13.3281 10.4874 13.3193 10.4397 13.32H6.11973ZM6.11973 14.76C6.07202 14.7593 6.02466 14.7681 5.98039 14.7859C5.93612 14.8037 5.89583 14.8301 5.86186 14.8636C5.82788 14.8971 5.80091 14.937 5.78249 14.981C5.76408 15.025 5.7546 15.0723 5.7546 15.12C5.7546 15.1677 5.76408 15.2149 5.78249 15.2589C5.80091 15.3029 5.82788 15.3429 5.86186 15.3763C5.89583 15.4098 5.93612 15.4363 5.98039 15.454C6.02466 15.4718 6.07202 15.4806 6.11973 15.48H11.8797C11.9274 15.4806 11.9748 15.4718 12.0191 15.454C12.0633 15.4363 12.1036 15.4098 12.1376 15.3763C12.1716 15.3429 12.1985 15.3029 12.217 15.2589C12.2354 15.2149 12.2449 15.1677 12.2449 15.12C12.2449 15.0723 12.2354 15.025 12.217 14.981C12.1985 14.937 12.1716 14.8971 12.1376 14.8636C12.1036 14.8301 12.0633 14.8037 12.0191 14.7859C11.9748 14.7681 11.9274 14.7593 11.8797 14.76H6.11973Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1530_6851">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </ButtonComponent>
                      <div style={{ display: "unset" }}>
                        <SaveToggleButton />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className={styles.transaction_table_item}
              onClick={() =>
                accordion == "2" ? setAccordion(false) : setAccordion("2")
              }
            >
              <div className={styles.transaction_table_item_left}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="30"
                    height="30"
                    rx="15"
                    fill="#EEEEEE"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M9.75 9.75H15.25M9.75 9.75V15.25M9.75 9.75L20.25 20.25"
                    stroke="#D23232"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div>
                  <p>15.06.</p>
                  <span>2023</span>
                </div>
              </div>
              <div
                className={`${styles.transaction_table_item_left} ${styles.transaction_table_item_middle}`}
              >
                <span>ПП № 123456</span>
                <p>ООО “Наименнование организации”</p>
                <span>На счет: 0000 0000 0000 0000</span>
                <span>
                  Назначение платежа Назначение платежа Назначение платежа
                  Назначение платежа Назначение платеж...
                </span>
              </div>
              <div className={styles.transaction_table_item_right}>
                <div>
                  <span className={styles.transaction_table_item_right_icon}>
                    Проведен
                  </span>
                  <p>
                    +10 000 000 000,00 <span>UZS</span>
                  </p>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.70039 5.70001C1.70781 5.70001 0.900391 6.50743 0.900391 7.50001C0.900391 8.49259 1.70781 9.30001 2.70039 9.30001C3.69297 9.30001 4.50039 8.49259 4.50039 7.50001C4.50039 6.50743 3.69297 5.70001 2.70039 5.70001ZM7.50039 5.70001C6.50781 5.70001 5.70039 6.50743 5.70039 7.50001C5.70039 8.49259 6.50781 9.30001 7.50039 9.30001C8.49297 9.30001 9.30039 8.49259 9.30039 7.50001C9.30039 6.50743 8.49297 5.70001 7.50039 5.70001ZM12.3004 5.70001C11.3078 5.70001 10.5004 6.50743 10.5004 7.50001C10.5004 8.49259 11.3078 9.30001 12.3004 9.30001C13.293 9.30001 14.1004 8.49259 14.1004 7.50001C14.1004 6.50743 13.293 5.70001 12.3004 5.70001Z"
                    fill="#A5A1A1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
