import ButtonComponent from "../buttonComponent";
import MainModalComponent from "../mainModal";
import styles from "./defaultModal.module.css";

export default function DefaultModalComponent({ success, closeModalFunction }) {
  return (
    <div>
      <MainModalComponent title={"Уведомление о платеже"} closeModalFunction={closeModalFunction}>
        {success ? (
          <div className={styles.successful}>
            <div className={styles.successful_text}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="39.5" stroke="#4E0F8A" />
                <circle cx="40.0007" cy="40" r="28.2927" fill="#EDE7F3" />
                <path
                  d="M30.8945 39.9999L37.3986 46.504L50.4067 33.4958"
                  stroke="#4E0F8A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Платеж успешно создан</p>
            </div>
            <div className={styles.successful_btn}>
              <ButtonComponent type={"adaptive_gray"} padding={"47px"} handleClick={closeModalFunction}>
                <div className={styles.btn_text}>
                  Ok
                </div>
              </ButtonComponent>
            </div>
          </div>
        ) : (
          <div className={styles.successful}>
            <div className={styles.successful_text}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="39.5" stroke="#D2D0D0" />
                <path
                  d="M51.0348 28.9658L28.9658 51.0348"
                  stroke="#D23232"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.9658 28.9658L51.0348 51.0348"
                  stroke="#D23232"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Текст описания ошибки, что пошло не так, подсказка для решения</p>
            </div>
            <div className={styles.successful_btn}>
              <ButtonComponent type={"mini"} handleClick={closeModalFunction}>
              <div className={styles.btn_text}>Повторить</div>
              </ButtonComponent>
            </div>
          </div>
        )}
      </MainModalComponent>
    </div>
  );
}
