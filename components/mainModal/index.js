import styles from "./mainModal.module.css";

const modalStyle = {
  background: "rgba(29, 21, 21, 0.35)",
  position: "absolute",
  bottom: -70,
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalCardStyle = {
  background: "rgba(255, 255, 255, 1)",
  width: "606px",
};

export default function MainModalComponent({
  title,
  children,
  closeModalFunction,
}) {
  // const { message , success, closeDialog } = props

  console.log(children);

  return (
    <div className={styles.modal}>
      <div className={styles.modal_card}>
        <div className={styles.modal_card_header}>
          <p>{title}</p>
          <svg
            onClick={closeModalFunction}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.96077 6L6.5 6.46077L12.0392 12L6.5 17.5392L6.96077 18L12.5 12.4608L18.0392 18L18.5 17.5392L12.9608 12L18.5 6.46077L18.0392 6L12.5 11.5392L6.96077 6Z"
              fill="black"
            />
          </svg>
        </div>
        <div className={styles.modal_card_body}>{children}</div>
      </div>
    </div>
  );
}
