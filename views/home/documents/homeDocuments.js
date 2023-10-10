import React from "react";
import styles from "./documents.module.css";
import CardComponent from "../../../components/cardComponent";

export default function HomeDocuments() {
  return (
    <div className={styles.home_main_documents}>
      <h2 className={styles.home_main_account_title}>Документы</h2>
      <div className={styles.home_main_account_items}>
        <div className={styles.home_main_account_items_item}>
          <div>
            <h3>Договор страхования </h3>
            <p>АКБ “Агробанк”</p>
            <p>Договор №1 от 15.09.2023 </p>
          </div>
          <h4 className={styles.home_main_account_items_item_documents_status}>
            Ожидает подписания
          </h4>
        </div>
        <div className={styles.home_main_account_items_item}>
          <div>
            <h3>Договор страхования </h3>
            <p>АКБ “Агробанк”</p>
            <p>Договор №1 от 15.09.2023 </p>
          </div>
          <h4 className={styles.home_main_account_items_item_documents_status}>
            Ожидает подписания
          </h4>
        </div>
      </div>
    </div>
  );
}
