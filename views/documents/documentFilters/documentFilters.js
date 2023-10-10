import React from "react";
import styles from "./documentFilters.module.css";
import SelectComponent from "../../../components/selectComponent";

export default function DocumentFilters() {
  return (
    <div className={styles.filters}>
      <SelectComponent>
        <div
          className={styles.select_modal_item}
        >
          Все 
        </div>
        <div
          className={styles.select_modal_item}
        >
          Ожидающие подписания (6)
        </div>
        <div
          className={styles.select_modal_item}
        >
          Платежные документы 
        </div>
        <div
          className={styles.select_modal_item}
        >
          Кредитные договоры 
        </div>
        <div
          className={styles.select_modal_item}
        >
          Договоры страхования 
        </div>
      </SelectComponent>
    </div>
  );
}
