import { useEffect, useState } from "react";
import InputDivComponent from "../../../components/inputDivComponent";
import { useAuth } from "../../../hooks/useAuth";
import BlankLayout from "../../../layouts/BlankLayout";
import styles from "./login.module.css";
import { useRouter } from "next/router";
import AuthLeftComponent from "../../../components/authLeftComponent/authLeftComponent";

export default function LoginPage() {
  const auth = useAuth();

  const [comp, setComp] = useState("message");

  const router = useRouter();

  const [seconds, setSeconds] = useState(59);

  useEffect(() => {

    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000)

  }, [seconds]);


  const handleClick = () => {
    localStorage.setItem(
      "companyInfo",
      '{"name":"FUTURE OPEN TECHNOLOGY GROUP MCHJ","owner_phone":"+998946914977","inn":"306687969","slug":"future-open-technology-group-mchj","created_at":"2023-08-30T04:31:37.000000Z","companyTin":"306687969"}'
    );
    localStorage.setItem(
      "access_token",
      '"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmZjZmY4YjFhOTdmYjczOWFkYzhhNmVkMWU4NWM1NmFhMDdhOTQzNmU4NmU3ZmQyNGI1NTRhNTYyNGM1Yzk0M2RhNDY2ODA0NTg0YzNkYzQiLCJpYXQiOjE2OTQwODUzNjMuNzkwOTcsIm5iZiI6MTY5NDA4NTM2My43OTA5NzMsImV4cCI6MTcyNTcwNzc2My43NjkzNTYsInN1YiI6IjEiLCJzY29wZXMiOlsiKiJdfQ.O_UtCkGIUHupGOiCRgeJmp8_Y8DiAwNz3j33vkbSY7UfjfZ58PVfUXwVagoq4fHZvXpZf-9Z9NOhK6v8iHqIlBfS8dKIdM1ZdE0ojVgVXDPDmufebp9sRvR11-kCwSUMtHFjZcAXjZmoPHSkBbfQ6rPmFizg4tSzH59BhA7kuEhFFtkwiwXHW4SOIMwXhEcqxNkGiX2fs5NujLdJhLYfAjp10HTaqUjZdq3h0Lb4Q8qRL4qEPN-SBzJh-Rn6Q4v2jYaSBkBoZtetN7EPhk8XIRvxtVJeW0IvriuBUb3HApuyyXWVauVNemKuGonZuAWyupsTW9x25lPeksR4PZDIcrzIs7lFoBUF_IkNXzIv4JQw2Mupe-mvTfUuBzU8xMUmcYlsFbOvPwmUemMfq09VaWhOqu7FqjdBQqlFF8r2EBBhsGRx2RF4NgI0JWw2z9iSkLLEOATou1DsEJV4F1EYxQ6Fh4mIpBFisEiMqQse8p3S-hXlllEkY1g84m-ZOV5WVJgcKyIj1z34CYZvPTE5uGP0A7iY5Dui25RmsvlMgW0XtdjFweFlC4qnFrDhM957qbz3LnM8z7IQKi-5iUQKITviOpn8-5H8GdNoOSFnQhFRP5ENv_sDlhaiyEYBBDP9UlM8m0xwma86Hdx8gm1r1S1SIGobKIoFpOAFEPoS10s"'
    );
    router.push("/home");
  };

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

        {comp == "tel" ? (
          <div className={styles.login_right_middle}>
            <h1 className={styles.login_right_middle_header}>
              Пожалуйста, введите номер телефона
            </h1>

            <div>
              <InputDivComponent error={true}>
                <div className={styles.login_right_middle_input}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.68314 1.43438C5.31377 1.40438 4.90314 1.51125 4.52439 1.7775C4.19064 2.01 3.47064 2.58188 2.79752 3.22875C2.46189 3.55125 2.14127 3.88688 1.89377 4.21688C1.64439 4.54688 1.42689 4.84875 1.44002 5.2875C1.45314 5.68125 1.49252 6.84563 2.33064 8.63063C3.16877 10.4138 4.79439 12.8606 7.96502 16.0331C11.1375 19.2056 13.5844 20.8313 15.3675 21.6694C17.1506 22.5075 18.3169 22.5469 18.7106 22.56C19.1475 22.5731 19.4494 22.3556 19.7794 22.1063C20.1094 21.8569 20.445 21.5381 20.7675 21.2025C21.4125 20.5294 21.9844 19.8094 22.2169 19.4756C22.7475 18.72 22.6594 17.8275 22.0688 17.4131C21.6975 17.1525 18.2831 14.88 17.7694 14.565C17.2481 14.2463 16.6481 14.3906 16.1119 14.6738C15.69 14.8969 14.5481 15.5513 14.2219 15.7388C13.9763 15.5831 13.0444 14.9625 11.04 12.9581C9.03377 10.9538 8.41502 10.0219 8.25939 9.77625C8.44689 9.45 9.09939 8.31375 9.32439 7.88438C9.60564 7.35 9.76314 6.74438 9.42752 6.21938C9.28689 5.99625 8.64752 5.02313 8.00252 4.04625C7.35564 3.06938 6.74252 2.14313 6.58314 1.92188V1.92C6.37502 1.63313 6.05064 1.46438 5.68314 1.43438ZM5.59502 2.415C5.72627 2.43188 5.80502 2.48438 5.80502 2.48438C5.88189 2.59125 6.55502 3.6 7.20002 4.575C7.84502 5.55188 8.50314 6.55313 8.61752 6.735C8.63627 6.76313 8.66252 7.08188 8.47502 7.43625V7.43813C8.26314 7.84125 7.27502 9.56813 7.27502 9.56813L7.13814 9.81L7.27877 10.05C7.27877 10.05 8.01564 11.2931 10.3594 13.6369C12.705 15.9806 13.9481 16.7194 13.9481 16.7194L14.1881 16.86L14.43 16.7231C14.43 16.7231 16.1531 15.7369 16.56 15.5231C16.9144 15.3375 17.2331 15.3619 17.2706 15.3844C17.6025 15.5888 21.2906 18.0394 21.5175 18.1987C21.525 18.2044 21.7256 18.5081 21.4331 18.9244H21.4313C21.255 19.1775 20.6775 19.9106 20.0756 20.5369C19.7738 20.85 19.4644 21.1425 19.2019 21.3394C18.9394 21.5363 18.705 21.5981 18.7425 21.6C18.3338 21.5869 17.4319 21.5775 15.7763 20.7994C14.1206 20.0231 11.7581 18.4688 8.64377 15.3525C5.53127 12.24 3.97689 9.8775 3.19877 8.22C2.42252 6.56438 2.41314 5.6625 2.40002 5.25563C2.40189 5.29313 2.46377 5.05688 2.66064 4.79438C2.85752 4.53188 3.14814 4.22063 3.46127 3.91875C4.08939 3.31688 4.82064 2.73938 5.07377 2.56313V2.565C5.28189 2.41875 5.46377 2.4 5.59502 2.415Z"
                      fill="#342C2C"
                    />
                  </svg>

                  <input type="text" defaultValue={"+998"} />
                </div>
              </InputDivComponent>
              {false && (
                <p className={styles.login_right_middle_input_error}>
                  * Этот номер уже используется
                </p>
              )}
            </div>

            <div className={styles.login_right_middle_main}>
              <button
                className={`${styles.login_right_middle_btn} ${
                  false && styles.login_right_middle_btn_unactive
                }`}
                onClick={() => handleClick()}
              >
                Продолжить
              </button>
              <p className={styles.login_right_middle_texts}>
                Нажимая кнопку “Продолжить”, вы соглашаетесь с условиями
                договора
                <span> “Публичной оферты”</span>
              </p>
            </div>
          </div>
        ) : comp == "message" ? (
          <div className={styles.login_right_middle_message}>
            <div>
              <h1 className={styles.login_right_middle_message_header}>
                Введите код из СМС
              </h1>
              <p className={styles.login_right_middle_texts}>
                Мы отправили СМС с кодом на ваше устройство
              </p>
            </div>

            <div className={styles.login_right_middle_message_main}>
              <InputDivComponent error={false}>
                <div className={styles.login_right_middle_input}>
                  <input type="text" placeholder="Код" />
                </div>
              </InputDivComponent>
              {true && <p>{'00' + ":" + (seconds < 10 ? `0${seconds}` : seconds)}</p>}
              {false && (
                <p className={styles.login_right_middle_input_error}>
                  * Этот номер уже используется
                </p>
              )}
            </div>

            <button
              className={`${styles.login_right_middle_btn} ${
                false && styles.login_right_middle_btn_unactive
              }`}
              onClick={() => handleClick()}
            >
              Продолжить
            </button>
          </div>
        ) : (
          <div className={styles.login_right_middle_message}>
            <div>
              <h1 className={styles.login_right_middle_message_header}>
                Вас назначили бухгалтером компании OOO “Best Group”
              </h1>
            </div>

            <div className={styles.login_right_middle_access_btns}>
              <button
                className={`${styles.login_right_middle_btn} ${
                  false && styles.login_right_middle_btn_unactive
                }`}
              >
                Отклонить
              </button>
              <button
                className={`${styles.login_right_middle_btn} ${
                  false && styles.login_right_middle_btn_unactive
                }`}
              >
                Продолжить
              </button>
            </div>
          </div>
        )}

        <div className={styles.login_right_bottom}>
          <p>+998 00 000 00 00 </p>
          <p>openbank.uz</p>
        </div>
      </div>
    </div>
  );
}

LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
