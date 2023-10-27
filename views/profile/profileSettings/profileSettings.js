import React from "react";
import CardComponent from "../../../components/cardComponent";
import styles from './profileSettings.module.css'

export default function ProfileSettings() {
  return (
    <CardComponent>
      <div className={styles.profile_cards_right_btns}>
        <h4 className={styles.profile_cards_left_black} style={{padding:'5px 0'}}>Настройки</h4>
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
          <h3 className={styles.profile_cards_left_gray}>Пуш уведомления</h3>
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
  );
}
