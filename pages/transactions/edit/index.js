import React from "react";
import styles from "./editTransaction.module.css";
import CardComponent from "../../../components/cardComponent/index";
import ButtonComponent from "../../../components/buttonComponent";
import InputComponent from "../../../components/inputComponent";
import SelectComponent from "../../../components/selectComponent";

export default function EditTransaction() {
  return (
    <div className={styles.edit}>
      <CardComponent>
        <div className={styles.edit_wrapper}>
          <div className={styles.edit_wrapper_left}>
            <div className={styles.edit_wrapper_left_item}>
              <div className={styles.edit_wrapper_left_item_title}>
                Плательщик
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Валюта, счет
                </div>
                <div className={styles.edit_wrapper_left_item_body_input}>
                  <SelectComponent />
                </div>
                {/* 
                435px
                210px
                */}
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Дата исполнения
                </div>
                <div>
                  <InputComponent placeholder={"Впишите"}></InputComponent>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Номер платежа
                </div>
                <div>
                  <InputComponent placeholder={"Впишите"}></InputComponent>
                </div>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item}>
              <div className={styles.edit_wrapper_left_item_title}>
                Получатель
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  МФО банка
                </div>
                <div>
                  <SelectComponent/>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Расчетный счет
                </div>
                <div>
                  <InputComponent placeholder={"Впишите"}></InputComponent>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  ИНН/ПИНФЛ
                </div>
                <div>
                  <InputComponent placeholder={"Впишите"}></InputComponent>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Наименование организации
                </div>
                <div>
                  <SelectComponent/>
                </div>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item}>
              <div className={styles.edit_wrapper_left_item_title}>
                Плательщик
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Валюта, счет
                </div>
                <div>
                  <InputComponent placeholder={"Впишите"}></InputComponent>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Дата исполнения
                </div>
                <div>
                  <InputComponent placeholder={"Впишите"}></InputComponent>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Номер платежа
                </div>
                <div>
                  <InputComponent placeholder={"Впишите"}></InputComponent>
                </div>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_btn}>
              <ButtonComponent type={"adaptive"} padding={"29px"}>
                Сохранить изменения
              </ButtonComponent>
            </div>
          </div>
          <div className={styles.edit_wrapper_right}>
            <ButtonComponent type={"adaptive_gray"} padding={"16px"}>
              <div className={styles.edit_wrapper_right_btn}>
                Сохранить шаблон
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.61286 0.720215C4.4413 0.752559 4.31755 0.904434 4.32036 1.08021V16.9202C4.31895 17.0496 4.38786 17.1691 4.49895 17.2338C4.61005 17.2999 4.74786 17.2999 4.86036 17.2352L9.00036 14.8165L13.1404 17.2352C13.2529 17.2999 13.3907 17.2999 13.5018 17.2338C13.6129 17.1691 13.6818 17.0496 13.6804 16.9202V1.08021C13.6804 0.881934 13.5186 0.720215 13.3204 0.720215H4.68036C4.66911 0.720215 4.65786 0.720215 4.64661 0.720215C4.63536 0.720215 4.62411 0.720215 4.61286 0.720215ZM5.04036 1.44021H12.9604V16.2902L9.18036 14.0852C9.06927 14.0205 8.93145 14.0205 8.82036 14.0852L5.04036 16.2902V1.44021Z"
                    fill="#342C2C"
                  />
                </svg>
              </div>
            </ButtonComponent>
            <ButtonComponent type={"adaptive_gray"} padding={"16px"}>
              <div className={styles.edit_wrapper_right_btn}>
                Печатная форма
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1547_2144)">
                    <path
                      d="M3.95973 0.720215V5.40021H1.79973C1.20754 5.40021 0.719727 5.88803 0.719727 6.48021V12.9602C0.719727 13.5524 1.20754 14.0402 1.79973 14.0402H3.95973V17.2802H14.0397V14.0402H16.1997C16.7919 14.0402 17.2797 13.5524 17.2797 12.9602V6.48021C17.2797 5.88803 16.7919 5.40021 16.1997 5.40021H14.0397V0.720215H3.95973ZM4.67973 1.44021H13.3197V5.40021H4.67973V1.44021ZM1.79973 6.12021H4.25926C4.29813 6.12664 4.3378 6.12664 4.37668 6.12021H13.6193C13.6581 6.12664 13.6978 6.12664 13.7367 6.12021H16.1997C16.4031 6.12021 16.5597 6.2768 16.5597 6.48021V12.9602C16.5597 13.1636 16.4031 13.3202 16.1997 13.3202H14.0397V10.0802H13.6797H3.95973V13.3202H1.79973C1.59632 13.3202 1.43973 13.1636 1.43973 12.9602V6.48021C1.43973 6.2768 1.59632 6.12021 1.79973 6.12021ZM14.7597 7.20021C14.5688 7.20021 14.3856 7.27607 14.2506 7.4111C14.1156 7.54612 14.0397 7.72926 14.0397 7.92021C14.0397 8.11117 14.1156 8.2943 14.2506 8.42933C14.3856 8.56436 14.5688 8.64021 14.7597 8.64021C14.9507 8.64021 15.1338 8.56436 15.2688 8.42933C15.4039 8.2943 15.4797 8.11117 15.4797 7.92021C15.4797 7.72926 15.4039 7.54612 15.2688 7.4111C15.1338 7.27607 14.9507 7.20021 14.7597 7.20021ZM4.67973 10.8002H13.3197V13.6197C13.3133 13.6586 13.3133 13.6983 13.3197 13.7372V16.5602H4.67973V13.7407C4.68615 13.7018 4.68615 13.6621 4.67973 13.6233V10.8002ZM6.11973 11.8802C6.07202 11.8795 6.02466 11.8884 5.98039 11.9061C5.93612 11.9239 5.89583 11.9503 5.86186 11.9838C5.82788 12.0173 5.80091 12.0572 5.78249 12.1013C5.76408 12.1453 5.7546 12.1925 5.7546 12.2402C5.7546 12.2879 5.76408 12.3352 5.78249 12.3792C5.80091 12.4232 5.82788 12.4631 5.86186 12.4966C5.89583 12.5301 5.93612 12.5565 5.98039 12.5743C6.02466 12.5921 6.07202 12.6009 6.11973 12.6002H11.8797C11.9274 12.6009 11.9748 12.5921 12.0191 12.5743C12.0633 12.5565 12.1036 12.5301 12.1376 12.4966C12.1716 12.4631 12.1985 12.4232 12.217 12.3792C12.2354 12.3352 12.2449 12.2879 12.2449 12.2402C12.2449 12.1925 12.2354 12.1453 12.217 12.1013C12.1985 12.0572 12.1716 12.0173 12.1376 11.9838C12.1036 11.9503 12.0633 11.9239 12.0191 11.9061C11.9748 11.8884 11.9274 11.8795 11.8797 11.8802H6.11973ZM6.11973 13.3202C6.07202 13.3195 6.02466 13.3284 5.98039 13.3461C5.93612 13.3639 5.89583 13.3903 5.86186 13.4238C5.82788 13.4573 5.80091 13.4972 5.78249 13.5413C5.76408 13.5853 5.7546 13.6325 5.7546 13.6802C5.7546 13.7279 5.76408 13.7752 5.78249 13.8192C5.80091 13.8632 5.82788 13.9031 5.86186 13.9366C5.89583 13.9701 5.93612 13.9965 5.98039 14.0143C6.02466 14.0321 6.07202 14.0409 6.11973 14.0402H10.4397C10.4874 14.0409 10.5348 14.0321 10.5791 14.0143C10.6233 13.9965 10.6636 13.9701 10.6976 13.9366C10.7316 13.9031 10.7585 13.8632 10.777 13.8192C10.7954 13.7752 10.8049 13.7279 10.8049 13.6802C10.8049 13.6325 10.7954 13.5853 10.777 13.5413C10.7585 13.4972 10.7316 13.4573 10.6976 13.4238C10.6636 13.3903 10.6233 13.3639 10.5791 13.3461C10.5348 13.3284 10.4874 13.3195 10.4397 13.3202H6.11973ZM6.11973 14.7602C6.07202 14.7595 6.02466 14.7684 5.98039 14.7861C5.93612 14.8039 5.89583 14.8303 5.86186 14.8638C5.82788 14.8973 5.80091 14.9372 5.78249 14.9813C5.76408 15.0253 5.7546 15.0725 5.7546 15.1202C5.7546 15.1679 5.76408 15.2152 5.78249 15.2592C5.80091 15.3032 5.82788 15.3431 5.86186 15.3766C5.89583 15.4101 5.93612 15.4365 5.98039 15.4543C6.02466 15.4721 6.07202 15.4809 6.11973 15.4802H11.8797C11.9274 15.4809 11.9748 15.4721 12.0191 15.4543C12.0633 15.4365 12.1036 15.4101 12.1376 15.3766C12.1716 15.3431 12.1985 15.3032 12.217 15.2592C12.2354 15.2152 12.2449 15.1679 12.2449 15.1202C12.2449 15.0725 12.2354 15.0253 12.217 14.9813C12.1985 14.9372 12.1716 14.8973 12.1376 14.8638C12.1036 14.8303 12.0633 14.8039 12.0191 14.7861C11.9748 14.7684 11.9274 14.7595 11.8797 14.7602H6.11973Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1547_2144">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </ButtonComponent>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
