import React from "react";
import styles from "./editTransaction.module.css";
import CardComponent from "../../../components/cardComponent/index";
import ButtonComponent from "../../../components/buttonComponent";
import InputComponent from "../../../components/inputComponent";
import SelectComponent from "../../../components/selectComponent";
import AllAccountsInput from "../../../components/allAccountsInput/allAccountsInput";
import AllContragentsInput from "../../../components/allContragensInput/allContragents";
import MFOBankInput from "../../../components/mfoBankInput/mfoBankInput";
import CodeDestinationInput from "../../../components/codeDestinationInput/codeDestinationInput";

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
                  <AllAccountsInput />
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
                  МФО банка
                </div>
                <div>
                  <MFOBankInput />
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Расчетный счет
                </div>
                <div>
                  <InputComponent
                    placeholder={"0000 0000 0000 0000"}
                  ></InputComponent>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  ИНН/ПИНФЛ
                </div>
                <div>
                  <InputComponent
                    placeholder={"0000 0000 0000 0000"}
                  ></InputComponent>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Наименование организации
                </div>
                <div>
                  <AllContragentsInput />
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
                  <InputComponent placeholder={"00.00 UZS"}></InputComponent>
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Код назначения
                </div>
                <div>
                  <CodeDestinationInput />
                </div>
              </div>
              <div className={styles.edit_wrapper_left_item_body}>
                <div className={styles.edit_wrapper_left_item_body_text}>
                  Назначение платежа
                </div>
                <div className={styles.edit_wrapper_left_item_body_textarea}>
                  <textarea placeholder="Впишите"></textarea>
                </div>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_btn}>
              <ButtonComponent type={"adaptive"} padding={"29px"}>
                Сохранить изменения
              </ButtonComponent>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
