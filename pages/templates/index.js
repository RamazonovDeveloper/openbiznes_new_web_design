import React, { useState } from "react";
import styles from "./paymentTemplates.module.css";
import CardComponent from "../../components/cardComponent";
import ButtonComponent from "../../components/buttonComponent";
import SaveToggleButton from "../../components/saveToggleBtnComponent";
import { useRouter } from "next/router";
import DefaultModalComponent from "../../components/defaultModal";
import TypeOperation from "../../components/typeOperation/typeOperation";

export default function PaymentTemplates() {
  const [activeCard, setActiveCard] = useState("empty");

  const [modal, setModal] = useState(false);

  const handleClick = (nums) => {
    setActiveCard(nums);
  };

  const router = useRouter();

  const handleBtnClick = () => {
    router.push("/templates/create");
  };

  return (
    <div className={styles.payment_tem}>
      {modal && (
        <DefaultModalComponent
          success={true}
          closeModalFunction={() => setModal(false)}
        />
      )}
      <CardComponent>
        <div className={styles.payment_tem_filters}>
          <TypeOperation />
          <div className={styles.payment_tem_filters_search}>
            <input type="text" placeholder="Поиск шаблона" />
            <div>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5799 1.44C6.07805 1.44 2.41992 5.09813 2.41992 9.6C2.41992 14.1019 6.07805 17.76 10.5799 17.76C12.3612 17.76 14.0074 17.1863 15.3499 16.215L21.6649 22.515L23.0149 21.165L16.7749 14.91C18.0012 13.4813 18.7399 11.6269 18.7399 9.6C18.7399 5.09813 15.0818 1.44 10.5799 1.44ZM10.5799 2.4C14.5624 2.4 17.7799 5.6175 17.7799 9.6C17.7799 13.5825 14.5624 16.8 10.5799 16.8C6.59742 16.8 3.37992 13.5825 3.37992 9.6C3.37992 5.6175 6.59742 2.4 10.5799 2.4Z"
                  fill="#342C2C"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.payment_tem_table}>
          <div className={styles.payment_tem_table_item}>
            <div
              className={styles.payment_tem_table_item_main}
              onClick={() => handleClick(1)}
            >
              <div className={styles.payment_tem_table_item_title}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1659_3965)">
                    <rect
                      width="30"
                      height="30"
                      rx="15"
                      fill="#EEEEEE"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M19.8008 24.2C19.7305 24.2 19.6617 24.1813 19.5992 24.1453L15.0008 21.4625L10.4023 24.1453C10.2789 24.2172 10.1258 24.2188 10.0023 24.1469C9.87734 24.075 9.80078 23.9438 9.80078 23.8V6.2C9.80078 5.97969 9.98047 5.8 10.2008 5.8H19.8008C20.0227 5.8 20.2008 5.97969 20.2008 6.2V23.8C20.2008 23.9438 20.1242 24.075 19.9992 24.1469C19.9383 24.1828 19.8695 24.2 19.8008 24.2Z"
                      fill="#FFBC1F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1659_3965">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Наименнование шаблона</p>
              </div>
              <div className={styles.payment_tem_table_item_texts}>
                <p>ООО “Наименнование организации”</p>
                <p className={styles.gray_text}>На счет: 0000 0000 0000 0000</p>
                <p className={styles.gray_text}>
                  Назначение платежа Назначение платежа Назначение платежа
                  Назначение платежа Назначение платеж...
                </p>
              </div>
              <div className={styles.payment_tem_table_item_actions}>
                <div>
                  10 000 000 000,00
                  <span
                    className={styles.gray_text}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {" "}
                    UZS
                  </span>
                </div>
                <div onClick={() => handleClick(1)}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.70039 5.7C1.70781 5.7 0.900391 6.50742 0.900391 7.5C0.900391 8.49258 1.70781 9.3 2.70039 9.3C3.69297 9.3 4.50039 8.49258 4.50039 7.5C4.50039 6.50742 3.69297 5.7 2.70039 5.7ZM7.50039 5.7C6.50781 5.7 5.70039 6.50742 5.70039 7.5C5.70039 8.49258 6.50781 9.3 7.50039 9.3C8.49297 9.3 9.30039 8.49258 9.30039 7.5C9.30039 6.50742 8.49297 5.7 7.50039 5.7ZM12.3004 5.7C11.3078 5.7 10.5004 6.50742 10.5004 7.5C10.5004 8.49258 11.3078 9.3 12.3004 9.3C13.293 9.3 14.1004 8.49258 14.1004 7.5C14.1004 6.50742 13.293 5.7 12.3004 5.7Z"
                      fill="#A5A1A1"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {activeCard == 1 && (
              <div className={styles.payment_tem_table_item_accor}>Salom</div>
            )}
          </div>
          <div
            className={`${styles.payment_tem_table_item} ${
              activeCard == 2 && styles.payment_tem_table_item_active
            }`}
          >
            <div className={styles.payment_tem_table_item_main}>
              <div className={styles.payment_tem_table_item_title}>
                {activeCard == 2 ? (
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="30" rx="15" fill="white" />
                    <path
                      d="M19.8008 24.2C19.7305 24.2 19.6617 24.1813 19.5992 24.1454L15.0008 21.4625L10.4023 24.1454C10.2789 24.2172 10.1258 24.2188 10.0023 24.1469C9.87734 24.075 9.80078 23.9438 9.80078 23.8V6.20005C9.80078 5.97974 9.98047 5.80005 10.2008 5.80005H19.8008C20.0227 5.80005 20.2008 5.97974 20.2008 6.20005V23.8C20.2008 23.9438 20.1242 24.075 19.9992 24.1469C19.9383 24.1829 19.8695 24.2 19.8008 24.2Z"
                      fill="#FFBC1F"
                    />
                  </svg>
                ) : (
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1659_3965)">
                      <rect
                        width="30"
                        height="30"
                        rx="15"
                        fill="#EEEEEE"
                        fillOpacity="0.6"
                      />
                      <path
                        d="M19.8008 24.2C19.7305 24.2 19.6617 24.1813 19.5992 24.1453L15.0008 21.4625L10.4023 24.1453C10.2789 24.2172 10.1258 24.2188 10.0023 24.1469C9.87734 24.075 9.80078 23.9438 9.80078 23.8V6.2C9.80078 5.97969 9.98047 5.8 10.2008 5.8H19.8008C20.0227 5.8 20.2008 5.97969 20.2008 6.2V23.8C20.2008 23.9438 20.1242 24.075 19.9992 24.1469C19.9383 24.1828 19.8695 24.2 19.8008 24.2Z"
                        fill="#FFBC1F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1659_3965">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}

                <p>Наименнование шаблона</p>
              </div>
              <div className={styles.payment_tem_table_item_texts}>
                <p>ООО “Наименнование организации”</p>
                <p className={styles.gray_text}>На счет: 0000 0000 0000 0000</p>
                <p className={styles.gray_text}>
                  Назначение платежа Назначение платежа Назначение платежа
                  Назначение платежа Назначение платеж...
                </p>
              </div>
              <div className={styles.payment_tem_table_item_actions}>
                <div>
                  10 000 000 000,00
                  <span
                    className={styles.gray_text}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {" "}
                    UZS
                  </span>
                </div>
                <div onClick={() => handleClick(2)}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.70039 5.7C1.70781 5.7 0.900391 6.50742 0.900391 7.5C0.900391 8.49258 1.70781 9.3 2.70039 9.3C3.69297 9.3 4.50039 8.49258 4.50039 7.5C4.50039 6.50742 3.69297 5.7 2.70039 5.7ZM7.50039 5.7C6.50781 5.7 5.70039 6.50742 5.70039 7.5C5.70039 8.49258 6.50781 9.3 7.50039 9.3C8.49297 9.3 9.30039 8.49258 9.30039 7.5C9.30039 6.50742 8.49297 5.7 7.50039 5.7ZM12.3004 5.7C11.3078 5.7 10.5004 6.50742 10.5004 7.5C10.5004 8.49258 11.3078 9.3 12.3004 9.3C13.293 9.3 14.1004 8.49258 14.1004 7.5C14.1004 6.50742 13.293 5.7 12.3004 5.7Z"
                      fill="#A5A1A1"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {activeCard == 2 && (
              <div className={styles.payment_tem_table_item_accor}>
                <div className={styles.payment_tem_table_item_accor_data}>
                  <div
                    className={styles.payment_tem_table_item_accor_data_item}
                  >
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_title
                      }
                    >
                      Отправитель
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>
                        Наименование организации
                      </div>
                      <div>ООО “Компания”</div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>ИНН</div>
                      <div>12345678911234567892</div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>МФО банка</div>
                      <div>01140</div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>Банк</div>
                      <div>АКБ “Агробанк”</div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>
                        Расчетный счет
                      </div>
                      <div>0000 0000 0000 0000 0000</div>
                    </div>
                  </div>
                  <div
                    className={styles.payment_tem_table_item_accor_data_item}
                  >
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_title
                      }
                    >
                      Получатель
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>
                        Наименование организации
                      </div>
                      <div>ООО “Компания”</div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>ИНН</div>
                      <div>12345678911234567892</div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>МФО банка</div>
                      <div>01140</div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>Банк</div>
                      <div>АКБ “Агробанк”</div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>
                        Расчетный счет
                      </div>
                      <div>0000 0000 0000 0000 0000</div>
                    </div>
                  </div>
                  <div
                    className={styles.payment_tem_table_item_accor_data_item}
                  >
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_title
                      }
                    >
                      Детали платежа
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>
                        Код назначения
                      </div>
                      <div>
                        08102 Оплата налогов и других обязательных платежей по
                        расчёту{" "}
                      </div>
                    </div>
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_text
                      }
                    >
                      <div className={styles.gray_bold_text}>Сумма</div>
                      <div>100 000 000 000,00 UZS</div>
                    </div>
                  </div>
                  <div
                    className={styles.payment_tem_table_item_accor_data_item}
                  >
                    <div
                      className={
                        styles.payment_tem_table_item_accor_data_item_title
                      }
                    >
                      Назначение платежа
                    </div>
                    Назначение платежа Назначение платежа Назначение платежа
                    Назначение платежа Назначение платежа Назначение платежа
                    Назначение платежа Назначение платежа Назначение платежа
                    Назначение платежа. Назначение платежа Назначение платежа
                    Назначение платежа Назначение платежа Назначение платеж.
                  </div>
                </div>
                <div className={styles.payment_tem_table_item_accor_btns}>
                  <div
                    className={styles.payment_tem_table_item_accor_btns_wrapper}
                  >
                    <ButtonComponent
                      type={"adaptive"}
                      height={"32px"}
                      padding={"16px"}
                      fontSize={"12px"}
                      handleClick={() => setModal(true)}
                    >
                      Создать платеж
                    </ButtonComponent>
                    <ButtonComponent
                      type={"adaptive_gray"}
                      height={"32px"}
                      padding={"16px"}
                      fontSize={"12px"}
                      handleClick={() => handleBtnClick()}
                    >
                      <div
                        className={styles.payment_tem_table_item_accor_btns_btn}
                      >
                        Редактировать
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4456 1.04626C15.0659 1.04626 14.6862 1.18689 14.3993 1.47376L14.0956 1.76626C14.0224 1.7283 13.9395 1.71705 13.8593 1.73251C13.7904 1.74798 13.7285 1.78314 13.6793 1.83376L2.37307 13.14C2.33791 13.1752 2.31119 13.2174 2.29432 13.2638L1.10182 16.4363C1.054 16.567 1.08635 16.7147 1.18619 16.8131C1.28463 16.913 1.43228 16.9453 1.56307 16.8975L4.73557 15.705C4.78197 15.6881 4.82416 15.6614 4.85932 15.6263L16.1656 4.32001C16.2865 4.19486 16.302 4.0008 16.1993 3.85876L16.4918 3.56626C17.0656 2.99251 17.0656 2.04751 16.4918 1.47376C16.2049 1.18689 15.8253 1.04626 15.4456 1.04626ZM15.4456 1.76626C15.6424 1.76626 15.8407 1.83517 15.9856 1.98001C16.2767 2.27111 16.2767 2.76892 15.9856 3.06001L15.7043 3.35251L14.6243 2.27251L14.9056 1.98001C15.0504 1.83517 15.2487 1.76626 15.4456 1.76626ZM13.9268 2.58751L15.4118 4.07251L14.4218 5.05126L12.9481 3.57751L13.9268 2.58751ZM12.4306 4.08376L13.9156 5.56876L4.58932 14.8838L4.31932 14.6025V14.04C4.31932 13.8417 4.1576 13.68 3.95932 13.68H3.39682L3.11557 13.41L12.4306 4.08376ZM2.75557 14.0738L2.98057 14.2988C3.04947 14.3663 3.14369 14.4028 3.23932 14.4H3.59932V14.76C3.5965 14.8556 3.63307 14.9499 3.70057 15.0188L3.92557 15.2438L2.55307 15.7613L2.23807 15.4463L2.75557 14.0738Z"
                            fill="#342C2C"
                          />
                        </svg>
                      </div>
                    </ButtonComponent>
                    <ButtonComponent
                      type={"adaptive_gray"}
                      height={"32px"}
                      padding={"16px"}
                      fontSize={"12px"}
                    >
                      <div
                        className={styles.payment_tem_table_item_accor_btns_btn}
                      >
                        Печатная форма
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1659_14177)">
                            <path
                              d="M3.9607 0.719971V5.39997H1.8007C1.20851 5.39997 0.720703 5.88778 0.720703 6.47997V12.96C0.720703 13.5522 1.20851 14.04 1.8007 14.04H3.9607V17.28H14.0407V14.04H16.2007C16.7929 14.04 17.2807 13.5522 17.2807 12.96V6.47997C17.2807 5.88778 16.7929 5.39997 16.2007 5.39997H14.0407V0.719971H3.9607ZM4.6807 1.43997H13.3207V5.39997H4.6807V1.43997ZM1.8007 6.11997H4.26023C4.29911 6.1264 4.33878 6.1264 4.37766 6.11997H13.6202C13.6591 6.1264 13.6988 6.1264 13.7377 6.11997H16.2007C16.4041 6.11997 16.5607 6.27656 16.5607 6.47997V12.96C16.5607 13.1634 16.4041 13.32 16.2007 13.32H14.0407V10.08H13.6807H3.9607V13.32H1.8007C1.59729 13.32 1.4407 13.1634 1.4407 12.96V6.47997C1.4407 6.27656 1.59729 6.11997 1.8007 6.11997ZM14.7607 7.19997C14.5697 7.19997 14.3866 7.27583 14.2516 7.41085C14.1166 7.54588 14.0407 7.72901 14.0407 7.91997C14.0407 8.11093 14.1166 8.29406 14.2516 8.42909C14.3866 8.56411 14.5697 8.63997 14.7607 8.63997C14.9517 8.63997 15.1348 8.56411 15.2698 8.42909C15.4048 8.29406 15.4807 8.11093 15.4807 7.91997C15.4807 7.72901 15.4048 7.54588 15.2698 7.41085C15.1348 7.27583 14.9517 7.19997 14.7607 7.19997ZM4.6807 10.8H13.3207V13.6195C13.3143 13.6584 13.3143 13.698 13.3207 13.7369V16.56H4.6807V13.7404C4.68713 13.7016 4.68713 13.6619 4.6807 13.623V10.8ZM6.1207 11.88C6.073 11.8793 6.02564 11.8881 5.98137 11.9059C5.9371 11.9237 5.89681 11.9501 5.86283 11.9836C5.82886 12.0171 5.80188 12.057 5.78347 12.101C5.76506 12.145 5.75558 12.1923 5.75558 12.24C5.75558 12.2877 5.76506 12.3349 5.78347 12.3789C5.80188 12.4229 5.82886 12.4629 5.86283 12.4963C5.89681 12.5298 5.9371 12.5563 5.98137 12.574C6.02564 12.5918 6.073 12.6006 6.1207 12.6H11.8807C11.9284 12.6006 11.9758 12.5918 12.02 12.574C12.0643 12.5563 12.1046 12.5298 12.1386 12.4963C12.1725 12.4629 12.1995 12.4229 12.2179 12.3789C12.2363 12.3349 12.2458 12.2877 12.2458 12.24C12.2458 12.1923 12.2363 12.145 12.2179 12.101C12.1995 12.057 12.1725 12.0171 12.1386 11.9836C12.1046 11.9501 12.0643 11.9237 12.02 11.9059C11.9758 11.8881 11.9284 11.8793 11.8807 11.88H6.1207ZM6.1207 13.32C6.073 13.3193 6.02564 13.3281 5.98137 13.3459C5.9371 13.3637 5.89681 13.3901 5.86283 13.4236C5.82886 13.4571 5.80188 13.497 5.78347 13.541C5.76506 13.585 5.75558 13.6323 5.75558 13.68C5.75558 13.7277 5.76506 13.7749 5.78347 13.8189C5.80188 13.8629 5.82886 13.9029 5.86283 13.9363C5.89681 13.9698 5.9371 13.9963 5.98137 14.014C6.02564 14.0318 6.073 14.0406 6.1207 14.04H10.4407C10.4884 14.0406 10.5358 14.0318 10.58 14.014C10.6243 13.9963 10.6646 13.9698 10.6986 13.9363C10.7325 13.9029 10.7595 13.8629 10.7779 13.8189C10.7963 13.7749 10.8058 13.7277 10.8058 13.68C10.8058 13.6323 10.7963 13.585 10.7779 13.541C10.7595 13.497 10.7325 13.4571 10.6986 13.4236C10.6646 13.3901 10.6243 13.3637 10.58 13.3459C10.5358 13.3281 10.4884 13.3193 10.4407 13.32H6.1207ZM6.1207 14.76C6.073 14.7593 6.02564 14.7681 5.98137 14.7859C5.9371 14.8037 5.89681 14.8301 5.86283 14.8636C5.82886 14.8971 5.80188 14.937 5.78347 14.981C5.76506 15.025 5.75558 15.0723 5.75558 15.12C5.75558 15.1677 5.76506 15.2149 5.78347 15.2589C5.80188 15.3029 5.82886 15.3429 5.86283 15.3763C5.89681 15.4098 5.9371 15.4363 5.98137 15.454C6.02564 15.4718 6.073 15.4806 6.1207 15.48H11.8807C11.9284 15.4806 11.9758 15.4718 12.02 15.454C12.0643 15.4363 12.1046 15.4098 12.1386 15.3763C12.1725 15.3429 12.1995 15.3029 12.2179 15.2589C12.2363 15.2149 12.2458 15.1677 12.2458 15.12C12.2458 15.0723 12.2363 15.025 12.2179 14.981C12.1995 14.937 12.1725 14.8971 12.1386 14.8636C12.1046 14.8301 12.0643 14.8037 12.02 14.7859C11.9758 14.7681 11.9284 14.7593 11.8807 14.76H6.1207Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1659_14177">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </ButtonComponent>
                    <SaveToggleButton />
                    <ButtonComponent
                      type={"adaptive_gray"}
                      padding={"16px"}
                      height={"32px"}
                      fontSize={"12px"}
                    >
                      <div
                        className={styles.payment_tem_table_item_accor_btns_btn}
                      >
                        Удалить шаблон
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.56008 0C6.96805 0 6.48008 0.487969 6.48008 1.08V1.44H3.48758C3.04742 1.44 2.75211 1.76203 2.59883 2.16H2.55383C1.74383 2.16 1.08008 2.83219 1.08008 3.6675V3.96C1.08008 4.15828 1.2418 4.32 1.44008 4.32H1.84508L3.67883 16.83C3.77586 17.5092 4.36508 18 5.04008 18H12.9601C13.6351 18 14.1835 17.498 14.3213 16.8525C14.3213 16.8455 14.3213 16.837 14.3213 16.83L16.1551 4.32H16.5601C16.7584 4.32 16.9201 4.15828 16.9201 3.96V3.6675C16.9201 2.83219 16.2563 2.16 15.4463 2.16H15.4013C15.248 1.76203 14.9527 1.44 14.5126 1.44H11.5201V1.08C11.5201 0.487969 11.0321 0 10.4401 0H7.56008ZM7.56008 0.72H10.4401C10.6398 0.72 10.8001 0.880313 10.8001 1.08V1.44H7.20008V1.08C7.20008 0.880313 7.36039 0.72 7.56008 0.72ZM3.48758 2.16H14.5126C14.656 2.16 14.8276 2.32031 14.8276 2.52C14.8276 2.71828 14.9893 2.88 15.1876 2.88H15.4463C15.8359 2.88 16.141 3.18094 16.1776 3.6H1.82258C1.85914 3.18094 2.1643 2.88 2.55383 2.88H2.81258C3.01086 2.88 3.17258 2.71828 3.17258 2.52C3.17258 2.32031 3.34414 2.16 3.48758 2.16ZM2.57633 4.32H15.4238L13.6126 16.695C13.5352 17.0564 13.292 17.28 12.9601 17.28H5.04008C4.7082 17.28 4.43398 17.0564 4.38758 16.7288L2.57633 4.32ZM4.41008 5.86125C4.31445 5.87531 4.22727 5.92734 4.17102 6.00469C4.11336 6.08344 4.09086 6.18188 4.10633 6.2775L5.29883 15.2438C5.30305 15.3816 5.38602 15.5039 5.51258 15.5602C5.63914 15.6164 5.78539 15.5953 5.89086 15.5067C5.99633 15.4167 6.04133 15.2761 6.00758 15.1425L4.82633 6.17625C4.81508 6.07781 4.76445 5.98922 4.6857 5.92875C4.60695 5.86969 4.50711 5.84578 4.41008 5.86125ZM7.43633 5.86125C7.2507 5.88938 7.11852 6.05672 7.13258 6.24375L7.52633 15.21C7.53617 15.4083 7.70492 15.563 7.9032 15.5531C8.10148 15.5433 8.25617 15.3745 8.24633 15.1763L7.85258 6.21C7.84977 6.11297 7.80758 6.02016 7.73586 5.95406C7.66273 5.88938 7.56711 5.85563 7.47008 5.86125C7.45883 5.86125 7.44758 5.86125 7.43633 5.86125ZM10.4513 5.86125C10.2784 5.88797 10.1504 6.03563 10.1476 6.21L9.75383 15.1763C9.74398 15.3745 9.89867 15.5433 10.097 15.5531C10.2952 15.563 10.464 15.4083 10.4738 15.21L10.8676 6.24375C10.8746 6.14109 10.8366 6.03984 10.7635 5.96531C10.689 5.89219 10.5877 5.85422 10.4851 5.86125C10.4738 5.86125 10.4626 5.86125 10.4513 5.86125ZM13.4776 5.86125C13.3173 5.88516 13.1921 6.01453 13.1738 6.17625L11.9926 15.1425C11.9588 15.2761 12.0038 15.4167 12.1093 15.5067C12.2148 15.5953 12.361 15.6164 12.4876 15.5602C12.6141 15.5039 12.6971 15.3816 12.7013 15.2438L13.8938 6.2775C13.9107 6.16922 13.8784 6.05813 13.8038 5.97656C13.7293 5.895 13.621 5.85281 13.5113 5.86125C13.5001 5.86125 13.4888 5.86125 13.4776 5.86125Z"
                            fill="#342C2C"
                          />
                        </svg>
                      </div>
                    </ButtonComponent>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
