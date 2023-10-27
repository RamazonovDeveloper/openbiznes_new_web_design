import React from "react";
import CardComponent from "../../../components/cardComponent";
import ButtonComponent from "../../../components/buttonComponent";
import styles from "./profilePersonalData.module.css";

export default function ProfilePersonalData({setEdit}) {
  return (
    <CardComponent>
      <div className={styles.profile_cards_left_btns}>
        <h4 className={styles.profile_cards_left_black}>Персональные данные</h4>
        <ButtonComponent
          type={"adaptive_gray"}
          height={"32px"}
          padding={"16px"}
          handleClick={() => setEdit(true)}
        >
          <div className={styles.profile_cards_left_btns_btn}>
            <p>Редактировать</p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4456 1.04625C15.0659 1.04625 14.6862 1.18687 14.3993 1.47375L14.0956 1.76625C14.0224 1.72828 13.9395 1.71703 13.8593 1.7325C13.7904 1.74797 13.7285 1.78312 13.6793 1.83375L2.37307 13.14C2.33791 13.1752 2.31119 13.2173 2.29432 13.2638L1.10182 16.4362C1.054 16.567 1.08635 16.7147 1.18619 16.8131C1.28463 16.913 1.43228 16.9453 1.56307 16.8975L4.73557 15.705C4.78197 15.6881 4.82416 15.6614 4.85932 15.6263L16.1656 4.32C16.2865 4.19484 16.302 4.00078 16.1993 3.85875L16.4918 3.56625C17.0656 2.9925 17.0656 2.0475 16.4918 1.47375C16.2049 1.18687 15.8253 1.04625 15.4456 1.04625ZM15.4456 1.76625C15.6424 1.76625 15.8407 1.83516 15.9856 1.98C16.2767 2.27109 16.2767 2.76891 15.9856 3.06L15.7043 3.3525L14.6243 2.2725L14.9056 1.98C15.0504 1.83516 15.2487 1.76625 15.4456 1.76625ZM13.9268 2.5875L15.4118 4.0725L14.4218 5.05125L12.9481 3.5775L13.9268 2.5875ZM12.4306 4.08375L13.9156 5.56875L4.58932 14.8837L4.31932 14.6025V14.04C4.31932 13.8417 4.1576 13.68 3.95932 13.68H3.39682L3.11557 13.41L12.4306 4.08375ZM2.75557 14.0737L2.98057 14.2987C3.04947 14.3663 3.14369 14.4028 3.23932 14.4H3.59932V14.76C3.5965 14.8556 3.63307 14.9498 3.70057 15.0188L3.92557 15.2437L2.55307 15.7612L2.23807 15.4462L2.75557 14.0737Z"
                fill="#342C2C"
              />
            </svg>
          </div>
        </ButtonComponent>
      </div>

      <div className={styles.profile_cards_left_data}>
        <div className={styles.profile_cards_left_data_item}>
          <h3 className={styles.profile_cards_left_gray}> Должность </h3>
          <p className={styles.profile_cards_left_black}>
            Генеральный директор
          </p>
        </div>
        <div className={styles.profile_cards_left_data_item}>
          <h3 className={styles.profile_cards_left_gray}> ФИО </h3>
          <p className={styles.profile_cards_left_black}>
            Анна Никитична Киселева
          </p>
        </div>
        <div className={styles.profile_cards_left_data_item}>
          <h3 className={styles.profile_cards_left_gray}> Телефон </h3>
          <p className={styles.profile_cards_left_black}>+998 00 000 00 00</p>
        </div>
        <div className={styles.profile_cards_left_data_item}>
          <h3 className={styles.profile_cards_left_gray}> ПИНФЛ </h3>
          <p className={styles.profile_cards_left_black}>12345678911234</p>
        </div>
        <div className={styles.profile_cards_left_data_item}>
          <h3 className={styles.profile_cards_left_gray}> Компания </h3>
          <p className={styles.profile_cards_left_black}>
            ООО “FUTURE OPEN TECHNOLOGY GROUP”
          </p>
        </div>
      </div>
    </CardComponent>
  );
}
