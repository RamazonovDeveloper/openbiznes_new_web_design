import styles from "./register.module.css";
import BlankLayout from "../../../layouts/BlankLayout";

export default function RegisterPage() {
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
              d="M58.1802 21.8554C58.1802 28.9471 62.7535 33.8329 69.2195 33.8329C75.6855 33.8329 80.337 28.9471 80.337 21.8554C80.337 14.7636 75.6847 9.87828 69.2195 9.87828C62.7542 9.87828 58.1802 14.7636 58.1802 21.8554ZM71.1907 43.6037C65.5133 43.6037 60.6241 41.3191 58.6531 37.9304H58.4159C58.5552 39.1069 58.6087 40.292 58.5748 41.4763V53.1796C58.5748 54.0384 58.3171 54.8775 57.8352 55.5886C57.3532 56.2997 56.6692 56.8502 55.8711 57.169L47.6138 60.4671V1.52563H57.7857V3.41716C57.7941 4.57473 57.7411 5.73191 57.6275 6.88394H57.8647C60.4663 2.86508 65.5127 0.264671 71.6636 0.264671C83.0966 0.264671 91.3762 9.16892 91.3762 21.9349C91.3762 34.7008 82.7819 43.6037 71.1907 43.6037Z"
              fill="white"
            />
            <path
              d="M106.124 18.3881H125.68C124.891 13.2665 121.343 9.87834 116.218 9.87834C110.856 9.87834 107.228 13.1088 106.124 18.3881ZM116.611 43.6035C103.68 43.6035 94.6918 34.463 94.6918 21.9348C94.6918 9.24792 103.759 0.26453 116.454 0.26453C128.439 0.26453 136.482 9.32655 136.482 21.9348C136.498 23.0981 136.392 24.2598 136.167 25.4011H106.125C107.308 30.7594 111.013 33.8328 116.69 33.8328C121.263 33.8328 124.261 32.4143 126.941 29.0267L133.329 35.7241C129.15 41.1616 123.551 43.6033 116.611 43.6033"
              fill="white"
            />
            <path
              d="M157.574 0.265473C167.667 0.265473 175 6.72707 175 16.4981V42.3439H163.961V16.1829C163.952 14.5061 163.28 12.901 162.09 11.7183C160.901 10.5357 159.291 9.8718 157.613 9.8718C155.935 9.8718 154.326 10.5357 153.136 11.7183C151.947 12.901 151.274 14.5061 151.266 16.1829V42.3439H140.227V16.1037C140.227 6.64791 147.481 0.265373 157.574 0.265373"
              fill="white"
            />
            <path
              d="M21.9036 10.8997C24.8302 10.9038 27.6362 12.0675 29.7056 14.1355C31.775 16.2035 32.9387 19.0071 32.9428 21.9317H43.8079C43.8135 19.0536 43.2513 16.2027 42.153 13.542C41.0547 10.8814 39.4415 8.4633 37.4069 6.4262C35.3724 4.38909 32.9561 2.77302 30.2958 1.67033C27.6356 0.567637 24.7836 0 21.9036 0C19.0236 0 16.1724 0.567637 13.5121 1.67033C10.8519 2.77302 8.43478 4.38909 6.40026 6.4262C4.36574 8.4633 2.75329 10.8814 1.65501 13.542C0.556724 16.2027 -0.00552435 19.0536 4.09135e-05 21.9317H10.8644C10.8685 19.0071 12.033 16.2035 14.1024 14.1355C16.1718 12.0675 18.977 10.9038 21.9036 10.8997Z"
              fill="white"
            />
            <path
              d="M21.9036 32.964C20.1082 32.9631 18.3403 32.5249 16.7526 31.6874C15.1648 30.8499 13.8053 29.6381 12.7917 28.1573L3.82033 34.286C5.82759 37.2207 8.52003 39.6224 11.6646 41.2838C14.8093 42.9453 18.3114 43.8162 21.8684 43.8214C25.4255 43.8266 28.9299 42.9658 32.0794 41.3136C35.2288 39.6613 37.9287 37.2673 39.9445 34.3385L30.9987 28.1833C29.9845 29.6576 28.6262 30.8632 27.0418 31.6961C25.4574 32.529 23.6938 32.9641 21.9036 32.964Z"
              fill="#2DC28D"
            />
            <path
              d="M100.62 59.9208C99.505 59.9208 98.5696 59.6562 97.8143 59.1271C97.059 58.598 96.4907 57.8785 96.1095 56.9685C95.7283 56.0514 95.5377 55.0249 95.5377 53.8892C95.5377 52.7393 95.7283 51.7093 96.1095 50.7993C96.4907 49.8893 97.0484 49.1732 97.7825 48.6512C98.5237 48.1221 99.4379 47.8576 100.525 47.8576C101.605 47.8576 102.54 48.1221 103.331 48.6512C104.129 49.1732 104.746 49.8893 105.184 50.7993C105.622 51.7023 105.841 52.7322 105.841 53.8892C105.841 55.032 105.625 56.0584 105.195 56.9685C104.764 57.8785 104.157 58.598 103.373 59.1271C102.59 59.6562 101.672 59.9208 100.62 59.9208ZM95.1036 59.6033V44.3656C95.1036 44.3656 95.7313 44.5585 96.5236 44.9185C97.316 45.2784 97.6766 45.5663 97.6766 46.2862C97.6766 47.006 97.6766 51.5823 97.6766 51.5823H97.359V59.6033H95.1036ZM100.229 57.6351C100.892 57.6351 101.439 57.4693 101.87 57.1378C102.3 56.8062 102.618 56.3582 102.823 55.7939C103.035 55.2225 103.14 54.5876 103.14 53.8892C103.14 53.1978 103.035 52.57 102.823 52.0056C102.611 51.4342 102.283 50.9827 101.838 50.6511C101.393 50.3125 100.829 50.1432 100.144 50.1432C99.4944 50.1432 98.9649 50.3019 98.5555 50.6194C98.1461 50.9298 97.8425 51.3672 97.6449 51.9315C97.4543 52.4888 97.359 53.1414 97.359 53.8892C97.359 54.6299 97.4543 55.2824 97.6449 55.8468C97.8425 56.4111 98.1496 56.8521 98.5661 57.1695C98.9896 57.4799 99.5438 57.6351 100.229 57.6351Z"
              fill="white"
            />
            <path
              d="M111.426 59.9208C110.6 59.9208 109.901 59.7656 109.33 59.4552C108.758 59.1377 108.324 58.718 108.027 58.1959C107.738 57.6739 107.593 57.099 107.593 56.4711C107.593 55.9209 107.685 55.427 107.868 54.9897C108.052 54.5452 108.334 54.1643 108.716 53.8468C109.097 53.5223 109.591 53.2578 110.198 53.0532C110.657 52.9051 111.193 52.771 111.807 52.6511C112.429 52.5312 113.099 52.4218 113.819 52.3231C114.546 52.2172 115.305 52.1044 116.096 51.9844L115.185 52.503C115.192 51.7129 115.016 51.1309 114.656 50.757C114.296 50.3831 113.689 50.1961 112.835 50.1961C112.319 50.1961 111.822 50.3161 111.342 50.5559C110.862 50.7958 110.526 51.2085 110.336 51.794L108.006 51.0638C108.288 50.0974 108.825 49.3214 109.616 48.7359C110.413 48.1503 111.486 47.8576 112.835 47.8576C113.851 47.8576 114.744 48.0233 115.514 48.3549C116.29 48.6865 116.865 49.2297 117.24 49.9845C117.444 50.3866 117.568 50.7993 117.61 51.2226C117.652 51.6388 117.674 52.0938 117.674 52.5876V59.6033H115.439V57.1272L115.81 57.5293C115.295 58.3547 114.691 58.9613 113.999 59.3493C113.315 59.7303 112.457 59.9208 111.426 59.9208ZM111.935 57.8891C112.513 57.8891 113.008 57.7868 113.417 57.5822C113.826 57.3776 114.151 57.1272 114.391 56.8309C114.638 56.5346 114.804 56.2559 114.889 55.9949C115.023 55.6704 115.097 55.3001 115.111 54.8838C115.132 54.4606 115.143 54.1184 115.143 53.8574L115.927 54.0902C115.157 54.2101 114.497 54.316 113.946 54.4077C113.396 54.4994 112.923 54.5876 112.528 54.6722C112.132 54.7498 111.783 54.838 111.479 54.9368C111.183 55.0426 110.932 55.166 110.727 55.3071C110.523 55.4482 110.364 55.6105 110.251 55.7939C110.145 55.9773 110.092 56.1925 110.092 56.4394C110.092 56.7215 110.163 56.972 110.304 57.1907C110.445 57.4023 110.65 57.5716 110.918 57.6986C111.193 57.8256 111.532 57.8891 111.935 57.8891Z"
              fill="white"
            />
            <path
              d="M128.394 59.6033V54.1008C128.394 53.741 128.369 53.3424 128.32 52.9051C128.271 52.4677 128.154 52.0479 127.971 51.6458C127.794 51.2367 127.526 50.9016 127.166 50.6406C126.813 50.3795 126.333 50.249 125.726 50.249C125.401 50.249 125.08 50.3019 124.762 50.4078C124.444 50.5136 124.155 50.697 123.894 50.958C123.64 51.212 123.435 51.5647 123.28 52.0162C123.124 52.4606 123.047 53.032 123.047 53.7304L121.533 53.085C121.533 52.1114 121.72 51.2296 122.094 50.4395C122.475 49.6494 123.033 49.0216 123.767 48.556C124.501 48.0833 125.405 47.847 126.478 47.847C127.325 47.847 128.023 47.9881 128.574 48.2703C129.125 48.5524 129.562 48.9122 129.887 49.3496C130.212 49.787 130.452 50.2526 130.607 50.7464C130.762 51.2402 130.861 51.7093 130.904 52.1538C130.953 52.5911 130.978 52.9474 130.978 53.2225V59.6033H128.394ZM120.463 59.6033V48.175H122.74V51.7199H123.047V59.6033H120.463Z"
              fill="white"
            />
            <path
              d="M133.774 59.6033L133.795 44.3656H136.378V53.6775L140.561 48.175H143.748L139.312 53.8892L144.129 59.6033H140.752L136.378 54.1008V59.6033H133.774Z"
              fill="white"
            />
            <path
              d="M145.456 46.4396V44.101H148.008V46.4396H145.456ZM145.456 59.6033V48.175H148.008V59.6033H145.456Z"
              fill="white"
            />
            <path
              d="M159.143 59.6033V54.1008C159.143 53.741 159.119 53.3424 159.069 52.9051C159.02 52.4677 158.903 52.0479 158.72 51.6458C158.543 51.2367 158.275 50.9016 157.915 50.6406C157.562 50.3795 157.082 50.249 156.475 50.249C156.15 50.249 155.829 50.3019 155.511 50.4078C155.194 50.5136 154.904 50.697 154.643 50.958C154.389 51.212 154.184 51.5647 154.029 52.0162C153.874 52.4606 153.796 53.032 153.796 53.7304L152.282 53.085C152.282 52.1114 152.469 51.2296 152.843 50.4395C153.224 49.6494 153.782 49.0216 154.516 48.556C155.25 48.0833 156.154 47.847 157.227 47.847C158.074 47.847 158.773 47.9881 159.323 48.2703C159.874 48.5524 160.312 48.9122 160.636 49.3496C160.961 49.787 161.201 50.2526 161.356 50.7464C161.512 51.2402 161.61 51.7093 161.653 52.1538C161.702 52.5911 161.727 52.9474 161.727 53.2225V59.6033H159.143ZM151.212 59.6033V48.175H153.489V51.7199H153.796V59.6033H151.212Z"
              fill="white"
            />
            <path
              d="M169.351 65C168.716 65 168.105 64.9012 167.519 64.7037C166.941 64.5062 166.418 64.2205 165.952 63.8466C165.486 63.4798 165.105 63.0353 164.809 62.5133L167.159 61.3493C167.378 61.7655 167.685 62.0724 168.081 62.2699C168.483 62.4745 168.91 62.5768 169.362 62.5768C169.891 62.5768 170.364 62.4815 170.781 62.2911C171.197 62.1077 171.518 61.8325 171.744 61.4657C171.977 61.1059 172.087 60.6544 172.073 60.1112V56.8626H172.39V48.175H174.624V60.1536C174.624 60.4428 174.61 60.7179 174.582 60.9789C174.561 61.247 174.522 61.508 174.466 61.762C174.296 62.5027 173.972 63.1094 173.491 63.582C173.011 64.0618 172.415 64.418 171.702 64.6508C170.996 64.8836 170.213 65 169.351 65ZM169.129 59.9208C168.077 59.9208 167.159 59.6562 166.376 59.1271C165.592 58.598 164.985 57.8785 164.555 56.9685C164.124 56.0584 163.909 55.032 163.909 53.8892C163.909 52.7322 164.124 51.7023 164.555 50.7993C164.992 49.8893 165.61 49.1732 166.408 48.6512C167.205 48.1221 168.144 47.8576 169.224 47.8576C170.311 47.8576 171.222 48.1221 171.956 48.6512C172.697 49.1732 173.259 49.8893 173.64 50.7993C174.021 51.7093 174.212 52.7393 174.212 53.8892C174.212 55.0249 174.021 56.0514 173.64 56.9685C173.259 57.8785 172.69 58.598 171.935 59.1271C171.18 59.6562 170.244 59.9208 169.129 59.9208ZM169.521 57.6351C170.205 57.6351 170.756 57.4799 171.173 57.1695C171.596 56.8521 171.903 56.4111 172.094 55.8468C172.291 55.2824 172.39 54.6299 172.39 53.8892C172.39 53.1414 172.291 52.4888 172.094 51.9315C171.903 51.3672 171.603 50.9298 171.194 50.6194C170.784 50.3019 170.255 50.1432 169.605 50.1432C168.921 50.1432 168.356 50.3125 167.911 50.6511C167.466 50.9827 167.138 51.4342 166.926 52.0056C166.715 52.57 166.609 53.1978 166.609 53.8892C166.609 54.5876 166.711 55.2225 166.916 55.7939C167.128 56.3582 167.449 56.8062 167.879 57.1378C168.31 57.4693 168.857 57.6351 169.521 57.6351Z"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M-4.26672 23.4667H40.5333V32H-4.26672V23.4667Z"
                  fill="#00B731"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M-4.26672 0H40.5333V8.53333H-4.26672V0Z"
                  fill="#03BCDB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10.6667H44.8V21.3333H0V10.6667ZM10.6667 8.352C10.3339 8.46934 9.97333 8.53334 9.6 8.53334C7.8336 8.53334 6.4 7.09974 6.4 5.33334C6.4 3.56694 7.8336 2.13334 9.6 2.13334C9.97333 2.13334 10.3339 2.19734 10.6667 2.31467C9.42293 2.75414 8.53333 3.94027 8.53333 5.33334C8.53333 6.7264 9.42293 7.91467 10.6667 8.352Z"
                  fill="white"
                />
                <path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
        <div className={styles.login_right_middle}>
          <h4>Директор компанииOOO “Best Group” Алексей Сидоров назначил вас бухгалтером компании </h4>
          <div className={styles.register_middle_btns}>
            <button>Войти</button>
            <button>Продолжить с ЭЦП</button>
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

RegisterPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
