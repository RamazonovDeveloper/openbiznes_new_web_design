import React from "react";
import styles from "./createTransaction.module.css";
import CardComponent from "../../../components/cardComponent";
import SelectComponent from "../../../components/selectComponent";
import ButtonComponent from "../../../components/buttonComponent";
import InputComponent from "../../../components/inputComponent";
import Link from "next/link"; 

export default function CreateTransactionPage() {
  return (
    <div className={styles.create}>
      <CardComponent>
        <div className={styles.create_header}>
          <div className={styles.create_header_input}>
            <SelectComponent />
          </div>
          <ButtonComponent
            type={"adaptive_gray"}
            height={"32px"}
            padding={"16px"}
            fontSize={"12px"}
          >
            <div className={styles.create_header_btn}>
              Печатная форма
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1547_9501)">
                  <path
                    d="M3.95973 0.720001V5.4H1.79973C1.20754 5.4 0.719727 5.88781 0.719727 6.48V12.96C0.719727 13.5522 1.20754 14.04 1.79973 14.04H3.95973V17.28H14.0397V14.04H16.1997C16.7919 14.04 17.2797 13.5522 17.2797 12.96V6.48C17.2797 5.88781 16.7919 5.4 16.1997 5.4H14.0397V0.720001H3.95973ZM4.67973 1.44H13.3197V5.4H4.67973V1.44ZM1.79973 6.12H4.25926C4.29813 6.12643 4.3378 6.12643 4.37668 6.12H13.6193C13.6581 6.12643 13.6978 6.12643 13.7367 6.12H16.1997C16.4031 6.12 16.5597 6.27659 16.5597 6.48V12.96C16.5597 13.1634 16.4031 13.32 16.1997 13.32H14.0397V10.08H13.6797H3.95973V13.32H1.79973C1.59632 13.32 1.43973 13.1634 1.43973 12.96V6.48C1.43973 6.27659 1.59632 6.12 1.79973 6.12ZM14.7597 7.2C14.5688 7.2 14.3856 7.27586 14.2506 7.41088C14.1156 7.54591 14.0397 7.72904 14.0397 7.92C14.0397 8.11096 14.1156 8.29409 14.2506 8.42912C14.3856 8.56414 14.5688 8.64 14.7597 8.64C14.9507 8.64 15.1338 8.56414 15.2688 8.42912C15.4039 8.29409 15.4797 8.11096 15.4797 7.92C15.4797 7.72904 15.4039 7.54591 15.2688 7.41088C15.1338 7.27586 14.9507 7.2 14.7597 7.2ZM4.67973 10.8H13.3197V13.6195C13.3133 13.6584 13.3133 13.6981 13.3197 13.737V16.56H4.67973V13.7405C4.68615 13.7016 4.68615 13.6619 4.67973 13.623V10.8ZM6.11973 11.88C6.07202 11.8793 6.02466 11.8881 5.98039 11.9059C5.93612 11.9237 5.89583 11.9501 5.86186 11.9836C5.82788 12.0171 5.80091 12.057 5.78249 12.101C5.76408 12.1451 5.7546 12.1923 5.7546 12.24C5.7546 12.2877 5.76408 12.3349 5.78249 12.379C5.80091 12.423 5.82788 12.4629 5.86186 12.4964C5.89583 12.5299 5.93612 12.5563 5.98039 12.5741C6.02466 12.5919 6.07202 12.6007 6.11973 12.6H11.8797C11.9274 12.6007 11.9748 12.5919 12.0191 12.5741C12.0633 12.5563 12.1036 12.5299 12.1376 12.4964C12.1716 12.4629 12.1985 12.423 12.217 12.379C12.2354 12.3349 12.2449 12.2877 12.2449 12.24C12.2449 12.1923 12.2354 12.1451 12.217 12.101C12.1985 12.057 12.1716 12.0171 12.1376 11.9836C12.1036 11.9501 12.0633 11.9237 12.0191 11.9059C11.9748 11.8881 11.9274 11.8793 11.8797 11.88H6.11973ZM6.11973 13.32C6.07202 13.3193 6.02466 13.3281 5.98039 13.3459C5.93612 13.3637 5.89583 13.3901 5.86186 13.4236C5.82788 13.4571 5.80091 13.497 5.78249 13.541C5.76408 13.5851 5.7546 13.6323 5.7546 13.68C5.7546 13.7277 5.76408 13.7749 5.78249 13.819C5.80091 13.863 5.82788 13.9029 5.86186 13.9364C5.89583 13.9699 5.93612 13.9963 5.98039 14.0141C6.02466 14.0319 6.07202 14.0407 6.11973 14.04H10.4397C10.4874 14.0407 10.5348 14.0319 10.5791 14.0141C10.6233 13.9963 10.6636 13.9699 10.6976 13.9364C10.7316 13.9029 10.7585 13.863 10.777 13.819C10.7954 13.7749 10.8049 13.7277 10.8049 13.68C10.8049 13.6323 10.7954 13.5851 10.777 13.541C10.7585 13.497 10.7316 13.4571 10.6976 13.4236C10.6636 13.3901 10.6233 13.3637 10.5791 13.3459C10.5348 13.3281 10.4874 13.3193 10.4397 13.32H6.11973ZM6.11973 14.76C6.07202 14.7593 6.02466 14.7681 5.98039 14.7859C5.93612 14.8037 5.89583 14.8301 5.86186 14.8636C5.82788 14.8971 5.80091 14.937 5.78249 14.981C5.76408 15.0251 5.7546 15.0723 5.7546 15.12C5.7546 15.1677 5.76408 15.2149 5.78249 15.259C5.80091 15.303 5.82788 15.3429 5.86186 15.3764C5.89583 15.4099 5.93612 15.4363 5.98039 15.4541C6.02466 15.4719 6.07202 15.4807 6.11973 15.48H11.8797C11.9274 15.4807 11.9748 15.4719 12.0191 15.4541C12.0633 15.4363 12.1036 15.4099 12.1376 15.3764C12.1716 15.3429 12.1985 15.303 12.217 15.259C12.2354 15.2149 12.2449 15.1677 12.2449 15.12C12.2449 15.0723 12.2354 15.0251 12.217 14.981C12.1985 14.937 12.1716 14.8971 12.1376 14.8636C12.1036 14.8301 12.0633 14.8037 12.0191 14.7859C11.9748 14.7681 11.9274 14.7593 11.8797 14.76H6.11973Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1547_9501">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </ButtonComponent>
        </div>
        <div className={styles.create_body}>
          <div className={styles.edit_wrapper_left_item}>
            <div className={styles.edit_wrapper_left_item_title}>
              Отправитель
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
                Валюта, счет
              </div>
              <div>
                <SelectComponent>
                    <div
                      className={styles.select_modal_item}
                      // onClick={(e) => handleClick(e)}
                    >
                      Платеж на карту
                    </div>
                    <div
                      className={styles.select_modal_item}
                    >
                      Платеж контрагенту
                    </div>
                    <div
                      className={styles.select_modal_item}
                    >
                      Платеж контрагенту
                    </div>
                </SelectComponent>
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
          <div className={styles.edit_wrapper_left_item}>
            <div className={styles.edit_wrapper_left_item_title}>
              Получатель
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
                МФО банка
              </div>
              <div>
                <SelectComponent />
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
                <SelectComponent />
              </div>
            </div>
          </div>
          <div className={styles.edit_wrapper_left_item}>
            <div className={styles.edit_wrapper_left_item_title}>
            Описание платежа
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
              Сумма
              </div>
              <div>
                <SelectComponent />
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
              Код назначения
              </div>
              <div>
                <InputComponent placeholder={"Впишите"}></InputComponent>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
              Назначение платежа
              </div>
              <div className={styles.edit_wrapper_left_item_body_textarea}>
                <textarea placeholder="Впишите">

                </textarea>
              </div>
            </div>
          </div>
          <div className={styles.edit_wrapper_left_btn}>
            <ButtonComponent type={"adaptive_gray"} padding={"22px"}>
              <div className={styles.create_header_btn}>
                Сохранить шаблон
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.14983 0.960022C5.92108 1.00315 5.75608 1.20565 5.75983 1.44002V22.56C5.75795 22.7325 5.84983 22.8919 5.99795 22.9781C6.14608 23.0663 6.32983 23.0663 6.47983 22.98L11.9998 19.755L17.5198 22.98C17.6698 23.0663 17.8536 23.0663 18.0017 22.9781C18.1498 22.8919 18.2417 22.7325 18.2398 22.56V1.44002C18.2398 1.17565 18.0242 0.960022 17.7598 0.960022H6.23983C6.22483 0.960022 6.20983 0.960022 6.19483 0.960022C6.17983 0.960022 6.16483 0.960022 6.14983 0.960022ZM6.71983 1.92002H17.2798V21.72L12.2398 18.78C12.0917 18.6938 11.908 18.6938 11.7598 18.78L6.71983 21.72V1.92002Z"
                    fill="#342C2C"
                  />
                </svg>
              </div>
            </ButtonComponent>
            <ButtonComponent type={"adaptive"} padding={"91px"}>
              <Link href={'/transactions/create/confirm'}>Далее</Link>
            </ButtonComponent>
          </div>
        </div>
      </CardComponent>

      {/* 1107px card width 
    435px - 60px = 370px
    1477px
*/}
    </div>
  );
}
