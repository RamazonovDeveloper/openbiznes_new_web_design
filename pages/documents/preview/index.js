import React from "react";
import BlankLayout from "../../../layouts/BlankLayout";
import styles from "./documentPrewiev.module.css";
import ButtonComponent from "../../../components/buttonComponent";
import SaveToggleButton from "../../../components/saveToggleBtnComponent";

export default function DocumentPreviewPage() {
  return (
    <div className={styles.preview}>
      <div className={styles.preview_actions}>
        <ButtonComponent
          type={"adaptive"}
          fontSize={"12px"}
          padding={"32px"}
          height={"32px"}
        >
          ButtonComponent
        </ButtonComponent>
        <ButtonComponent
          type={"adaptive_gray"}
          fontSize={"12px"}
          padding={"16px"}
          height={"32px"}
        >
          <div className={styles.preview_actions_gray}>
            Отклонить
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
        <SaveToggleButton />
        <ButtonComponent
          type={"adaptive_gray"}
          fontSize={"12px"}
          padding={"16px"}
          height={"32px"}
        >
          Печать
        </ButtonComponent>
        <div>
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
      </div>
      <div className={styles.preview_main}>
        <iframe
          src="https://www.africau.edu/images/default/sample.pdf"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

DocumentPreviewPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
