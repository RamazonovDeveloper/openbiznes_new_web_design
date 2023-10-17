import React, { useState } from "react";
import styles from "./confirm.module.css";
import CardComponent from "../../../../components/cardComponent";
import ButtonComponent from "../../../../components/buttonComponent";
import DefaultModalComponent from "../../../../components/defaultModal";
import MainModalComponent from "../../../../components/mainModal";

export default function TreasuryConfirmPage() {
  const [succesfully, setSuccessfully] = useState('empty');

  const handleClick = () => {
    setSuccessfully(true);
    console.log(succesfully);
  };

  const closeModal = () => {
    setSuccessfully("empty");
  };

  return (
    <div className={styles.confirm}>
      {succesfully != "empty" &&
        (succesfully ? (
          <DefaultModalComponent
            success={true}
            closeModalFunction={closeModal}
          />
        ) : (
          <DefaultModalComponent
            success={false}
            closeModalFunction={closeModal}
          />
        ))}
      <CardComponent>
        <div className={styles.confirm_headers}>
          <ButtonComponent
            type={"adaptive_gray"}
            height={"32px"}
            padding={"16px"}
            fontSize={"12px"}
          >
            <div className={styles.create_header_btn}>
              Редактировать
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4465 1.04626C15.0669 1.04626 14.6872 1.18689 14.4003 1.47376L14.0965 1.76626C14.0234 1.7283 13.9404 1.71705 13.8603 1.73251C13.7914 1.74798 13.7295 1.78314 13.6803 1.83376L2.37404 13.14C2.33889 13.1752 2.31217 13.2174 2.29529 13.2638L1.10279 16.4363C1.05498 16.567 1.08732 16.7147 1.18717 16.8131C1.28561 16.913 1.43326 16.9453 1.56404 16.8975L4.73654 15.705C4.78295 15.6881 4.82514 15.6614 4.86029 15.6263L16.1665 4.32001C16.2875 4.19486 16.3029 4.0008 16.2003 3.85876L16.4928 3.56626C17.0665 2.99251 17.0665 2.04751 16.4928 1.47376C16.2059 1.18689 15.8262 1.04626 15.4465 1.04626ZM15.4465 1.76626C15.6434 1.76626 15.8417 1.83517 15.9865 1.98001C16.2776 2.27111 16.2776 2.76892 15.9865 3.06001L15.7053 3.35251L14.6253 2.27251L14.9065 1.98001C15.0514 1.83517 15.2497 1.76626 15.4465 1.76626ZM13.9278 2.58751L15.4128 4.07251L14.4228 5.05126L12.949 3.57751L13.9278 2.58751ZM12.4315 4.08376L13.9165 5.56876L4.59029 14.8838L4.32029 14.6025V14.04C4.32029 13.8417 4.15857 13.68 3.96029 13.68H3.39779L3.11654 13.41L12.4315 4.08376ZM2.75654 14.0738L2.98154 14.2988C3.05045 14.3663 3.14467 14.4028 3.24029 14.4H3.60029V14.76C3.59748 14.8556 3.63404 14.9499 3.70154 15.0188L3.92654 15.2438L2.55404 15.7613L2.23904 15.4463L2.75654 14.0738Z"
                  fill="#342C2C"
                />
              </svg>
            </div>
          </ButtonComponent>
        </div>
        <div className={styles.confirm_body}>
          <div className={styles.confirm_body_item}>
            <div className={styles.confirm_body_item_text}>
              <div className={styles.confirm_body_item_text_left}>
                Дата создания документа
              </div>
              <div className={styles.confirm_body_item_text_right}>
                23.06.2023
              </div>
            </div>
          </div>
          <div className={styles.confirm_body_item}>
            <div className={styles.confirm_body_item_title}>Отправитель</div>
            <div className={styles.confirm_body_item_text}>
              <div className={styles.confirm_body_item_text_left}>
                Валюта, счет
              </div>
              <div className={styles.confirm_body_item_text_right}>
                UZS, АКБ “Агробанк” 0000 0000 0000 0000 0000
              </div>
            </div>
            <div className={styles.confirm_body_item_text}>
              <div className={styles.confirm_body_item_text_left}>
                Дата исполнения
              </div>
              <div className={styles.confirm_body_item_text_right}>
                25.06.2023
              </div>
            </div>
            <div className={styles.confirm_body_item_text}>
              <div className={styles.confirm_body_item_text_left}>
                Номер платежа
              </div>
              <div className={styles.confirm_body_item_text_right}>
                123456789
              </div>
            </div>
          </div>
          <div className={styles.confirm_body_item}>
            <div className={styles.confirm_body_item_title}>Получатель</div>
            <div className={styles.confirm_body_item_text}>
              <div className={styles.confirm_body_item_text_left}>
                Расчетный счет казначейства
              </div>
              <div className={styles.confirm_body_item_text_right}>
                0000 0000 0000 0000 0000 Наименование казначейства Наименование
                казначейства Наименование казначейства
              </div>
            </div>
          </div>
          <div className={styles.confirm_body_item}>
            <div className={styles.confirm_body_item_title}>
              Описание платежа
            </div>
            <div className={styles.confirm_body_item_text}>
              <div className={styles.confirm_body_item_text_left}>Сумма</div>
              <div className={styles.confirm_body_item_text_right}>
                100 500 000,00 UZS
              </div>
            </div>
            <div className={styles.confirm_body_item_text}>
              <div className={styles.confirm_body_item_text_left}>
                Код назначения
              </div>
              <div className={styles.confirm_body_item_text_right}>
                08102 Оплата налогов и других обязательных платежей по расчёту{" "}
              </div>
            </div>
            <div className={styles.confirm_body_item_text}>
              <div className={styles.confirm_body_item_text_left}>
                Назначение платежа
              </div>
              <div className={styles.confirm_body_item_text_right}>
                Оплата по договору №1234 от 15.05.2023{" "}
              </div>
            </div>
          </div>

          <div className={styles.edit_wrapper_left_btn}>
            <ButtonComponent
              type={"adaptive"}
              padding={"53px"}
              handleClick={handleClick}
            >
              Создать платеж
            </ButtonComponent>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
