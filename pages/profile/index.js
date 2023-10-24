import React, { useState } from "react";
import styles from "./profile.module.css";
import CardComponent from "../../components/cardComponent";
import ButtonComponent from "../../components/buttonComponent";
import MainModalComponent from "../../components/mainModal";
import InputComponent from "../../components/inputComponent";

export default function Profile() {
  const [edit, setEdit] = useState(false);

  const [remove, setRemove] = useState(false);

  function closeModal() {
    setEdit(false);
  }

  function closeRemoveModal() {
    setRemove(false);
  }

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

  const closeModalProps = () => {
    return (
      <div>
        <div className={styles.edit_modal_remove}>
          <p className={styles.edit_modal_remove_title}>Вы точно хотите завершить этот сеанс?</p>
        </div>
        <div className={styles.edit_btns}>
          <ButtonComponent
            type={"adaptive_gray"}
            height={"32px"}
            padding={"23px"}
            handleClick={closeRemoveModal}
          >
            <p className={styles.edit_btns_btn}>Отмента</p>
          </ButtonComponent>
          <ButtonComponent type={"adaptive"} height={"32px"} padding={"23px"}>
            <p className={styles.edit_btns_btn}>Завершить</p>
          </ButtonComponent>
        </div>
      </div>
    );
  };

  console.log(edit);

  return (
    <div className={styles.profile}>
      {edit && (
        <MainModalComponent
          title={"Редактировать персональные данные"}
          closeModalFunction={closeModal}
        >
          {modalProps()}
        </MainModalComponent>
      )}

      {remove && (
        <MainModalComponent
          title={"Завершить сеанс"}
          closeModalFunction={closeRemoveModal}
        >
          {closeModalProps()}
        </MainModalComponent>
      )}

      <div className={styles.profile_cards}>
        <div className={styles.profile_cards_left}>
          <CardComponent>
            <div className={styles.profile_cards_left_btns}>
              <h4 className={styles.profile_cards_left_black}>
                Персональные данные
              </h4>
              <ButtonComponent
                type={"adaptive_gray"}
                height={"32px"}
                padding={"16px"}
                handleClick={() => setEdit(true)}
              >
                <div className={styles.profile_cards_left_btns_btn}>
                  <p>Редактировать</p>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4456 1.04625C15.0659 1.04625 14.6862 1.18687 14.3993 1.47375L14.0956 1.76625C14.0224 1.72828 13.9395 1.71703 13.8593 1.7325C13.7904 1.74797 13.7285 1.78312 13.6793 1.83375L2.37307 13.14C2.33791 13.1752 2.31119 13.2173 2.29432 13.2638L1.10182 16.4362C1.054 16.567 1.08635 16.7147 1.18619 16.8131C1.28463 16.913 1.43228 16.9453 1.56307 16.8975L4.73557 15.705C4.78197 15.6881 4.82416 15.6614 4.85932 15.6263L16.1656 4.32C16.2865 4.19484 16.302 4.00078 16.1993 3.85875L16.4918 3.56625C17.0656 2.9925 17.0656 2.0475 16.4918 1.47375C16.2049 1.18687 15.8253 1.04625 15.4456 1.04625ZM15.4456 1.76625C15.6424 1.76625 15.8407 1.83516 15.9856 1.98C16.2767 2.27109 16.2767 2.76891 15.9856 3.06L15.7043 3.3525L14.6243 2.2725L14.9056 1.98C15.0504 1.83516 15.2487 1.76625 15.4456 1.76625ZM13.9268 2.5875L15.4118 4.0725L14.4218 5.05125L12.9481 3.5775L13.9268 2.5875ZM12.4306 4.08375L13.9156 5.56875L4.58932 14.8837L4.31932 14.6025V14.04C4.31932 13.8417 4.1576 13.68 3.95932 13.68H3.39682L3.11557 13.41L12.4306 4.08375ZM2.75557 14.0737L2.98057 14.2987C3.04947 14.3663 3.14369 14.4028 3.23932 14.4H3.59932V14.76C3.5965 14.8556 3.63307 14.9498 3.70057 15.0188L3.92557 15.2437L2.55307 15.7612L2.23807 15.4462L2.75557 14.0737Z"
                      fill="#342C2C"
                    />
                  </svg>
                </div>
              </ButtonComponent>
            </div>

            <div className={styles.profile_cards_left_data}>
              <div className={styles.profile_cards_left_data_item}>
                <h3 className={styles.profile_cards_left_gray}> Должность </h3>
                <p className={styles.profile_cards_left_black}>
                  Генеральный директор
                </p>
              </div>
              <div className={styles.profile_cards_left_data_item}>
                <h3 className={styles.profile_cards_left_gray}> ФИО </h3>
                <p className={styles.profile_cards_left_black}>
                  Анна Никитична Киселева
                </p>
              </div>
              <div className={styles.profile_cards_left_data_item}>
                <h3 className={styles.profile_cards_left_gray}> Телефон </h3>
                <p className={styles.profile_cards_left_black}>
                  +998 00 000 00 00
                </p>
              </div>
              <div className={styles.profile_cards_left_data_item}>
                <h3 className={styles.profile_cards_left_gray}> Должность </h3>
                <p className={styles.profile_cards_left_black}>Генеральный</p>
              </div>
              <div className={styles.profile_cards_left_data_item}>
                <h3 className={styles.profile_cards_left_gray}> ПИНФЛ </h3>
                <p className={styles.profile_cards_left_black}>
                  12345678911234
                </p>
              </div>
              <div className={styles.profile_cards_left_data_item}>
                <h3 className={styles.profile_cards_left_gray}> Компания </h3>
                <p className={styles.profile_cards_left_black}>
                  ООО “FUTURE OPEN TECHNOLOGY GROUP”
                </p>
              </div>
            </div>
          </CardComponent>
        </div>

        <div className={styles.profile_cards_right}>
          <CardComponent>
            <div className={styles.profile_cards_left_btns}>
              <h4 className={styles.profile_cards_left_black}>Настройки</h4>
            </div>
            <div className={styles.profile_cards_left_data}>
              <div className={styles.profile_cards_left_data_item}>
                <h3 className={styles.profile_cards_left_gray}> Язык </h3>
                <div className={styles.profile_cards_right_lang}>
                  <label className={styles.profile_cards_right_label}>
                    <input name="language" type="radio" />
                    Русский
                  </label>
                  <label className={styles.profile_cards_right_label}>
                    <input name="language" type="radio" />
                    O&apos;zbek
                  </label>
                </div>
              </div>
              <div className={styles.profile_cards_left_data_item}>
                <h3 className={styles.profile_cards_left_gray}>
                  Пуш уведомления
                </h3>
                <div className={styles.profile_cards_left_data_item_sms}>
                  <label className={styles.profile_cards_right_label}>
                    <input name="language" type="checkbox" />О снятии средств
                  </label>
                  <label className={styles.profile_cards_right_label}>
                    <input name="language" type="checkbox" />О переводе средств
                  </label>
                  <label className={styles.profile_cards_right_label}>
                    <input name="language" type="checkbox" />О пополнении
                  </label>
                  <label
                    className={`${styles.profile_cards_right_label} ${styles.profile_cards_right_label_last}`}
                  >
                    <input name="language" type="checkbox" />
                    Об авторизации на другом устройстве
                  </label>
                </div>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
      <div className={styles.profile_table}>
        <CardComponent>
          <div className={styles.profile_table_title}>Активные сеансы</div>
          <div className={styles.profile_table_data}>
            <div className={styles.profile_table_header}>
              <div>Устройство</div>
              <div>Локация</div>
              <div>Дата</div>
            </div>
            <div className={styles.profile_table_item}>
              <div className={styles.profile_table_item_name}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1568_16709)">
                    <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                    <g clipPath="url(#clip1_1568_16709)">
                      <path
                        d="M11.5125 5.01248C11.4609 5.02186 11.4078 5.03123 11.3625 5.06248C11.1797 5.18592 11.1391 5.44217 11.2625 5.62498L12.125 6.91248C10.7922 7.61873 9.79844 8.79217 9.475 10.2H20.525C20.2016 8.79217 19.2078 7.61873 17.875 6.91248L18.7375 5.62498C18.8609 5.44217 18.8203 5.18592 18.6375 5.06248C18.4531 4.93905 18.1984 4.99217 18.075 5.17498L17.125 6.57498C16.4656 6.33436 15.75 6.19998 15 6.19998C14.25 6.19998 13.5344 6.33436 12.875 6.57498L11.925 5.17498C11.8328 5.03748 11.6656 4.9828 11.5125 5.01248ZM12.8 8.19998C13.1312 8.19998 13.4 8.46873 13.4 8.79998C13.4 9.1328 13.1312 9.39998 12.8 9.39998C12.4672 9.39998 12.2 9.1328 12.2 8.79998C12.2 8.46873 12.4672 8.19998 12.8 8.19998ZM17.2 8.19998C17.5328 8.19998 17.8 8.46873 17.8 8.79998C17.8 9.1328 17.5328 9.39998 17.2 9.39998C16.8688 9.39998 16.6 9.1328 16.6 8.79998C16.6 8.46873 16.8688 8.19998 17.2 8.19998ZM8.2 11C7.5375 11 7 11.5375 7 12.2V17.8C7 18.4625 7.5375 19 8.2 19C8.34063 19 8.475 18.9703 8.6 18.925V11.075C8.475 11.0297 8.34063 11 8.2 11ZM9.4 11V19.8C9.4 20.4609 9.93906 21 10.6 21H19.4C20.0609 21 20.6 20.4609 20.6 19.8V11H9.4ZM21.8 11C21.6594 11 21.525 11.0297 21.4 11.075V18.925C21.525 18.9687 21.6594 19 21.8 19C22.4625 19 23 18.4625 23 17.8V12.2C23 11.5375 22.4625 11 21.8 11ZM11 21.8V23.4C11 24.2828 11.7172 25 12.6 25C13.4828 25 14.2 24.2828 14.2 23.4V21.8H11ZM15.8 21.8V23.4C15.8 24.2828 16.5172 25 17.4 25C18.2828 25 19 24.2828 19 23.4V21.8H15.8Z"
                        fill="#A5A1A1"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_16709">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1568_16709">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(5 5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                X555EA
              </div>
              <div>Tashkent, Uzbekistan</div>
              <div className={styles.profile_table_item_date}>
                <div className={styles.profile_table_item_date_nums}>
                  <h3>05.06.23</h3>
                  <span></span>
                  <p>14:44</p>
                </div>
                <div onClick={() => setRemove(true)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.46077 6L6 6.46077L11.5392 12L6 17.5392L6.46077 18L12 12.4608L17.5392 18L18 17.5392L12.4608 12L18 6.46077L17.5392 6L12 11.5392L6.46077 6Z"
                      fill="#342C2C"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.profile_table_item}>
              <div className={styles.profile_table_item_name}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1568_16709)">
                    <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                    <g clipPath="url(#clip1_1568_16709)">
                      <path
                        d="M11.5125 5.01248C11.4609 5.02186 11.4078 5.03123 11.3625 5.06248C11.1797 5.18592 11.1391 5.44217 11.2625 5.62498L12.125 6.91248C10.7922 7.61873 9.79844 8.79217 9.475 10.2H20.525C20.2016 8.79217 19.2078 7.61873 17.875 6.91248L18.7375 5.62498C18.8609 5.44217 18.8203 5.18592 18.6375 5.06248C18.4531 4.93905 18.1984 4.99217 18.075 5.17498L17.125 6.57498C16.4656 6.33436 15.75 6.19998 15 6.19998C14.25 6.19998 13.5344 6.33436 12.875 6.57498L11.925 5.17498C11.8328 5.03748 11.6656 4.9828 11.5125 5.01248ZM12.8 8.19998C13.1312 8.19998 13.4 8.46873 13.4 8.79998C13.4 9.1328 13.1312 9.39998 12.8 9.39998C12.4672 9.39998 12.2 9.1328 12.2 8.79998C12.2 8.46873 12.4672 8.19998 12.8 8.19998ZM17.2 8.19998C17.5328 8.19998 17.8 8.46873 17.8 8.79998C17.8 9.1328 17.5328 9.39998 17.2 9.39998C16.8688 9.39998 16.6 9.1328 16.6 8.79998C16.6 8.46873 16.8688 8.19998 17.2 8.19998ZM8.2 11C7.5375 11 7 11.5375 7 12.2V17.8C7 18.4625 7.5375 19 8.2 19C8.34063 19 8.475 18.9703 8.6 18.925V11.075C8.475 11.0297 8.34063 11 8.2 11ZM9.4 11V19.8C9.4 20.4609 9.93906 21 10.6 21H19.4C20.0609 21 20.6 20.4609 20.6 19.8V11H9.4ZM21.8 11C21.6594 11 21.525 11.0297 21.4 11.075V18.925C21.525 18.9687 21.6594 19 21.8 19C22.4625 19 23 18.4625 23 17.8V12.2C23 11.5375 22.4625 11 21.8 11ZM11 21.8V23.4C11 24.2828 11.7172 25 12.6 25C13.4828 25 14.2 24.2828 14.2 23.4V21.8H11ZM15.8 21.8V23.4C15.8 24.2828 16.5172 25 17.4 25C18.2828 25 19 24.2828 19 23.4V21.8H15.8Z"
                        fill="#A5A1A1"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_16709">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1568_16709">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(5 5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                X555EA
              </div>
              <div>Tashkent, Uzbekistan</div>
              <div className={styles.profile_table_item_date}>
                <div className={styles.profile_table_item_date_nums}>
                  <h3>05.06.23</h3>
                  <span></span>
                  <p>14:44</p>
                </div>
                <div onClick={() => setRemove(true)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.46077 6L6 6.46077L11.5392 12L6 17.5392L6.46077 18L12 12.4608L17.5392 18L18 17.5392L12.4608 12L18 6.46077L17.5392 6L12 11.5392L6.46077 6Z"
                      fill="#342C2C"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.profile_table_item}>
              <div className={styles.profile_table_item_name}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1568_16709)">
                    <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                    <g clipPath="url(#clip1_1568_16709)">
                      <path
                        d="M11.5125 5.01248C11.4609 5.02186 11.4078 5.03123 11.3625 5.06248C11.1797 5.18592 11.1391 5.44217 11.2625 5.62498L12.125 6.91248C10.7922 7.61873 9.79844 8.79217 9.475 10.2H20.525C20.2016 8.79217 19.2078 7.61873 17.875 6.91248L18.7375 5.62498C18.8609 5.44217 18.8203 5.18592 18.6375 5.06248C18.4531 4.93905 18.1984 4.99217 18.075 5.17498L17.125 6.57498C16.4656 6.33436 15.75 6.19998 15 6.19998C14.25 6.19998 13.5344 6.33436 12.875 6.57498L11.925 5.17498C11.8328 5.03748 11.6656 4.9828 11.5125 5.01248ZM12.8 8.19998C13.1312 8.19998 13.4 8.46873 13.4 8.79998C13.4 9.1328 13.1312 9.39998 12.8 9.39998C12.4672 9.39998 12.2 9.1328 12.2 8.79998C12.2 8.46873 12.4672 8.19998 12.8 8.19998ZM17.2 8.19998C17.5328 8.19998 17.8 8.46873 17.8 8.79998C17.8 9.1328 17.5328 9.39998 17.2 9.39998C16.8688 9.39998 16.6 9.1328 16.6 8.79998C16.6 8.46873 16.8688 8.19998 17.2 8.19998ZM8.2 11C7.5375 11 7 11.5375 7 12.2V17.8C7 18.4625 7.5375 19 8.2 19C8.34063 19 8.475 18.9703 8.6 18.925V11.075C8.475 11.0297 8.34063 11 8.2 11ZM9.4 11V19.8C9.4 20.4609 9.93906 21 10.6 21H19.4C20.0609 21 20.6 20.4609 20.6 19.8V11H9.4ZM21.8 11C21.6594 11 21.525 11.0297 21.4 11.075V18.925C21.525 18.9687 21.6594 19 21.8 19C22.4625 19 23 18.4625 23 17.8V12.2C23 11.5375 22.4625 11 21.8 11ZM11 21.8V23.4C11 24.2828 11.7172 25 12.6 25C13.4828 25 14.2 24.2828 14.2 23.4V21.8H11ZM15.8 21.8V23.4C15.8 24.2828 16.5172 25 17.4 25C18.2828 25 19 24.2828 19 23.4V21.8H15.8Z"
                        fill="#A5A1A1"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_16709">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1568_16709">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(5 5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                X555EA
              </div>
              <div>Tashkent, Uzbekistan</div>
              <div className={styles.profile_table_item_date}>
                <div className={styles.profile_table_item_date_nums}>
                  <h3>05.06.23</h3>
                  <span></span>
                  <p>14:44</p>
                </div>
                <div onClick={() => setRemove(true)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.46077 6L6 6.46077L11.5392 12L6 17.5392L6.46077 18L12 12.4608L17.5392 18L18 17.5392L12.4608 12L18 6.46077L17.5392 6L12 11.5392L6.46077 6Z"
                      fill="#342C2C"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.profile_table_item}>
              <div className={styles.profile_table_item_name}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1568_16709)">
                    <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                    <g clipPath="url(#clip1_1568_16709)">
                      <path
                        d="M11.5125 5.01248C11.4609 5.02186 11.4078 5.03123 11.3625 5.06248C11.1797 5.18592 11.1391 5.44217 11.2625 5.62498L12.125 6.91248C10.7922 7.61873 9.79844 8.79217 9.475 10.2H20.525C20.2016 8.79217 19.2078 7.61873 17.875 6.91248L18.7375 5.62498C18.8609 5.44217 18.8203 5.18592 18.6375 5.06248C18.4531 4.93905 18.1984 4.99217 18.075 5.17498L17.125 6.57498C16.4656 6.33436 15.75 6.19998 15 6.19998C14.25 6.19998 13.5344 6.33436 12.875 6.57498L11.925 5.17498C11.8328 5.03748 11.6656 4.9828 11.5125 5.01248ZM12.8 8.19998C13.1312 8.19998 13.4 8.46873 13.4 8.79998C13.4 9.1328 13.1312 9.39998 12.8 9.39998C12.4672 9.39998 12.2 9.1328 12.2 8.79998C12.2 8.46873 12.4672 8.19998 12.8 8.19998ZM17.2 8.19998C17.5328 8.19998 17.8 8.46873 17.8 8.79998C17.8 9.1328 17.5328 9.39998 17.2 9.39998C16.8688 9.39998 16.6 9.1328 16.6 8.79998C16.6 8.46873 16.8688 8.19998 17.2 8.19998ZM8.2 11C7.5375 11 7 11.5375 7 12.2V17.8C7 18.4625 7.5375 19 8.2 19C8.34063 19 8.475 18.9703 8.6 18.925V11.075C8.475 11.0297 8.34063 11 8.2 11ZM9.4 11V19.8C9.4 20.4609 9.93906 21 10.6 21H19.4C20.0609 21 20.6 20.4609 20.6 19.8V11H9.4ZM21.8 11C21.6594 11 21.525 11.0297 21.4 11.075V18.925C21.525 18.9687 21.6594 19 21.8 19C22.4625 19 23 18.4625 23 17.8V12.2C23 11.5375 22.4625 11 21.8 11ZM11 21.8V23.4C11 24.2828 11.7172 25 12.6 25C13.4828 25 14.2 24.2828 14.2 23.4V21.8H11ZM15.8 21.8V23.4C15.8 24.2828 16.5172 25 17.4 25C18.2828 25 19 24.2828 19 23.4V21.8H15.8Z"
                        fill="#A5A1A1"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_16709">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1568_16709">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(5 5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                X555EA
              </div>
              <div>Tashkent, Uzbekistan</div>
              <div className={styles.profile_table_item_date}>
                <div className={styles.profile_table_item_date_nums}>
                  <h3>05.06.23</h3>
                  <span></span>
                  <p>14:44</p>
                </div>
                <div onClick={() => setRemove(true)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.46077 6L6 6.46077L11.5392 12L6 17.5392L6.46077 18L12 12.4608L17.5392 18L18 17.5392L12.4608 12L18 6.46077L17.5392 6L12 11.5392L6.46077 6Z"
                      fill="#342C2C"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.profile_table_item}>
              <div className={styles.profile_table_item_name}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1568_16709)">
                    <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                    <g clipPath="url(#clip1_1568_16709)">
                      <path
                        d="M11.5125 5.01248C11.4609 5.02186 11.4078 5.03123 11.3625 5.06248C11.1797 5.18592 11.1391 5.44217 11.2625 5.62498L12.125 6.91248C10.7922 7.61873 9.79844 8.79217 9.475 10.2H20.525C20.2016 8.79217 19.2078 7.61873 17.875 6.91248L18.7375 5.62498C18.8609 5.44217 18.8203 5.18592 18.6375 5.06248C18.4531 4.93905 18.1984 4.99217 18.075 5.17498L17.125 6.57498C16.4656 6.33436 15.75 6.19998 15 6.19998C14.25 6.19998 13.5344 6.33436 12.875 6.57498L11.925 5.17498C11.8328 5.03748 11.6656 4.9828 11.5125 5.01248ZM12.8 8.19998C13.1312 8.19998 13.4 8.46873 13.4 8.79998C13.4 9.1328 13.1312 9.39998 12.8 9.39998C12.4672 9.39998 12.2 9.1328 12.2 8.79998C12.2 8.46873 12.4672 8.19998 12.8 8.19998ZM17.2 8.19998C17.5328 8.19998 17.8 8.46873 17.8 8.79998C17.8 9.1328 17.5328 9.39998 17.2 9.39998C16.8688 9.39998 16.6 9.1328 16.6 8.79998C16.6 8.46873 16.8688 8.19998 17.2 8.19998ZM8.2 11C7.5375 11 7 11.5375 7 12.2V17.8C7 18.4625 7.5375 19 8.2 19C8.34063 19 8.475 18.9703 8.6 18.925V11.075C8.475 11.0297 8.34063 11 8.2 11ZM9.4 11V19.8C9.4 20.4609 9.93906 21 10.6 21H19.4C20.0609 21 20.6 20.4609 20.6 19.8V11H9.4ZM21.8 11C21.6594 11 21.525 11.0297 21.4 11.075V18.925C21.525 18.9687 21.6594 19 21.8 19C22.4625 19 23 18.4625 23 17.8V12.2C23 11.5375 22.4625 11 21.8 11ZM11 21.8V23.4C11 24.2828 11.7172 25 12.6 25C13.4828 25 14.2 24.2828 14.2 23.4V21.8H11ZM15.8 21.8V23.4C15.8 24.2828 16.5172 25 17.4 25C18.2828 25 19 24.2828 19 23.4V21.8H15.8Z"
                        fill="#A5A1A1"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1568_16709">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1568_16709">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(5 5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                X555EA
              </div>
              <div>Tashkent, Uzbekistan</div>
              <div className={styles.profile_table_item_date}>
                <div className={styles.profile_table_item_date_nums}>
                  <h3>05.06.23</h3>
                  <span></span>
                  <p>14:44</p>
                </div>
                <div onClick={() => setRemove(true)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.46077 6L6 6.46077L11.5392 12L6 17.5392L6.46077 18L12 12.4608L17.5392 18L18 17.5392L12.4608 12L18 6.46077L17.5392 6L12 11.5392L6.46077 6Z"
                      fill="#342C2C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
}
