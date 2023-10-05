import React from "react";
import styles from "./employeesHeader.module.css";
import ButtonComponent from "../../../components/buttonComponent";

export default function EmployeesHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.header_input}>
        <input type="text" placeholder="Поиск сотрудника" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0799 1.44C5.57805 1.44 1.91992 5.09813 1.91992 9.6C1.91992 14.1019 5.57805 17.76 10.0799 17.76C11.8612 17.76 13.5074 17.1863 14.8499 16.215L21.1649 22.515L22.5149 21.165L16.2749 14.91C17.5012 13.4813 18.2399 11.6269 18.2399 9.6C18.2399 5.09813 14.5818 1.44 10.0799 1.44ZM10.0799 2.4C14.0624 2.4 17.2799 5.6175 17.2799 9.6C17.2799 13.5825 14.0624 16.8 10.0799 16.8C6.09742 16.8 2.87992 13.5825 2.87992 9.6C2.87992 5.6175 6.09742 2.4 10.0799 2.4Z"
            fill="#342C2C"
          />
        </svg>
      </div>
      <ButtonComponent type={'adaptive'} padding={'27px'}>
        <div className={styles.header_btn}>
          Добавить сотрудника
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5203 4.32001V11.52H4.32031V12.48H11.5203V19.68H12.4803V12.48H19.6803V11.52H12.4803V4.32001H11.5203Z"
              fill="white"
            />
          </svg>
        </div>
      </ButtonComponent>
    </div>
  );
}
