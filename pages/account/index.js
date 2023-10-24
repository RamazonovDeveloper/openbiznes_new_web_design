import React, { useState } from "react";
import CardComponent from "../../components/cardComponent";
import ButtonComponent from "../../components/buttonComponent";
import styles from "./account.module.css";
import DefaultModalComponent from "../../components/defaultModal";
import MainModalComponent from "../../components/mainModal";
import SaveToggleButton from "../../components/saveToggleBtnComponent";
import AllAccountsInput from "../../components/allAccountsInput/allAccountsInput";
import AllTimeInput from "../../components/allTimeInput/allTime";

export default function Index() {
  const [dateFilter, setDateFilter] = useState(false);

  const [colorIcon, setColorIcon] = useState("#A5A1A1");

  const [modal, setModal] = useState(0);

  const [isRekModal, setRekModal] = useState(false);

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
              <div className={styles.rekvizit_actions_btns_content}>
                Отправить на почту
              </div>
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
      {isRekModal && (
        <MainModalComponent title={"Реквизиты"}>
          {rekvizitFrame()}
        </MainModalComponent>
      )}

      <CardComponent>
        <div className={styles.account_header}>
          <div className={styles.account_header_filters}>
            <AllTimeInput />
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
                // onMouseEnter={() => setColorIcon("#4E0F8A")}
                // onMouseLeave={() => setColorIcon("#A5A1A1")}
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
                    fill={colorIcon}
                  />
                </svg>
              </div>
              {modal == 1 && (
                <div
                  className={styles.account_table_body_item_element_icon_modal}
                >
                  <div onClick={() => setRekModal(true)}>
                    Транзакции по счету
                  </div>
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
                // onMouseEnter={() => setColorIcon("#4E0F8A")}
                // onMouseLeave={() => setColorIcon("#A5A1A1")}
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
                    fill={colorIcon}
                  />
                </svg>
              </div>
            </div>
            <div className={styles.account_table_body_item}>
              <div className={styles.account_table_body_item_element}>
                АКБ “Агробанк”
              </div>
              <div className={styles.account_table_body_item_element_account}>
                0000 0000 0000 0000 0000
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0582 1.19995C7.64196 1.19995 5.42495 2.17273 3.71209 3.77573C3.67211 3.81121 3.63964 3.85433 3.61661 3.90256C3.59357 3.95079 3.58043 4.00315 3.57797 4.05655C3.57551 4.10994 3.58377 4.16329 3.60227 4.21343C3.62077 4.26358 3.64913 4.30951 3.68568 4.34851C3.72223 4.38751 3.76622 4.4188 3.81506 4.44051C3.8639 4.46223 3.9166 4.47393 3.97004 4.47494C4.02348 4.47595 4.07658 4.46624 4.12621 4.44638C4.17583 4.42652 4.22097 4.39692 4.25897 4.35933C5.8389 2.88073 7.85601 1.99995 10.0582 1.99995C12.2493 1.99995 14.2568 2.87201 15.8332 4.33745C15.8714 4.37453 15.9167 4.40359 15.9663 4.42295C16.0159 4.44231 16.0688 4.45157 16.1221 4.45019C16.1753 4.44881 16.2277 4.43682 16.2763 4.41491C16.3248 4.393 16.3685 4.36162 16.4047 4.32262C16.441 4.28361 16.4691 4.23775 16.4874 4.18775C16.5057 4.13774 16.5138 4.08458 16.5113 4.03138C16.5088 3.97819 16.4957 3.92604 16.4727 3.87798C16.4498 3.82992 16.4175 3.78693 16.3777 3.75151C14.6685 2.16255 12.4622 1.19995 10.0582 1.19995ZM18.1965 6.37495C18.1134 6.37632 18.0328 6.40353 17.9658 6.45282C17.8989 6.5021 17.849 6.571 17.823 6.64995C16.2186 9.62872 13.3353 11.6 10.0472 11.6C6.76646 11.6 3.889 9.63663 2.2824 6.6687C2.25189 6.57867 2.19032 6.50244 2.10871 6.45368C2.0271 6.40492 1.9308 6.38682 1.83706 6.40261C1.74331 6.41841 1.65826 6.46707 1.59714 6.53988C1.53601 6.61269 1.50282 6.70489 1.5035 6.79995V6.81948C1.50331 6.8854 1.51941 6.95035 1.55037 7.00854C2.09366 8.02295 2.78086 8.93215 3.57928 9.70308L1.30819 12.1265C1.23566 12.204 1.1969 12.3071 1.20042 12.4132C1.20393 12.5193 1.24944 12.6196 1.32694 12.6921C1.40443 12.7647 1.50756 12.8034 1.61363 12.7999C1.71971 12.7964 1.82004 12.7509 1.89256 12.6734L4.17694 10.2351C4.8367 10.7793 5.55809 11.237 6.32928 11.5875L4.841 14.6242C4.8179 14.6714 4.80433 14.7226 4.80105 14.7751C4.79778 14.8275 4.80486 14.8801 4.82191 14.9298C4.83895 14.9795 4.86562 15.0254 4.90039 15.0648C4.93516 15.1042 4.97735 15.1363 5.02455 15.1594C5.07175 15.1825 5.12304 15.1961 5.17548 15.1993C5.22793 15.2026 5.2805 15.1955 5.3302 15.1784C5.37989 15.1614 5.42575 15.1347 5.46513 15.0999C5.50452 15.0651 5.53667 15.0229 5.55975 14.9757L7.07381 11.8851C7.87685 12.1683 8.72357 12.3398 9.60115 12.3835C9.60078 12.389 9.60052 12.3945 9.60037 12.4V15.6C9.59962 15.653 9.60942 15.7056 9.62918 15.7548C9.64895 15.804 9.67829 15.8487 9.71551 15.8865C9.75273 15.9242 9.79708 15.9542 9.84598 15.9747C9.89488 15.9951 9.94736 16.0056 10.0004 16.0056C10.0534 16.0056 10.1059 15.9951 10.1548 15.9747C10.2037 15.9542 10.248 15.9242 10.2852 15.8865C10.3225 15.8487 10.3518 15.804 10.3716 15.7548C10.3913 15.7056 10.4011 15.653 10.4004 15.6V12.4C10.4002 12.3955 10.3999 12.3911 10.3996 12.3867C11.306 12.351 12.1802 12.1766 13.0082 11.8867L14.4379 14.9679C14.4582 15.0182 14.4884 15.0639 14.5269 15.1021C14.5654 15.1404 14.6112 15.1704 14.6617 15.1903C14.7121 15.2103 14.7661 15.2198 14.8203 15.2183C14.8745 15.2167 14.9279 15.2041 14.9771 15.1813C15.0263 15.1585 15.0704 15.126 15.1066 15.0856C15.1428 15.0452 15.1705 14.9979 15.1879 14.9465C15.2052 14.8951 15.212 14.8408 15.2077 14.7867C15.2034 14.7326 15.1881 14.68 15.1629 14.632L13.7512 11.5875C14.4741 11.261 15.1541 10.8432 15.7801 10.3453L18.1176 12.6828C18.1593 12.7263 18.2104 12.7597 18.267 12.7807C18.3235 12.8017 18.3841 12.8096 18.4441 12.8039C18.4572 12.8027 18.4703 12.8009 18.4832 12.7984C18.5551 12.7843 18.6217 12.7508 18.6758 12.7014C18.7299 12.652 18.7695 12.5888 18.7901 12.5185C18.8107 12.4482 18.8117 12.3736 18.7928 12.3029C18.774 12.2321 18.736 12.1678 18.6832 12.1171L16.3863 9.82026C17.2442 9.01951 17.9817 8.06429 18.5551 6.98823C18.5862 6.93034 18.6025 6.86567 18.6027 6.79995V6.78042C18.6034 6.7269 18.5934 6.67379 18.5733 6.62421C18.5531 6.57463 18.5232 6.52961 18.4853 6.4918C18.4474 6.45399 18.4023 6.42417 18.3527 6.4041C18.3031 6.38403 18.25 6.37412 18.1965 6.37495Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={styles.account_table_body_item_element}>
                Нет информации
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
                // onMouseEnter={() => setColorIcon("#4E0F8A")}
                // onMouseLeave={() => setColorIcon("#A5A1A1")}
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
