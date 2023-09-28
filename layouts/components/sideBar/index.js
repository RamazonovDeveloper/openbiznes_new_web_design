import React, { useState } from 'react'
import styles from "./sideBar.module.css";


export default function SideBar() {

  const [companyNameActive, setCompanyNameActive] = useState(false);


  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar_container}>
          <div className={styles.sidebar_top}>
            <svg
              width="175"
              height="65"
              viewBox="0 0 175 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.1802 21.8554C58.1802 28.9471 62.7534 33.8329 69.2194 33.8329C75.6854 33.8329 80.3369 28.9471 80.3369 21.8554C80.3369 14.7636 75.6846 9.87828 69.2194 9.87828C62.7542 9.87828 58.1802 14.7636 58.1802 21.8554ZM71.1907 43.6037C65.5132 43.6037 60.624 41.3191 58.653 37.9304H58.4158C58.5551 39.1069 58.6087 40.292 58.5747 41.4763V53.1796C58.5747 54.0384 58.317 54.8775 57.8351 55.5886C57.3532 56.2997 56.6691 56.8502 55.871 57.169L47.6138 60.4671V1.52563H57.7856V3.41716C57.794 4.57473 57.741 5.73191 57.6274 6.88394H57.8647C60.4662 2.86508 65.5127 0.264671 71.6635 0.264671C83.0965 0.264671 91.3761 9.16892 91.3761 21.9349C91.3761 34.7008 82.7818 43.6037 71.1907 43.6037Z"
                fill="white"
              />
              <path
                d="M106.124 18.3881H125.68C124.891 13.2665 121.343 9.87833 116.218 9.87833C110.856 9.87833 107.228 13.1088 106.124 18.3881ZM116.611 43.6035C103.68 43.6035 94.6919 34.463 94.6919 21.9348C94.6919 9.24792 103.759 0.264526 116.454 0.264526C128.439 0.264526 136.482 9.32654 136.482 21.9348C136.498 23.0981 136.392 24.2598 136.167 25.4011H106.125C107.308 30.7594 111.013 33.8328 116.69 33.8328C121.264 33.8328 124.261 32.4143 126.941 29.0267L133.329 35.7241C129.15 41.1616 123.551 43.6033 116.611 43.6033"
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
                d="M21.9035 32.964C20.1082 32.9631 18.3403 32.525 16.7525 31.6874C15.1648 30.8499 13.8052 29.6381 12.7916 28.1573L3.82031 34.286C5.82757 37.2207 8.52001 39.6224 11.6646 41.2839C14.8093 42.9453 18.3114 43.8163 21.8684 43.8214C25.4254 43.8266 28.9299 42.9658 32.0794 41.3136C35.2288 39.6613 37.9286 37.2673 39.9444 34.3385L30.9987 28.1833C29.9845 29.6576 28.6262 30.8632 27.0418 31.6961C25.4574 32.529 23.6938 32.9641 21.9035 32.964Z"
                fill="#2DC28D"
              />
              <path
                d="M100.62 59.9208C99.5049 59.9208 98.5696 59.6562 97.8142 59.1271C97.0589 58.598 96.4906 57.8785 96.1095 56.9685C95.7283 56.0514 95.5377 55.0249 95.5377 53.8892C95.5377 52.7393 95.7283 51.7093 96.1095 50.7993C96.4906 49.8893 97.0483 49.1732 97.7825 48.6512C98.5237 48.1221 99.4379 47.8576 100.525 47.8576C101.605 47.8576 102.54 48.1221 103.331 48.6512C104.129 49.1732 104.746 49.8893 105.184 50.7993C105.622 51.7023 105.841 52.7322 105.841 53.8892C105.841 55.032 105.625 56.0584 105.195 56.9685C104.764 57.8785 104.157 58.598 103.373 59.1271C102.59 59.6562 101.672 59.9208 100.62 59.9208ZM95.1035 59.6033V44.3656C95.1035 44.3656 95.7312 44.5585 96.5236 44.9185C97.3159 45.2784 97.6766 45.5663 97.6766 46.2862C97.6766 47.006 97.6766 51.5823 97.6766 51.5823H97.3589V59.6033H95.1035ZM100.228 57.6351C100.892 57.6351 101.439 57.4693 101.87 57.1378C102.3 56.8062 102.618 56.3582 102.823 55.7939C103.035 55.2225 103.14 54.5876 103.14 53.8892C103.14 53.1978 103.035 52.57 102.823 52.0056C102.611 51.4342 102.283 50.9827 101.838 50.6511C101.393 50.3125 100.829 50.1432 100.144 50.1432C99.4943 50.1432 98.9649 50.3019 98.5555 50.6194C98.146 50.9298 97.8425 51.3672 97.6448 51.9315C97.4542 52.4888 97.3589 53.1414 97.3589 53.8892C97.3589 54.6299 97.4542 55.2824 97.6448 55.8468C97.8425 56.4111 98.1496 56.8521 98.566 57.1695C98.9896 57.4799 99.5437 57.6351 100.228 57.6351Z"
                fill="white"
              />
              <path
                d="M111.426 59.9208C110.6 59.9208 109.901 59.7656 109.33 59.4552C108.758 59.1377 108.324 58.718 108.027 58.1959C107.738 57.6739 107.593 57.099 107.593 56.4711C107.593 55.9209 107.685 55.427 107.868 54.9897C108.052 54.5452 108.334 54.1643 108.716 53.8468C109.097 53.5223 109.591 53.2578 110.198 53.0532C110.657 52.9051 111.193 52.771 111.807 52.6511C112.429 52.5312 113.099 52.4218 113.819 52.3231C114.546 52.2172 115.305 52.1044 116.096 51.9844L115.185 52.503C115.192 51.7129 115.016 51.1309 114.656 50.757C114.296 50.3831 113.689 50.1961 112.835 50.1961C112.319 50.1961 111.822 50.3161 111.342 50.5559C110.862 50.7958 110.526 51.2085 110.336 51.794L108.006 51.0638C108.288 50.0974 108.825 49.3214 109.616 48.7359C110.413 48.1503 111.486 47.8576 112.835 47.8576C113.851 47.8576 114.744 48.0233 115.514 48.3549C116.29 48.6865 116.865 49.2297 117.239 49.9845C117.444 50.3866 117.568 50.7993 117.61 51.2226C117.652 51.6388 117.674 52.0938 117.674 52.5876V59.6033H115.439V57.1272L115.81 57.5293C115.295 58.3547 114.691 58.9613 113.999 59.3493C113.315 59.7303 112.457 59.9208 111.426 59.9208ZM111.934 57.8891C112.513 57.8891 113.007 57.7868 113.417 57.5822C113.826 57.3776 114.151 57.1272 114.391 56.8309C114.638 56.5346 114.804 56.2559 114.889 55.9949C115.023 55.6704 115.097 55.3001 115.111 54.8838C115.132 54.4606 115.143 54.1184 115.143 53.8574L115.926 54.0902C115.157 54.2101 114.497 54.316 113.946 54.4077C113.396 54.4994 112.923 54.5876 112.527 54.6722C112.132 54.7498 111.783 54.838 111.479 54.9368C111.183 55.0426 110.932 55.166 110.727 55.3071C110.523 55.4482 110.364 55.6105 110.251 55.7939C110.145 55.9773 110.092 56.1925 110.092 56.4394C110.092 56.7215 110.163 56.972 110.304 57.1907C110.445 57.4023 110.65 57.5716 110.918 57.6986C111.193 57.8256 111.532 57.8891 111.934 57.8891Z"
                fill="white"
              />
              <path
                d="M128.394 59.6033V54.1008C128.394 53.741 128.369 53.3424 128.32 52.9051C128.271 52.4677 128.154 52.0479 127.97 51.6458C127.794 51.2367 127.526 50.9016 127.166 50.6406C126.813 50.3795 126.333 50.249 125.726 50.249C125.401 50.249 125.08 50.3019 124.762 50.4078C124.444 50.5136 124.155 50.697 123.894 50.958C123.64 51.212 123.435 51.5647 123.28 52.0162C123.124 52.4606 123.047 53.032 123.047 53.7304L121.533 53.085C121.533 52.1114 121.72 51.2296 122.094 50.4395C122.475 49.6494 123.033 49.0216 123.767 48.556C124.501 48.0833 125.404 47.847 126.477 47.847C127.325 47.847 128.023 47.9881 128.574 48.2703C129.125 48.5524 129.562 48.9122 129.887 49.3496C130.212 49.787 130.452 50.2526 130.607 50.7464C130.762 51.2402 130.861 51.7093 130.904 52.1538C130.953 52.5911 130.978 52.9474 130.978 53.2225V59.6033H128.394ZM120.463 59.6033V48.175H122.74V51.7199H123.047V59.6033H120.463Z"
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
                d="M159.143 59.6033V54.1008C159.143 53.741 159.118 53.3424 159.069 52.9051C159.02 52.4677 158.903 52.0479 158.72 51.6458C158.543 51.2367 158.275 50.9016 157.915 50.6406C157.562 50.3795 157.082 50.249 156.475 50.249C156.15 50.249 155.829 50.3019 155.511 50.4078C155.194 50.5136 154.904 50.697 154.643 50.958C154.389 51.212 154.184 51.5647 154.029 52.0162C153.874 52.4606 153.796 53.032 153.796 53.7304L152.282 53.085C152.282 52.1114 152.469 51.2296 152.843 50.4395C153.224 49.6494 153.782 49.0216 154.516 48.556C155.25 48.0833 156.154 47.847 157.227 47.847C158.074 47.847 158.773 47.9881 159.323 48.2703C159.874 48.5524 160.312 48.9122 160.636 49.3496C160.961 49.787 161.201 50.2526 161.356 50.7464C161.512 51.2402 161.61 51.7093 161.653 52.1538C161.702 52.5911 161.727 52.9474 161.727 53.2225V59.6033H159.143ZM151.212 59.6033V48.175H153.489V51.7199H153.796V59.6033H151.212Z"
                fill="white"
              />
              <path
                d="M169.351 65C168.716 65 168.105 64.9012 167.519 64.7037C166.941 64.5062 166.418 64.2205 165.952 63.8466C165.486 63.4798 165.105 63.0353 164.809 62.5133L167.159 61.3493C167.378 61.7655 167.685 62.0724 168.081 62.2699C168.483 62.4745 168.91 62.5768 169.362 62.5768C169.891 62.5768 170.364 62.4815 170.781 62.2911C171.197 62.1077 171.518 61.8325 171.744 61.4657C171.977 61.1059 172.087 60.6544 172.073 60.1112V56.8626H172.39V48.175H174.624V60.1536C174.624 60.4428 174.61 60.7179 174.582 60.9789C174.561 61.247 174.522 61.508 174.466 61.762C174.296 62.5027 173.971 63.1094 173.491 63.582C173.011 64.0618 172.415 64.418 171.702 64.6508C170.996 64.8836 170.212 65 169.351 65ZM169.129 59.9208C168.077 59.9208 167.159 59.6562 166.376 59.1271C165.592 58.598 164.985 57.8785 164.555 56.9685C164.124 56.0584 163.909 55.032 163.909 53.8892C163.909 52.7322 164.124 51.7023 164.555 50.7993C164.992 49.8893 165.61 49.1732 166.408 48.6512C167.205 48.1221 168.144 47.8576 169.224 47.8576C170.311 47.8576 171.222 48.1221 171.956 48.6512C172.697 49.1732 173.258 49.8893 173.64 50.7993C174.021 51.7093 174.211 52.7393 174.211 53.8892C174.211 55.0249 174.021 56.0514 173.64 56.9685C173.258 57.8785 172.69 58.598 171.935 59.1271C171.18 59.6562 170.244 59.9208 169.129 59.9208ZM169.521 57.6351C170.205 57.6351 170.756 57.4799 171.173 57.1695C171.596 56.8521 171.903 56.4111 172.094 55.8468C172.291 55.2824 172.39 54.6299 172.39 53.8892C172.39 53.1414 172.291 52.4888 172.094 51.9315C171.903 51.3672 171.603 50.9298 171.194 50.6194C170.784 50.3019 170.255 50.1432 169.605 50.1432C168.921 50.1432 168.356 50.3125 167.911 50.6511C167.466 50.9827 167.138 51.4342 166.926 52.0056C166.715 52.57 166.609 53.1978 166.609 53.8892C166.609 54.5876 166.711 55.2225 166.916 55.7939C167.128 56.3582 167.449 56.8062 167.879 57.1378C168.31 57.4693 168.857 57.6351 169.521 57.6351Z"
                fill="white"
              />
            </svg>

            <div className={styles.company_name}>
              <div className={styles.company_name_actions}>
                <p>Компания</p>
                <div
                  className={`${styles.home_navbar_toggle} ${
                    companyNameActive && styles.home_navbar_toggle_active
                  }`}
                  onClick={() => setCompanyNameActive(!companyNameActive)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0249 9.46499L19.3349 8.77499L11.9999 16.11L4.6649 8.77499L3.9749 9.46499L11.6549 17.145L11.9999 17.475L12.3449 17.145L20.0249 9.46499Z"
                      fill="#F4F3F3"
                    />
                  </svg>
                </div>
              </div>
              <p>ООО “FUTURE OPEN TECHNOLOGY GROUP”</p>
              {companyNameActive && (
                <>
                  <div
                    className={`${styles.company_name_list} ${styles.company_name_list_active}`}
                  >
                    <div>ООО “Ромашка 1”</div>
                    <div>ООО “Ромашка 1”</div>
                    <div>ООО “Ромашка 1”</div>
                  </div>
                </>
              )}
            </div>

            <div className={styles.sidebar_menu}>
              <ul className={styles.sidebar_menu_wrapper}>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1378_13795)">
                      <path
                        d="M12 0.959991C5.91212 0.959991 0.959961 5.91215 0.959961 12C0.959961 18.0878 5.91212 23.04 12 23.04C18.0878 23.04 23.04 18.0878 23.04 12C23.04 5.91215 18.0878 0.959991 12 0.959991ZM17.76 12.48H12.48V17.76H11.52V12.48H6.23996V11.52H11.52V6.23999H12.48V11.52H17.76V12.48Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1378_13795">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Создать платеж</p>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5199 1.43999C11.4463 1.43999 11.3729 1.45677 11.3053 1.49061L10.5599 1.86374L9.81463 1.49061C9.66583 1.41717 9.48887 1.42433 9.34775 1.51217C9.20663 1.59953 9.11994 1.75343 9.11994 1.91999V5.27999H12.4818C13.8047 5.28095 14.8799 6.35711 14.8799 7.67999V8.63999H13.9199V7.67999C13.9199 6.88655 13.2743 6.24047 12.4809 6.23999H12.4799H2.87994C2.08602 6.23999 1.43994 6.88607 1.43994 7.67999V22.08C1.43994 22.2465 1.52615 22.4009 1.66775 22.4887C1.80887 22.5771 1.98487 22.5828 2.13463 22.5094L2.87994 22.1362L3.62525 22.5094C3.76013 22.577 3.91927 22.577 4.05463 22.5094L4.79994 22.1362L5.54525 22.5094C5.68013 22.577 5.83927 22.577 5.97463 22.5094L6.71994 22.1362L7.46525 22.5094C7.60013 22.577 7.75927 22.577 7.89463 22.5094L8.63994 22.1362L9.38525 22.5094C9.52013 22.577 9.67927 22.577 9.81463 22.5094L10.5599 22.1362L11.3053 22.5094C11.3729 22.5434 11.4465 22.56 11.5199 22.56C11.6078 22.56 11.6953 22.5363 11.7721 22.4887C11.9137 22.4009 11.9999 22.2465 11.9999 22.08V7.67999C11.9999 7.41503 12.215 7.19999 12.4799 7.19999C12.7449 7.19999 12.9599 7.41503 12.9599 7.67999V8.63999V9.59999H18.9356C19.4136 9.59999 19.5787 9.86437 19.8187 10.424C19.9157 10.6516 20.0086 10.8661 20.1665 11.024C20.3479 11.206 20.6127 11.3075 20.8931 11.415C21.2799 11.5638 21.6009 11.7006 21.6009 11.8753V16.4447C21.6009 16.6194 21.2799 16.7562 20.8931 16.905C20.6127 17.013 20.3479 17.1145 20.1665 17.2959C20.0086 17.4538 19.9161 17.6684 19.8187 17.8959C19.5787 18.4556 19.4136 18.72 18.9356 18.72H12.9599V19.68H22.5599V8.63999H19.6799V1.91999C19.6799 1.75343 19.5937 1.59908 19.4521 1.51124C19.3105 1.42292 19.1341 1.41669 18.9853 1.49061L18.2399 1.86374L17.4946 1.49061C17.3597 1.42293 17.2006 1.42293 17.0653 1.49061L16.3199 1.86374L15.5746 1.49061C15.4397 1.42293 15.2806 1.42293 15.1453 1.49061L14.3999 1.86374L13.6546 1.49061C13.5197 1.42293 13.3606 1.42293 13.2253 1.49061L12.4799 1.86374L11.7346 1.49061C11.6672 1.45677 11.5936 1.43999 11.5199 1.43999ZM11.5199 3.35999H13.9199C14.1854 3.35999 14.3999 3.57455 14.3999 3.83999C14.3999 4.10543 14.1854 4.31999 13.9199 4.31999H11.5199C11.2545 4.31999 11.0399 4.10543 11.0399 3.83999C11.0399 3.57455 11.2545 3.35999 11.5199 3.35999ZM16.3199 3.35999H17.2799C17.5454 3.35999 17.7599 3.57455 17.7599 3.83999C17.7599 4.10543 17.5454 4.31999 17.2799 4.31999H16.3199C16.0545 4.31999 15.8399 4.10543 15.8399 3.83999C15.8399 3.57455 16.0545 3.35999 16.3199 3.35999ZM16.3199 5.27999H17.2799C17.5454 5.27999 17.7599 5.49455 17.7599 5.75999C17.7599 6.02543 17.5454 6.23999 17.2799 6.23999H16.3199C16.0545 6.23999 15.8399 6.02543 15.8399 5.75999C15.8399 5.49455 16.0545 5.27999 16.3199 5.27999ZM3.83994 10.56H6.23994C6.50538 10.56 6.71994 10.7745 6.71994 11.04C6.71994 11.3054 6.50538 11.52 6.23994 11.52H3.83994C3.5745 11.52 3.35994 11.3054 3.35994 11.04C3.35994 10.7745 3.5745 10.56 3.83994 10.56ZM8.63994 10.56H9.59994C9.86538 10.56 10.0799 10.7745 10.0799 11.04C10.0799 11.3054 9.86538 11.52 9.59994 11.52H8.63994C8.3745 11.52 8.15994 11.3054 8.15994 11.04C8.15994 10.7745 8.3745 10.56 8.63994 10.56ZM12.9599 10.56V17.76C14.8123 17.76 16.3199 16.1453 16.3199 14.16C16.3199 12.1747 14.8123 10.56 12.9599 10.56ZM3.83994 12.48H4.79994C5.06538 12.48 5.27994 12.6945 5.27994 12.96C5.27994 13.2254 5.06538 13.44 4.79994 13.44H3.83994C3.5745 13.44 3.35994 13.2254 3.35994 12.96C3.35994 12.6945 3.5745 12.48 3.83994 12.48ZM8.63994 12.48H9.59994C9.86538 12.48 10.0799 12.6945 10.0799 12.96C10.0799 13.2254 9.86538 13.44 9.59994 13.44H8.63994C8.3745 13.44 8.15994 13.2254 8.15994 12.96C8.15994 12.6945 8.3745 12.48 8.63994 12.48ZM18.9599 12.96C18.298 12.96 17.7599 13.4981 17.7599 14.16C17.7599 14.8219 18.298 15.36 18.9599 15.36C19.6219 15.36 20.1599 14.8219 20.1599 14.16C20.1599 13.4981 19.6219 12.96 18.9599 12.96ZM3.83994 14.4H6.23994C6.50538 14.4 6.71994 14.6145 6.71994 14.88C6.71994 15.1454 6.50538 15.36 6.23994 15.36H3.83994C3.5745 15.36 3.35994 15.1454 3.35994 14.88C3.35994 14.6145 3.5745 14.4 3.83994 14.4ZM8.63994 14.4H9.59994C9.86538 14.4 10.0799 14.6145 10.0799 14.88C10.0799 15.1454 9.86538 15.36 9.59994 15.36H8.63994C8.3745 15.36 8.15994 15.1454 8.15994 14.88C8.15994 14.6145 8.3745 14.4 8.63994 14.4ZM3.83994 16.32H5.27994C5.54538 16.32 5.75994 16.5345 5.75994 16.8C5.75994 17.0654 5.54538 17.28 5.27994 17.28H3.83994C3.5745 17.28 3.35994 17.0654 3.35994 16.8C3.35994 16.5345 3.5745 16.32 3.83994 16.32ZM8.63994 16.32H9.59994C9.86538 16.32 10.0799 16.5345 10.0799 16.8C10.0799 17.0654 9.86538 17.28 9.59994 17.28H8.63994C8.3745 17.28 8.15994 17.0654 8.15994 16.8C8.15994 16.5345 8.3745 16.32 8.63994 16.32Z"
                      fill="white"
                    />
                  </svg>
                  <p>Счета</p>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1378_1072)">
                      <path
                        d="M3.35986 0.960022V23.04H16.3377C17.1388 23.6395 18.1282 24 19.1999 24C21.8399 24 23.9999 21.84 23.9999 19.2C23.9999 17.0614 22.5817 15.2387 20.6399 14.6231V7.00127L14.5986 0.960022H3.35986ZM14.8799 2.59877L19.0011 6.72002H14.8799V2.59877ZM18.7199 15.3938V19.2C18.7199 19.3273 18.7705 19.4494 18.8605 19.5394C18.9505 19.6294 19.0726 19.68 19.1999 19.68H23.0061C22.7675 21.5671 21.149 23.04 19.1999 23.04C17.0879 23.04 15.3599 21.312 15.3599 19.2C15.3599 17.2509 16.8328 15.6324 18.7199 15.3938ZM19.6799 15.3938C21.4092 15.6125 22.7874 16.9907 23.0061 18.72H19.6799V15.3938Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1378_1072">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Транзакции</p>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.27994 1.44C5.01498 1.44 4.79994 1.65504 4.79994 1.92V2.88H19.1999V1.92C19.1999 1.65504 18.9849 1.44 18.7199 1.44H5.27994ZM4.31994 3.84C4.05498 3.84 3.83994 4.05504 3.83994 4.32V5.28H20.1599V4.32C20.1599 4.05504 19.9449 3.84 19.6799 3.84H4.31994ZM3.35994 6.24C3.09498 6.24 2.87994 6.45504 2.87994 6.72V12.96H8.63994C9.17034 12.96 9.59994 13.3896 9.59994 13.92V14.2931C9.59994 15.5459 10.5134 16.6668 11.7599 16.7888C13.1903 16.9284 14.3999 15.8026 14.3999 14.4V13.92C14.3999 13.3896 14.8295 12.96 15.3599 12.96H21.1199V6.72C21.1199 6.45504 20.9049 6.24 20.6399 6.24H3.35994ZM1.91994 13.92C1.65498 13.92 1.43994 14.135 1.43994 14.4V22.08C1.43994 22.345 1.65498 22.56 1.91994 22.56H22.0799C22.3449 22.56 22.5599 22.345 22.5599 22.08V14.4C22.5599 14.135 22.3449 13.92 22.0799 13.92H15.8399C15.575 13.92 15.3599 14.135 15.3599 14.4V14.88C15.1262 16.5062 13.69 17.76 11.9999 17.76C10.3099 17.76 8.8737 16.5062 8.63994 14.88V14.4C8.63994 14.135 8.4249 13.92 8.15994 13.92H1.91994Z"
                      fill="#F4F3F3"
                    />
                  </svg>
                  <p>Документы</p>
                </li>
                <li>
                  <svg
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5533 17.9612H24.0302L23.9983 17.4531C23.8502 14.9537 21.8665 14.17 20.2727 13.5419C19.3877 13.1912 18.5496 12.8612 18.3058 12.3287C18.2683 11.8787 18.2721 11.5281 18.2758 11.125V10.9619C18.6583 10.5625 19.0033 9.77686 19.1402 9.11873C19.4346 8.95186 19.7871 8.56748 19.894 7.68248C19.9465 7.23811 19.8227 6.89123 19.6465 6.65498C19.8883 5.81873 20.3515 3.75436 19.519 2.41561C19.1646 1.84561 18.6321 1.48373 17.9308 1.33936C17.5296 0.851858 16.7852 0.587483 15.7915 0.587483C14.6515 0.609983 13.7421 0.887483 13.0727 1.40311C12.7708 1.20998 12.4277 1.06936 12.034 0.992483C11.5802 0.418733 10.7121 0.107483 9.54584 0.107483C7.77771 0.141233 6.48584 0.681233 5.70209 1.71248C4.77396 2.93498 4.60146 4.78936 5.18834 7.22498C4.97271 7.48936 4.81334 7.89623 4.87709 8.43061C5.00459 9.48998 5.41522 9.92123 5.76209 10.0937C5.92709 10.9244 6.38084 11.86 6.82147 12.3006L6.82334 12.5256C6.82709 13.0112 6.83084 13.435 6.78397 13.9806C6.49147 14.6556 5.51271 15.04 4.38584 15.4844C2.50897 16.2212 0.17459 17.1381 0.000214843 20.0519L-0.0297852 20.56H19.2302L19.2002 20.0519C19.1477 19.1969 18.9077 18.5181 18.5533 17.9612ZM1.02209 19.6C1.38397 17.695 3.08647 17.0275 4.73646 16.3769C6.05271 15.8612 7.29396 15.3719 7.70834 14.2619L7.73646 14.1362C7.79271 13.51 7.78896 13.0281 7.78334 12.5162L7.78146 12.0719L7.79084 11.7869L7.53397 11.6519C7.32397 11.5094 6.76147 10.5419 6.66959 9.67561L6.62647 9.27998L6.23084 9.24811C6.16896 9.24248 5.92147 9.06998 5.83147 8.31623C5.78459 7.92998 5.97397 7.79311 5.97397 7.79311L6.27959 7.60748L6.18959 7.26248C5.60646 5.01998 5.70397 3.30248 6.46897 2.29373C7.06522 1.50623 8.10771 1.09373 9.55521 1.06748C10.4571 1.06748 11.1227 1.29248 11.3383 1.66936L11.4546 1.87561L11.689 1.90748C12.3302 1.99748 12.7858 2.26936 13.0802 2.74373C13.8171 3.93061 13.3896 6.12248 13.0221 7.23061L12.9208 7.59061L13.2283 7.79311C13.2302 7.79311 13.4177 7.92998 13.3708 8.31623C13.2808 9.06998 13.0333 9.24248 12.9715 9.24811L12.5758 9.28186L12.5327 9.67561C12.4408 10.5456 11.8952 11.5131 11.704 11.6481L11.4471 11.7831L11.4452 12.5181C11.4396 13.03 11.4358 13.51 11.4921 14.1362L11.5202 14.2619C11.9327 15.3719 13.1702 15.8594 14.4808 16.3769C15.4202 16.7481 16.3746 17.1269 17.089 17.7362C17.1377 17.8131 17.2033 17.8769 17.2858 17.9162C17.7227 18.3456 18.0452 18.8875 18.1821 19.6H1.02209Z"
                      fill="white"
                    />
                  </svg>
                  <p>Мои сотрудники</p>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.35986 0.960022V23.04H20.6399V7.00502L14.5949 0.960022H3.35986ZM14.3999 2.11502L19.4849 7.20002H14.3999V2.11502ZM6.71986 4.80002H12.9599V5.76002H6.71986V4.80002ZM6.71986 6.72002H12.9599V7.68002H6.71986V6.72002ZM6.71986 8.64002H17.7599V9.60002H6.71986V8.64002ZM6.71986 10.56H17.7599V11.52H6.71986V10.56ZM6.71986 12.48H17.7599V13.44H6.71986V12.48ZM9.67486 14.67C10.4999 14.67 11.0249 15.2381 11.0249 16.125C11.0249 17.1038 10.5974 17.9719 10.0949 18.645C11.1974 18.5569 11.6736 17.73 11.9999 17.175C12.1986 16.8356 12.3749 16.545 12.7349 16.545C13.213 16.545 13.3705 17.0456 13.5449 17.565C13.5505 17.5781 13.5542 17.595 13.5599 17.61C13.6442 17.5444 13.7399 17.46 13.8149 17.4C14.2892 17.0194 14.8817 16.545 15.5999 16.545C15.8661 16.545 16.0799 16.7588 16.0799 17.025C16.0799 17.2913 15.8661 17.505 15.5999 17.505C15.2192 17.505 14.7917 17.8481 14.4149 18.15C14.0399 18.45 13.7211 18.72 13.3499 18.72C12.9486 18.72 12.8042 18.3638 12.6599 17.94C12.238 18.615 11.4505 19.62 9.88486 19.62C9.68049 19.62 9.50424 19.5806 9.32986 19.515C8.97549 19.8581 8.68674 20.0606 8.65486 20.085C8.57049 20.1469 8.48236 20.175 8.38486 20.175C8.23674 20.175 8.08861 20.1094 7.99486 19.98C7.83924 19.7663 7.88611 19.4606 8.09986 19.305C8.10549 19.3013 8.27986 19.1644 8.53486 18.93C8.11674 18.4163 7.90486 17.7019 7.90486 17.115C7.90486 15.7875 8.71674 14.67 9.67486 14.67ZM9.67486 15.63C9.35799 15.63 8.86486 16.2656 8.86486 17.115C8.86486 17.4563 8.99236 17.8875 9.20986 18.21C9.65799 17.6475 10.0649 16.92 10.0649 16.125C10.0649 15.6263 9.81361 15.63 9.67486 15.63Z"
                      fill="white"
                    />
                  </svg>
                  <p>Публичная оферта</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.sidebar_bottom}>
            <div className={styles.sidebar_bottom_item}>
              <div>
                <p>USD</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="8.91"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M11.9999 3.67505L11.6549 4.00505L6.4349 9.24005C6.2924 9.3563 6.22677 9.54192 6.26803 9.72192C6.30927 9.90005 6.4499 10.0407 6.62803 10.0819C6.80803 10.1232 6.99365 10.0575 7.1099 9.91505L11.5199 5.50505V19.68C11.518 19.8525 11.608 20.0138 11.758 20.1019C11.908 20.1882 12.0918 20.1882 12.2418 20.1019C12.3918 20.0138 12.4818 19.8525 12.4799 19.68V5.50505L16.8899 9.91505C17.0062 10.0575 17.1918 10.1232 17.3718 10.0819C17.5499 10.0407 17.6905 9.90005 17.7318 9.72192C17.773 9.54192 17.7074 9.3563 17.5649 9.24005L12.3449 4.00505L11.9999 3.67505Z"
                    fill="#1AB759"
                  />
                </svg>
              </div>
              <p>11 520.00</p>
            </div>
            <div className={styles.sidebar_bottom_item}>
              <div>
                <p>USD</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="8.91"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M11.9999 3.67505L11.6549 4.00505L6.4349 9.24005C6.2924 9.3563 6.22677 9.54192 6.26803 9.72192C6.30927 9.90005 6.4499 10.0407 6.62803 10.0819C6.80803 10.1232 6.99365 10.0575 7.1099 9.91505L11.5199 5.50505V19.68C11.518 19.8525 11.608 20.0138 11.758 20.1019C11.908 20.1882 12.0918 20.1882 12.2418 20.1019C12.3918 20.0138 12.4818 19.8525 12.4799 19.68V5.50505L16.8899 9.91505C17.0062 10.0575 17.1918 10.1232 17.3718 10.0819C17.5499 10.0407 17.6905 9.90005 17.7318 9.72192C17.773 9.54192 17.7074 9.3563 17.5649 9.24005L12.3449 4.00505L11.9999 3.67505Z"
                    fill="#1AB759"
                  />
                </svg>
              </div>
              <p>12 500.00</p>
            </div>
            <div className={styles.sidebar_bottom_item}>
              <div>
                <p>USD</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="8.91"
                    transform="matrix(1 0 0 -1 0 24)"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M11.9999 20.325L11.6549 19.995L6.4349 14.76C6.2924 14.6437 6.22677 14.4581 6.26803 14.2781C6.30927 14.1 6.4499 13.9593 6.62803 13.9181C6.80803 13.8768 6.99365 13.9425 7.1099 14.085L11.5199 18.495V4.31995C11.518 4.14745 11.608 3.9862 11.758 3.89808C11.908 3.81183 12.0918 3.81183 12.2418 3.89808C12.3918 3.9862 12.4818 4.14745 12.4799 4.31995V18.495L16.8899 14.085C17.0062 13.9425 17.1918 13.8768 17.3718 13.9181C17.5499 13.9593 17.6905 14.1 17.7318 14.2781C17.773 14.4581 17.7074 14.6437 17.5649 14.76L12.3449 19.995L11.9999 20.325Z"
                    fill="#D23232"
                  />
                </svg>
              </div>
              <p>130.00</p>
            </div>
          </div>
        </div>
      </div>
  )
}