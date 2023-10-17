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
  const router = useRouter();

  const handleClick = (props) => {
    router.push(`/payments/${props}`);
  };

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
              ИНН/ПИНФЛ 
              </div>
              <div>
                <InputComponent placeholder={"000 000 000 / 0 000000 000 000 0"}></InputComponent>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
              Транзитный счет
              </div>
              <div>
                <InputComponent placeholder={"BYХХOLMP3Х14ХХХХХХХХХХХХХХХХ"}></InputComponent>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
              Имя влядельца карты
              </div>
              <div>
                <InputComponent placeholder={'Впишите'}/>
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
            <ButtonComponent
              type={"adaptive"}
              padding={"91px"}
              handleClick={() => router.push("/payments/by_card/confirm")}
            >
              Далее
            </ButtonComponent>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
