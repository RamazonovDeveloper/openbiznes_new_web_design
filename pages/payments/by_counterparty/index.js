import React from "react";
import styles from "./by_counterparty.module.css";
import CardComponent from "../../../components/cardComponent";
import SelectComponent from "../../../components/selectComponent";
import ButtonComponent from "../../../components/buttonComponent";
import InputComponent from "../../../components/inputComponent";
import Link from "next/link";
import TypeOperation from "../../../components/typeOperation/typeOperation";
import AllAccountsInput from "../../../components/allAccountsInput/allAccountsInput";
import { useRouter } from "next/router";
import MFOBankInput from "../../../components/mfoBankInput/mfoBankInput";
import AllContragentsInput from "../../../components/allContragensInput/allContragents";
import CodeDestinationInput from "../../../components/codeDestinationInput/codeDestinationInput";

export default function PaymentByCounterparty() {

  const router = useRouter()

  const handleClick = (props) => {
    router.push(`/payments/${props}`)
  }

  return (
    <div className={styles.create}>
      <CardComponent>
        <div className={styles.create_header}>
          <div className={styles.create_header_input}>
            <TypeOperation handleClick={handleClick} />
          </div>
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
            <ButtonComponent type={"adaptive"} padding={"91px"} handleClick={() => router.push('/payments/by_counterparty/confirm')}>
              Далее
            </ButtonComponent>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
