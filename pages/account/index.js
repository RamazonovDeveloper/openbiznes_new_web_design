import React, { useState } from "react";
import CardComponent from "../../components/cardComponent";
import ButtonComponent from "../../components/buttonComponent";
import styles from "./account.module.css";
import DefaultModalComponent from "../../components/defaultModal";
import MainModalComponent from "../../components/mainModal";
import SaveToggleButton from "../../components/saveToggleBtnComponent";
import AllAccountsInput from "../../components/allAccountsInput/allAccountsInput";

export default function Index() {
  const [dateFilter, setDateFilter] = useState(false);

  const [colorIcon, setColorIcon] = useState("#A5A1A1");

  const [modal, setModal] = useState(0);

  const [isRekModal, setRekModal] = useState(false)

  const rekvizitFrame = () => {
    return (
      <div className={styles.rekvizit}>
        <div className={styles.rekvizit_frame}>
          <div className={styles.rekvizit_frame_item}>
            <div className={styles.rekvizit_frame_item_title}>Банк</div>
            <div className={styles.rekvizit_frame_item_data}>
              АКБ “Агробанк”
            </div>
          </div>
          <div className={styles.rekvizit_frame_item}>
            <div className={styles.rekvizit_frame_item_title}>МФО банка</div>
            <div className={styles.rekvizit_frame_item_data}>01140</div>
          </div>
          <div className={styles.rekvizit_frame_item}>
            <div className={styles.rekvizit_frame_item_title}>Юр. адрес</div>
            <div className={styles.rekvizit_frame_item_data}>
              100096, Узбекистан, Ташкент, улица Мукуми, дом 43
            </div>
          </div>
          <div className={styles.rekvizit_frame_item}>
            <div className={styles.rekvizit_frame_item_title}>Счет</div>
            <div className={styles.rekvizit_frame_item_data}>
              0000 0000 0000 0000 0000
            </div>
          </div>
          <div className={styles.rekvizit_frame_item}>
            <div className={styles.rekvizit_frame_item_title}>
              Остаток на счете
            </div>
            <div className={styles.rekvizit_frame_item_data}>
              10 000 000 000,00 <span>UZS</span>
            </div>
          </div>
          <div className={styles.rekvizit_frame_item}>
            <div className={styles.rekvizit_frame_item_title}>Тип счета</div>
            <div className={styles.rekvizit_frame_item_data}>
              Текущий (расчетный) счет
            </div>
          </div>
          <div className={styles.rekvizit_frame_item}>
            <div className={styles.rekvizit_frame_item_title}>Валюта</div>
            <div className={styles.rekvizit_frame_item_data}>UZS</div>
          </div>
          <div className={styles.rekvizit_frame_item}>
            <div className={styles.rekvizit_frame_item_title}>Статус</div>
            <div className={styles.rekvizit_frame_item_data}>Открыт</div>
          </div>
        </div>

        <div className={styles.rekvizit_actions}>
          <div className={styles.rekvizit_actions_btns}>
            <SaveToggleButton />
            <ButtonComponent type={"adaptive_gray"} padding={"16px"}>
              <div className={styles.rekvizit_actions_btns_content}>Отправить на почту</div>
            </ButtonComponent>
            <ButtonComponent type={"adaptive_gray"} padding={"16px"}>
              <div className={styles.rekvizit_actions_btns_content}>
                Скопировать
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1505_3611)">
                    <path
                      d="M7.34 0V2.16L8.06 2.88V0.72H13.46V5.04H17.78V14.4H12.38V15.12H18.5V4.53375L13.9663 0H7.34ZM14.18 1.22625L17.2738 4.32H14.18V1.22625ZM0.5 2.88V18H11.66V7.41375L11.5588 7.30125L7.23875 2.98125L7.12625 2.88H0.5ZM1.22 3.6H6.62V7.92H10.94V17.28H1.22V3.6ZM7.34 4.1175L10.4225 7.2H7.34V4.1175Z"
                      fill="#342C2C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1505_3611">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </ButtonComponent>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.account}>
      {/* <DefaultModalComponent /> */}
      {
        // isRekModal && <MainModalComponent  title={"Реквизиты"} children={rekvizitFrame()} />
        isRekModal && <MainModalComponent  title={"Реквизиты"} >
          {
            rekvizitFrame()
          }
        </MainModalComponent>
      }
      

      <CardComponent>
        <div className={styles.account_header}>
          <div className={styles.account_header_filters}>
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
            <AllAccountsInput />
          </div>

          <ButtonComponent type={"standart"}>
            <div className={styles.account_header_btn}>
              Добавить счет
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0203 4.32001V11.52H4.82031V12.48H12.0203V19.68H12.9803V12.48H20.1803V11.52H12.9803V4.32001H12.0203Z"
                  fill="white"
                />
              </svg>
            </div>
          </ButtonComponent>
        </div>

        <div className={styles.account_table}>
          {/* ACCOUNT TABLE HEAD */}
          <div className={styles.account_table_head}>
            {/* FULL WIDTH 1442PX */}
            {/* 
            width bank 20.66 
            width nomer scheta 16.99
            width ostatok 17.47
            width tip 19.83 
            width valyuta 8.89
            width status  16.16
            */}
            <div className={styles.account_table_head_item}>Банк</div>
            <div className={styles.account_table_head_item}>Номер счета</div>
            <div className={styles.account_table_head_item}>
              Остаток на счете
            </div>
            <div className={styles.account_table_head_item}>Тип счета</div>
            <div className={styles.account_table_head_item}>Валюта</div>
            <div className={styles.account_table_head_item}>Статус</div>
          </div>

          <div className={styles.account_table_body}>
            <div className={styles.account_table_body_item}>
              <div className={styles.account_table_body_item_element}>
                АКБ “Агробанк”
              </div>
              <div className={styles.account_table_body_item_element}>
                0000 0000 0000 0000 0000
              </div>
              <div className={styles.account_table_body_item_element}>
                10 000 000 000,00 <span>UZS</span>
              </div>
              <div className={styles.account_table_body_item_element}>
                Текущий (расчетный)счет
              </div>
              <div className={styles.account_table_body_item_element}>UZS</div>
              <div className={styles.account_table_body_item_element}>
                Открыт
              </div>
              <div
                className={styles.account_table_body_item_element_icon}
                onMouseEnter={() => setColorIcon("#4E0F8A")}
                onMouseLeave={() => setColorIcon("#A5A1A1")}
                onClick={() => setModal(1)}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.70039 6.20001C1.70781 6.20001 0.900391 7.00743 0.900391 8.00001C0.900391 8.99259 1.70781 9.80001 2.70039 9.80001C3.69297 9.80001 4.50039 8.99259 4.50039 8.00001C4.50039 7.00743 3.69297 6.20001 2.70039 6.20001ZM7.50039 6.20001C6.50781 6.20001 5.70039 7.00743 5.70039 8.00001C5.70039 8.99259 6.50781 9.80001 7.50039 9.80001C8.49297 9.80001 9.30039 8.99259 9.30039 8.00001C9.30039 7.00743 8.49297 6.20001 7.50039 6.20001ZM12.3004 6.20001C11.3078 6.20001 10.5004 7.00743 10.5004 8.00001C10.5004 8.99259 11.3078 9.80001 12.3004 9.80001C13.293 9.80001 14.1004 8.99259 14.1004 8.00001C14.1004 7.00743 13.293 6.20001 12.3004 6.20001Z"
                    // fill="#A5A1A1"
                    fill={colorIcon}
                  />
                </svg>
              </div>
              {modal == 1 && (
                <div
                  className={styles.account_table_body_item_element_icon_modal}
                >
                  <div onClick={() => setRekModal(true)}>Транзакции по счету</div>
                  <div>Реквизиты </div>
                  <div>Скрыть счет</div>
                </div>
              )}
            </div>
            <div className={styles.account_table_body_item}>
              <div className={styles.account_table_body_item_element}>
                АКБ “Агробанк”
              </div>
              <div className={styles.account_table_body_item_element}>
                0000 0000 0000 0000 0000
              </div>
              <div className={styles.account_table_body_item_element}>
                10 000 000 000,00 <span>UZS</span>
              </div>
              <div className={styles.account_table_body_item_element}>
                Текущий (расчетный)счет
              </div>
              <div className={styles.account_table_body_item_element}>UZS</div>
              <div className={styles.account_table_body_item_element}>
                Открыт
              </div>
              <div
                className={styles.account_table_body_item_element_icon}
                onMouseEnter={() => setColorIcon("#4E0F8A")}
                onMouseLeave={() => setColorIcon("#A5A1A1")}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.70039 6.20001C1.70781 6.20001 0.900391 7.00743 0.900391 8.00001C0.900391 8.99259 1.70781 9.80001 2.70039 9.80001C3.69297 9.80001 4.50039 8.99259 4.50039 8.00001C4.50039 7.00743 3.69297 6.20001 2.70039 6.20001ZM7.50039 6.20001C6.50781 6.20001 5.70039 7.00743 5.70039 8.00001C5.70039 8.99259 6.50781 9.80001 7.50039 9.80001C8.49297 9.80001 9.30039 8.99259 9.30039 8.00001C9.30039 7.00743 8.49297 6.20001 7.50039 6.20001ZM12.3004 6.20001C11.3078 6.20001 10.5004 7.00743 10.5004 8.00001C10.5004 8.99259 11.3078 9.80001 12.3004 9.80001C13.293 9.80001 14.1004 8.99259 14.1004 8.00001C14.1004 7.00743 13.293 6.20001 12.3004 6.20001Z"
                    // fill="#A5A1A1"
                    fill={colorIcon}
                  />
                </svg>
              </div>
            </div>
            <div className={styles.account_table_body_item}>
              <div className={styles.account_table_body_item_element}>
                АКБ “Агробанк”
              </div>
              <div className={styles.account_table_body_item_element}>
                0000 0000 0000 0000 0000
              </div>
              <div className={styles.account_table_body_item_element}>
                10 000 000 000,00 <span>UZS</span>
              </div>
              <div className={styles.account_table_body_item_element}>
                Текущий (расчетный)счет
              </div>
              <div className={styles.account_table_body_item_element}>UZS</div>
              <div className={styles.account_table_body_item_element}>
                Открыт
              </div>
              <div
                className={styles.account_table_body_item_element_icon}
                onMouseEnter={() => setColorIcon("#4E0F8A")}
                onMouseLeave={() => setColorIcon("#A5A1A1")}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.70039 6.20001C1.70781 6.20001 0.900391 7.00743 0.900391 8.00001C0.900391 8.99259 1.70781 9.80001 2.70039 9.80001C3.69297 9.80001 4.50039 8.99259 4.50039 8.00001C4.50039 7.00743 3.69297 6.20001 2.70039 6.20001ZM7.50039 6.20001C6.50781 6.20001 5.70039 7.00743 5.70039 8.00001C5.70039 8.99259 6.50781 9.80001 7.50039 9.80001C8.49297 9.80001 9.30039 8.99259 9.30039 8.00001C9.30039 7.00743 8.49297 6.20001 7.50039 6.20001ZM12.3004 6.20001C11.3078 6.20001 10.5004 7.00743 10.5004 8.00001C10.5004 8.99259 11.3078 9.80001 12.3004 9.80001C13.293 9.80001 14.1004 8.99259 14.1004 8.00001C14.1004 7.00743 13.293 6.20001 12.3004 6.20001Z"
                    // fill="#A5A1A1"
                    fill={colorIcon}
                  />
                </svg>
              </div>
            </div>
            <div className={styles.account_table_body_item}>
              <div className={styles.account_table_body_item_element}>
                АКБ “Агробанк”
              </div>
              <div className={styles.account_table_body_item_element}>
                0000 0000 0000 0000 0000
              </div>
              <div className={styles.account_table_body_item_element}>
                10 000 000 000,00 <span>UZS</span>
              </div>
              <div className={styles.account_table_body_item_element}>
                Текущий (расчетный)счет
              </div>
              <div className={styles.account_table_body_item_element}>UZS</div>
              <div className={styles.account_table_body_item_element}>
                Открыт
              </div>
              <div
                className={styles.account_table_body_item_element_icon}
                onMouseEnter={() => setColorIcon("#4E0F8A")}
                onMouseLeave={() => setColorIcon("#A5A1A1")}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.70039 6.20001C1.70781 6.20001 0.900391 7.00743 0.900391 8.00001C0.900391 8.99259 1.70781 9.80001 2.70039 9.80001C3.69297 9.80001 4.50039 8.99259 4.50039 8.00001C4.50039 7.00743 3.69297 6.20001 2.70039 6.20001ZM7.50039 6.20001C6.50781 6.20001 5.70039 7.00743 5.70039 8.00001C5.70039 8.99259 6.50781 9.80001 7.50039 9.80001C8.49297 9.80001 9.30039 8.99259 9.30039 8.00001C9.30039 7.00743 8.49297 6.20001 7.50039 6.20001ZM12.3004 6.20001C11.3078 6.20001 10.5004 7.00743 10.5004 8.00001C10.5004 8.99259 11.3078 9.80001 12.3004 9.80001C13.293 9.80001 14.1004 8.99259 14.1004 8.00001C14.1004 7.00743 13.293 6.20001 12.3004 6.20001Z"
                    // fill="#A5A1A1"
                    fill={colorIcon}
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
