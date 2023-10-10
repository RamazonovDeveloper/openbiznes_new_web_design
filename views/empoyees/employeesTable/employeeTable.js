import React, { useState } from "react";
import styles from "./employeeTable.module.css";
import ButtonComponent from "../../../components/buttonComponent";
import MainModalComponent from "../../../components/mainModal";
import InputComponent from "../../../components/inputComponent";

export default function EmployeeTable() {
  const [activeEmp, setActiveEmp] = useState("empty");

  const [modal, setModal] = useState(false);

  const [addEmp, setAddEmp] = useState(true);

  function closeModal() {
    setModal(false);
  }

  function closeAddEmpModal() {
    setAddEmp(false);
  }

  const handleClick = (nums) => {
    setActiveEmp(nums);
  };

  const modalProps = () => {
    return (
      <div>
        <div className={styles.edit_modal}>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>Должность</p>
            <InputComponent placeholder={"Главный бухгалтер"} />
          </div>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>ФИО</p>
            <p className={styles.table_item_modal_left_item_black}>
              Андреева Кристина Сергеевна
            </p>
          </div>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>Телефон</p>
            <InputComponent placeholder={"Главный бухгалтер"} />
          </div>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>ПИНФЛ</p>
            <p className={styles.table_item_modal_left_item_black}>
              12345678911234 Кристина Сергеевна
            </p>
          </div>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>
              Данные о последней авторизации
            </p>
            <p className={styles.table_item_modal_left_item_black}>
              <div>X555 EA с ЭЦП</div>
              <div className={styles.table_item_modal_left_item_gray}>
                Tashkent, Uzbekistan
              </div>
            </p>
          </div>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>Статус</p>
            <p className={styles.table_item_modal_left_item_black}>
              <div className={styles.table_item_actions_wrapper}>
                <span className={styles.table_item_actions_status}></span>{" "}
                Активен
              </div>
            </p>
          </div>
        </div>
        <div className={styles.edit_btns}>
          <ButtonComponent
            type={"adaptive_gray"}
            height={"32px"}
            padding={"23px"}
            handleClick={closeModal}
          >
            <p className={styles.edit_btns_btn}>Отмента</p>
          </ButtonComponent>
          <ButtonComponent type={"adaptive"} height={"32px"} padding={"23px"}>
            <p className={styles.edit_btns_btn}>Сохранить изменения</p>
          </ButtonComponent>
        </div>
      </div>
    );
  };

  const AddEmployeeModalProps = () => {
    return (
      <div>
        <div className={styles.edit_modal}>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>Телефон</p>
            <InputComponent placeholder={"+998"} />
          </div>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>ПИНФЛ</p>
            <InputComponent placeholder={"Впишите"} />
          </div>
          <div className={styles.edit_modal_item}>
            <p className={styles.table_item_modal_left_item_gray}>Должность</p>
            <InputComponent placeholder={"Впишите"} />
          </div>
        </div>
        <div className={styles.edit_btns}>
          <ButtonComponent
            type={"adaptive_gray"}
            height={"32px"}
            padding={"23px"}
            handleClick={closeAddEmpModal}
          >
            <p className={styles.edit_btns_btn}>Отмента</p>
          </ButtonComponent>
          <ButtonComponent type={"adaptive"} height={"32px"} padding={"17px"}>
            <p className={styles.edit_btns_btn}>Отправить</p>
          </ButtonComponent>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.table}>
      {modal && (
        <MainModalComponent
          title={"Редактировать персональные данные сотрудника"}
          children={modalProps()}
          closeModalFunction={closeModal}
        />
      )}

      {addEmp && (
        <MainModalComponent
          title={"Добавить сотрудника"}
          children={AddEmployeeModalProps()}
          closeModalFunction={closeAddEmpModal}
        />
      )}
      <div className={styles.table_header}>
        <div>Должность</div>
        <div>ФИО</div>
        <div>Последний визит</div>
        <div>Статус</div>
      </div>

      <div className={styles.table_item}>
        <div
          className={`${styles.table_item_main} ${
            activeEmp != "empty" &&
            activeEmp == "1" &&
            styles.table_item_main_active
          }`}
        >
          <div className={styles.table_item_name}>
            {activeEmp != "empty" && activeEmp == "1" ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1612_6583)">
                  <rect width="30" height="30" rx="15" fill="white" />
                  <path
                    d="M17.3742 18.011C17.3148 17.3657 17.3383 16.9157 17.3383 16.3267C17.6305 16.1735 18.1539 15.197 18.2414 14.372C18.4711 14.3532 18.8336 14.1298 18.9398 13.2454C18.9961 12.7704 18.7695 12.5032 18.6305 12.4188C19.0039 11.2954 19.7805 7.81885 17.1961 7.45947C16.9289 6.99229 16.2477 6.75635 15.3633 6.75635C11.8211 6.82197 11.3945 9.43135 12.1711 12.4188C12.032 12.5032 11.8055 12.7704 11.8617 13.2454C11.9695 14.1298 12.3305 14.3532 12.5602 14.372C12.6477 15.197 13.1914 16.1735 13.4852 16.3267C13.4852 16.9157 13.507 17.3657 13.4477 18.011C12.7477 19.8954 8.01953 19.3657 7.80078 23.0001H23.0008C22.782 19.3657 18.0742 19.8954 17.3742 18.011Z"
                    fill="#A5A1A1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1612_6583">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1612_5069)">
                  <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                  <path
                    d="M17.3742 18.0109C17.3148 17.3656 17.3383 16.9156 17.3383 16.3266C17.6305 16.1734 18.1539 15.1969 18.2414 14.3719C18.4711 14.3531 18.8336 14.1297 18.9398 13.2453C18.9961 12.7703 18.7695 12.5031 18.6305 12.4188C19.0039 11.2953 19.7805 7.81876 17.1961 7.45938C16.9289 6.99219 16.2477 6.75626 15.3633 6.75626C11.8211 6.82188 11.3945 9.43126 12.1711 12.4188C12.032 12.5031 11.8055 12.7703 11.8617 13.2453C11.9695 14.1297 12.3305 14.3531 12.5602 14.3719C12.6477 15.1969 13.1914 16.1734 13.4852 16.3266C13.4852 16.9156 13.507 17.3656 13.4477 18.0109C12.7477 19.8953 8.01953 19.3656 7.80078 23H23.0008C22.782 19.3656 18.0742 19.8953 17.3742 18.0109Z"
                    fill="#A5A1A1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1612_5069">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            Главный бухгалтер
          </div>
          <div>Андреева Кристина Сергеевна</div>
          <div>15.06.2023 14:12</div>
          <div className={styles.table_item_actions}>
            <div className={styles.table_item_actions_wrapper}>
              <span className={styles.table_item_actions_status}></span>Активен
            </div>
            <div onClick={() => handleClick("1")}>
              <svg
                className={styles.violet_icon}
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.70039 6.20001C1.70781 6.20001 0.900391 7.00743 0.900391 8.00001C0.900391 8.99259 1.70781 9.80001 2.70039 9.80001C3.69297 9.80001 4.50039 8.99259 4.50039 8.00001C4.50039 7.00743 3.69297 6.20001 2.70039 6.20001ZM7.50039 6.20001C6.50781 6.20001 5.70039 7.00743 5.70039 8.00001C5.70039 8.99259 6.50781 9.80001 7.50039 9.80001C8.49297 9.80001 9.30039 8.99259 9.30039 8.00001C9.30039 7.00743 8.49297 6.20001 7.50039 6.20001ZM12.3004 6.20001C11.3078 6.20001 10.5004 7.00743 10.5004 8.00001C10.5004 8.99259 11.3078 9.80001 12.3004 9.80001C13.293 9.80001 14.1004 8.99259 14.1004 8.00001C14.1004 7.00743 13.293 6.20001 12.3004 6.20001Z"
                  fill="#A5A1A1"
                />
              </svg>
            </div>
          </div>
        </div>
        {activeEmp != "empty" && activeEmp == "1" && (
          <div className={styles.table_item_modal}>
            <div className={styles.table_item_modal_left}>
              <div className={styles.table_item_modal_left_title}>
                Сотрудник
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  Должность
                </div>
                <div>Главный бухгалтер </div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  ФИО
                </div>
                <div>Андреева Кристина Сергеевна </div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  Телефон
                </div>
                <div>+ 998 00 000 00 00</div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  ПИНФЛ
                </div>
                <div>12345678911234</div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  Данные о последней авторизации
                </div>
                <div>
                  <p>X555 EA с ЭЦП</p>
                  <p className={styles.table_item_modal_left_item_gray}>
                    Tashkent, Uzbekistan
                  </p>
                </div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  Статус
                </div>
                <div className={styles.table_item_actions_wrapper}>
                  <span className={styles.table_item_actions_status}></span>
                  Активен
                </div>
              </div>
            </div>
            <div className={styles.table_item_modal_right}>
              <ButtonComponent
                type={"adaptive_gray"}
                height={"32px"}
                padding={"16px"}
              >
                <div
                  onClick={() => setModal(true)}
                  className={styles.table_item_modal_right_btn}
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
              >
                <div className={styles.table_item_modal_right_btn}>
                  Заблокировать
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.46077 6L6 6.46077L11.5392 12L6 17.5392L6.46077 18L12 12.4608L17.5392 18L18 17.5392L12.4608 12L18 6.46077L17.5392 6L12 11.5392L6.46077 6Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </ButtonComponent>
            </div>
          </div>
        )}
      </div>
      <div className={styles.table_item}>
        <div
          className={`${styles.table_item_main} ${
            activeEmp != "empty" &&
            activeEmp == "2" &&
            styles.table_item_main_active
          }`}
        >
          <div className={styles.table_item_name}>
            {activeEmp != "empty" && activeEmp == "2" ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1612_6583)">
                  <rect width="30" height="30" rx="15" fill="white" />
                  <path
                    d="M17.3742 18.011C17.3148 17.3657 17.3383 16.9157 17.3383 16.3267C17.6305 16.1735 18.1539 15.197 18.2414 14.372C18.4711 14.3532 18.8336 14.1298 18.9398 13.2454C18.9961 12.7704 18.7695 12.5032 18.6305 12.4188C19.0039 11.2954 19.7805 7.81885 17.1961 7.45947C16.9289 6.99229 16.2477 6.75635 15.3633 6.75635C11.8211 6.82197 11.3945 9.43135 12.1711 12.4188C12.032 12.5032 11.8055 12.7704 11.8617 13.2454C11.9695 14.1298 12.3305 14.3532 12.5602 14.372C12.6477 15.197 13.1914 16.1735 13.4852 16.3267C13.4852 16.9157 13.507 17.3657 13.4477 18.011C12.7477 19.8954 8.01953 19.3657 7.80078 23.0001H23.0008C22.782 19.3657 18.0742 19.8954 17.3742 18.011Z"
                    fill="#A5A1A1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1612_6583">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1612_5069)">
                  <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                  <path
                    d="M17.3742 18.0109C17.3148 17.3656 17.3383 16.9156 17.3383 16.3266C17.6305 16.1734 18.1539 15.1969 18.2414 14.3719C18.4711 14.3531 18.8336 14.1297 18.9398 13.2453C18.9961 12.7703 18.7695 12.5031 18.6305 12.4188C19.0039 11.2953 19.7805 7.81876 17.1961 7.45938C16.9289 6.99219 16.2477 6.75626 15.3633 6.75626C11.8211 6.82188 11.3945 9.43126 12.1711 12.4188C12.032 12.5031 11.8055 12.7703 11.8617 13.2453C11.9695 14.1297 12.3305 14.3531 12.5602 14.3719C12.6477 15.1969 13.1914 16.1734 13.4852 16.3266C13.4852 16.9156 13.507 17.3656 13.4477 18.0109C12.7477 19.8953 8.01953 19.3656 7.80078 23H23.0008C22.782 19.3656 18.0742 19.8953 17.3742 18.0109Z"
                    fill="#A5A1A1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1612_5069">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            Главный бухгалтер
          </div>
          <div>Андреева Кристина Сергеевна</div>
          <div>15.06.2023 14:12</div>
          <div className={styles.table_item_actions}>
            <div className={styles.table_item_actions_wrapper}>
              <span className={styles.table_item_actions_status_banned}></span>
              Заблокирован
            </div>
            <div onClick={() => handleClick("2")}>
              <svg
                className={styles.violet_icon}
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.70039 6.20001C1.70781 6.20001 0.900391 7.00743 0.900391 8.00001C0.900391 8.99259 1.70781 9.80001 2.70039 9.80001C3.69297 9.80001 4.50039 8.99259 4.50039 8.00001C4.50039 7.00743 3.69297 6.20001 2.70039 6.20001ZM7.50039 6.20001C6.50781 6.20001 5.70039 7.00743 5.70039 8.00001C5.70039 8.99259 6.50781 9.80001 7.50039 9.80001C8.49297 9.80001 9.30039 8.99259 9.30039 8.00001C9.30039 7.00743 8.49297 6.20001 7.50039 6.20001ZM12.3004 6.20001C11.3078 6.20001 10.5004 7.00743 10.5004 8.00001C10.5004 8.99259 11.3078 9.80001 12.3004 9.80001C13.293 9.80001 14.1004 8.99259 14.1004 8.00001C14.1004 7.00743 13.293 6.20001 12.3004 6.20001Z"
                  fill="#A5A1A1"
                />
              </svg>
            </div>
          </div>
        </div>
        {activeEmp != "empty" && activeEmp == "2" && (
          <div className={styles.table_item_modal}>
            <div className={styles.table_item_modal_left}>
              <div className={styles.table_item_modal_left_title}>
                Сотрудник
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  Должность
                </div>
                <div>Главный бухгалтер </div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  ФИО
                </div>
                <div>Андреева Кристина Сергеевна </div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  Телефон
                </div>
                <div>+ 998 00 000 00 00</div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  ПИНФЛ
                </div>
                <div>12345678911234</div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  Данные о последней авторизации
                </div>
                <div>
                  <p>X555 EA с ЭЦП</p>
                  <p className={styles.table_item_modal_left_item_gray}>
                    Tashkent, Uzbekistan
                  </p>
                </div>
              </div>
              <div className={styles.table_item_modal_left_item}>
                <div className={styles.table_item_modal_left_item_gray}>
                  Статус
                </div>
                <div className={styles.table_item_actions_wrapper}>
                  <span className={styles.table_item_actions_status}></span>
                  Активен
                </div>
              </div>
            </div>
            <div className={styles.table_item_modal_right}>
              <ButtonComponent
                type={"adaptive_gray"}
                height={"32px"}
                padding={"16px"}
              >
                <div
                  onClick={() => setModal(true)}
                  className={styles.table_item_modal_right_btn}
                >
                  Отменить блокировку
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.17672 1.11364C6.31172 1.13755 6.42 1.23598 6.45797 1.36676C6.49594 1.49895 6.45656 1.63958 6.35672 1.73239L3.04922 5.03989H8.64047C10.9256 5.03989 12.6455 5.61786 13.793 6.64864C14.9405 7.67942 15.4805 9.14614 15.4805 10.7999C15.4805 14.0272 13.9842 16.3911 13.9842 16.3911C13.9209 16.5107 13.7958 16.5852 13.6608 16.5838C13.5258 16.5824 13.4034 16.505 13.343 16.3827C13.2825 16.2618 13.2966 16.1169 13.3767 16.0086C13.3767 16.0086 14.7605 13.805 14.7605 10.7999C14.7605 9.30083 14.2908 8.07036 13.3092 7.18864C12.3277 6.30692 10.8033 5.75989 8.64047 5.75989H3.04922L6.35672 9.06739C6.46359 9.15458 6.51281 9.2938 6.48188 9.42879C6.45094 9.56239 6.34547 9.66786 6.21187 9.6988C6.07688 9.72973 5.93766 9.68051 5.85047 9.57364L1.92422 5.65864L1.67672 5.39989L1.92422 5.14114L5.85047 1.22614C5.925 1.14598 6.03328 1.1052 6.14297 1.11364C6.15422 1.11364 6.16547 1.11364 6.17672 1.11364Z"
                      fill="#1D1515"
                    />
                  </svg>
                </div>
              </ButtonComponent>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
