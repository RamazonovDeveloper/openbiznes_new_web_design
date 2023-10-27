import React, { useState } from "react";
import styles from "./profile.module.css";
import CardComponent from "../../components/cardComponent";
import ButtonComponent from "../../components/buttonComponent";
import MainModalComponent from "../../components/mainModal";
import InputComponent from "../../components/inputComponent";
import ProfilePersonalData from "../../views/profile/profilePersonalData/profilePersonalData";
import ProfileSettings from "../../views/profile/profileSettings/profileSettings";
import ProfileTable from "../../views/profile/profileTable/profileTable";

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
          <ProfilePersonalData setEdit={setEdit}/>
        </div>

        <div className={styles.profile_cards_right}>
          <ProfileSettings />
        </div>
      </div>
      <div className={styles.profile_table}>
        <ProfileTable setRemove={setRemove}/>
      </div>
    </div>
  );
}
