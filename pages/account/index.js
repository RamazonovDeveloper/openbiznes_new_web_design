import React from "react";
import InputComponent from "../../components/inputComponent";
import CardComponent from "../../components/cardComponent";
import ButtonComponent from "../../components/buttonComponent";
import styles from "./account.module.css";

export default function index() {
  return (
    <div className={styles.account}>
      <CardComponent>
        <div className={styles.account_header}></div>

        <ButtonComponent type={"my_standart_btn"}>
          <div className={styles }>
            Добавить счет
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0203 4.32001V11.52H4.82031V12.48H12.0203V19.68H12.9803V12.48H20.1803V11.52H12.9803V4.32001H12.0203Z"
                fill="white"
              />
            </svg>
          </div>
        </ButtonComponent>
      </CardComponent>
    </div>
  );
}
