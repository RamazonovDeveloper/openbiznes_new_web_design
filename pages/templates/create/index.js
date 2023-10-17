import React from "react";
import styles from "./templatesCreate.module.css";
import CardComponent from "../../../components/cardComponent";
import SelectComponent from "../../../components/selectComponent";
import ButtonComponent from "../../../components/buttonComponent";
import InputComponent from "../../../components/inputComponent";
import Link from "next/link";
import TypeOperation from "../../../components/typeOperation/typeOperation";
import AllAccountsInput from "../../../components/allAccountsInput/allAccountsInput";
import InputDivComponent from "../../../components/inputDivComponent";

export default function CreateTemplatePage() {
  return (
    <div className={styles.create}>
      <CardComponent>
        <div className={styles.create_header}>
          <div className={styles.create_header_input}>
            <TypeOperation />
          </div>
        </div>

        <div className={styles.create_body}>
          <div className={styles.edit_wrapper_left_item}>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
                Наименование шаблона
              </div>
              <div>
                <InputComponent placeholder={"Впишите"}></InputComponent>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item_title}>
              Отправитель
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
                Валюта, счет
              </div>
              <div>
                <AllAccountsInput />
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
                <InputComponent placeholder={"000000"}></InputComponent>
              </div>
            </div>
          </div>
          <div className={styles.edit_wrapper_left_item}>
            <div className={styles.edit_wrapper_left_item_title}>
              Получатель
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
                Расчетный счет казначейства
              </div>
              <div>
                <InputDivComponent>
                  <div
                    className={styles.edit_wrapper_left_item_body_text_input}
                  >
                    <input type="text" placeholder="Поиск" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0799 1.43994C5.57805 1.43994 1.91992 5.09807 1.91992 9.59994C1.91992 14.1018 5.57805 17.7599 10.0799 17.7599C11.8612 17.7599 13.5074 17.1862 14.8499 16.2149L21.1649 22.5149L22.5149 21.1649L16.2749 14.9099C17.5012 13.4812 18.2399 11.6268 18.2399 9.59994C18.2399 5.09807 14.5818 1.43994 10.0799 1.43994ZM10.0799 2.39994C14.0624 2.39994 17.2799 5.61744 17.2799 9.59994C17.2799 13.5824 14.0624 16.7999 10.0799 16.7999C6.09742 16.7999 2.87992 13.5824 2.87992 9.59994C2.87992 5.61744 6.09742 2.39994 10.0799 2.39994Z"
                        fill="#342C2C"
                      />
                    </svg>
                  </div>
                </InputDivComponent>
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
                <InputComponent placeholder="00.00 UZS" />
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
                <textarea placeholder="Оплата таможенной пошлины"></textarea>
              </div>
            </div>
          </div>
          <div className={styles.edit_wrapper_left_btn}>
            <ButtonComponent type={"adaptive_gray"} padding={"22px"}>
              <div className={styles.create_header_btn}>
                Сохранить новый шаблон
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5203 4.32007V11.5201H4.32031V12.4801H11.5203V19.6801H12.4803V12.4801H19.6803V11.5201H12.4803V4.32007H11.5203Z"
                    fill="#342C2C"
                  />
                </svg>
              </div>
            </ButtonComponent>
            <ButtonComponent type={"adaptive"} padding={"45px"}>
              <Link href={"/templates"}>Сохранить изменения</Link>
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
