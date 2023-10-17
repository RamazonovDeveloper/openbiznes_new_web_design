import React from "react";
import styles from "./by_budget.module.css";
import CardComponent from "../../../components/cardComponent";
import SelectComponent from "../../../components/selectComponent";
import ButtonComponent from "../../../components/buttonComponent";
import InputComponent from "../../../components/inputComponent";
import Link from "next/link";
import TypeOperation from "../../../components/typeOperation/typeOperation";
import AllAccountsInput from "../../../components/allAccountsInput/allAccountsInput";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function PaymentByBudget() {
  const router = useRouter();

  const handleClick = (props) => {
    router.push(`/payments/${props}`);
  };

  let path = router.pathname;

  path = path.split("/");

  console.log(path[path.length - 1]);

  // if(router)

  return (
    <div className={styles.create}>
      <CardComponent>
        <div className={styles.create_header}>
          <div className={styles.create_header_input}>
            <TypeOperation handleClick={handleClick} defaultPath={"salom"} />
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
                Наименование бюджетного учреждения
              </div>
              <div>
                <SelectComponent />
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
              ИНН
              </div>
              <div>
                <InputComponent placeholder={"000 000 000"}></InputComponent>
              </div>
            </div>
            <div className={styles.edit_wrapper_left_item_body}>
              <div className={styles.edit_wrapper_left_item_body_text}>
              Лицевой счет
              </div>
              <div>
                <InputComponent placeholder={"0000 0000 0000 0000"}></InputComponent>
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
                <textarea placeholder="Впишите"></textarea>
              </div>
            </div>
          </div>
          <div className={styles.edit_wrapper_left_btn}>
            <ButtonComponent type={"adaptive"} padding={"91px"} handleClick={() => router.push('/payments/by_budget/confirm')}>
              Далее
            </ButtonComponent>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
