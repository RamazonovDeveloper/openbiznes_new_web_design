import { useState } from "react";
import InputComponent from "../../../components/inputComponent";
import InputDivComponent from "../../../components/inputDivComponent";
import { useAuth } from "../../../hooks/useAuth";
import BlankLayout from "../../../layouts/BlankLayout";
import styles from "./login.module.css";

export default function LoginPage() {
  const auth = useAuth();

  const [comp, setComp] = useState("tel");

  return (
    <div className={styles.login}>
      <div className={styles.login_left}>
        <div className={styles.login_left_logo}>
          <svg
            width="175"
            height="65"
            viewBox="0 0 175 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.1802 21.8553C58.1802 28.947 62.7534 33.8329 69.2194 33.8329C75.6854 33.8329 80.3369 28.947 80.3369 21.8553C80.3369 14.7636 75.6846 9.87826 69.2194 9.87826C62.7542 9.87826 58.1802 14.7635 58.1802 21.8553ZM71.1907 43.6037C65.5132 43.6037 60.624 41.3191 58.653 37.9304H58.4158C58.5551 39.1069 58.6087 40.292 58.5747 41.4763V53.1795C58.5747 54.0384 58.317 54.8775 57.8351 55.5886C57.3532 56.2997 56.6691 56.8502 55.871 57.1689L47.6138 60.4671V1.5256H57.7856V3.41713C57.794 4.57471 57.741 5.73188 57.6274 6.88391H57.8647C60.4662 2.86506 65.5127 0.264648 71.6635 0.264648C83.0965 0.264648 91.3761 9.1689 91.3761 21.9348C91.3761 34.7008 82.7818 43.6037 71.1907 43.6037Z"
              fill="white"
            />
            <path
              d="M106.124 18.3883H125.68C124.891 13.2666 121.343 9.87846 116.217 9.87846C110.856 9.87846 107.228 13.109 106.124 18.3883ZM116.611 43.6037C103.68 43.6037 94.6917 34.4631 94.6917 21.935C94.6917 9.24804 103.759 0.264648 116.454 0.264648C128.439 0.264648 136.482 9.32667 136.482 21.935C136.498 23.0982 136.392 24.2599 136.166 25.4012H106.125C107.308 30.7596 111.013 33.8329 116.69 33.8329C121.263 33.8329 124.26 32.4144 126.941 29.0268L133.329 35.7242C129.15 41.1617 123.55 43.6035 116.611 43.6035"
              fill="white"
            />
            <path
              d="M157.574 0.265236C167.667 0.265236 175 6.72683 175 16.4979V42.3437H163.961V16.1826C163.952 14.5059 163.28 12.9007 162.09 11.7181C160.901 10.5355 159.291 9.87156 157.613 9.87156C155.935 9.87156 154.326 10.5355 153.136 11.7181C151.947 12.9007 151.274 14.5059 151.266 16.1826V42.3437H140.227V16.1035C140.227 6.64767 147.481 0.265137 157.574 0.265137"
              fill="white"
            />
            <path
              d="M21.9036 10.8997C24.8302 10.9038 27.6362 12.0675 29.7056 14.1355C31.775 16.2035 32.9387 19.0071 32.9428 21.9317H43.8079C43.8135 19.0536 43.2513 16.2027 42.153 13.542C41.0547 10.8814 39.4415 8.4633 37.4069 6.4262C35.3724 4.38909 32.9561 2.77302 30.2958 1.67033C27.6356 0.567637 24.7836 0 21.9036 0C19.0236 0 16.1724 0.567637 13.5121 1.67033C10.8519 2.77302 8.43478 4.38909 6.40026 6.4262C4.36574 8.4633 2.75329 10.8814 1.65501 13.542C0.556724 16.2027 -0.00552435 19.0536 4.09135e-05 21.9317H10.8644C10.8685 19.0071 12.033 16.2035 14.1024 14.1355C16.1718 12.0675 18.977 10.9038 21.9036 10.8997Z"
              fill="white"
            />
            <path
              d="M21.9035 32.964C20.1082 32.9631 18.3403 32.5249 16.7525 31.6874C15.1648 30.8498 13.8052 29.6381 12.7916 28.1572L3.82031 34.286C5.82757 37.2206 8.52001 39.6224 11.6646 41.2838C14.8093 42.9452 18.3114 43.8162 21.8684 43.8214C25.4254 43.8266 28.9299 42.9658 32.0794 41.3135C35.2288 39.6613 37.9286 37.2673 39.9444 34.3385L30.9987 28.1833C29.9845 29.6576 28.6262 30.8632 27.0418 31.696C25.4574 32.5289 23.6938 32.9641 21.9035 32.964Z"
              fill="#2DC28D"
            />
            <path
              d="M174.627 53.686H172.486C172.356 52.6125 171.622 52.0757 170.287 52.0757C169.711 52.0757 169.266 52.1805 168.952 52.3899C168.637 52.5994 168.48 52.8874 168.48 53.254C168.48 53.3718 168.487 53.4766 168.5 53.5682C168.526 53.6598 168.565 53.7449 168.618 53.8235C168.683 53.8889 168.736 53.9479 168.775 54.0002C168.827 54.0526 168.912 54.105 169.03 54.1573C169.148 54.2097 169.24 54.2555 169.305 54.2948C169.384 54.321 169.508 54.3603 169.678 54.4126C169.848 54.4519 169.979 54.4846 170.071 54.5108C170.176 54.537 170.339 54.5763 170.562 54.6286C170.785 54.6679 170.955 54.7006 171.073 54.7268C171.583 54.8446 171.95 54.9363 172.172 55.0017C172.408 55.0541 172.742 55.1719 173.174 55.3552C173.619 55.5254 173.946 55.7087 174.156 55.9051C174.365 56.0884 174.555 56.3502 174.725 56.6906C174.908 57.0179 175 57.3976 175 57.8296C175 58.8507 174.601 59.6624 173.802 60.2647C173.004 60.8669 171.93 61.168 170.582 61.168C169.141 61.168 168.035 60.8669 167.263 60.2647C166.49 59.6624 166.078 58.7853 166.026 57.6332H168.166C168.284 58.9031 169.102 59.5381 170.621 59.5381C171.275 59.5381 171.799 59.4071 172.192 59.1453C172.598 58.8704 172.801 58.5104 172.801 58.0652C172.801 57.8427 172.748 57.6528 172.644 57.4957C172.552 57.3386 172.395 57.2077 172.172 57.103C171.95 56.9852 171.734 56.9001 171.524 56.8477C171.328 56.7822 171.059 56.7102 170.719 56.6317C170.575 56.5924 170.464 56.5662 170.385 56.5531C168.945 56.1997 168.029 55.9247 167.636 55.7283C166.706 55.2832 166.242 54.5435 166.242 53.5093C166.242 52.5536 166.608 51.8073 167.341 51.2706C168.075 50.7207 169.089 50.4458 170.385 50.4458C171.629 50.4458 172.644 50.7142 173.429 51.2509C174.228 51.7877 174.627 52.5994 174.627 53.686Z"
              fill="white"
            />
            <path
              d="M164.383 57.7118C164.134 58.8115 163.59 59.669 162.753 60.2843C161.928 60.8996 160.939 61.2073 159.787 61.2073C158.256 61.2073 157.038 60.7163 156.135 59.7344C155.244 58.7395 154.799 57.4696 154.799 55.9247C154.799 54.3406 155.258 53.0314 156.174 51.9972C157.103 50.9629 158.282 50.4458 159.709 50.4458C161.188 50.4458 162.36 50.9564 163.224 51.9775C164.088 52.9856 164.52 54.3668 164.52 56.1211V56.3568H157.038C157.064 57.3779 157.319 58.17 157.804 58.7329C158.288 59.2828 158.963 59.5577 159.827 59.5577C160.442 59.5577 160.939 59.4137 161.319 59.1257C161.712 58.8246 162.019 58.3533 162.242 57.7118H164.383ZM162.281 54.8643C162.216 54.0133 161.947 53.3456 161.476 52.8612C161.018 52.3638 160.422 52.115 159.689 52.115C158.956 52.115 158.36 52.3507 157.902 52.822C157.457 53.2933 157.182 53.974 157.077 54.8643H162.281Z"
              fill="white"
            />
            <path
              d="M145.801 50.7403V52.2327C146.613 51.0545 147.732 50.4653 149.159 50.4653C150.311 50.4653 151.169 50.7795 151.732 51.4079C152.308 52.0363 152.596 52.9397 152.596 54.1179V60.8733H150.357V54.982C150.357 54.5762 150.337 54.2423 150.298 53.9805C150.259 53.7056 150.174 53.4306 150.043 53.1557C149.925 52.8808 149.729 52.6778 149.454 52.5469C149.179 52.4029 148.825 52.3309 148.393 52.3309C146.744 52.3309 145.919 53.3586 145.919 55.414V60.8733H143.68V50.7403H145.801Z"
              fill="white"
            />
            <path
              d="M141.363 50.7407V52.3117L135.629 59.0671H141.657V60.8738H132.722V59.1653L138.378 52.5081H133.115V50.7407H141.363Z"
              fill="white"
            />
            <path
              d="M130.656 46.8325V49.0319H128.417V46.8325H130.656ZM130.656 50.7404V60.8735H128.417V50.7404H130.656Z"
              fill="white"
            />
            <path
              d="M118 47.5C118.195 47.6953 118.219 48 118.219 48.054C118.219 49.054 118.219 52.0563 118.219 52.0563C118.965 51.0089 120.072 50.4852 121.538 50.4852C122.886 50.4852 123.966 50.9631 124.778 51.9188C125.603 52.8745 126.015 54.1444 126.015 55.7285C126.015 57.365 125.596 58.6807 124.758 59.6757C123.921 60.6576 122.808 61.1485 121.42 61.1485C119.888 61.1485 118.782 60.5987 118.101 59.499V60.8736H116V46.7148C116 46.7148 117.491 46.9914 118 47.5ZM120.968 52.2723C120.091 52.2592 119.397 52.5734 118.887 53.2149C118.389 53.8433 118.141 54.7139 118.141 55.8267C118.141 56.9133 118.389 57.7708 118.887 58.3992C119.397 59.0276 120.091 59.3419 120.968 59.3419C121.806 59.3419 122.48 59.0211 122.991 58.3796C123.502 57.725 123.757 56.8544 123.757 55.7678C123.757 54.6943 123.502 53.8433 122.991 53.2149C122.494 52.5865 121.819 52.2723 120.968 52.2723Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.login_left_components}>
          <div className={styles.login_left_components_item}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 3C10.448 3 10 3.448 10 4V6H40V4C40 3.448 39.552 3 39 3H11ZM9 8C8.448 8 8 8.448 8 9V11H42V9C42 8.448 41.552 8 41 8H9ZM7 13C6.448 13 6 13.448 6 14V27H18C19.105 27 20 27.895 20 29V29.7773C20 32.3873 21.903 34.7226 24.5 34.9766C27.48 35.2676 30 32.922 30 30V29C30 27.895 30.895 27 32 27H44V14C44 13.448 43.552 13 43 13H7ZM4 29C3.448 29 3 29.448 3 30V46C3 46.552 3.448 47 4 47H46C46.552 47 47 46.552 47 46V30C47 29.448 46.552 29 46 29H33C32.448 29 32 29.448 32 30V31C31.513 34.388 28.521 37 25 37C21.479 37 18.487 34.388 18 31V30C18 29.448 17.552 29 17 29H4Z"
                fill="#F4F3F3"
              />
            </svg>
            <p>Документы</p>
          </div>
          <div className={styles.login_left_components_item}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43 9H7C4.24219 9 2 11.2422 2 14V36C2 38.7578 4.24219 41 7 41H43C45.7578 41 48 38.7578 48 36V14C48 11.2422 45.7578 9 43 9ZM8 18C8 17.4492 8.44922 17 9 17H13C13.5508 17 14 17.4492 14 18V21C14 21.5508 13.5508 22 13 22H9C8.44922 22 8 21.5508 8 21V18ZM9 28H14C14.5508 28 15 28.4453 15 29C15 29.5547 14.5508 30 14 30H9C8.44922 30 8 29.5547 8 29C8 28.4453 8.44922 28 9 28ZM22 35H9C8.44922 35 8 34.5547 8 34C8 33.4453 8.44922 33 9 33H22C22.5508 33 23 33.4453 23 34C23 34.5547 22.5508 35 22 35ZM23 30H18C17.4492 30 17 29.5547 17 29C17 28.4453 17.4492 28 18 28H23C23.5508 28 24 28.4453 24 29C24 29.5547 23.5508 30 23 30ZM32 30H27C26.4453 30 26 29.5547 26 29C26 28.4453 26.4453 28 27 28H32C32.5547 28 33 28.4453 33 29C33 29.5547 32.5547 30 32 30ZM41 30H36C35.4453 30 35 29.5547 35 29C35 28.4453 35.4453 28 36 28H41C41.5547 28 42 28.4453 42 29C42 29.5547 41.5547 30 41 30ZM41 20H28C27.4453 20 27 19.5508 27 19C27 18.4492 27.4453 18 28 18H41C41.5547 18 42 18.4492 42 19C42 19.5508 41.5547 20 41 20Z"
                fill="#F4F3F3"
              />
            </svg>

            <p>Платежи</p>
          </div>
          <div className={styles.login_left_components_item}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_28_21339)">
                <path
                  d="M23 4C11.355 4 10.3342 14.6397 9.65818 21.6797C9.40018 24.3677 9.13387 27.1466 8.33787 27.8516C8.12387 28.0416 7.99998 28.3126 7.99998 28.5996C7.99998 30.8666 11.2914 31.5699 16.0664 32.1699C16.0294 32.2739 16 32.382 16 32.5C16 32.517 16.0039 32.5338 16.0039 32.5508C15.3039 33.7868 13.3123 34.5715 11.1953 35.3945C7.24929 36.9275 2.33693 38.8363 2.00193 44.9453C1.98693 45.2193 2.08442 45.4885 2.27342 45.6875C2.46142 45.8875 2.72498 46 2.99998 46H28.0566C26.7606 43.978 26 41.58 26 39C26 36.502 26.7174 34.1763 27.9394 32.1953C27.9384 32.1913 27.9375 32.1856 27.9355 32.1816C27.9395 32.1816 27.9432 32.1807 27.9472 32.1797C28.4632 31.3457 29.062 30.568 29.748 29.873C28.844 30.046 27.835 30.1997 26.707 30.3047C26.425 30.3307 26.166 30.4742 25.998 30.7012C25.829 30.9292 25.7653 31.2181 25.8203 31.4961C25.9003 31.8981 25.9004 32.218 25.9004 32.5C25.9004 32.556 25.9207 32.6091 25.9297 32.6641C25.6177 33.1281 24.233 34 22 34C19.856 34 18.4448 33.2277 18.0918 32.7207C18.1988 31.9667 18.1992 31.6108 18.1992 31.2988C18.1992 30.7918 17.8213 30.3666 17.3183 30.3066C13.2143 29.8186 10.8082 29.2983 10.1562 28.7812C11.1192 27.3762 11.3574 24.8991 11.6484 21.8691C12.3124 14.9491 13.1367 6.37172 22.3867 6.01172L23.1054 7.44727C23.2754 7.78527 23.621 8 24 8C32.049 8 32.84 14.0926 33.039 22.0586C33.09 24.1096 33.1375 25.8911 33.4765 27.2441C34.0835 26.9581 34.7122 26.7154 35.3652 26.5254C35.1282 25.3534 35.079 23.6168 35.039 22.0098C34.883 15.7618 34.649 6.38172 24.623 6.01172L23.8945 4.55273C23.7245 4.21373 23.379 4 23 4ZM39 28C32.935 28 28 32.935 28 39C28 45.065 32.935 50 39 50C45.065 50 50 45.065 50 39C50 32.935 45.065 28 39 28ZM38.1094 32H39.8867V33.752C40.6357 33.878 41.2834 34.2302 41.7754 34.7812C42.3574 35.4352 42.6858 36.3557 42.6308 37.1797L42.5996 37.6172H40.8301L40.8222 37.1543C40.8102 36.3253 40.4895 35.3359 39.0195 35.3359C37.7505 35.3359 37.1601 35.8464 37.1601 36.9414C37.1601 37.8564 37.9572 38.0899 39.3672 38.4219C40.9372 38.7919 42.8916 39.2516 42.8906 41.6426C42.8906 42.1026 42.7417 44.3503 39.8847 44.7812V46H38.1094V44.7578C36.1464 44.4108 35.1625 43.2005 35.1035 41.0645L35.0898 40.5801H36.9238L36.9101 41.0625C36.8931 41.7255 37.0621 42.2445 37.4121 42.6035C38.0051 43.2115 38.9502 43.2188 38.9902 43.2188C40.8102 43.2188 41.082 42.2393 41.082 41.6562C41.082 40.6842 40.2869 40.4529 38.8769 40.1289C37.3059 39.7689 35.3515 39.3217 35.3515 36.8457C35.3515 36.5627 35.4304 34.15 38.1094 33.75V32Z"
                  fill="#F4F3F3"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_21339">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p>Зарплатные проекты</p>
          </div>
          <div className={styles.login_left_components_item}>
            <svg
              width="50"
              height="47"
              viewBox="0 0 50 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.2188 0.125L33.6562 0.9375L24.75 13.8438L17.0312 16.125C16.0078 16.4336 15.1406 17.1016 14.5625 18L8.15625 27.9062L12.2188 41.6875L19.625 40.0625C19.8125 40.0234 20 39.957 20.1875 39.9062C22 39.2969 23.5859 38.1992 24.7812 36.6875L25.7188 35.3438L29.9688 38.3125L30.7812 38.875L31.375 38.0312L49.4375 11.8438L50.0312 11.0312L49.1875 10.4688L35.0625 0.6875L34.2188 0.125ZM34.75 2.90625L47.25 11.5625L40.2188 21.75C41.0742 18.8555 39.707 15.3555 36.6875 13.2812C34.957 12.0938 32.9453 11.5391 31 11.7188C29.8516 11.8242 28.8164 12.1797 27.9375 12.75L34.75 2.90625ZM38.9062 8.875C38.3711 8.87109 37.8555 9.11719 37.5312 9.59375C37.0117 10.3516 37.207 11.4141 37.9688 11.9375C38.7305 12.4609 39.7617 12.2578 40.2812 11.5C40.8008 10.7422 40.6055 9.71094 39.8438 9.1875C39.5586 8.99219 39.2266 8.87891 38.9062 8.875ZM25.375 16.4688C25.082 17.8594 25.2695 19.3867 25.9062 20.8125L26.6875 20.125C27.5977 19.3828 28.7617 19 29.9375 19C31.2617 19 32.5117 19.4883 33.4688 20.4062C35.0312 21.9023 35.4492 24.1562 34.6562 26.0625C35.9727 25.9492 37.1562 25.4883 38.125 24.75L30.2812 36.0938L26.875 33.75L32.375 26.0312C33.3672 24.7695 33.25 22.9531 32.0938 21.8438C30.957 20.7539 29.1875 20.6914 27.9688 21.6875L22.3125 26.4062L19.9688 25L25.375 16.4688ZM6.09375 28.0312L0 29.9062L5.03125 46.9375L11.1562 45.0625L6.09375 28.0312Z"
                fill="#F4F3F3"
              />
            </svg>

            <p>Кредиты</p>
          </div>
          <div className={styles.login_left_components_item}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 2V48H34.0371C35.7061 49.2489 37.7674 50 40 50C45.5 50 50 45.5 50 40C50 35.5445 47.0456 31.7472 43 30.4648V14.5859L30.4141 2H7ZM31 5.41406L39.5859 14H31V5.41406ZM39 32.0703V40C39 40.2652 39.1054 40.5195 39.2929 40.7071C39.4805 40.8946 39.7348 41 40 41H47.9297C47.4326 44.9314 44.0606 48 40 48C35.6 48 32 44.4 32 40C32 35.9394 35.0686 32.5674 39 32.0703ZM41 32.0703C44.6028 32.5259 47.4741 35.3972 47.9297 39H41V32.0703Z"
                fill="#F4F3F3"
              />
            </svg>

            <p>Налоговые отчеты</p>
          </div>
          <div className={styles.login_left_components_item}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2V48H44V2H6ZM17 35H13V32H17V35ZM17 30H13V26H17V30ZM17 24H13V21H17V24ZM30 26V30H19V26H30ZM19 24V21H30V24H19ZM30 32V35H19V32H30ZM37 42H25V40H37V42ZM37 35H32V32H37V35ZM37 30H32V26H37V30ZM37 24H32V21H37V24ZM37 13H13V11H37V13Z"
                fill="#F4F3F3"
              />
            </svg>
            <p>Картотека</p>
          </div>
        </div>
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
            <p>O'zbek</p>
          </div>
        </div>

        {comp == "tel" ? (
          <div className={styles.login_right_middle}>
            <h1 className={styles.login_right_middle_header}>
              Пожалуйста, введите номер телефона
            </h1>

            <div>
              <InputDivComponent error={false}>
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
              {true && <p>00:46</p>}
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
