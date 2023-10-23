import styles from "./etsp.module.css";
import BlankLayout from "../../../layouts/BlankLayout";
import SelectETSPInput from "../../../components/selectETSPInput/selectEtspSelect";
import AuthLeftComponent from "../../../components/authLeftComponent/authLeftComponent";

export default function LoginWithETSPPage() {
  return (
    <div className={styles.login}>
      <div className={styles.login_left}>
        <AuthLeftComponent />
      </div>
      <div className={styles.login_right}>
        <div className={styles.login_right_top}>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_28_21396)">
                <rect width="32" height="32" rx="16" fill="#F93939" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-4.26672 23.4667H40.5333V32H-4.26672V23.4667Z"
                  fill="#00B731"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-4.26672 0H40.5333V8.53333H-4.26672V0Z"
                  fill="#03BCDB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 10.6667H44.8V21.3333H0V10.6667ZM10.6667 8.352C10.3339 8.46934 9.97333 8.53334 9.6 8.53334C7.8336 8.53334 6.4 7.09974 6.4 5.33334C6.4 3.56694 7.8336 2.13334 9.6 2.13334C9.97333 2.13334 10.3339 2.19734 10.6667 2.31467C9.42293 2.75414 8.53333 3.94027 8.53333 5.33334C8.53333 6.7264 9.42293 7.91467 10.6667 8.352Z"
                  fill="white"
                />
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8 4.26667H14.9334V6.4H12.8V4.26667ZM14.9334 2.13334H17.0667V4.26667H14.9334V2.13334ZM17.0667 4.26667H19.2V6.4H17.0667V4.26667ZM19.2 2.13334H21.3334V4.26667H19.2V2.13334ZM21.3334 4.26667H23.4667V6.4H21.3334V4.26667ZM19.2 6.4H21.3334V8.53334H19.2V6.4ZM14.9334 6.4H17.0667V8.53334H14.9334V6.4Z"
                  fill="white"
                />
                <rect
                  y="10.6667"
                  width="10.6667"
                  height="10.6667"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_21396">
                  <rect width="32" height="32" rx="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>O&apos;zbek</p>
          </div>
        </div>
        <div className={styles.login_right_middle}>
          <h4>Пожалуйста, выберите ЭЦП</h4>
          <div>
            <SelectETSPInput />
          </div>
          <div className={styles.register_middle_btns}>
            <button>Продолжить</button>
          </div>
        </div>
        <div className={styles.login_right_bottom}>
          <p>+998 00 000 00 00 </p>
          <p>openbank.uz</p>
        </div>
      </div>
    </div>
  );
}

LoginWithETSPPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
